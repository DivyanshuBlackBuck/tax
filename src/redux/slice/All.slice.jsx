import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addServicesApi, getGstBlogsApi, getServicesApi, gstBlogsAddApi } from "./All.api";


const initialState = {
    gstBlogResponse: undefined,
    gstBlogError: undefined,
    gstBlogLoading: false,

    getGstBlogResponse: undefined,
    getGstBlogError: undefined,
    getGstBlogLoading: false,


    addServiceResponse: undefined,
    addServiceError: undefined,
    addServiceLoading: false,

    getServiceResponse: undefined,
    getServiceError: undefined,
    getServiceLoading: false,

    selectedService: {}

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

export const addService = createAsyncThunk(
    'service/addservice', async (payload, { rejectWithValue }) => {
        try {
            const response = await addServicesApi(payload)
            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getService = createAsyncThunk(
    'service/getservice', async (payload, { rejectWithValue }) => {
        try {
            const response = await getServicesApi()
            return response
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// Selected Teams

export const setSelectedService = createAsyncThunk(
    'service/setSelectedService',
    async (payload, { rejectWithValue }) => {
        try {
            return payload;
        } catch (error) {
            // Handle any other errors that might occur during the request
            return rejectWithValue(error);
        }
    },
);


const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {
        resetSelectedServiceData: state => {
            state.selectedService = {};
        },
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

            //  SERVICES

            //------------------------- For Selected Service --------------------------

            .addCase(setSelectedService.fulfilled, (state, action) => {
                state.selectedService = action.payload;
            })


            .addCase(addService.pending, (state, action) => {
                state.addServiceResponse = undefined;
                state.addServiceError = undefined;
                state.addServiceLoading = true;
            })
            .addCase(addService.fulfilled, (state, action) => {
                state.addServiceResponse = action.payload;
                state.addServiceError = undefined;
                state.addServiceLoading = false;
            })
            .addCase(addService.rejected, (state, action) => {
                state.addServiceResponse = undefined;
                state.addServiceError = action.payload;
                state.addServiceLoading = false;
            })

            .addCase(getService.pending, (state, action) => {
                state.getServiceResponse = undefined;
                state.getServiceError = undefined;
                state.getServiceLoading = true;
            })
            .addCase(getService.fulfilled, (state, action) => {
                state.getServiceResponse = action.payload;
                state.getServiceError = undefined;
                state.getServiceLoading = false;
            })
            .addCase(getService.rejected, (state, action) => {
                state.getServiceResponse = undefined;
                state.getServiceError = action.payload;
                state.getServiceLoading = false;
            })


    }
})

export default AuthSlice