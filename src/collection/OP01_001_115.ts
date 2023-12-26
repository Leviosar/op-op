
import Card, { CardType } from "../entities/Card";

export default class OP01_001_115 extends Card {
    public static id: string = "OP01_001_115";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "[DON!!x1] [Your Turn] All your Characters gain +1000 power.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-001_332dbe_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return OP01_001_115.id;
    }
    
    public getType() : CardType {
        return OP01_001_115.type as CardType;
    }
    
    public getImage() {
        return OP01_001_115.image;
    }
    
    public getName() {
        return OP01_001_115._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_001_115.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_001_115.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_001_115.archetypes;
    }
    
    public getPower(): number {
        return OP01_001_115.power;
    }

    public getCounter(): number {
        return OP01_001_115.counter;
    }

    public getLife(): number {
        return OP01_001_115.life;
    }
}
