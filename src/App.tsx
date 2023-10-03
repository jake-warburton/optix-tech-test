import { useRef, useState, Children } from "react";
import { easeIn, easeOut } from "polished";
import { useBoolean } from "react-use";
import { createReducer } from "@reduxjs/toolkit";

import Table from "./components/movieTable/table";

// TODO: use https://comforting-starlight-f3456a.netlify.app/.netlify/functions/movieCompanies
const mockMovieCompanyData: any = [{ id: "1", name: "Test Productions" }];

// TODO: use https://comforting-starlight-f3456a.netlify.app/.netlify/functions/movies
const mockMovieData: any = [
  {
    id: "1",
    reviews: [6, 8, 3, 9, 8, 7, 8],
    title: "A Testing Film",
    filmCompanyId: "1",
    cost: 534,
    releaseYear: 2005,
  },
  {
    id: "2",
    reviews: [5, 7, 3, 4, 1, 6, 3],
    title: "Mock Test Film",
    filmCompanyId: "1",
    cost: 6234,
    releaseYear: 2006,
  },
];

export const App = () => {
  const refreshButton = (buttonText: any) => {
    if (mockMovieCompanyData) {
      return <button>{buttonText}</button>;
    } else {
      return <p>No movies loaded yet</p>;
    }
  };

  //  Accumulate movies here and append filmCompanyName with find

  return (
    <div>
      <h2>Welcome to Movie database!</h2>
      {refreshButton("Refresh")}
      <Table movies={mockMovieData} />

      {/*
      <div>
        {selectedMovie
          ? (selectedMovie.title as any)
            ? (("You have selected " + selectedMovie.title) as any)
            : "No Movie Title"
          : "No Movie Seelcted"}
        {selectedMovie && <p>Please leave a review below</p>}
        {selectedMovie && (
          <form onSubmit={() => {}}>
            <label>
              Review:
              <input type="text" />
            </label>
          </form>
        )}
      </div>
        */}
    </div>
  );
};
