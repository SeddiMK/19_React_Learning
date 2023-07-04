import React, { useState, useEffect } from 'react';

function PlaceholderPostHook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  });
  return (
    <section>
      <h2> Номер поста. Заголовок</h2>
      <p>Тело поста</p>
    </section>
  );
}

export default PlaceholderPostHook;
