import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { login } from "../../service/auth";
const initialState = {
    user: null,
    loading: false,
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login:(state,action)=>{
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = null
        },
        update: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoginUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchLoginUser.fulfilled, (state, action) => {
                state.loading = false
                console.log(action.payload);
                
                if (action.payload) {
                    state.user = action.payload.user;
                }
            })
    }
})

export const fetchLoginUser = createAsyncThunk('auth/login', async ({ email, password }) => {
    try {
        // const res = await login(email, password)
        // return res
    } catch (error) {
        console.log(error);
    }

})

const { reducer, actions } = authSlice

export const {login, logout, update } = actions
export default reducer
