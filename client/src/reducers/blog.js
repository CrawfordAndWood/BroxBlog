import { GET_POST, GET_ALL_POSTS, LOADING } from "../actions/types";

const initialState = {
  post: {},
  posts: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: payload,
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    default:
      return state;
  }
}
