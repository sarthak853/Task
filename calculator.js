import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const Calculator = () => {
  const [num, setNum] = useState("");
  const [res, setRes] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      setRes(eval(num));
      setNum("");
    } else if (value === "C") {
      setNum("");
      setRes("");
    } else {
      setNum(num + value);
    }
  };

  return (
    <div>
      <Display value={res} />
      <ButtonBox>
        {["7", "8", "9", "/"].map((btn, i) => (
          <Button key={i} value={btn} onClick={() => handleClick(btn)} />
        ))}
        {["4", "5", "6", "*"].map((btn, i) => (
          <Button key={i} value={btn} onClick={() => handleClick(btn)} />
        ))}
        {["1", "2", "3", "-"].map((btn, i) => (
          <Button key={i} value={btn} onClick={() => handleClick(btn)} />
        ))}
        {["C", "0", ".", "+"].map((btn, i) => (
          <Button key={i} value={btn} onClick={() => handleClick(btn)} />
        ))}
      </ButtonBox>
    </div>
  );
};

export default Calculator;