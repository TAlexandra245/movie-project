import MovieProps from "../MovieSinglePost";
import useMovies from "../hooks/useMovies";
import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components'
import { Pagination } from "antd";
import SearchBar from "./search-bar";

const Movies = (props: { posts: MovieProps[] }) => {

    const { isLoading, movies, error } = useMovies();
    const color = localStorage.getItem("themeMode");


    //pagination hooks
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentMovies = movies?.slice(firstPostIndex, lastPostIndex);

    const onShowSizeChange = (current: any, pageSize: any) => {
        setPostsPerPage(pageSize);
    }
    
    const Container = styled.div`
    display: flex;
    gap: 2em;
    justify-content:center;
    flex-wrap: wrap;
    margin-bottom: 2em;
    `

    return (
        <div>
            <h1>Movie project</h1>
            <Container>
                {
                    currentMovies?.map((movie) =>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={movie.info.image_url}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {movie.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {movie.info.plot}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">{movie.year}</Button>
                                <Button size="small">{movie.info.rating}</Button>
                            </CardActions>
                        </Card>
                    )
                }
            </Container>
            <Pagination
                onChange={(value: any) => setCurrentPage(value)}
                pageSize={postsPerPage}
                total={movies?.length}
                current={currentPage}
                showSizeChanger
                showQuickJumper
                onShowSizeChange={onShowSizeChange}
                style={{ color: color === 'dark' ? 'black' : '#fff' }} />
        </div>
    );
}

export default Movies;

