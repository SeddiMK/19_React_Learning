function Nav(props) {
  let data = props.nav;
  const listItem = data.map((el, ind) => (
    <li key={ind}>
      <a href={el.link}>{el.text}</a>
    </li>
  ));
  return (
    <nav>
      <ul className="main-navigation">
        {/* здесь будет распечатан props */}
        {listItem}
      </ul>
    </nav>
  );
}

export default Nav;
