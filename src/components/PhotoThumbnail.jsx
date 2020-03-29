import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { openPhoto } from '../redux/actions';

import './PhotoThumbnail.scss';

class PhotoThumbnail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: true,
      });
    }, this.props.order * 150);
  }

  render() {
    const {
      data: photoData,
      openPhoto,
    } = this.props;
    const {
      links,
      urls,
      description,
    } = photoData;
    const { show } = this.state;

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
  }
}

const mapDispatchToProps = dispatch => ({
  openPhoto: selectedPhoto => dispatch(openPhoto(selectedPhoto)),
});

export default connect(null, mapDispatchToProps)(PhotoThumbnail);
