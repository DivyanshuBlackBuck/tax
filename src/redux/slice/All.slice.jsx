import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGstBlogsApi, gstBlogsAddApi } from "./All.api";


const initialState = {
    gstBlogResponse: undefined,
    gstBlogError: undefined,
    gstBlogLoading: false,

    getGstBlogResponse: undefined,
    getGstBlogError: undefined,
    getGstBlogLoading: false,
};

export const addGstBlogs = createAsyncThunk(
    'gst/gstBlogs', async (payload, { rejectWithValue }) => {
        try {
            const response = await gstBlogsAddApi(payload)
            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getGstBlogs = createAsyncThunk(
    'gst/getGstBlogs', async (payload, { rejectWithValue }) => {
        try {
            const response = await getGstBlogsApi()
            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(addGstBlogs.pending, (state, action) => {
                state.gstBlogResponse = undefined;
                state.gstBlogError = undefined;
                state.gstBlogLoading = true;
            })
            .addCase(addGstBlogs.fulfilled, (state, action) => {
                state.gstBlogResponse = action.payload;
                state.gstBlogError = undefined;
                state.gstBlogLoading = false;
            })
            .addCase(addGstBlogs.rejected, (state, action) => {
                state.gstBlogResponse = undefined;
                state.gstBlogError = action.payload;
                state.gstBlogLoading = false;
            })
            .addCase(getGstBlogs.pending, (state, action) => {
                state.getGstBlogResponse = undefined;
                state.getGstBlogError = undefined;
                state.getGstBlogLoading = true;
            })
            .addCase(getGstBlogs.fulfilled, (state, action) => {
                state.getGstBlogResponse = action.payload;
                state.getGstBlogError = undefined;
                state.getGstBlogLoading = false;
            })
            .addCase(getGstBlogs.rejected, (state, action) => {
                state.getGstBlogResponse = undefined;
                state.getGstBlogError = action.payload;
                state.getGstBlogLoading = false;
            })
    }
})

export default AuthSlice