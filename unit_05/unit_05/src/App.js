import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [st1, useSt1] = useState();
  function Task1() {
    //исправил на заглавное имя, т.к. ругается React:  React Hook "useSt1" is called in function "task1" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use"  react-hooks/rules-of-hooks
    const inpTsk1Val = document.querySelector('.task-1').previousSibling;
    useSt1(inpTsk1Val.value);
  }

  let [st2, useSt2] = useState(0);
  function Task2() {
    st2++;
    useSt2(st2);
  }

  const [st3, useSt3] = useState('');
  function Task3(event) {
    useSt3(event.target.value);
  }

  let [st4, useSt4] = useState(0);
  function Task4() {
    st4++;
    useSt4(st4);
  }

  let [st5, useSt5] = useState();
  function Task5(e) {
    if (e.target.checked) {
      st5 = e.target.value;
    } else {
      st5 = 0;
    }
    useSt5(st5);
  }

  const [st6, useSt6] = useState(7);
  function Task6(e) {
    useSt6(e.target.value);
  }

  // функция для рандомных целых чисел
  function randomInt(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }
  const [st7, useSt7] = useState('');
  function Task7() {
    let x = randomInt(0, 255);
    useSt7('rgb(' + x + ', ' + x + ', ' + x + ')');
  }

  let [st8, useSt8] = useState('');
  function Task8(e) {
    // если символ, то выводим 0
    if (isNaN(Number(e.key))) {
      st8 = st8 + '0';

      // если цифра, то выводим 1
    } else if (!isNaN(Number(e.key))) {
      st8 = st8 + '1';
    }
    useSt8(st8);
  }

  let [st9, useSt9] = useState();
  function Task9(e) {
    useSt9(e.target.value);
  }

  let [st10, useSt10] = useState();
  function Task10() {
    const inp = document.querySelector('.i-10');
    useSt10(inp.value);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" />
        <button className="task-1" onClick={Task1}>
          Push
        </button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={Task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={Task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={Task4}>
          Count
        </button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={Task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={Task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={{ backgroundColor: st7 }}></div>
        <button className="task-7" onClick={Task7}>
          Color
        </button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={Task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={Task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10" onClick={Task10}>
          Push
        </button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
