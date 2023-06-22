import Nav from './Nav';

function Header(props) {
  return (
    <header>
      <h1>{props.site.site_name}</h1>
      <h2>{props.site.site_title}</h2>
      {/* cюда импортируется cюда импортируется компонент nav */}
      <Nav nav={props.site.nav} />
    </header>
  );
}

export default Header;
