
import Card, { CardType } from "../entities/Card";

export default class OP03_006_623 extends Card {
    public static id: string = "OP03_006_623";
    
    public static _name: string = "Speed Jil";

    public effect: string = "This Character cannot attack the Leader on the turn in which it is played.\r\n[DON!! x1] This character gains <Rush>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-006_377660_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Rush"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_006_623.id;
    }
    
    public getType() : CardType {
        return OP03_006_623.type as CardType;
    }
    
    public getImage() {
        return OP03_006_623.image;
    }
    
    public getName() {
        return OP03_006_623._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_006_623.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_006_623.keywords;
    }
    
    public getPower(): number {
        return OP03_006_623.power;
    }

    public getCounter(): number {
        return OP03_006_623.counter;
    }

    public getLife(): number {
        return OP03_006_623.life;
    }
}
