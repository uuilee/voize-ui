import axios from 'axios'

export const SEARCH_TRIGGERED = 'search/SEARCH_TRIGGERED'
export const RESULTS_RECEIVED = 'search/RESULTS_RECEIVED'
export const ERROR_RECEIVED = 'search/ERROR_RECEIVED'
export const DETAILS_RECEIVED = 'search/DETAILS_RECEIVED'

const initialState = {
  searchTerm: "",
  searching: false,
  results: [],
  details: {
    _source: false
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TRIGGERED:
      return {
        ...state,
        searchTerm: action.searchTerm,
        searching: true
      }
    case RESULTS_RECEIVED:
      return {
        ...state,
        results: action.results,
        searching: false
      }
    case ERROR_RECEIVED:
      return {
        ...state,
        results: [],
        searching: false
      }
    case DETAILS_RECEIVED:
      return {
        ...state,
        details: action.details
      }
    default:
      return state
  }
}

export const search = (searchTerm) => {
  return dispatch => {
    dispatch({type: SEARCH_TRIGGERED, searchTerm: searchTerm})
    axios.post('http://172.20.10.5:9200/transcript/sphinx_breakdown/_search', {
      "query": {
        "term": {"message": searchTerm}
      },
      "highlight": {
        "fields": {
          "message": {}
        }
      }
    }).then((response) => {
      dispatch({type: RESULTS_RECEIVED, results: response.data.hits.hits})
    }).catch((error) => {
      dispatch({type: ERROR_RECEIVED, error: error})
    })
  }
}

export const showDetails = (voiceId) => {
  return dispatch => {
    axios.get(`http://172.20.10.5:9200/transcript/sphinx_combined/${voiceId}`).then((response) => {
      dispatch({
        type: DETAILS_RECEIVED,
        details: response.data
      })
    })
  }
}

