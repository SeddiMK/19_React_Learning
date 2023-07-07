function List(user) {
  return (
    <ul>
      {user.users.map((item, ind) => (
        <li key={ind}>
          {item.passport} {item.userName} {item.age}
        </li>
      ))}
    </ul>
  );
}

export default List;
