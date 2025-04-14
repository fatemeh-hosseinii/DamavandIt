import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchpostSuccessP = createAsyncThunk("post/fetchProject", async () => {
    const res = await axios.get("http://localhost:3004/SuccessProject");
    return res.data;
});

const SuccesProjectSlice = createSlice({
    name: "Project",
    initialState : {
        Project: [], 
        loading: false,
        error: null
    },
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchpostSuccessP.fulfilled, (state, action) => {
                state.Project = action.payload; 
                state.loading = false; 
            })
            .addCase(fetchpostSuccessP.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpostSuccessP.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default SuccesProjectSlice.reducer;
