import React from 'react';

import './photo-popup.css';

export default class PhotoPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 0);
  }

  closePopup() {
    this.setState({
      show: false
    });
    setTimeout(() => {
      this.props.closePopup();
    }, 500);
  }

  render() {
    return (
      <div className={`photo-popup ${this.state.show ? 'show' : ''}`}>
        <div className="photo-popup__photo" style={{backgroundImage: `url(${this.props.data.urls.regular})`}} />
        <p className="photo-popup__caption">
          <em>“{this.props.data.description}”</em> — by&nbsp;
          <a
            href={this.props.data.user.links.html}
            target="_blank"
            className="photo-popup__author-link">
            {`${this.props.data.user.first_name} ${this.props.data.user.last_name}`}
          </a>
        </p>
        <button
          type="button"
          onClick={this.closePopup.bind(this)}
          className="photo-popup__close">
          Back
        </button>
      </div>
    );
  }
}
