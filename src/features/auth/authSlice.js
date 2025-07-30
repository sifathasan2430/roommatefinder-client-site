import { createSlice } from "@reduxjs/toolkit";




const initialState={
   User:null,
   token:null,
   loading:false
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
       AuthUser:(state,action)=>{
            
state.User=action.payload

        },
       
        Token:(state,action)=>{
            state.token=action.payload
         
        },
          setLoading: (state, action) => {
      state.loading = action.payload;
    },
    LogOut:()=>initialState

    }
})
export const {AuthUser,setLoading,LogOut,Token}=authSlice.actions
export default authSlice.reducer