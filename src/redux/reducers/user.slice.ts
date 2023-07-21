import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const authSilce = createSlice({
    name: "auth",
    initialState: {
        user: {},
        accessToken: "",
    },
    reducers: {
        USER_LOGIN: (state, data) => {
            state.accessToken = data.payload.token;
            state.user = data.payload.user;
            // console.log(data.payload.data.access_token)
        }
    }

});
const { actions, reducer } = authSilce;
export const { USER_LOGIN } = actions;
export default reducer;