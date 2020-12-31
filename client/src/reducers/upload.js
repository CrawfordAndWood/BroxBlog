import { SET_IMAGE, UPLOAD_FILE } from "../actions/types";

const initialState = {
  image: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_FILE:
    case SET_IMAGE:
      return {
        ...state,
        image: payload,
      };
    default:
      return state;
  }
}
