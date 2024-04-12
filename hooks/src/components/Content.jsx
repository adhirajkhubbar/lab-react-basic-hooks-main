import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './Context';

const UseEffect = () => {
  // useState
  let [count, setCount] = useState(0);
  let [content, setContent] = useState(false);
  let { darkTheme, setDarkTheme } = useContext(AppContext);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const displayContent = () => {
    alert('Content button clicked');
    setContent(!content);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  // useEffect
  useEffect(() => {
    return () => {
      console.log(count);
    };
  }, [count]);

  return (
    <div>
      <div>
        <button className="toggleButton" onClick={toggleTheme}>
          Toggle
        </button>
      </div>

      <div style={{height:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around", border: "1px solid white"}} className={`contentContainer ${darkTheme ? 'darkTheme' : 'lightTheme'}`}>
        <button onClick={displayContent}>Content</button>
        <p style={{ display: content ? 'block' : 'none',fontSize:"18px" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non at dicta, dolorum sunt ipsa alias architecto ratione quam! Totam, illum. Nostrum nisi corrupti explicabo vitae amet et placeat, earum sit?
        </p>
        <h3>{count}</h3>
        <button onClick={increaseCount}>Like</button>
      </div>
    </div>
  );
};

export default UseEffect;
