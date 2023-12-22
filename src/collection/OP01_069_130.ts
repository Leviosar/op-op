
import Card from "../entities/Card";

export default class OP01_069_130 extends Card {
    public static id: string = "OP01_069_130";
    
    public static _name: string = "Caesar Clown";

    public effect: string = "[On K.O.] Play 1 [Smiley] from your deck, then shuffle your deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-069_c813ec_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP01_069_130.id
    }
    
    public getType() {
        return OP01_069_130.type
    }
    
    public getImage() {
        return OP01_069_130.image
    }
    
    public getName() {
        return OP01_069_130._name
    }
    
    public getCost(): number {
        return parseInt(OP01_069_130.cost)
    }
}
