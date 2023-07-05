import React from 'react';
import { selectValue, selectText } from './app/taskReducerSlice';
import { useSelector } from 'react-redux';

export default function Out() {
  const task1 = useSelector(selectValue);
  const text = useSelector(selectText);

  return (
    <div>
      <p>Task10: {text}</p>
      <hr />
      <h2>Task1</h2>
      <p>{task1}</p>
      <hr />
    </div>
  );
}
