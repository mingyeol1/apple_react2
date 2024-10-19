import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/useSlice";


 


let item = createSlice({
    name : 'item',
    initialState : 
    [
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1}
    ], 
    reducers : {
        itemCount(state){
            return state.count
        }
    }
})

export let {itemCount} = item.actions

export default configureStore({
    reducer: {
        user : user.reducer,
        item : item.reducer
    }
})