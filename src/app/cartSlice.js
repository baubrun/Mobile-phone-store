import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items: [],
        total: 0
    },
    reducers: {
        getTotal: state => state.total
    }
})

export const { getItems, getTotal} = cartSlice.actions
export const cartState = state => state.cart.items
export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';


// export const repoSlice = createSlice({
//     name: "repo",
//     initialState: {
//         value: []
//     },
//     reducers: {
//         getRepos: (state, action) => {
//             state.value = action.payload
//         }
//     }
// })


// export const {getRepos} = repoSlice.actions
// export const repoState = state => state.repo.value
// export default repoSlice.reducer