import PokeApiController from "./Controllers/PokeApiController.js";
import SandboxApiController from "./Controllers/SandboxesController.js"

class App {
  pokeApiController = new PokeApiController();
  sandboxApiController = new SandboxApiController()
}

window["app"] = new App();
