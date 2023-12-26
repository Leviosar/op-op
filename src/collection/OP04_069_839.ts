
import Card, { CardType } from "../entities/Card";

export default class OP04_069_839 extends Card {
    public static id: string = "OP04_069_839";
    
    public static _name: string = "Mr. 2 Bon Clay (Bentham)";

    public effect: string = "[On Your Opponent's Attack] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character's base power becomes the same as the power of your opponent's attacking Leader or Character during this turn.\r\n[Trigger] DON!! −1: Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-069_360545_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_069_839.id;
    }
    
    public getType() : CardType {
        return OP04_069_839.type as CardType;
    }
    
    public getImage() {
        return OP04_069_839.image;
    }
    
    public getName() {
        return OP04_069_839._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_069_839.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_069_839.keywords;
    }
    
    public getPower(): number {
        return OP04_069_839.power;
    }

    public getCounter(): number {
        return OP04_069_839.counter;
    }

    public getLife(): number {
        return OP04_069_839.life;
    }
}
