import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {

// movies array list
const [movies,setMovies] = useState([]);
// total pages of the movies
const [npages,setNpages] = useState();

// get all movies when the page is loaded
useEffect(() => {
  getAllMovies()
} ,[])

// get all movies from the api
  const getAllMovies = async() => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=6517f2df219c391b08726816cd3f4feb&language=en-US&page=1")
    setMovies(res.data.results)
    setNpages(res.data.total_pages)
  }

// get movies by page number
  
const getPageMovies = async(page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=6517f2df219c391b08726816cd3f4feb&language=en-US&page=${page}`)
    setMovies(res.data.results)
  }

// search for the movie by the name
  const search = async (query) => {
    // if the search input is empty get all the movies
    if (query === ""){
      getAllMovies()
    }
    else{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6517f2df219c391b08726816cd3f4feb&language=en-US&query=${query}&page=1`)
    setMovies(res.data.results)
    setNpages(res.data.total_pages)
  }
  }
  // get movie by id to show the details
  const getMovieById = async(id) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6517f2df219c391b08726816cd3f4feb&language=en-US`)
    console.log(res.data.title)
  }

  return (
    <div className="font color-body ">
      <NavBar search={search}/>
      <Container>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList movies={movies} getPageMovies={getPageMovies} npages={npages}/>}/> 
          <Route path="/movie/:id" element={<MovieDetails getMovieById={getMovieById}/>}/>
        </Routes>  
        </BrowserRouter> 
      </Container>
    </div>
  );
}
export default App;