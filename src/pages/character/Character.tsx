import { useEffect } from "react";
import { CardInfo } from "./components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCharacterAction } from "../../redux/actions/get-character";


export default function Character() {
    const dispatch = useAppDispatch();

    const character = useAppSelector((state) => state.character);

    const getCharacterApi = async () => {
        await dispatch(getCharacterAction('character'));
    }
    
    useEffect(() => {
        getCharacterApi();
    }, []);

    return(
        <div className="template-style">
            <CardInfo character={character}></CardInfo>
        </div>
    )
}