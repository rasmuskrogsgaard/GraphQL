
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { allFilms } from "../queries/allFilms";
import React from 'react';
import Modal from 'react-modal';

export const Main = () => {

  const [selectedMovie, setSelectedMovie] = React.useState(null);


  const handleMovieClick = (movie) => {
    console.log('Selected Movie:', movie);
    setSelectedMovie(movie);
    openModal();
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '27rem',
      height: '40rem',
      background: 'black',
      borderRadius: '10px'

    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const { data, isLoading, error } = useQuery({
    queryKey: ["getStarWarsPerson"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        allFilms
      ),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  //modal
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }



  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        {selectedMovie && (
          <div>
            <h2>{selectedMovie.title}</h2>
            <p>Director: {selectedMovie.director}</p>
            <p>{selectedMovie.openingCrawl}</p>
          </div>
        )}
      </Modal>
      <div className="container">
        <h1>Star Wars Movies</h1>
        <img src="../src/assets/starwarsbanner.jpg"></img>
      </div>
      <h2> Movie Titles </h2>

      {data.allFilms.films.map((item, i) => (
        <div key={i}>


          <p onClick={() => handleMovieClick(item)}> {item.title}</p>

        </div>
      ))}
    </div>
  );
};
