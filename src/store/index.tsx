import {configureStore} from '@reduxjs/toolkit';
import paginationControlSlice from './pagination-slice';

const store = configureStore({
    reducer: { PaginationControl: paginationControlSlice.reducer},
  });

export default store