
import Card, { CardType } from "../entities/Card";

export default class OP04_057_833 extends Card {
    public static id: string = "OP04_057_833";
    
    public static _name: string = "Dragon Twister Demolition Breath";

    public effect: string = "[Counter] Up to 1 of your Leader or Character cards gains +4000 power during this battle. Then, place up to 1 Character with a cost of 1 or less at the bottom of the owner's deck.\r\n[Trigger] Return up to 1 Character with a cost of 6 or less to the owner's hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-057_b10382_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_057_833.id;
    }
    
    public getType() : CardType {
        return OP04_057_833.type as CardType;
    }
    
    public getImage() {
        return OP04_057_833.image;
    }
    
    public getName() {
        return OP04_057_833._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_057_833.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_057_833.keywords;
    }
    
    public getPower(): number {
        return OP04_057_833.power;
    }

    public getCounter(): number {
        return OP04_057_833.counter;
    }

    public getLife(): number {
        return OP04_057_833.life;
    }
}
