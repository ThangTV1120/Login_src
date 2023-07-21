
import {  combineReducers } from 'redux';
import { dataReducer } from './userReducers';
// Combine reducers
export const rootReducer = combineReducers({
    user: dataReducer,
  });
export type RootState = ReturnType<typeof rootReducer>;
