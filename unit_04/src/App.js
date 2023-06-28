import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  let count4 = 0;
  let valElement = React.createRef();
  const [output, setOutput] = useState(7);

  let refStyle = React.createRef();
  const [styleBgc, setStyleBgc] = useState();

  let inpVal = React.createRef();
  const [outVal, setOutVal] = useState('');

  function task1() {
    console.log('task2');
  }
  function task2(event) {
    event.target.classList.add('active');
  }
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    count4++;
    console.log(count4);
  }
  function task5(event) {
    if (event.target.checked) {
      document.querySelector('.out-5').textContent = event.target.value;
    } else {
      document.querySelector('.out-5').innerHTML = '0';
    }
  }
  function task6() {
    //state
    setOutput(valElement.current.value);

    //ref
    // document.querySelector('.out-6').textContent = valElement.current.value;
  }

  function randomInt(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }
  function task7() {
    let x = randomInt(0, 255);

    //ref
    // refStyle.current.style.backgroundColor =
    //   'rgb(' + x + ', ' + x + ', ' + x + ')';

    //state
    setStyleBgc('rgb(' + x + ', ' + x + ', ' + x + ')');

    //"в лоб"
    // document.querySelector('.block-7').style.backgroundColor =
    //   'rgb(' + x + ', ' + x + ', ' + x + ')';
  }

  function limitToLettersAndNumbers(input) {
    var regex = /^[a-zA-Zа-яА-Я0-9]+$/;
    return regex.test(input);
  }

  function task8(event) {
    let strOut = '';

    if (!limitToLettersAndNumbers(event.key)) {
      strOut = outVal + '';
      setOutVal(strOut);
    } else if (isNaN(Number(event.key))) {
      strOut = outVal + '0';
      setOutVal(strOut);
    } else if (!isNaN(Number(event.key))) {
      strOut = outVal + '1';
      setOutVal(strOut);
    }
    // console.log(strOut);
  }

  function task9() {}
  let ar10 = [5, 6, 7];
  function task10() {}

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>
          Push
        </button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={valElement}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6">{output}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div
          className="block-7"
          ref={refStyle}
          style={{ backgroundColor: styleBgc }}
        ></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input
          type="text"
          className="task-8"
          onKeyPress={task8}
          ref={inpVal}
        ></input>
        <div className="out-8">{outVal}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9"></input>
        <div className="out-9"></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
