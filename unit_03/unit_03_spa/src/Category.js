import CategoryDescription from './CategoryDescription';
import { Link } from 'react-router-dom';

function Category(props) {
  let navCat = props.nav;

  return (
    <>
      <CategoryDescription />
      <Link to="/cat">Назад</Link>

      <ul>
        <li>
          <Link to={`/cat/${navCat.notebook}`}> Ноутбуки</Link>
        </li>
        <li>
          <Link to={`/cat/${navCat.monitor}`}>Мониторы</Link>
        </li>
        <li>
          <Link to={`/cat/${navCat.cellphone}`}>Мобильные телефоны</Link>
        </li>
      </ul>
    </>
  );
}

export default Category;
