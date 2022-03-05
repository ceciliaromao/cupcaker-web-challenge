import React from "react";
import styles from "./styles.module.scss"

interface ButtonProps {
  text: string;
  onclick: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
}


function Button({ text, onclick, type }: ButtonProps): JSX.Element {
  return (
    <button className={styles.btn} onClick={onclick} type={type}>
      {text}
    </button>
  );
}

export { Button } 