import { configureStore } from '@reduxjs/toolkit';
import dataEventSlice from '../features/dataEventSlice'

export const store = configureStore({
    reducer: {
        historyEvent: dataEventSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;