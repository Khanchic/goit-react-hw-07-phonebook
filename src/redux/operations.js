import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://63efae6c4d5eb64db0cefc8a.mockapi.io';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;

    } catch (error) {
      return rejectWithValue(error);
    }
  },
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({name, phone}, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", {name, phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);