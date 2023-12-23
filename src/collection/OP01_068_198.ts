
import Card, { CardType } from "../entities/Card";

export default class OP01_068_198 extends Card {
    public static id: string = "OP01_068_198";
    
    public static _name: string = "Gecko Moria";

    public effect: string = "[Your Turn] This Character gains <Double Attack> if you have 5 or more cards in your hand.\r\n(This card deals 2 damage.)";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-068_b52ccd_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Double Attack"];
    
    public getId() {
        return OP01_068_198.id;
    }
    
    public getType() : CardType {
        return OP01_068_198.type as CardType;
    }
    
    public getImage() {
        return OP01_068_198.image;
    }
    
    public getName() {
        return OP01_068_198._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_068_198.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_068_198.keywords;
    }
}
