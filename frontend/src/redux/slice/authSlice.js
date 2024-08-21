import {createSlice} from "@reduxjs/toolkit"

// ! Initial state
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('userInfo')) || null,
    },
// 1. Reducers
    reducers: {
        loginAction: (state,action) => {
            state.user = action.payload;

        },
        logoutAction: (state,action) => {
            state.user = null;
        }
    },
})

// ! Generate actions
export const {loginAction,logoutAction} = authSlice.actions
// ! Generate reducers
const authReducer = authSlice.reducer;
export default authReducer;