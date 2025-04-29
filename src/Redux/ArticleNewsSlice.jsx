import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticle = createAsyncThunk("ArticlePost/fetchArticle", async () => {
    const res = await axios.get("http://localhost:3004/blogPosts");
    return res.data;
});

const ArticleNewsSlice = createSlice({
    name: "Article",
    initialState : {
        Article: [], 
        loading: false,
        error: null
    },
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticle.fulfilled, (state, action) => {
                state.Article = action.payload; 
                state.loading = false; 
            })
            .addCase(fetchArticle.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchArticle.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default ArticleNewsSlice.reducer;
