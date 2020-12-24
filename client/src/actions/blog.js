import { GET_ALL_POSTS } from "./types";
import axios from "axios";

export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://127.0.0.1:4000/");
    dispatch({ type: GET_ALL_POSTS, payload: res.data });
  } catch (error) {
    console.log("err getting blog", error.message);
  }
};

export const savePost = (form) => async (dispatch) => {
  try {
    const res = await axios.post(`http://127.0.0.1:4000/new`, form);
  } catch (error) {
    console.log("error saving post", error.message);
  }
};
