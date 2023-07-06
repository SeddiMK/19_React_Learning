import React from 'react';
import { connect, useDispatch } from 'react-redux';
import addNewUser from '../action';

const AddUser = () => {
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    let data = e.target.elements;
    console.log(data.passport.value);
    console.log(data.user.value);
    console.log(data.age.value);
    dispatch(addNewUser(data.passport.value, data.user.value, data.age.value));
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <input type="text" name="passport" defaultValue="Uganda" />
        <input type="text" name="user" defaultValue="Uda" />
        <input type="number" name="age" defaultValue="43" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUser;
