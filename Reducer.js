import {combineReducers} from 'redux';

import appState from './src/layout/redux/layoutReducer'

const rootReducer = combineReducers({
    appState
})

export default rootReducer;
