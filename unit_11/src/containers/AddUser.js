import React from 'react';
import { useDispatch } from 'react-redux';
import addNewUser from '../action';

const AddUser = () => {
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    let data = e.target.elements;

    dispatch(
      addNewUser(data.passport.value, data.userName.value, data.age.value)
    );
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <input type="text" name="passport" />
        <input type="text" name="userName" />
        <input type="number" name="age" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUser;
