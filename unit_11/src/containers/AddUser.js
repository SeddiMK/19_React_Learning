import { useDispatch } from 'react-redux';

const AddUser = () => {
  const dispatch = useDispatch();

  function formHandler() {}

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
