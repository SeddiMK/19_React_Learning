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
  const input = React.createElement('input', { value: '55' });
  const p1 = React.createElement('p', {}, 'hi');
  const p2 = React.createElement('p', {}, 'world');
  const div = React.createElement('div', { style: { color: 'grey' } }, p1, p2);
  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
    </>
  );
}

export default App;
