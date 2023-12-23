
import Card, { CardType } from "../entities/Card";

export default class OP01_115_214 extends Card {
    public static id: string = "OP01_115_214";
    
    public static _name: string = "Elephant's Marchoo";

    public effect: string = "[Main] K.O. one of your opponent's Characters with a cost of 2 or less, then add 1 DON!! card from your DON!! deck and set it as active.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-115_211a26_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_115_214.id;
    }
    
    public getType() : CardType {
        return OP01_115_214.type as CardType;
    }
    
    public getImage() {
        return OP01_115_214.image;
    }
    
    public getName() {
        return OP01_115_214._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_115_214.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_115_214.keywords;
    }
}
