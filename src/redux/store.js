import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './createSlice';

const reducer = {
  contacts: contactsReducer,
};

export const store = configureStore({
  reducer,
});