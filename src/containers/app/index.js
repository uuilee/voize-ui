import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Search from '../search'
import Layout from '../layout'
import Spacer from '../spacer'
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
        <Layout>
          <Layout direction="horizontal" height="72px" style={{backgroundColor: '#222222', paddingLeft: 15, paddingRight: 15 }}>
            <Spacer id="search" size={0} style={{ width: 200, alignSelf: 'center' }} >
                <input type="text"
                       placeholder="Search"
                       value={this.state.searchTerm}
                       onChange={(event) => this.setState({searchTerm: event.target.value})}
                       onKeyPress={_.bind(this.handleKeyPress, this)}/>
            </Spacer>

            <Spacer style={{ textAlign: 'center', alignSelf: 'center' }}>
              <img src="logo.svg"/>
            </Spacer>

            <Spacer size={0} style={{ width: 200, alignSelf: 'center' }} >
              <div className="nav">Nav</div>
            </Spacer>

          </Layout>
        </Layout>
      </div>
    )
  }
}

// DragDropContext(HTML5Backend)(Container)
// <header>
//   <div id="logo">Logo</div>
//   <div id="actions">
//     {!this.props.recording
//       ? <a onClick={this.props.startRecording}>Start Record</a>
//       : <a onClick={this.props.stopRecording}>Stop Record</a>
//     }
//   </div>
// </header>
//
// <main>
//   <Route exact path="/" component={Search}/>
// </main>-->

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
