
import Card, { CardType } from "../entities/Card";

export default class OP01_061_131 extends Card {
    public static id: string = "OP01_061_131";
    
    public static _name: string = "Kaido";

    public effect: string = "[DON!! x1][During your turn][Once per turn] When one of your opponent's Characters is K.O.'d, you can add 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-061_12c0e3_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "0";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_061_131.id;
    }
    
    public getType() : CardType {
        return OP01_061_131.type as CardType;
    }
    
    public getImage() {
        return OP01_061_131.image;
    }
    
    public getName() {
        return OP01_061_131._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_061_131.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_061_131.keywords;
    }
}
