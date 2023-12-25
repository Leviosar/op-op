
import Card, { CardType } from "../entities/Card";

export default class OP04_044_823 extends Card {
    public static id: string = "OP04_044_823";
    
    public static _name: string = "Kaido";

    public effect: string = "[On Play] Return up to 1 Character with a cost of 8 or less and up to 1 Character with a cost of 3 or less to the owner's hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-044_5ff3ac_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "10";
    
    public static keywords: string[] = [];
    
    public static power: number = 12000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_044_823.id;
    }
    
    public getType() : CardType {
        return OP04_044_823.type as CardType;
    }
    
    public getImage() {
        return OP04_044_823.image;
    }
    
    public getName() {
        return OP04_044_823._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_044_823.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_044_823.keywords;
    }
    
    public getPower(): number {
        return OP04_044_823.power;
    }

    public getCounter(): number {
        return OP04_044_823.counter;
    }

    public getLife(): number {
        return OP04_044_823.life;
    }
}
