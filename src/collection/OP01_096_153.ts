
import Card, { CardType } from "../entities/Card";

export default class OP01_096_153 extends Card {
    public static id: string = "OP01_096_153";
    
    public static _name: string = "King";

    public effect: string = "[On Play] DON!! -2:  K.O. 1 of your opponent's cost 3 or lower Characters and 1 of your opponent's cost 2 or lower Characters.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-096_b1a98d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_096_153.id;
    }
    
    public getType() : CardType {
        return OP01_096_153.type as CardType;
    }
    
    public getImage() {
        return OP01_096_153.image;
    }
    
    public getName() {
        return OP01_096_153._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_096_153.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_096_153.keywords;
    }
}
