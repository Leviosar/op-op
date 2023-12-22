
import Card from "../entities/Card";

export default class ST06_002_282 extends Card {
    public static id: string = "ST06_002_282";
    
    public static _name: string = "Koby";

    public effect: string = "[On Play] You may trash a card from your hand: K.O. up to 1 of your opponent's Characters that costs 0.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-002_213f9e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return ST06_002_282.id
    }
    
    public getType() {
        return ST06_002_282.type
    }
    
    public getImage() {
        return ST06_002_282.image
    }
    
    public getName() {
        return ST06_002_282._name
    }
    
    public getCost(): number {
        return parseInt(ST06_002_282.cost)
    }
}
