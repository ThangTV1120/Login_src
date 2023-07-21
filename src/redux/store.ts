// import { createStore,applyMiddleware  } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducers';

// const store = createStore(rootReducer, applyMiddleware(thunk));


// export default store;
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

// import {rootReducer} from './reducers/rootReducers';
import authlogin from "./reducers/user.slice.ts";
// Create store
// const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
const reducer ={
    user: authlogin,
}
const store = configureStore({
    reducer: reducer,
    // devTools:true,
  });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;