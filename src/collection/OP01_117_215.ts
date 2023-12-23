
import Card, { CardType } from "../entities/Card";

export default class OP01_117_215 extends Card {
    public static id: string = "OP01_117_215";
    
    public static _name: string = "Sheep's Horn";

    public effect: string = "[Main] DON!!-1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Rest 1 of your opponent's Characters with a cost of 6 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-117_80346e_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_117_215.id;
    }
    
    public getType() : CardType {
        return OP01_117_215.type as CardType;
    }
    
    public getImage() {
        return OP01_117_215.image;
    }
    
    public getName() {
        return OP01_117_215._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_117_215.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_117_215.keywords;
    }
}
