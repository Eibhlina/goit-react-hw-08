import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://connections-api.goit.global/';


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async(_, thunkAPI) => {


try {
    const response = await axios.get("/contacts");
    return response.data;
} catch (error) {
    return thunkAPI.rejectWithValue(error.message)
}})


export const addContact = createAsyncThunk('contacts/addContact', async(data, thunkAPI) => {


    try {
        const response = await axios.post("/contacts", {
            name: data.name,
            number: data.phone,
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }})

