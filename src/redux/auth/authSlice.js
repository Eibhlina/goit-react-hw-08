import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        isLoggedIn: false,
        token: null,
        isRefreshing: false,
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
           })
               .addCase(logIn.pending, () => {})
               .addCase(logIn.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.token = action.payload.token;
                state.user = action.payload.user;
               })
               .addCase(logIn.rejected, (state) => {
                state.user= {
                    name: null,
                    email: null,
                };
                state.isLoggedIn= false;
                state.token= null;
               })
               .addCase(logOut.fulfilled, (state) => {
                state.token = null;
                state.isLoggedIn = false;
                state.user = {
                    name: null,
                    email: null,
                };
            })
                .addCase(refreshUser.pending, (state) => {
                    state.isRefreshing = true;
                })
                .addCase(refreshUser.fulfilled, (state, action) => {
                 state.isLoggedIn = true;
                 state.isRefreshing = false;
                 state.user = action.payload;
                })
                .addCase(refreshUser.rejected, (state) => {
                    state.isRefreshing = false;
                });
               }
})

export const authReducer = authSlice.reducer;