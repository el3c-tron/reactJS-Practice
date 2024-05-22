import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    blogs: [
        {
            id: 1,
            content: "Temperary Value"
        }
    ]
};

export const blogSlice = createSlice(
    {
        name: "blog",
        initialState,
        reducers:{
            addBlog: (state, actions) => {
                const newBlog = {
                    id: nanoid(),
                    content: actions.payload
                }

                state.blogs.push(newBlog);
            },
            removeBlog: (state, actions) => {
                state.blogs = state.blogs.filter( (blog) => blog.id !== actions.payload )
            }
        }
    }
);

export const {addBlog, removeBlog} = blogSlice.actions;
export default blogSlice.reducer;