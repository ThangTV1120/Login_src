import { DataState } from './../reducers/userReducers';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../reducers/rootReducers';
import { Action } from 'redux';
import { FormData } from '../../modules/auth/components/LoginForm';
import { LoginCheck, LoginUser } from '../../modules/auth/pages/LoginPage';
// Action types
export const USER_LOGIN = "USER_LOGIN";
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
// Action interfaces
interface LOGIN {
    type: typeof USER_LOGIN;
}
interface USER_SUCCESS {
    type: typeof FETCH_USER_SUCCESS;
    data: {
        token: string,
        email: string
    };
}

// Combined action type
export type DataAction = LOGIN | USER_SUCCESS;

// Thunk action creator
export const LoginRedux = (data: FormData): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async (dispatch: ThunkDispatch<RootState, unknown, Action<string>>) => {
        dispatch({ type: USER_LOGIN });
        // console.log(token);
        let result = await LoginUser(data);
        // console.log(result.user.email);
        if (result && result.access_token) {
            dispatch({
                type: FETCH_USER_SUCCESS,
                data: { email: result.user.email, token: result.access_token }
            });
        }


    };
};
