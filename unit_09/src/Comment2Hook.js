import React, { useState, useEffect } from 'react';
// import CommentsListHook from './CommentsListHook';
import Comments2ListHook from './Comments2ListHook';

function Comment2Hook() {
  const [data, setData] = useState([]);

  function SelectHandler(e) {
    let idSelect = e.target.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${idSelect}/comments`)
      .then((response) => response.json())
      .then((dataFetch) => {
        setData(dataFetch);
      });
  }

  return (
    <div>
      <p>Choose post ID:</p>
      <select onChange={SelectHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        {/* <CommentsListHook data={data} /> */}
        <Comments2ListHook data={data} />
      </div>
    </div>
  );
}

export default Comment2Hook;
