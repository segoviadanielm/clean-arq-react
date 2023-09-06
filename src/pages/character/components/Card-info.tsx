import { ICharacter } from "../../../models";

interface ICharacterProps
{
    character: ICharacter
}

export default function CardInfo(props: ICharacterProps){
    return (
        <>
            <h2>name: {props.character.name}</h2>
            <p>name: {props.character.status}</p>
            <p>name: {props.character.species}</p>
        </>
    );
}