import React from "react";
import css from "./ImageCard.module.css";

const ImageCard = ({photo, onClick }) => {
  const handleClick = () => {
    onClick(photo);
};
  return (
      <div className={css.container}>
          <img src={photo.urls.small} alt={photo.alt_description} onClick={handleClick}/>
      </div>
  )
}

export default ImageCard;