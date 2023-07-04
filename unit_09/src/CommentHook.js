import React, { useState, useEffect } from 'react';

function CommentHook() {
  function SelectHandler(e) {
    let valOption = e.target.option;

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/ID/comments')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }, []);
  }
  return (
    <select onChange={SelectHandler}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  );
}

export default CommentHook;
