import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CharacterInitialState, ICharacter } from "../../models";

export const characterSlice = createSlice({
    name: 'character',
    initialState: CharacterInitialState,
    reducers: {
        bringCharacter: (state: any, action: PayloadAction<ICharacter>) => {
            return action.payload;
        },
        modifyCharacter: (state:any, action: PayloadAction<ICharacter>) => {
            const newState = { ...state, ...action.payload };
            return newState;
        },
        resetCharacter: () => {
            return CharacterInitialState
        }
    }
});

export const { bringCharacter, modifyCharacter, resetCharacter } = characterSlice.actions;

export default characterSlice.reducer;