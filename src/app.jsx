import React, { useState, useEffect, useRef } from "react";
import "./app.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { getPhotos } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "./components/ImageModal/ImageModal";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import ScrollIntoView from 'react-scroll-into-view'
import axios from 'axios';

const App = () => {
  const [photos, setPhotos] = useState(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [scrollBtn, setScrollBtn] = useState(false);
  // const lastImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 900) {
        const isScrollBtnVisible = window.scrollY > 200;
        setScrollBtn(isScrollBtnVisible);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!query) return;
    async function handleSearch() {
      try {
        setLoading(true);
        setError(false);
        const data = await getPhotos(query, page);
        setPhotos(prevPhotos => {
          if (Array.isArray(prevPhotos)) {
            return [...prevPhotos, ...data.results];
          } else {
            return [...data.results];
          }
        });
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    handleSearch();
    // scrollToLastImage();
  }, [query, page]);

  const handleQuery = (newQuery) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPhotos(null);
      setPage(1);
      setTotalPages(0);
    }
  };

  // const scrollToLastImage = () => {
  //   if (lastImageRef.current) {
  //     lastImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // };

  const loadMorePhotos = () => {
    setPage(prevPage => prevPage + 1);
    // setScrollBtn(true);
  };

  const openModal = photo => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const onScrollBtn = () => {
    setScrollBtn(false)
  };

  return (
    <div>
      <SearchBar onSubmit={handleQuery} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {photos !== null && (
        <ImageGallery photos={photos} handleImageClick={openModal} /*lastImageRef={lastImageRef}*/ />
      )}
      {totalPages > page && <LoadMoreBtn loadMorePhotos={loadMorePhotos} />}
      <ImageModal isOpen={!!selectedPhoto} photo={selectedPhoto} onRequestClose={closeModal} />
      {scrollBtn && <ScrollIntoView selector="#header"><ScrollUp onScrollBtn={onScrollBtn} /></ScrollIntoView>}
    </div>
  );
};

export default App;