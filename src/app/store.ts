import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {

    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = typeof store.getState

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>