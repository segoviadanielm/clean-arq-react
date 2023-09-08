import { getCharacter } from "../../pages/character/services/get-character";
import { bringCharacter } from "../slices/character.slice";
import { AppDispatch, RootState } from "../store";

export const getCharacterAction = (url: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
    try
    {
        const result = await getCharacter(url);
        return dispatch(bringCharacter(result))
    }
    catch (e)
    {
        console.log(e);
    }
}