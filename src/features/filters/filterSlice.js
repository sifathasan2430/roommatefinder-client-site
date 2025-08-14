import { createSlice } from "@reduxjs/toolkit";


const initialState={
    category:'',
    location:'',
    max:'',
    min:'',
    type:'',
   
}

const filterSlice=createSlice({
    name:'filters',
    initialState,
    reducers:{
        setCategory:(state,action)=>{
          state.category=action.payload
        },
        setLocation:(state,action)=>{
          state.location=action.payload
        },
        setPriceRange:(state,action)=>{
          const {max,min}=action.payload
         
      
          state.max=max
          state.min=min
        },
         
        

        
        setAmenities:(state,action)=>{
            state.Amenities=action.payload
        },
         resetFilters: () => initialState,

    }
})

export const {setCategory,setLocation,setPriceRange,setAmenities,resetFilters}=filterSlice.actions
export default filterSlice.reducer