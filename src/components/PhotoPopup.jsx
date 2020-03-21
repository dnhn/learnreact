import React, { Component } from 'react';

import './PhotoPopup.css';

export default class PhotoPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.focusClose = this.focusClose.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true,
      });
      this.focusClose();
    }, 0);
  }

  focusClose() {
    this.closeBtn.focus();
  }

  closePopup() {
    const { closePopup } = this.props;

    this.setState({
      show: false,
    });
    setTimeout(() => {
      closePopup();
    }, 500);
  }

  render() {
    const {
      data: {
        description,
        urls,
        user,
      },
    } = this.props;
    const { show } = this.state;

    return (
      <div className={`photo-popup ${show ? 'show' : ''}`}>
        <div className="photo-popup__photo" style={{backgroundImage: `url(${urls.regular})`}} />
        <p className="photo-popup__caption">
          {description ? <em>“{description}”</em> : ''}
          {description ? ' — ' : ''}
          by&nbsp;
          <a
            href={user.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="photo-popup__author-link">
            {`${user.first_name || ''} ${user.last_name || ''}`}
          </a>
        </p>
        <button
          ref={ref => this.closeBtn = ref}
          type="button"
          onClick={this.closePopup.bind(this)}
          className="photo-popup__close">
          Close
        </button>
      </div>
    );
  }
}
