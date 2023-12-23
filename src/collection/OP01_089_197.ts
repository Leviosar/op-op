
import Card, { CardType } from "../entities/Card";

export default class OP01_089_197 extends Card {
    public static id: string = "OP01_089_197";
    
    public static _name: string = "Crescent Cutlass";

    public effect: string = "[Counter] If your Leader has the {The Seven Warlords of the Sea} type, return 1 Character with a cost of 5 or less to the owner's hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-089_fecd11_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_089_197.id;
    }
    
    public getType() : CardType {
        return OP01_089_197.type as CardType;
    }
    
    public getImage() {
        return OP01_089_197.image;
    }
    
    public getName() {
        return OP01_089_197._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_089_197.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_089_197.keywords;
    }
}
