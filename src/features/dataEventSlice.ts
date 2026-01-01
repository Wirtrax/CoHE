import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialData } from '../services/api';

export interface HistoricalEvent {
    year: number;
    desc: string;
}

export interface HistoricalCategory {
    id: number;
    title: string;
    events: HistoricalEvent[];
}

interface dataEventState {
    activeIndex: number;
    categories: HistoricalCategory[];
}
const initialState: dataEventState = {
    activeIndex: 0,
    categories: initialData,
}

const dataEventSlice = createSlice({
    name: 'dataEvent',
    initialState,
    reducers: {
        setActiveIndex: (state, action: PayloadAction<number>) => {
            state.activeIndex = action.payload
        },

        nextSlide: (state) => {
            state.activeIndex = (state.activeIndex + 1) % state.categories.length;
        },
        prevSlide: (state) => {
            state.activeIndex = state.activeIndex > 0
                ? state.activeIndex - 1
                : state.categories.length - 1;
        },
    }
})


export const {
    setActiveIndex,
    nextSlide,
    prevSlide,
} = dataEventSlice.actions;

export default dataEventSlice.reducer;

