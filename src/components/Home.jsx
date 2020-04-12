import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  getPhotos,
  openAbout,
  requestPhotos,
} from '../redux/actions';

import './Home.scss';

import About from './About';
import PhotoThumbnail from './PhotoThumbnail';
import PhotoPopup from './PhotoPopup';
import Loading from './Loading';
import GitHubMark from './GitHubMark';

export class Home extends PureComponent {
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
        </header>
        <GitHubMark />
        <section className="photos">
          {photos.requesting ?
            <Loading /> :
            photos.error ?
              <Loading error /> :
              photos.list.map(
                (p, idx) =>
                  <PhotoThumbnail
                    key={p.id}
                    data={p}
                    order={idx}
                  />
              )}
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
