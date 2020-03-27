import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  getPhotos,
  openAbout,
  requestPhotos,
} from '../redux/actions';

import './Home.css';

import About from './About';
import PhotoThumbnail from './PhotoThumbnail';
import PhotoPopup from './PhotoPopup';
import DateTime from './DateTime';
import Loading from './Loading';

class Home extends PureComponent {
  componentDidMount() {
    this.props.requestPhotos();
    this.props.getPhotos();
  }

  render() {
    const {
      aboutVisibility,
      photos,
      selectedPhoto,
      openAbout,
    } = this.props;

    return (
      <main>
        <header>
          <nav className="nav">
            <button
              type="button"
              onClick={openAbout}
            >
              About
            </button>
          </nav>
          <DateTime />
        </header>
        <section className="photos">
          {photos.requesting ?
            (<Loading />) :
            photos.error ?
              photos.error :
              photos.list.map(p => <PhotoThumbnail data={p} key={p.id} />)}
        </section>
        {selectedPhoto && <PhotoPopup />}
        {aboutVisibility && <About />}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos,
  selectedPhoto: state.selectedPhoto,
  aboutVisibility: state.aboutVisibility,
});

const mapDispatchToProps = dispatch => ({
  openAbout: () => dispatch(openAbout()),
  requestPhotos: () => dispatch(requestPhotos()),
  getPhotos: photos => dispatch(getPhotos(photos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
