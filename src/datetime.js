import React from 'react';

export default class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: this.newDateTime()
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.tick();
  }

  newDateTime() {
    return `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  }

  tick() {
    setInterval(() => {
      this.setState({
        dateTime: this.newDateTime()
      });
    }, 1000);
  }

  render() {
    return (
      <div style={{padding: '1% 0'}}>
        {this.state.dateTime}
      </div>
    );
  }
}
