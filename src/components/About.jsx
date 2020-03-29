import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { closeAbout } from '../redux/actions';

import './About.scss';

class About extends PureComponent {
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
          Source code at <a href="https://github.com/nhantdn/learnreact" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
        <button
          type="button"
          className="about__close"
          onClick={this.props.closeAbout}
        >
          OK
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  aboutVisibility: state.aboutVisibility,
});

const mapDispatchToProps = dispatch => ({
  closeAbout: () => dispatch(closeAbout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
