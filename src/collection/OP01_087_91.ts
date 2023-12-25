
import Card, { CardType } from "../entities/Card";

export default class OP01_087_91 extends Card {
    public static id: string = "OP01_087_91";
    
    public static _name: string = "Officer Agents";

    public effect: string = "[Counter] Play up to 1 Character card with {Baroque Works} in its type and a cost of 3 or less from your hand without paying its cost. \r\n[Trigger] Activate this card's [Counter] effect.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-087_79ff50_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_087_91.id;
    }
    
    public getType() : CardType {
        return OP01_087_91.type as CardType;
    }
    
    public getImage() {
        return OP01_087_91.image;
    }
    
    public getName() {
        return OP01_087_91._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_087_91.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_087_91.keywords;
    }
    
    public getPower(): number {
        return OP01_087_91.power;
    }

    public getCounter(): number {
        return OP01_087_91.counter;
    }

    public getLife(): number {
        return OP01_087_91.life;
    }
}
