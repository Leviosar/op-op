
import Card from "../entities/Card";

export default class OP01_018_168 extends Card {
    public static id: string = "OP01_018_168";
    
    public static _name: string = "Gordon";

    public effect: string = "[On Play] You may place 1 card from your hand at the bottom of your deck: Draw 1 card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-018_5bc8c3_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP01_018_168.id
    }
    
    public getType() {
        return OP01_018_168.type
    }
    
    public getImage() {
        return OP01_018_168.image
    }
    
    public getName() {
        return OP01_018_168._name
    }
    
    public getCost(): number {
        return parseInt(OP01_018_168.cost)
    }
}