import React, { Component } from 'react'
import '../css/DownloadQueue.css'

import DownloadQueueItem from './DownloadQueueItem'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { clearQueue } from '../actions/queueActions'

class DownloadQueue extends Component {
  render() {
    if(this.props.isOpen) {
      return (
        <div id="download-queue" className={`theme-${this.props.theme}`}>
          <div id="queue-toolbar"><div style={{width: '40px'}}></div><div style={{height: '20px'}}>Download Queue</div><div title="Clear Queue" id="clear-queue-button" onClick={this.props.clearQueue}></div></div>
          <ul>
              {this.props.items.map((song, i) => {
                return (
                  <DownloadQueueItem key={i} image={song.image} title={song.title} artist={song.artist} progress={song.progress} />
                )
              })}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }
}

DownloadQueue.propTypes = {
  items: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  clearQueue: PropTypes.func.isRequired
}

let mapStateToProps = (state) => ({
  items: state.queue.items,
  isOpen: state.queue.isOpen,
  theme: state.settings.theme
})

export default connect(mapStateToProps, { clearQueue })(DownloadQueue)