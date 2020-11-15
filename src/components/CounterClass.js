import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment = (oldState) => {
    this.setState({
      counter: oldState + 1,
    });
  };

  decrement = (oldState) => {
    oldState === 0
      ? alert("Counter tidak boleh kurang dari 0")
      : this.setState({
          counter: oldState - 1,
        });
  };

  render() {
    return (
      <Row className="justify-content-md-center">
        <Button
          variant="danger"
          onClick={() => this.decrement(this.state.counter)}
        >
          -
        </Button>
        <h1>{this.state.counter}</h1>
        <Button
          variant="success"
          onClick={() => this.increment(this.state.counter)}
        >
          +
        </Button>
      </Row>
    );
  }
}
