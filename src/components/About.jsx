import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import { closeAbout } from '../redux/actions';

import './About.scss';

export class About extends PureComponent {
  constructor(props) {
    super(props);
    this.closeAboutBtn = createRef();
  }

  componentDidMount() {
    this.closeAboutBtn.current.focus();
  }

  closeAbout = e => e.target === this.thisAbout && this.props.closeAbout();

  render = () => (
    <div
      ref={ref => this.thisAbout = ref}
      className="about"
      onClick={e => this.closeAbout(e)}
    >
      <div className="about__popup">
        <h1>React Photo Grid</h1>
        <p>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js</a> practise by <a href="https://github.com/nhantdn" target="_blank" rel="noopener noreferrer">Nhan</a>
        </p>
        <p>
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
            <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="Deploys by Netlify" />
          </a>
        </p>
        <button
          ref={this.closeAboutBtn}
          type="button"
          className="about__close"
          onClick={this.props.closeAbout}
        >
          Close
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  closeAbout: () => dispatch(closeAbout()),
});

export default connect(null, mapDispatchToProps)(About);
