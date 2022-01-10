import { combineReducers } from "redux";
import { allcontactsReducer } from "./allcontactsReducer";
import { newContactReducer } from "./newContactReducer";
import { recentReducer } from "./recentReducer";

const allReducers= combineReducers(
    {
        allcontacts:allcontactsReducer,
        newContact:newContactReducer,
        recent:recentReducer
    }
)

export default allReducers;