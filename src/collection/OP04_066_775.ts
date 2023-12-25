
import Card, { CardType } from "../entities/Card";

export default class OP04_066_775 extends Card {
    public static id: string = "OP04_066_775";
    
    public static _name: string = "Ms. Valentine (Mikita)";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, reveal 1 card with \"Baroque Works\" in one of its types and add it to your hand. Place the remaining cards at the bottom of your deck in any order.\r\n\r\n[Trigger] DON!! -1: Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-066_f9aa4d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_066_775.id;
    }
    
    public getType() : CardType {
        return OP04_066_775.type as CardType;
    }
    
    public getImage() {
        return OP04_066_775.image;
    }
    
    public getName() {
        return OP04_066_775._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_066_775.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_066_775.keywords;
    }
    
    public getPower(): number {
        return OP04_066_775.power;
    }

    public getCounter(): number {
        return OP04_066_775.counter;
    }

    public getLife(): number {
        return OP04_066_775.life;
    }
}
