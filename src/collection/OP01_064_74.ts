
import Card from "../entities/Card";

export default class OP01_064_74 extends Card {
    public static id: string = "OP01_064_74";
    
    public static _name: string = "Alvida";

    public effect: string = "[DON!! x1] [When Attacking] You may trash 1 card from your hand: Return 1 of your opponent's Characters with a cost of 3 or less to their hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-064_1d95d5_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP01_064_74.id
    }
    
    public getType() {
        return OP01_064_74.type
    }
    
    public getImage() {
        return OP01_064_74.image
    }
    
    public getName() {
        return OP01_064_74._name
    }
    
    public getCost(): number {
        return parseInt(OP01_064_74.cost)
    }
}
