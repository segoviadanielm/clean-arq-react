interface CharacterAssociatedUrl 
{
    name: string;
    url: string;
}

export interface ICharacterPayload
{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterAssociatedUrl;
    location: CharacterAssociatedUrl;
    image: string;
    episode: string[];
    url: string;
    created: string;
}