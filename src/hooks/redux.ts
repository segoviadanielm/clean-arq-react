import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';

/*
Use throughout your app instead of plain `useDispatch` and `useSelector`
*/
export const useAppDispatch = () => useDispatch<AppDispatch>(); // use: const dispatch = useAppDispatch();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // use: const count = useAppSelector(*state of reducer*);
