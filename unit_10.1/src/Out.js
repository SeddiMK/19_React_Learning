import React from 'react';
// import { useSelector, useDispatch } from "react-redux";

import { selectValue } from './app/taskReducerSlice';
import { useSelector } from 'react-redux';

export default function Out() {
  const task1 = useSelector(selectValue);

  return (
    <div>
      <hr />
      <h2>Task1</h2>
      <p>{task1}</p>
    </div>
  );
}
