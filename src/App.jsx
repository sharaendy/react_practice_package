import React from 'react';
import classNames from 'classnames'

export default class App extends React.Component {
  contructor(props) {
    super(props);
    this.state = {
      leftBtnToggled: false,
      rigthBtnToggled: false,
    };
  }
  
  handleClick = () => {
    this.setState((state) => {});
  }

  render() {}
}
