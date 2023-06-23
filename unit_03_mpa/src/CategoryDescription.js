import { useParams } from 'react-router-dom';

function CategoryDescription() {
  let { catName } = useParams();

  return (
    <>
      <h1>Category: {catName}</h1>
    </>
  );
}

export default CategoryDescription;
