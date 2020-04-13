import React from 'react';
import ReactDOM from 'react-dom';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Index', () => {
  it('should render without crashing', () => {
    require('./index.jsx');
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
