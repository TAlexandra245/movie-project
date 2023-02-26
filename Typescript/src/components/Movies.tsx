import MovieProps from "../MovieSinglePost";
import useMovies from "../hooks/useMovies";
import MoviePost from "./MoviePost";
import Pagination from "./Pagination";
import React from 'react'
import {useState, useEffect} from 'react'

const Movies = (props: { posts: MovieProps[] }) => {

    const { isLoading, movies, error } = useMovies();

    //pagination hooks
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(150);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentMovies = movies?.slice(firstPostIndex, lastPostIndex)

    return (
        <div className="card-users">
            {
                currentMovies?.map((movie) => 
                <MoviePost info ={movie.info} title ={movie.title} year ={movie.year}></MoviePost>
                )
            }
            <Pagination totalPosts={movies?.length} postsPerPage={postsPerPage} setCurrentPage ={setCurrentPage}></Pagination>

        </div>
    );
}

export default Movies;

