import React from 'react';
import { connect, useDispatch } from 'react-redux';
import addNewUser from '../action';

const AddUser = () => {
  const dispatch = useDispatch();

  function formHandler(e) {
    e.preventDefault();
    let data = e.target.elements;
    console.log(data.passport.value);
    console.log(data.userName.value);
    console.log(data.age.value);

    dispatch(
      addNewUser(data.passport.value, data.userName.value, data.age.value)
    );
  }

  return (
    <>
      <form onSubmit={formHandler}>
        <input type="text" name="passport" defaultValue="Dania" />
        <input type="text" name="userName" />
        <input type="number" name="age" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default connect()(AddUser);
