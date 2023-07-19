import { userConstants } from "./constants";
import axios from "axios";

export const register = (user)=>{
    return async (dispatch) =>{

    dispatch({type: userConstants.USER_REGISTER_REQUEST})
    
       const res= await axios.post(`http://localhost:2000/api/signup`, {
        ...user

        });
        if(res.status === 201){
            const {message} = res.data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message }
            })
        }else{
            if(res.status === 400){
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error}
                })
            }
        }
    }
}