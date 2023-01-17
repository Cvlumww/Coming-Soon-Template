import { useState, useEffect, useRef } from "react";
import "./css/App.css";

const App = () => {
  const ref = useRef(null);
  const bodyRef = useRef(null);

  const Properties = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
  ];

  const change = (props) => {
    const Num = Math.ceil(Math.random() * 16);

    const h1 = ref.current;
    h1.className = `Font${Num}`;

    const App = bodyRef.current;
    App.className = `App App${Num}`;
  };

  const fetchData = async () => {
    Properties.forEach((value, i) => {
      setTimeout(() => {
        change(value.id);
      }, i * 2000);
    });
  };

  const loopFetchData = async () => {
    for (let i = 0; i < 1000; i++) {
      setTimeout(() => {
        fetchData();
      }, i * 16000);
    }
  };

  useEffect(() => {
    loopFetchData();
  }, []);

  return (
    <div className="App" ref={bodyRef}>
      <h1 id="comingSoonText" className="Font1" ref={ref}>
        Website Coming Soon
      </h1>
    </div>
  );
};

export default App;
