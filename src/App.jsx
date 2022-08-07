import React from 'react';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, primary: false };
  }
  
  onIncrement = () => {
    this.setState((state, props) => ({ count: count + 1 }));
  };

  onChangeClass = () => {
    this.setState(({ primary }) => ({ primary: !primary }));
  };
  
  render() {
    const buttonClass = classNames([
      'btn',
      this.state.primary ? 'btn-primary' : 'btn-secondary'
    ]);
    return <div>
      <button className="btn btn-secondary m-3" onClick={this.onIncrement}>
        count: {this.state.count}
      </button>
      <button className={buttonClass} onClick={this.onChangeClass}>
        button
      </button>
    </div>;
  }
}