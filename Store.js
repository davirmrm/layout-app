import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import reducers from './Reducer';

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
