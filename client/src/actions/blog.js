import {GET_ALL_POSTS} from "./types";
import axios from "axios";

export const getAllPosts = () => async (dispatch) => {
    try{
        console.log('getting posts')
        const res = await axios.get("http://localhost:4000/getData");
        console.log(res.data)
        dispatch({ type: GET_ALL_POSTS, payload: res.data});
    } catch (error){
        console.log("err getting blog area", error.message);
    }
}