import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginationx from "./Pagination";


const MoviesList = ({movies , getPageMovies , npages}) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (movies.map((mov) => {
        return(<CardMovie key={mov.id} mov={mov}/>)
      })) : <h1 className="text-center p-5">loading...</h1>}
    <Paginationx getPageMovies={getPageMovies} npages={npages}/>
    </Row>
  );
};

export default MoviesList;
