import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Search from '../search'
import {search} from '../../modules/search'
import {startRecording, stopRecording} from '../../modules/record'
import _ from 'lodash'
import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ""
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.search(this.state.searchTerm)
    }
  }

  render() {
    return (
      <div id="app">
        <header>
          <div id="search">
            <input type="text"
                   placeholder="Search"
                   value={this.state.searchTerm}
                   onChange={(event) => this.setState({searchTerm: event.target.value})}
                   onKeyPress={_.bind(this.handleKeyPress, this)}/>
          </div>
          <div id="logo">Logo</div>
          <div id="actions">
            {!this.props.recording
              ? <a onClick={this.props.startRecording}>Start Record</a>
              : <a onClick={this.props.stopRecording}>Stop Record</a>
            }
          </div>
        </header>

        <main>
          <Route exact path="/" component={Search}/>
        </main>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    recording: state.record.recording
  }
}

const mapDispatchToProps = {search, startRecording, stopRecording}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
