// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './userSlice';
import movieReducer from './movieSlice';

const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
});

export default rootReducer;
