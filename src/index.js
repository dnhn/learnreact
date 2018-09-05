import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Photo from './photo';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
    this.getPhotos = this.getPhotos.bind(this);

    this.getPhotos();
  }

  getPhotos() {
    fetch('https://api.unsplash.com/photos/curated?client_id=1e1e4d18ed4c9b69e055fc6cf470b4a38092774e8bbdf4bc0aa812bdb498080e')
      .then(response => response.json())
      .then(data => this.setState({photos: data}));
  }

  render() {
    let photos = '';

    if (this.state.photos) {
      photos = this.state.photos.map((p, i) => {
        return <Photo
          data={p}
          key={p.id}
          order={i} />
      })
    }

    return (
      <section className="photos">
        {photos}
      </section>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
