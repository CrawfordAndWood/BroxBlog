import { UPLOAD_FILE } from "./types";

export const upload = (file) => async (dispatch) => {
  try {
    console.log("upload.js file: ", file);
    //const res = await axios.post("http://127.0.0.1:4000/upload");
    dispatch({ type: UPLOAD_FILE, payload: file });
  } catch (error) {
    console.log("err getting blog", error.message);
  }
};
