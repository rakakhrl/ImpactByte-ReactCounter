import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function CounterFunction() {
  const [counter, setCounter] = useState(0);

  const increment = (oldState) => setCounter(oldState + 1);

  const decrement = (oldState) => {
    if (oldState === 0) {
      alert("Counter tidak boleh kurang dari 0");
    } else {
      setCounter(oldState - 1);
    }
  };

  return (
    <Row className="justify-content-md-center">
      <Button variant="danger" onClick={() => decrement(counter)}>
        -
      </Button>
      <h1>{counter}</h1>
      <Button variant="success" onClick={() => increment(counter)}>
        +
      </Button>
    </Row>
  );
}
