import AddDelItems from './Reducers';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducers = combineReducers({
    AddDelItems,
})

export default rootReducers;