import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import  useReducer  from './user.reducers';
import categoryReducer from './category.reducer';
import storyReducer from './story.reducer';

const rootReducer = combineReducers({
    auth:authReducer,
    user: useReducer,
    category: categoryReducer,
    story: storyReducer
})

export default rootReducer;