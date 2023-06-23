import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from 'redux/sliceContact';
import { filtersReducer } from 'redux/sliceFilter';

export const store = configureStore({
  reducer: {
    contacts: tasksReducer,
    filters: filtersReducer,
  },
});