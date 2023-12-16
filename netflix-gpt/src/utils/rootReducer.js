// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import gptReducer from './GptSlice'
import langReducer from './LangSlice'
const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
  gpt : gptReducer,
  lang : langReducer,
});

export default rootReducer;
