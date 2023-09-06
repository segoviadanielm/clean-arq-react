import { useEffect } from "react";
import { CardInfo } from "./components";
import { useAppSelector } from "../../hooks";
import { getCharacter } from "./services/get-character";
import { useDispatch } from "react-redux";
import { bringCharacter } from "../../redux/slices/character.slice";


export default function Character() {

    const dispatch = useDispatch();
    const character = useAppSelector((state) => state.character);

    const getCharacterApi = async () => {
        const result = await getCharacter('character');
        dispatch(bringCharacter(result));
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