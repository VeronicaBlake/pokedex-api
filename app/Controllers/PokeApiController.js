import { ProxyState } from "../AppState.js";
import { pokeApiService } from "../Services/PokeApiService.js";


//Private
function _draw() {
  
}

//Public
export default class PokeApiController {
  constructor() {
    ProxyState.on("apiPoke", _draw);
  }
  

}
