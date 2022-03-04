import React from "react";
import styles from "./styles.module.scss"

interface ButtonProps {
  text: string;
  onclick: () => void;
}


function Button({ text, onclick }: ButtonProps): JSX.Element {
  return (
    <button className={styles.btn} onClick={onclick}>
      {text}
    </button>
  );
}

export { Button } 