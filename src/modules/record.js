export const START_RECORDING = 'record/START_RECORDING'
export const STOP_RECORDING = 'record/STOP_RECORDING'

const initialState = {
  recording: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_RECORDING:
      return {
        ...state,
        recording: true
      }
    case STOP_RECORDING:
      return {
        ...state,
        recording: false
      }
    default:
      return state
  }
}

export const startRecording = () => {
  return dispatch => {
    dispatch({type: START_RECORDING})
  }
}

export const stopRecording = () => {
  return dispatch => {
    dispatch({type: STOP_RECORDING})
  }
}


