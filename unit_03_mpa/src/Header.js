function Header(props) {
  let navHome = props.nav;

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href={navHome.home}>Главная</a>
          </li>
          <li>
            <a href={navHome.about}>О сайте</a>
          </li>
          <li>
            <a href={navHome.category}>Категории</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
