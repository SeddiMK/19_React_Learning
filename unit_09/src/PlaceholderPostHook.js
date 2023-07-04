import React, { useState, useEffect } from 'react';

function PlaceholderPostHook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <section>
      {/* <h2> Номер поста. Заголовок</h2>
      <p>Тело поста</p> */}
      {data.map((el, index) => (
        <section key={el.id}>
          <h2>
            {index + 1}. {el.title}
          </h2>
          <p>{el.body}</p>
        </section>
      ))}
    </section>
  );
}

export default PlaceholderPostHook;
