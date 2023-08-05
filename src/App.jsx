import styles from "../src/Generator/Generator.module.css";

import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [CopyText, setCopyText] = useState("Copy");

  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    const length = 12;
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length);

      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("Copy");
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
    setCopyText("Copied");
  }

  return (
    <div className="">
      <h1>Password Generator</h1>
      <div className={styles.button}>
        <button onClick={generate}>Generate</button>
        <button
          onClick={() => {
            copyPassword(password);
          }}>
          {CopyText}
        </button>
      </div>
      <div>{password}</div>
    </div>
  );
}

export default App;
