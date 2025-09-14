'use client';

import { useRef } from "react";

import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const filePickerRef = useRef();

  function pickImageHandler() {
    filePickerRef.current.click();
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={styles.input}
          ref={filePickerRef}
        />
      </div>

      <button type="button" className={styles.button} onClick={pickImageHandler}>
        Pick an Image
      </button>
    </div>
  );
}
