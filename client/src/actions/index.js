import { ADD_MOVIE, REMOVE_MOVIE, FETCH_USER } from "actions/types";
import axios from "axios";

export const addMovie = movie => {
  return dispatch => {
    dispatch({ type: ADD_MOVIE, payload: movie });
  };
};

export const removeMovie = movie => {
  return dispatch => {
    dispatch({ type: REMOVE_MOVIE, payload: movie });
  };
};

export const fetchUser = movie => {
  console.log("fetchUser action called");
  return async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};
