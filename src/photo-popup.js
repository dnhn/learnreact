import React from 'react';

import './photo-popup.css';

export default class PhotoPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.focusClose = this.focusClose.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true
      });
      this.focusClose();
    }, 0);
  }

  focusClose() {
    this.closeBtn.focus();
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
          {this.props.data.description ? <em>“{this.props.data.description}”</em> : ''}
          {this.props.data.description ? ' — ' : ''}
          by&nbsp;
          <a
            href={this.props.data.user.links.html}
            target="_blank"
            className="photo-popup__author-link">
            {`${this.props.data.user.first_name} ${this.props.data.user.last_name}`}
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
