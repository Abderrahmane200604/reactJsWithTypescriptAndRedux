import { createSlice,PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'

//**************
const postsSlice = createSlice({
    name: 'posts',
    initialState:{
      items:[],
      post:{title:'',description:''}
    },
    reducers: {
        addPost:function (state,action) {
             state.items.push(action.payload)
        },
        //***********************
        deletePost:function (state,action) {
            state.items= state.items.filter(p=>p.id!=action.payload);

        },
        //******************************
        updatePost:function (state,action) {

        },
        //********************************
        findById:function (state,action) {

        }

    },
});

// Action creators are generated for each case reducer function
export const {addPost,deletePost,findById,updatePost}=postsSlice.actions
export default postsSlice.reducer