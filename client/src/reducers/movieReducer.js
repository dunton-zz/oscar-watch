import { ADD_MOVIE, REMOVE_MOVIE } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE:
      const addedMovieArray = state;
      addedMovieArray.push(action.payload);
      return addedMovieArray;
    case REMOVE_MOVIE:
      const arrayTest = movie => {
        return movie !== action.payload;
      };
      const removedMovieArray = state.filter(arrayTest);

      return removedMovieArray;
    default:
      return state;
  }
}
