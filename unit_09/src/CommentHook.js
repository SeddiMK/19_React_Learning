import React, { useState, useEffect } from 'react';

function CommentHook() {
  const [data, setData] = useState([]);
  let idSelect = '1';

  function SelectHandler(e) {
    idSelect = e.target.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${idSelect}/comments`)
      .then((response) => response.json())
      .then((dataFetch) => {
        console.log(dataFetch);
        setData(dataFetch);
      });
  }

  return (
    <div>
      <select onChange={SelectHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        <h1>Comments</h1>
        {data.map((el, index) => (
          <section key={el.id}>
            <p>
              <b>
                {index + 1}. {el.email}
              </b>
            </p>
            <p>{el.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default CommentHook;
