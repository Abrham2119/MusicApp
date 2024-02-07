// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './features/rootReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;