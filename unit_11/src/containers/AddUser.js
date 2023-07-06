import { useDispatch } from 'react-redux';
import { addNewUser } from '../action';
const AddUser = () => {
  const dispatch = useDispatch();

  function formHandler(e) {}
  e.preventDefault();
  console.log(e.target.elements);
  dispatch(addNewUser(passport, name, age));
  return (
    <>
      <form>
        <input type="text" name={passport} />
        <input type="text" name={name} />
        <input type="number" name={age} />
        <button type="submit" onClick={formHandler}>
          Add User
        </button>
      </form>
    </>
  );
};
