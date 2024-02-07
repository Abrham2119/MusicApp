// rootReducer.ts

import { combineReducers } from 'redux';
import songsReducer from './songsSlice';
import userReducer from './userSlice';
import playlistReducer from './playlistSlice';

const rootReducer = combineReducers({
  songs: songsReducer,
  user: userReducer,
  playlist: playlistReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
