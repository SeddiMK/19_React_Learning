import CategoryDescription from './CategoryDescription';
import { useLocation } from 'react-router-dom';

function Category() {
  let { pathname } = useLocation();
  console.log(useLocation());
  return (
    <>
      <a href={`${pathname}`}>Назад</a>

      <ul>
        <li>
          <a href={`${pathname}/notebook`}> Ноутбуки</a>
        </li>
        <li>
          <a href={`${pathname}/monitor`}>Мониторы</a>
        </li>
        <li>
          <a href={`${pathname}/cellphone`}>Мобильные телефоны</a>
        </li>
      </ul>
    </>
  );
}

export default Category;
