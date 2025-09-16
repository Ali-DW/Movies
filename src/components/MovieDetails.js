import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import './MovieDetails.css';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});
    console.log(params.id);

    // get movie by id to show the details
    const getMovieById = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=6517f2df219c391b08726816cd3f4feb&language=en-US`);
        setMovie(res.data);
    }

    // start the function 
    useEffect(() => {
        getMovieById();
    }, [params.id]);

    return (
        <Container className="movie-details mt-5">
            <Row>
                <Col md={4}>
                    <Image src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}   fluid />
                </Col>
                <Col md={8}>
                    <h2>{movie.original_title}</h2>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Rating:</strong> {movie.vote_average}</p>
                    <p><strong>Vote Count:</strong> {movie.vote_count}</p>
                    <p><strong>Overview:</strong> {movie.overview}</p>
                    <a href={movie.homepage}><Button variant="primary" className="mt-3">Watch Trailer</Button></a>
                    <Link to="/">
                    <Button variant="primary" className="mt-3">&#8617; Back </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default MovieDetails;