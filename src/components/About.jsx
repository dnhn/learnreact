import React, { PureComponent } from 'react';

import './About.css';

export default class About extends PureComponent {
  componentDidMount() {
    this.closeBtn.focus();
  }

  closeAbout() {
    const { closeAbout } = this.props;
    closeAbout();
  }

  render() {
    return (
      <div className="about">
        <div className="about__popup">
          <h1>React Photo Grid</h1>
          <p><a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js</a> practise by <a href="https://github.com/nhantdn" target="_blank" rel="noopener noreferrer">Nhan</a></p>
          <p>Source code at <a href="https://github.com/nhantdn/learnreact" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          <button
            ref={ref => this.closeBtn = ref}
            type="button"
            className="about__close"
            onClick={this.closeAbout.bind(this)}>OK</button>
        </div>
      </div>
    );
  }
}
