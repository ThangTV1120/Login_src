import { DataAction, USER_LOGIN, FETCH_USER_SUCCESS } from '../action/userAction';

// Define state interface
export interface DataState {
  token: string,
  email: string
}

// Initial state
const initialState: DataState = {
  token: "",
  email: "",
};

// Data reducer
export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state
      };
    case FETCH_USER_SUCCESS:
      // console.log(action);
      return {
        ...state,
        token:action.data.token,
        email:action.data.email
      }

    default:
      return state;
  }
};

