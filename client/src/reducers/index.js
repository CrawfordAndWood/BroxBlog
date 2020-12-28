import { combineReducers } from "redux";
import posts from "./blog";
import view from "./view";

export default combineReducers({
  posts,
  view,
});
