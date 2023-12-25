
import Card, { CardType } from "../entities/Card";

export default class OP01_039_78 extends Card {
    public static id: string = "OP01_039_78";
    
    public static _name: string = "Killer";

    public effect: string = "<Blocker> (When your opponent attacks, by resting this card you can change the attack target to this card.)\r\n[DON!! x1] [On Block] If you control 3 or more Characters, draw 1 card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-039_12b430_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_039_78.id;
    }
    
    public getType() : CardType {
        return OP01_039_78.type as CardType;
    }
    
    public getImage() {
        return OP01_039_78.image;
    }
    
    public getName() {
        return OP01_039_78._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_039_78.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_039_78.keywords;
    }
    
    public getPower(): number {
        return OP01_039_78.power;
    }

    public getCounter(): number {
        return OP01_039_78.counter;
    }

    public getLife(): number {
        return OP01_039_78.life;
    }
}
