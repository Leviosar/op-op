
import Card from "../entities/Card";

export default class OP01_023_169 extends Card {
    public static id: string = "OP01_023_169";
    
    public static _name: string = "Gordon";

    public effect: string = "[On Play] You may place 1 card from your hand at the bottom of your deck: Draw 1 card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-023_eeb5a3_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP01_023_169.id
    }
    
    public getType() {
        return OP01_023_169.type
    }
    
    public getImage() {
        return OP01_023_169.image
    }
    
    public getName() {
        return OP01_023_169._name
    }
    
    public getCost(): number {
        return parseInt(OP01_023_169.cost)
    }
}