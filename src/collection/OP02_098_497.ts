
import Card, { CardType } from "../entities/Card";

export default class OP02_098_497 extends Card {
    public static id: string = "OP02_098_497";
    
    public static _name: string = "Koby";

    public effect: string = "[On Play] You may trash 1 card from your hand: K.O. up to 1 of your opponent's Characters with a cost of 3 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-098_163bc4_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_098_497.id;
    }
    
    public getType() : CardType {
        return OP02_098_497.type as CardType;
    }
    
    public getImage() {
        return OP02_098_497.image;
    }
    
    public getName() {
        return OP02_098_497._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_098_497.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_098_497.keywords;
    }
}
