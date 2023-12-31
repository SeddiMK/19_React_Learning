import React, { useState, useEffect } from 'react';
import Comment2Hook from './Comment2Hook';

function Comments2ListHook(props) {
  const [data, setData] = useState([]);
  // console.log(props);

  function onlyEven() {
    let a = data;
    const evenPost = a.filter((el, index) => index % 2 === 0);
    setData(evenPost);
    console.log(evenPost);
  }

  useEffect(() => {
    console.log('effect');
    if (props.data.length > 0) setData(props.data);
  }, [props]);

  return (
    <div>
      <div>
        <button onClick={onlyEven}>Only even comments</button>
      </div>
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
  );
}

export default Comments2ListHook;
