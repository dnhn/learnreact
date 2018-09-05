import React from 'react';

import './photo.css';

export default class Photo extends React.Component {
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
    console.log(this.props.data);
  }

  render() {
    let className = '';

    return (
      <a
        href={this.props.data.links.html}
        target="_blank"
        className={`photo ${this.state.show ? 'show' : ''}`}
        onClick={this.openPhoto.bind(this)}
        style={{backgroundImage:`url(${this.props.data.urls.thumb})`}}>
        <span className="desc">{this.props.data.description}</span>
      </a>
    )
  }
}
