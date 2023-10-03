
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { allFilms } from "../queries/allFilms";
import React from 'react';
import Modal from 'react-modal';

export const Main = () => {
  

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
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
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      ></Modal>
     
     <h1>Star Wars Movies</h1>
      {data.allFilms.films.map((item, i) => (
        <div key={i}>
        
        <p onClick={openModal}> Title: {item.title}</p>
        

        </div>
      ))}
    </div>
  );
};
