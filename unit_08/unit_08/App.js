import React from 'react';
import './App.css';

function App() {
  const h1 = React.createElement('h1', {}, 'unit_08');
  const h2 = React.createElement(
    'h2',
    {
      style: { color: 'orange' },
    },
    'header 2'
  );
  const p = React.createElement('p', { style: { color: 'red' } }, 'this is p');
  const input = React.createElement('input', {
    value: '55',
    onChange: () => {},
  });
  const p1 = React.createElement('p', {}, 'hi');
  const p2 = React.createElement('p', {}, 'world');
  const div = React.createElement('div', { style: { color: 'grey' } }, p1, p2);

  const input2 = React.createElement('input', { className: 'inp2' });
  const btn = React.createElement(
    'button',
    {
      onClick: () => {
        let inp = document.querySelector('.inp2');
        if (inp.value) {
          document.querySelector('ul').innerHTML = inp.value;
        }
      },
    },
    'Push'
  );

  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      <div>
        {input2}
        {btn}
        <ul></ul>
      </div>
    </>
  );
}

export default App;
