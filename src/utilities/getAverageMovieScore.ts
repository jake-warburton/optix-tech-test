export const getAverageMovieScore = (scores: number[]) =>
  (
    scores.reduce((accumulator, current) => accumulator + current, 0) /
    scores.length
  ).toFixed(1);
