import { applyMiddleware, combineReducers, createStore } from "redux";
import videosReducer from "./videos/videosReducer";
import { thunk } from "redux-thunk";
import videosFilterReducer from "./videos/videosFilterReducer";
import darkModeReducer from "./darkMode/darkmodeReducer";
import categorySelector from "./categorySelector/categorySelector";

const rootReducer = combineReducers({
    allVideos: videosReducer,
    filterVideos: videosFilterReducer,
    darkMode: darkModeReducer,
    option: categorySelector,
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store