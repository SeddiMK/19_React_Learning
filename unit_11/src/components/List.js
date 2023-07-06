const List = (users) => {
  console.log(users.users);
  return (
    <ul>
      {users.users.map((item, ind) => (
        <li key={ind}>
          {item.password}
          {item.userName}
          {item.age}
        </li>
      ))}
    </ul>
  );
};

export default List;
