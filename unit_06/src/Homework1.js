import React from 'react';

class Homework1 extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      s1: props.p1,
    };
    this.s2 = 201;
  }

  DidMount = () => {
    let valS1 = this.state.s1;
    let valS2 = this.s2;
    valS1 = valS1 + 5;
    valS2 = valS2 + 5;
    this.setState({ s1: valS1 });
    this.s2 = valS2;
  };

  buttonHander = () => {
    let valS1 = this.state.s1;
    let valS2 = this.s2;
    valS1 = valS1 + 50;
    valS2 = valS2 + 50;
    this.setState({ s1: valS1 });
    this.s2 = valS2;
  };

  render() {
    return (
      <>
        <button onClick={this.buttonHander}>Push</button>
        <div>{this.state.s1}</div>
        <div>{this.s2}</div>
      </>
    );
  }
}

export default Homework1;
