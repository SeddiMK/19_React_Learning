import { useLocation } from 'react-router-dom';

function CategoryDescription() {
  let url = useLocation();
  // console.log(url);
  return <>Category: {url.pathname}</>;
}

export default CategoryDescription;
