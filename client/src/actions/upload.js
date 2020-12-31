import axios from "axios";
import { UPLOAD_FILE, SET_IMAGE } from "./types";
import { arrayBufferToBase64 } from "../utils/arrayTansformer";

export const upload = (file) => async (dispatch) => {
  try {
    console.log("upload.js file: ", file);
    //const res = await axios.post("http://127.0.0.1:4000/upload");
    dispatch({ type: UPLOAD_FILE, payload: file });
  } catch (error) {
    console.log("err getting blog", error.message);
  }
};

export const getImages = () => async (dispatch) => {
  try {
    console.log("getting image");
    var res = await axios.get("http://127.0.0.1:4000/images");
    console.log("res", res);
    var result = arrayBufferToBase64(res.data.img.data.data);
    var finalRes = "data:image/jpeg;base64," + result;
    console.log("getting", result);
    dispatch({ type: SET_IMAGE, payload: finalRes });
  } catch (err) {}
};
