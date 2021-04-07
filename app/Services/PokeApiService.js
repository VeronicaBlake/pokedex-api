import { ProxyState } from "../AppState.js"
import Poke from "../Models/Poke.js"
import { pokeApi } from "./AxiosService.js"

class PokeApiService {
    async getAllPoke(){
        let res = await pokeApi.get()
        ProxyState.apiPoke = res.data.results
    }

}

export const pokeApiService = new PokeApiService()