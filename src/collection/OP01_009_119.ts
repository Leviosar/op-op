
import Card, { CardType } from "../entities/Card";

export default class OP01_009_119 extends Card {
    public static id: string = "OP01_009_119";
    
    public static _name: string = "Carrot";

    public effect: string = "[Trigger] Play this card.\r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-009_accee7_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_009_119.id;
    }
    
    public getType() : CardType {
        return OP01_009_119.type as CardType;
    }
    
    public getImage() {
        return OP01_009_119.image;
    }
    
    public getName() {
        return OP01_009_119._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_009_119.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_009_119.keywords;
    }
}
