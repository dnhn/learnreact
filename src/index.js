import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Photo from './photo';
import PhotoPopup from './photo-popup';
import DateTime from './datetime';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      selectedPhoto: ''
    };
    this.getPhotos = this.getPhotos.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    fetch('https://api.unsplash.com/photos/curated?client_id=1e1e4d18ed4c9b69e055fc6cf470b4a38092774e8bbdf4bc0aa812bdb498080e')
      .then(response => response.json())
      .then(data => this.setState({photos: data}));
  }

  selectPhoto(photo = '') {
    this.setState({
      selectedPhoto: photo
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
          onSelected={this.selectPhoto}
        />
      );
    }

    let popup = '';

    if (this.state.selectedPhoto) {
      popup = <PhotoPopup
        data={this.state.selectedPhoto}
        closePopup={this.selectPhoto}
      />;
    }

    return (
      <main>
        <header>
          <DateTime />
        </header>
        <section className="photos">
          {photos}
        </section>
        {popup}
      </main>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
