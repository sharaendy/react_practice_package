import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      logs: [],
    };
  }

  addLog = () =>
    this.setState(({ count, logs }) => ({
      logs: [{ count, id: uniqueId() }, ...logs],
    }));

  deleteLog = (id) => (e) => {
    e.preventDefault();
    const { logs } = this.state;
    const newLogs = logs.filter((item) => item.id !== id);
    this.setState({ logs: newLogs });
  };

  increaseCount = () => {
    this.setState(({ count }) => ({ count: (count += 1) }));
    this.addLog();
  };

  decreaseCount = () => {
    this.setState(({ count }) => ({ count: (count -= 1) }));
    this.addLog();
  };

  renderItem = ({ count, id }) => {
    return (
      <button
        key={id}
        onClick={this.deleteLog(id)}
        type="button"
        className="list-group-item list-group-item-action"
      >
        {count}
      </button>
    );
  };

  render() {
    const { logs } = this.state;
    const list = (
      <div className="list-group">
        {logs.map((item) => this.renderItem(item))}
      </div>
    );

    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button
            onClick={this.increaseCount}
            type="button"
            className="btn btn-outline-success"
          >
            +
          </button>
          <button
            onClick={this.decreaseCount}
            type="button"
            className="btn btn-outline-danger"
          >
            -
          </button>
        </div>
        {logs.length !== 0 ? list : null}
      </div>
    );
  }
}
