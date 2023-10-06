import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  CircularProgress,
  Fade,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { LoadingState } from "../constants";
import { Movie } from "../commonInterfaces";
import Counter from "../components/elements/counter";
import Button from "../components/elements/button";
import Modal from "../components/elements/modal";
import Table from "../components/movieComponents/movieTable";
import ErrorFeedback from "../components/movieComponents/errorFeedback";
import ReviewForm from "../components/movieComponents/reviewForm";

interface PageProps {
  loadingState: LoadingState;
  movies: Movie[];
  refreshData: () => void;
}

const Page: React.FC<PageProps> = ({ loadingState, movies, refreshData }) => {
  const [selectedMovieId, setSelectedMovieId] = useState<number>(-1);

  return (
    <Container maxWidth="lg">
      <header>
        <h2>Welcome to Movie database!</h2>

        <Box
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Counter
            count={movies.length}
            title="movies"
            loadingState={loadingState}
          />

          <Button
            variant="contained"
            disabled={loadingState === LoadingState.Loading}
            onClick={() => {
              setSelectedMovieId(-1);
              refreshData();
            }}
          >
            Refresh
          </Button>
        </Box>
      </header>

      <main>
        <Box
          style={{
            paddingTop: "1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loadingState === LoadingState.Loading ? (
            <CircularProgress data-testid="loading-icon" />
          ) : movies.length < 1 ? (
            <ErrorFeedback loadingState={loadingState} />
          ) : (
            <Table
              movies={movies}
              selectedMovieId={selectedMovieId}
              setSelectedMovieId={setSelectedMovieId}
            />
          )}
        </Box>

        {useMediaQuery("(min-width: 768px)") ? (
          <Fade in={selectedMovieId > -1}>
            <Container
              style={{
                margin: "20px 0px 0px",
              }}
            >
              <Card variant="outlined">
                <CardContent>
                  <ReviewForm
                    movie={
                      movies.filter((x) => x.id === `${selectedMovieId}`)[0]
                    }
                  />
                </CardContent>
              </Card>
            </Container>
          </Fade>
        ) : (
          <Modal
            showModal={selectedMovieId > -1}
            onClose={() => setSelectedMovieId(-1)}
            heading="Review form"
            id="movie-review-modal"
            mobileOnly
          >
            <ReviewForm
              movie={movies.filter((x) => x.id === `${selectedMovieId}`)[0]}
            />
          </Modal>
        )}
      </main>
    </Container>
  );
};

export default Page;
