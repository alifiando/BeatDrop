import React, { Component } from 'react';
import '../css/Button.css'

class Button extends Component {
  render() {
    return <span className={`button ${this.props.type || ''}`} onClick={this.props.onClick}>{this.props.children}</span>
  }
}

export default Button