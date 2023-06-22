import Nav from '../Header/Nav';

function Footer(props) {
  return (
    <>
      <footer>
        <h3>{props.site.site_name}</h3>
        {/* сюда импортируем компонент nav */}
        <Nav nav={props.site.nav} />
      </footer>
    </>
  );
}

export default Footer;
