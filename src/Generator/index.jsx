import styles from "../Generator/Generator.module.css";
import { useState } from "react";

const arrayWithLettersNumbersAndCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "?",
  "+",
  "-",
  "=",
  "_",
  "|",
];

const generatePassword = (min, max) => {
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  const password = arrayWithLettersNumbersAndCharacters.slice(value);
  return password;
};

export default function Generator() {
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy");

  return (
    <div className={styles.container}>
      <h2 style={{ fontSize: "4em" }}>Password Generator</h2>
      <div className={styles.button}>
        <button onClick={() => setPassword(generatePassword(0, 71))}>
          Generate
        </button>
        <button
          onClick={() => {
            setButtonText("Copied!");
            navigator.clipboard.writeText(password.join(""));
          }}>
          {buttonText}
        </button>
      </div>
      <div>{password}</div>
    </div>
  );
}
