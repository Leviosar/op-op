
import Card, { CardType } from "../entities/Card";

export default class OP01_102_219 extends Card {
    public static id: string = "OP01_102_219";
    
    public static _name: string = "Jack";

    public effect: string = "[When Attacking] DON!!-1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Your opponent trashes 1 card from their hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-102_9e01a1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_102_219.id;
    }
    
    public getType() : CardType {
        return OP01_102_219.type as CardType;
    }
    
    public getImage() {
        return OP01_102_219.image;
    }
    
    public getName() {
        return OP01_102_219._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_102_219.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_102_219.keywords;
    }
    
    public getPower(): number {
        return OP01_102_219.power;
    }

    public getCounter(): number {
        return OP01_102_219.counter;
    }

    public getLife(): number {
        return OP01_102_219.life;
    }
}
