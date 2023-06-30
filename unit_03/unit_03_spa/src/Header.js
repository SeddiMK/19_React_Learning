import { Link } from 'react-router-dom';

function Header(props) {
  let navHome = props.nav;

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={navHome.home}>Главная</Link>
          </li>
          <li>
            <Link to={navHome.about}>О сайте</Link>
          </li>
          <li>
            <Link to={navHome.category}>Категории</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
