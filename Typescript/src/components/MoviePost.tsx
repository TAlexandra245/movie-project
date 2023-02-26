
import React from "react";
import MovieProps from "../MovieSinglePost";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const MoviePost = ({ year, title, info }: MovieProps) => {

  return (
    <div>
      <h1>
        {title}
      </h1>
      <img src ={info.image_url} width ={300} height={300}/>
    </div>
  )
}

export default MoviePost;