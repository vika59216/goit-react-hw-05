
import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, handleImageClick,  }) => {
  return (
    <ul>
      {Array.isArray(photos) &&
      photos.map((photo, index) => {
        const isLastImage = index === photos.length - 1;
        return (
          <li key={photo.id} /*ref={isLastImage ? lastImageRef : null}*/>
            <ImageCard photo={photo} onClick={() => handleImageClick(photo)}/>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;