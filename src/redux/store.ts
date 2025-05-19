import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import modalSlice from './modalSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        modal: modalSlice
    },
});
