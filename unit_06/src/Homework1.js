import React from 'react';

class Homework1 extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      s1: props,
    };
    this.s2 = 201;
  }

  render() {
    return (
      <>
        <div>{this.state.s1}</div>
        <div>{this.s2}</div>
      </>
    );
  }
}

export default Homework1;
