import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducer/contactsSlice';
import { filtersReducer } from './reducer/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
