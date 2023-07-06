const addNewUsers = (passport, userName, age) => ({
  type: 'ADD_USER',
  passport,
  userName,
  age,
});

export default addNewUsers;
