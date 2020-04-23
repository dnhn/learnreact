import React, { createRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { closeAbout } from '../redux/actions';
import { repoUrl } from '../commons/constants';

import './About.scss';

export const About = ({ closeAbout }) => {
  const thisAbout = createRef();
  const closeAboutBtn = createRef();

  useEffect(() => {
    closeAboutBtn.current.focus();
  }, []);

  const close = e => e.target === thisAbout.current && closeAbout();

  return (
    <div
      ref={thisAbout}
      className="about"
      onClick={e => close(e)}
    >
      <div className="about__popup">
        <h1>React Photo Grid</h1>
        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >React.js</a> practise by <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >Nhan</a>
        </p>
        <p>
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
            <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" alt="Deploys by Netlify" />
          </a>
        </p>
        <button
          ref={closeAboutBtn}
          type="button"
          className="about__close"
          onClick={closeAbout}
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
