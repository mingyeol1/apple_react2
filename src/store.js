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
        itemCount(state, actions){
          let 번호 = state.findIndex((a)=> {return a.id == actions.payload})
            state[번호].count += 1;
            console.log(번호)
        },
        addItem(state, actions){
            let 번호 = state.findIndex((a) => a.id === actions.payload.id);
            if (번호 !== -1) {
                state[번호].count += 1;
            } else {
                state.push(actions.payload);
            }
            
        },
        deleteItem(state, actions){
            let copy = state;
            copy.splice(actions.payload, 1)
        }
    }

})

export let {itemCount,addItem, deleteItem} = item.actions

export default configureStore({
    reducer: {
        user : user.reducer,
        item : item.reducer
    }
})