import {
  GET_POST,
  GET_SELECTED_POSTS,
  GET_ALL_POSTS,
  LOADING,
  SEARCH,
  UPDATE_LIMIT,
  UPDATE_PAGE,
  GET_DATA,
  VIEW_ERROR,
  ITEM_COUNT,
  RESET_SEARCH,
} from "./types";
import axios from "axios";

export const countPosts = (search = "") => async (dispatch) => {
  try {
    const res = await axios.get(`http://127.0.0.1:4000/count/${search}`);
    dispatch({ type: ITEM_COUNT, payload: res.data });
  } catch (error) {
    dispatch({
      type: VIEW_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://127.0.0.1:4000/");
    dispatch({ type: GET_ALL_POSTS, payload: res.data });
  } catch (error) {
    console.log("err getting blog", error.message);
  }
};

export const getSelectedPosts = (search = "", page = 1, limit = 10) => async (
  dispatch
) => {
  //TODO factor out params into single options object.
  try {
    dispatch({ type: LOADING, payload: true });
    dispatch({ type: SEARCH, payload: search });
    dispatch(countPosts(search));
    const res = await axios.get(
      `http://127.0.0.1:4000/${search}/${page}/${limit}`
    );
    console.log("re s", res.data);
    dispatch({ type: GET_SELECTED_POSTS, payload: res.data });
    dispatch({ type: UPDATE_LIMIT, payload: limit });
    dispatch({ type: UPDATE_PAGE, payload: page });
    dispatch({ type: GET_DATA });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: VIEW_ERROR,
      payload: {
        msg: error.response,
        status: error.response.status,
      },
    });
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

export const savePost = (form, image) => async (dispatch) => {
  try {
    //1. post the post data and get the id back
    const res = await axios.post(`http://127.0.0.1:4000/new`, form);
    console.log("should get the obj", res);
    console.log("should get the id", res.data);

    //2. make the third argument of fd.append that id
    //3. post to the server upload

    let fd = new FormData();
    fd.append("Image", image, res.data.newPostId);
    const img = axios.post(`http://127.0.0.1:4000/upload`, fd);
  } catch (error) {
    console.log("error saving post", error.message);
  }
};

export const updateLimit = (search, newLimit) => (dispatch) => {
  dispatch(getSelectedPosts(search, 1, newLimit));
  dispatch({ type: UPDATE_PAGE, payload: 1 });
  dispatch({ type: UPDATE_LIMIT, payload: newLimit });
};

export const updatePage = (search, page, limit) => (dispatch) => {
  dispatch(getSelectedPosts(search, page, limit));
  dispatch({ type: UPDATE_PAGE, payload: page });
};

export const resetSearch = (limit) => (dispatch) => {
  dispatch(getSelectedPosts("", 1, limit));
  dispatch({ type: RESET_SEARCH });
};
