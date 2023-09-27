import {createSlice} from '@reduxjs/toolkit';

const paginationControlSlice = createSlice({
    name: 'PaginationControl',
    initialState: {controls: {}},
    reducers: {
        storePaginationControls(state:any, actions:any){
            state.controls = actions.payload
        }
    }
})

export const paginationActions = paginationControlSlice.actions
export default paginationControlSlice; 