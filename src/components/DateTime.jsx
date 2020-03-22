import React, { PureComponent } from 'react';

export default class DateTime extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: this.newDateTime(),
    };
  }

  componentDidMount() {
    this.tick();
  }

  newDateTime = () => `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

  tick = () => {
    setInterval(() => {
      this.setState({
        dateTime: this.newDateTime(),
      });
    }, 1000);
  };

  render() {
    const { dateTime } = this.state;

    return (
      <div style={{padding: '1% 0'}}>
        {dateTime}
      </div>
    );
  }
}