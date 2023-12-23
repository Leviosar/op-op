
import Card, { CardType } from "../entities/Card";

export default class OP01_091_260 extends Card {
    public static id: string = "OP01_091_260";
    
    public static _name: string = "King";

    public effect: string = "[Your Turn] If you have 10 DON!! cards on your field, give all of your opponent's Characters -1000 power.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-091_5a61ff_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_091_260.id;
    }
    
    public getType() : CardType {
        return OP01_091_260.type as CardType;
    }
    
    public getImage() {
        return OP01_091_260.image;
    }
    
    public getName() {
        return OP01_091_260._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_091_260.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_091_260.keywords;
    }
}
