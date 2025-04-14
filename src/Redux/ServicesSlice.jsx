import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchpost_service = createAsyncThunk("post/fetch_services", async () => {
    const res = await axios.get("http://localhost:3004/Services");
    return res.data;
});

const ServicesSlice = createSlice({
    name: "Service",
    initialState: {
        Service: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchpost_service.fulfilled, (state, action) => {
                state.Service = action.payload; 
                state.loading = false; 
            })
            .addCase(fetchpost_service.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchpost_service.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default ServicesSlice.reducer;
