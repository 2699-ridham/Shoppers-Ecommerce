import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './Reducers';

const store = configureStore({
    reducer: rootReducers
})

export default store;