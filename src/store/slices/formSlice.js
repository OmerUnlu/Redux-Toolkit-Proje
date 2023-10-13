import {createSlice} from '@reduxjs/toolkit'

const formSlice = createSlice({
    name:"form",
    initialState:{
        name:"",
        desc:"",
        cost:0
    },
    reducers:{
        changeName(state,action){
            state.name = action.payload;
        },
        changeDesc(state,action){
            state.desc = action.payload
        },
        changeCost(state,action){
            state.cost = action.payload
        },
        cleanForm(state,action){
            state.name = "";
            state.desc = "";
            state.cost = 0;
        }
    }
})
export const {changeName, changeDesc, changeCost,cleanForm} = formSlice.actions;

export const formReducer = formSlice.reducer;