import React from 'react';

import './photo.css';

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  openPhoto(e) {
    e.preventDefault();
    console.log(this.props.data);
  }

  render() {
    return (
      <a
        href={this.props.data.links.html}
        target="_blank"
        className="photo"
        onClick={this.openPhoto.bind(this)}
        style={{backgroundImage:`url(${this.props.data.urls.thumb})`}}>
        <span className="desc">{this.props.data.description}</span>
      </a>
    )
  }
}
