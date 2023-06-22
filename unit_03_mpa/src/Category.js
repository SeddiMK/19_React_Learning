import CategoryDescription from './CategoryDescription';

function Category() {
  return (
    <>
      <h1>{<CategoryDescription />}</h1>

      <a href="/">Назад</a>
      <ul>
        <li>
          <a href="/cat/notebook"> Ноутбуки</a>
        </li>
        <li>
          <a href="/cat/monitor">Мониторы</a>
        </li>
        <li>
          <a href="/cat/cellphone">Мобильные телефоны</a>
        </li>
      </ul>
    </>
  );
}

export default Category;
