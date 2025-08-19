"use client";
import { useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();

  const handleClickPic = () => imageInput.current.click();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    // console.log("image url: ", pickedImage);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image Picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image picked by the user" fill />
          )}
        </div>
        <input
          type="file"
          id={name}
          className={classes.input}
          accept="image/png, image/jpeg, image/webp"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleClickPic}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
