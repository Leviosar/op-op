
import Card, { CardType } from "../entities/Card";

export default class OP04_007_878 extends Card {
    public static id: string = "OP04_007_878";
    
    public static _name: string = "Sanji";

    public effect: string = "[Opponent's Turn] If this Character is rested, your active Characters with a base cost of 5 cannot be K.O.'d by effects.\r\n[On Play] You may rest this Character: Play up to 1 green Character card with a cost of 5 from your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-007_1321e4_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_007_878.id;
    }
    
    public getType() : CardType {
        return OP04_007_878.type as CardType;
    }
    
    public getImage() {
        return OP04_007_878.image;
    }
    
    public getName() {
        return OP04_007_878._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_007_878.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_007_878.keywords;
    }
    
    public getPower(): number {
        return OP04_007_878.power;
    }

    public getCounter(): number {
        return OP04_007_878.counter;
    }

    public getLife(): number {
        return OP04_007_878.life;
    }
}
