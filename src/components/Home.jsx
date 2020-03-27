import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getPhotos, openAbout } from '../redux/actions';

import './Home.css';

import About from './About';
import PhotoThumbnail from './PhotoThumbnail';
import PhotoPopup from './PhotoPopup';
import DateTime from './DateTime';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const apiKey = '1e1e4d18ed4c9b69e055fc6cf470b4a38092774e8bbdf4bc0aa812bdb498080e';
    const url = `https://api.unsplash.com/photos?client_id=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.props.getPhotos(data));
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
          {photos && photos.map(p =>
            <PhotoThumbnail
              data={p}
              key={p.id}
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
  getPhotos: photos => dispatch(getPhotos(photos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
