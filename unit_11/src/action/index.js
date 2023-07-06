const addNewUsers = (passport, user, age) => ({
  type: 'ADD_USER',
  passport,
  user,
  age,
});

export default addNewUsers;
