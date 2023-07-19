import { categoryConstants } from "../actions/constants";

const initState ={
    categories: [],
    loading: false,
    error: null
}

export default (state= initState, action) =>{
    console.log(action);
        switch(action.type){
        case categoryConstants.GET_ALL_CATEGORY_SUCCESS:
            state= {
                ...state,
               categories: action.payload.categories
            }
            break;
          
    }
    return state;
}