// @ts-check
/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */

import React from 'react';

// BEGIN (write your solution here)
export default class Item extends React.Component {
  render() {
    const { id, text, state, onRemove } = this.props;
    return (
      <div className="row">
        <div className="col-1">{id}</div>
        <div className="col">
          <a onClick={onRemove} href="#" className="todo-task">
            {state === 'active' ? text : <s>{text}</s>}
          </a>
        </div>
      </div>
    );
  }
}
// END
