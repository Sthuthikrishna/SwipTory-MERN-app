import axios from "axios";
import { categoryConstants } from "./constants";

export const getAllCategory = ()=> {
    return async (dispatch) => {
        dispatch({
            type : categoryConstants.GET_ALL_CATEGORY_REQUEST})
        const res = await axios.get(`http://localhost:2000/api/category/getcategory`)
        console.log(res);
        if(res.status===200){
            const {categories} = res.data
            dispatch({
                type : categoryConstants.GET_ALL_CATEGORY_SUCCESS,
                payload: { categories: categories}
            });
        }else {
            dispatch({
                type : categoryConstants.GET_ALL_CATEGORY_FAILURE,
                error: {error: res.data.error}
            });
        }
    }
}
export const addStory=(form) =>{
    return async dispatch=>{
        const res= await axios.post(`http://localhost:2000/api/story/create`, form);
        console.log(res);
    }
}