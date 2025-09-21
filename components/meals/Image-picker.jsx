'use client';

import { useRef, useState } from "react";
import Image from "next/image";

import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const filePickerRef = useRef();
  const [selectedImage, setSelectedImage] = useState();

  function pickImageHandler() {
    filePickerRef.current.click();
  }

  function onImageChangeHandler(event) {
    const file = event.target.files[0];
    if (!file) {
      setSelectedImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
        <div className={styles.preview}>
          {!selectedImage && <p>No image picked yet.</p>}
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Selected Image"
              fill
            />
          )}
        </div>
        <button type="button" className={styles.button} onClick={pickImageHandler}>
          Pick an Image
        </button>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={styles.input}
          ref={filePickerRef}
          onChange={onImageChangeHandler}
          required
        />
      </div>
    </div>
  );
}
