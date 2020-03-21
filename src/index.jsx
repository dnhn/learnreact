import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import About from './components/About';
import Photo from './components/Photo';
import PhotoPopup from './components/PhotoPopup';
import DateTime from './components/DateTime';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: false,
      photos: [],
      selectedPhoto: '',
    };
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos = () => {
    const apiKey = '1e1e4d18ed4c9b69e055fc6cf470b4a38092774e8bbdf4bc0aa812bdb498080e';
    const url = `https://api.unsplash.com/photos?client_id=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({photos: data}));
  };

  selectPhoto(photo = '') {
    this.setState({
      selectedPhoto: photo,
    });
  }

  openAbout() {
    this.setState({
      about: true,
    });
  }

  closeAbout() {
    this.setState({
      about: false,
    });
  }

  render() {
    const {
      about,
      photos,
      selectedPhoto,
    } = this.state;

    return (
      <main>
        <header>
          <nav className="nav">
            <button
              type="button"
              onClick={this.openAbout.bind(this)}
            >
              About
            </button>
          </nav>
          <DateTime />
        </header>
        <section className="photos">
          {photos && photos.map((p, i) =>
            <Photo
              data={p}
              key={p.id}
              order={i}
              onSelected={this.selectPhoto.bind(this)}
            />
          )}
        </section>
        {selectedPhoto &&
          <PhotoPopup
            data={selectedPhoto}
            closePopup={this.selectPhoto.bind(this)}
          />}
        {about && <About closeAbout={this.closeAbout.bind(this)} />}
      </main>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
