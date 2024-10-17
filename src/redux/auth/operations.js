import { createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
  };

export const register = createAsyncThunk('auth/register', async(credentials, thunkAPI) => {
    try {
    const response = await axios.post('/users/signup', credentials);
    setAuthHeader(response.data.token);
    console.log(response);
    return response.data;
    } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    }
    
})

export const logIn = createAsyncThunk('auth/logIn', async(credentials, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", credentials);
        setAuthHeader(response.data.token);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

})

export const logOut = createAsyncThunk('auth/logOut', async(_, thunkAPI) => {
    try {
        await axios.post("/users/logout");
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

})

export const refreshUser = createAsyncThunk('auth/refreshUser', async(_, thunkAPI) => {

const persistToken = thunkAPI.getState().auth.token;

if (!persistToken) {
    return thunkAPI.rejectWithValue("No token...")
}

    try {
        setAuthHeader(persistToken);
        const response = await axios.get("/users/current");
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})