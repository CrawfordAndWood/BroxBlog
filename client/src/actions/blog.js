import {GET_ALL_POSTS} from "./types";
import axios from "axios";

export const getAllPosts = () => async (dispatch) => {
    try{
        const res = await axios.get("http://localhost:4000/");
        dispatch({ type: GET_ALL_POSTS, payload: res.data});
    } catch (error){
        console.log("err getting blog", error.message);
    }
}