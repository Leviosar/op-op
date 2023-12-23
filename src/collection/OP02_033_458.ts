
import Card, { CardType } from "../entities/Card";

export default class OP02_033_458 extends Card {
    public static id: string = "OP02_033_458";
    
    public static _name: string = "Shishilian";

    public effect: string = "[On Play] (2) (You may rest the specified number of DON!! cards in your cost area.): Set up to 1 of your {Minks} type Characters with a cost of 5 or less as active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-033_322ac6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_033_458.id;
    }
    
    public getType() : CardType {
        return OP02_033_458.type as CardType;
    }
    
    public getImage() {
        return OP02_033_458.image;
    }
    
    public getName() {
        return OP02_033_458._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_033_458.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_033_458.keywords;
    }
}
