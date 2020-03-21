import React, { Component } from 'react';

import './Photo.css';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, this.props.order * 150);
  }

  openPhoto(e) {
    e.preventDefault();
    this.props.onSelected(this.props.data);
  }

  render() {
    return (
      <a
        href={this.props.data.links.html}
        target="_blank"
        className={`photo ${this.state.show ? 'show' : ''}`}
        onClick={this.openPhoto.bind(this)}
        style={{backgroundImage: `url(${this.props.data.urls.small})`}}>
        {this.props.data.description ?
          <span className="photo__desc">{this.props.data.description}</span> : ''}
      </a>
    )
  }
}
