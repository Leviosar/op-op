
import Card from "../entities/Card";

export default class ST05_002_249 extends Card {
    public static id: string = "ST05_002_249";
    
    public static _name: string = "Ain";

    public effect: string = "[On Play] Add 1 card from your DON!! deck and set it as rested.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-002_9ec62f_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return ST05_002_249.id
    }
    
    public getType() {
        return ST05_002_249.type
    }
    
    public getImage() {
        return ST05_002_249.image
    }
    
    public getName() {
        return ST05_002_249._name
    }
    
    public getCost(): number {
        return parseInt(ST05_002_249.cost)
    }
}
