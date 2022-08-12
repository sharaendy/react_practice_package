// @ts-nocheck

import React from 'react';
// import axios from 'axios';
// import routes from './routes.js';
import Item from './Item.jsx';
// import routes from './routes.js';
// import update from 'immutability-helper';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tasks: [],
      active: [],
      complited: [],
    };
  }

  handleInput = (e) => this.setState(() => ({ input: e.target.value }));

  renderList = (status) => {
    const { active, complited } = this.state;
    const tasks = (status === 'active') ? active : complited;
    return tasks.map(({ id, text, state }) => (
      <Item
        key={id}
        id={id}
        text={text}
        state={state}
        onRemove={this.removeTask(id)}
      />
    ));
  };

  render() {
    const { active, complited, input } = this.state;

    return (
      <div>
        <div className="mb-3">
          <form onSubmit={this.handleSend} className="todo-form mx-3">
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={input}
                onChange={this.handleInput}
                required=""
                className="form-control me-3"
                placeholder="I am going..."
              />
              <button type="submit" className="btn btn-primary">
                add
              </button>
            </div>
          </form>
        </div>
        {active.length !== 0 && (
          <div className="todo-active-tasks">{this.renderList('active')}</div>
        )}
        {complited.length !== 0 && (
          <div className="todo-finished-tasks">{this.renderList('complete')}</div>
        )}
      </div>
    );
  }
}
// END
