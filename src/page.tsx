import { useState } from "react";
import { Container, Chip, CircularProgress } from "@mui/material";
//  import { easeIn, easeOut } from "polished";

import { LoadingState } from "./constants";
import { Movie } from "./commonInterfaces";
import Button from "./components/elements/button";
import Modal from "./components/elements/modal";
import Table from "./components/movieTable";
import Feedback from "./components/feedback";

interface PageProps {
  loadingState: LoadingState;
  movies: Movie[];
  refreshData: () => void;
}

const Page: React.FC<PageProps> = ({ loadingState, movies, refreshData }) => {
  const [selectedRow, setSelectedRow] = useState(-1);

  return (
    <>
      <Container maxWidth="lg">
        <h2>Welcome to Movie database!</h2>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Chip
            data-testid="movie-counter"
            label={`${
              loadingState === "loading" ? "Loading" : movies.length
            } Movies`}
            variant="outlined"
          />
          <Button
            variant="contained"
            disabled={loadingState === LoadingState.Loading}
            onClick={refreshData}
          >
            Refresh
          </Button>
        </div>

        <div
          style={{
            paddingTop: "3em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loadingState === LoadingState.Loading ? (
            <CircularProgress data-testid="loading-icon" />
          ) : movies.length < 1 ? (
            <Feedback loadingState={loadingState} />
          ) : (
            <Table
              movies={movies}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
            />
          )}
        </div>
      </Container>

      {selectedRow > -1 && (
        <Modal
          showModal={selectedRow > -1}
          onClose={() => setSelectedRow(-1)}
          heading="Review form"
        >
          Modal Content
        </Modal>
      )}
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
    </>
  );
};

export default Page;
