import styles from "../Generator/Generator.module.css";
import { useState } from "react";
const [password, setPassword] = useState("");

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
}

export default function Generator() {
  return (
    <div className={styles.container}>
      <h1>Password Generator</h1>
      <div className={styles.button}>
        <button onClick={generate}>Generate</button>
        <button>Copy</button>
      </div>
      <div>{password}</div>
    </div>
  );
}
