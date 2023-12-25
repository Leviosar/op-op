
import Card, { CardType } from "../entities/Card";

export default class OP02_028_456 extends Card {
    public static id: string = "OP02_028_456";
    
    public static _name: string = "Moby Dick";

    public effect: string = "[Your Turn] If you have 1 or less Life cards, your [Edward.Newgate] and all your Characters with a type including \"Whitebeard Pirates\" gain +2000 power.\r\n[Trigger] Play this card.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-028_286dc9_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_028_456.id;
    }
    
    public getType() : CardType {
        return OP02_028_456.type as CardType;
    }
    
    public getImage() {
        return OP02_028_456.image;
    }
    
    public getName() {
        return OP02_028_456._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_028_456.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_028_456.keywords;
    }
    
    public getPower(): number {
        return OP02_028_456.power;
    }

    public getCounter(): number {
        return OP02_028_456.counter;
    }

    public getLife(): number {
        return OP02_028_456.life;
    }
}
