
import Card from "../entities/Card";

export default class OP01_101_159 extends Card {
    public static id: string = "OP01_101_159";
    
    public static _name: string = "Sasaki";

    public effect: string = "[DON!! x1] [When Attacking] You may trash 1 card from your hand: Add 1 card from your DON!! deck and rest it.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-101_a02000_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP01_101_159.id
    }
    
    public getType() {
        return OP01_101_159.type
    }
    
    public getImage() {
        return OP01_101_159.image
    }
    
    public getName() {
        return OP01_101_159._name
    }
    
    public getCost(): number {
        return parseInt(OP01_101_159.cost)
    }
}
