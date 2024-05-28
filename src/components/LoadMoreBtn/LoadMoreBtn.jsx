import React from 'react';
import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ loadMorePhotos }) => {
  return (
    <button type="button" className={css.loadMoreBtn}  onClick={loadMorePhotos}>Load more</button>
  )
}

export default LoadMoreBtn