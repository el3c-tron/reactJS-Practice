import {configureStore} from '@reduxjs/toolkit';
import blogReducer from "../features/blogFeature/blogSlice"

export const store = configureStore(
    {
        reducer: blogReducer
    }
);