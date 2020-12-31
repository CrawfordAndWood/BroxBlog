import { combineReducers } from "redux";
import posts from "./blog";
import view from "./view";
import upload from "./upload";

export default combineReducers({
  posts,
  view,
  upload,
});
