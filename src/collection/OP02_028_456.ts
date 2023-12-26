
import Card, { CardType } from "../entities/Card";

export default class OP02_028_456 extends Card {
    public static id: string = "OP02_028_456";
    
    public static _name: string = "Usopp";

    public effect: string = "";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-028_286dc9_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM","Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
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
    
    public getArchetypes(): string[] {
        return OP02_028_456.archetypes;
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
