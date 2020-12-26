import { GET_POST, GET_ALL_POSTS, LOADING } from "./types";
import axios from "axios";

export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://127.0.0.1:4000/");
    dispatch({ type: GET_ALL_POSTS, payload: res.data });
  } catch (error) {
    console.log("err getting blog", error.message);
  }
};

export const getPost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true });
    const res = await axios.get(`http://127.0.0.1:4000/${postId}`);
    console.log("what cam eback?", res.data);
    dispatch({ type: GET_POST, payload: res.data });
  } catch (err) {
    console.log("error getting post", err.message);
  }
};

export const savePost = (form) => async (dispatch) => {
  try {
    const res = await axios.post(`http://127.0.0.1:4000/new`, form);
  } catch (error) {
    console.log("error saving post", error.message);
  }
};
