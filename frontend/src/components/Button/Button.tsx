import React from 'react';
import styles from './Button.module.css';

const Button = (props: any) => (
  <button type="button" className={styles.Button} data-testid="Button">
    {props.label}
  </button>
);

export default Button;
