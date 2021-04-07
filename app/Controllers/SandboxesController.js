import { ProxyState } from "../AppState.js";
import { sandboxApiService } from "../Services/SandboxApiService.js";


//Private
function _draw() {
  
}

//Public
export default class PokeApiController {
  constructor() {
    ProxyState.on("myPoke", _draw);
  }
  
  

}
