import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchPostTeam = createAsyncThunk("post/fetchTeam", async () => {
    const res = await axios.get("http://localhost:3004/Team_about");
    return res.data;
});

const TeamSlice = createSlice({
    name: "Team",
    initialState: {
        Team: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchPostTeam.fulfilled, (state, action) => {
                state.Team = action.payload; 
                state.loading = false; 
            })
            .addCase(FetchPostTeam.pending, (state) => {
                state.loading = true;
            })
            .addCase(FetchPostTeam.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default TeamSlice.reducer;