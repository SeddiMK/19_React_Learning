import { useLocation } from 'react-router-dom';

function CategoryDescription() {
  let url = useLocation();
  // console.log(url);
  return (
    <>
      <h1>Category: {url.pathname}</h1>
    </>
  );
}

export default CategoryDescription;
