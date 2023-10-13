import {createSlice,nanoid} from '@reduxjs/toolkit'

const courseSlice = createSlice({
    name:"course",
    initialState:{
        searchTerm:"",
        data:[]
    },
    reducers:{
        addCourse(state,action){
            state.data.push({
                name: action.payload.name,
                desc: action.payload.desc,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        deleteCourse(state,action){
            const updatedData = state.data.filter((course)=>{
                return course.id !== action.payload;
            })

            state.data = updatedData;
        },

        changeSearchTerm(state,action){
            state.searchTerm = action.payload
        }
    }
})
export const {addCourse, deleteCourse, changeSearchTerm} = courseSlice.actions;

export const courseReducer = courseSlice.reducer;