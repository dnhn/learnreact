import React, { createRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { closePhoto } from '../redux/actions';

import './PhotoPopup.scss';

export const PhotoPopup =
  ({
     selectedPhoto: {
       description,
       urls,
       user,
     },
     closePhoto
  }) => {
  const [show, setShow] = useState(false);
  const closeBtn = createRef();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShow(true);
      closeBtn.current.focus();
    }, 0);

    return () => clearTimeout(timeOut);
  });

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
        ref={closeBtn}
        type="button"
        onClick={closePhoto}
        className="photo-popup__close"
      >
        Close
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  selectedPhoto: state.selectedPhoto,
});

const mapDispatchToProps = dispatch => ({
  closePhoto: () => dispatch(closePhoto()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPopup);
