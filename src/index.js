import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import About from './about';
import Photo from './photo';
import PhotoPopup from './photo-popup';
import DateTime from './datetime';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: false,
      photos: [],
      selectedPhoto: ''
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    fetch('https://api.unsplash.com/photos?client_id=1e1e4d18ed4c9b69e055fc6cf470b4a38092774e8bbdf4bc0aa812bdb498080e')
      .then(response => response.json())
      .then(data => this.setState({photos: data}));
  }

  selectPhoto(photo = '') {
    this.setState({
      selectedPhoto: photo
    });
  }

  openAbout() {
    this.setState({
      about: true
    });
  }

  closeAbout() {
    this.setState({
      about: false
    });
  }

  render() {
    let photos = '';

    if (this.state.photos) {
      photos = this.state.photos.map((p, i) =>
        <Photo
          data={p}
          key={p.id}
          order={i}
          onSelected={this.selectPhoto.bind(this)}
        />
      );
    }

    let popup = '';

    if (this.state.selectedPhoto) {
      popup = <PhotoPopup
        data={this.state.selectedPhoto}
        closePopup={this.selectPhoto.bind(this)}
      />;
    }

    let about = '';

    if (this.state.about) {
      about = <About closeAbout={this.closeAbout.bind(this)} />;
    }

    return (
      <main>
        <header>
          <nav className="nav">
            <button type="button" onClick={this.openAbout.bind(this)}>About</button>
          </nav>
          <DateTime />
        </header>
        <section className="photos">
          {photos}
        </section>
        {popup}
        {about}
      </main>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
