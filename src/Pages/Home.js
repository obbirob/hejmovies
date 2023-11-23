import { Grid } from "@mui/material";
import MovieList from '../Data/movielist.json';
import MovieCard from "../Module/Moviecard";

import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';
import { useState } from "react";

// Function to generate a random pastel color
const generateRandomColor = () => {
  const pastel = Array.from({ length: 3 }, () => Math.random());
  const scaledPastel = pastel.map((value) => (value + 1.0) / 2.0 * 0.6);
  return `rgb(${scaledPastel.map((value) => Math.floor(value * 255)).join(', ')})`;
};

const HomePage = () => {
  return (
    <div className="home">
      <div className="header"><h1 className="homeHeading">Ein Rob Original Filmverzeichnis</h1></div>

      <div className="homeBox">
        <Grid container  spacing={4} xs="1" >
          {MovieList['Filmverzeichnis'].map((film, index) => {
            // Generate a new random color for each MovieCard
            let newColor = generateRandomColor();

            return (
              <div key={index}>
                <MovieCard
                  movieName={film['Deutscher Titel']}
                  movieImage={film['BildUrl']}
                  bgColor={newColor}
                  detailtext={film['Handlung']}
                  link={film['WikiLink']}
                  indexNummer = {index +1}
                />
              </div>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
