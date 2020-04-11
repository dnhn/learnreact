import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closePhoto } from '../redux/actions';

import './PhotoPopup.scss';

export class PhotoPopup extends Component {
  _timeOut = false;

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this._timeOut = setTimeout(() => {
      this.setState({
        show: true,
      });
      this.closeBtn.focus();
    }, 0);
  }

  componentWillUnmount() {
    clearTimeout(this._timeOut);
  }

  render() {
    const {
      selectedPhoto: {
        description,
        urls,
        user,
      },
      closePhoto,
    } = this.props;
    const { show } = this.state;

    return (
      <div className={`photo-popup ${show ? 'show' : ''}`}>
        <div
          className="photo-popup__photo"
          style={{backgroundImage: `url(${urls.regular})`}}
        />
        <p className="photo-popup__caption">
          {description ? <em>“{description}”</em> : ''}
          {description ? ' — ' : ''}
          by&nbsp;
          <a
            href={user.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="photo-popup__author-link"
          >
            {`${user.first_name || ''} ${user.last_name || ''}`}
          </a>
        </p>
        <button
          ref={ref => this.closeBtn = ref}
          type="button"
          onClick={closePhoto}
          className="photo-popup__close"
        >
          Close
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedPhoto: state.selectedPhoto,
});

const mapDispatchToProps = dispatch => ({
  closePhoto: () => dispatch(closePhoto()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPopup);
