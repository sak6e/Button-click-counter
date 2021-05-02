import React from 'react';

export class CounterWithBind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      clicks: this.state.clicks+1
    })
  }
  render() {
    return (
      <div>
        <div>Counter using bind</div>
        <button onClick= {this.handleClick} > Click me!
        </button>
        <div>
          No.of clicks: {this.state.clicks}
        </div>
      </div>
    )
  }
}