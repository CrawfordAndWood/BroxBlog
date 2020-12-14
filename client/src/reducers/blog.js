import {GET_ALL_POSTS} from "../actions/types"

const initialState = {
    posts: [],
    loading: true
};

export default function (state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_ALL_POSTS:
            console.log('getting',payload[0].posts)
            return {
                ...state,
                posts: payload[0].posts,
                loading: false
            }
        default: 
            return state;
    }
}