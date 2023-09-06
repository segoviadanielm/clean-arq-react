import { ICharacter, ICharacterPayload } from "../../../models";

export const getCharacterAdapter = (character: ICharacterPayload): ICharacter => {
    return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species
    }
}