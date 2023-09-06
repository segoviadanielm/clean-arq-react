import AxiosImp from "../../../infrastructure/http-client/axios"
import { ICharacterPayload } from "../../../models";
import { getCharacterAdapter } from "../adapter";

export const getCharacter = async (url: string) => {
    const http = new AxiosImp<ICharacterPayload>();
    return http.getById(url,'2').then(el => getCharacterAdapter(el));
}