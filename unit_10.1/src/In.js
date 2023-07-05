import React from 'react';
import { useDispatch } from 'react-redux';
import { add, minus, multi, division } from './app/taskReducerSlice';

export default function In() {
  let task1Input = React.createRef();

  const addHandler = () => {
    useDispatch(add(task1Input.current.value));
  };
  const minusHandler = () => {
    useDispatch(minus(task1Input.current.value));
  };
  const multiHandler = () => {
    useDispatch(multi(task1Input.current.value));
  };
  const divisionHandler = () => {
    useDispatch(division(task1Input.current.value));
  };

  return (
    <div>
      <input type="number" ref={task1Input} />
      <h2>Task 1</h2>
      <button onClick={addHandler}>+</button>
      <button onClick={minusHandler}>-</button>
      <button onClick={multiHandler}>*</button>
      <button onClick={divisionHandler}>/</button>
    </div>
  );
}
