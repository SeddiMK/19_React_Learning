import CategoryDescription from './CategoryDescription';

function Category(props) {
  let navCat = props.nav;

  return (
    <>
      <CategoryDescription />
      <a href="/cat">Назад</a>

      <ul>
        <li>
          <a href={`/cat/${navCat.notebook}`}> Ноутбуки</a>
        </li>
        <li>
          <a href={`/cat/${navCat.monitor}`}>Мониторы</a>
        </li>
        <li>
          <a href={`/cat/${navCat.cellphone}`}>Мобильные телефоны</a>
        </li>
      </ul>
    </>
  );
}

export default Category;
