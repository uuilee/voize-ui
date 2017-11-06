import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import numeral from 'numeral'
import {search, showDetails} from '../../modules/search'
import './search.css';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="search-main">
        <div id="search-results">
          <div id="search-result-summary">
            <div id="search-term">{this.props.searchTerm}</div>
            <div id="result-count">{Object.entries(this.props.results).length} result(s)</div>
          </div>
          <div id="search-result-items">
            {Object.entries(this.props.results).map(resultGroup => (
              <div className="search-result" key={resultGroup[0]}
                   onClick={() => this.props.showDetails(resultGroup[0].split('|')[1])}>
                <div className="search-result-header">{resultGroup[0].split('|')[0]}</div>
                {resultGroup[1].map(result => (
                  <div className="search-result-segment" key={result.highlight.message}>
                    <div className="excerpt"
                         dangerouslySetInnerHTML={{__html: '...' + result.highlight.message + '...'}}/>
                    <div className="time-range">{numeral(result._source.startMs / 1000).format('00:00:00')}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="details">
          {this.props.details._source &&
          <div>
            <h3>{this.props.details._source.fileName}</h3>
            <div className="box">
              <div className="box-header">
                Transcript
              </div>
              {this.props.details._source.combinedMessage}
            </div>
            <div className="box">
              <div className="box-header">
                Tags
              </div>
              Dummy Tag
            </div>
          </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  let groupedResults = _.groupBy(state.search.results, item => item._source.fileName + "|" + item._source.voiceId)
  groupedResults = _.mapValues(groupedResults, value => _.sortBy(value, '_source.startMs', '_source.endMs'))
  return {
    results: groupedResults,
    details: state.search.details,
    searchTerm: state.search.searchTerm,
    searching: state.search.searching
  }
}

const mapDispatchToProps = {search, showDetails}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
