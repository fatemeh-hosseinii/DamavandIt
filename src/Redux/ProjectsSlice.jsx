import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjects = createAsyncThunk("project/fetch", async () => {
    const res = await axios.get("http://localhost:3004/Projects");
    return res.data;
});

const ProjectsSlice = createSlice({
    name: "Projects",
    initialState: {
        Projects: [],
        loading: true,
        error: ""
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.Projects = action.payload; 
                state.loading = false; 
            })
            .addCase(fetchProjects.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProjects.rejected, (state) => {
                state.loading = false;
                state.error = "An error occurred while fetching posts.";
            });
    }
});

export default ProjectsSlice.reducer;