import React from 'react';

export class CounterWithArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }
  render() {
    return (
      <div>
        <div>Counter using Arrow function</div>
        <button onClick= {(e) => {
          this.setState({
            clicks: this.state.clicks+1
          })
        }} > Click me!
        </button>
        <div>
          No.of clicks: {this.state.clicks}
        </div>
      </div>
    )
  }
}