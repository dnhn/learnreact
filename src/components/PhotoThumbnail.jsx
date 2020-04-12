import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { openPhoto } from '../redux/actions';

import './PhotoThumbnail.scss';

export const PhotoThumbnail = ({ data: photoData, openPhoto, order }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(
      () => setShow(true),
      order * 150
    );

    return () => clearTimeout(timeOut);
  });

  const {
    links,
    urls,
    description,
  } = photoData;

  return (
    <a
      href={links.html}
      target="_blank"
      rel="noopener noreferrer"
      className={`photo ${show ? 'show' : ''}`}
      onClick={e => { e.preventDefault(); openPhoto(photoData) }}
      style={{backgroundImage: `url(${urls.small})`}}>
      {description ? <span className="photo__desc">{description}</span> : ''}
    </a>
  );
};

const mapDispatchToProps = dispatch => ({
  openPhoto: selectedPhoto => dispatch(openPhoto(selectedPhoto)),
});

export default connect(null, mapDispatchToProps)(PhotoThumbnail);
