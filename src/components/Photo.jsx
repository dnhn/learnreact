import React, { PureComponent } from 'react';

import './Photo.css';

export default class Photo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    const { order } = this.props;

    setTimeout(() => {
      this.setState({
        show: true,
      });
    }, order * 150);
  }

  openPhoto = (e) => {
    e.preventDefault();

    const { data, onSelected } = this.props;
    onSelected(data);
  };

  render() {
    const {
      data: {
        links,
        urls,
        description,
      },
    } = this.props;
    const { show } = this.state;

    return (
      <a
        href={links.html}
        target="_blank"
        rel="noopener noreferrer"
        className={`photo ${show ? 'show' : ''}`}
        onClick={e => this.openPhoto(e)}
        style={{backgroundImage: `url(${urls.small})`}}>
        {description ? <span className="photo__desc">{description}</span> : ''}
      </a>
    )
  }
}
