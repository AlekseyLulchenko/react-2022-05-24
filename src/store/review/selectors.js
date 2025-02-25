export const selectReviewState = (state) => state.review;

export const selectReviewById = (state, id) =>
  selectReviewState(state).entities[id];

export const selectReviewByIds = (state, ids) => {
  const reviewById = selectReviewState(state).entities;

  return ids.map((id) => reviewById[id]);
};
