export default class Poke {
    constructor(id, name, img, weight, height, types, sprites) {
        this.id = id
        this.name = name
        this.img = img || sprites.other.dream_world.front_default
        this.weight = weight
        this.height = height
        this.types = types
    }

    get Template() {

    }
}
