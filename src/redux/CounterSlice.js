import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};

// const [count, setCount] = useState(0);

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
});

const themeInitialState = {
    mode: "light"
}

const ThemeSlice = createSlice({
    name: "Theme",
    initialState: themeInitialState,
    reducers: {
        toggletheme: (state, payload) => {
            state.mode = payload.action;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;

export const counterReducer = counterSlice.reducer

// 1. It takes initial this.state
// count: 0
// action- increment the count
// count: 1