import React from "react";
import styles from "./Input.module.css";

const Input = ({
  label,
  type,
  id,
  name,
  value,
  onchange,
  onBlur,
  error,
  setError,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={label}>
        {label}{" "}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onchange}
        onBlur={onBlur}
        {...props}
      />

      {error && <p className={styles.error}> {error}</p>}
    </div>
  );
};

export default Input;
