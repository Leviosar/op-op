
import Card, { CardType } from "../entities/Card";

export default class ST01_001_1 extends Card {
    public static id: string = "ST01_001_1";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[Activate: Main][Once Per Turn] Give this Leader or 1 of your Characters 1 rested DON!! card.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-001_85f00c_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "0";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return ST01_001_1.id;
    }
    
    public getType() : CardType {
        return ST01_001_1.type as CardType;
    }
    
    public getImage() {
        return ST01_001_1.image;
    }
    
    public getName() {
        return ST01_001_1._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_001_1.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_001_1.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST01_001_1.archetypes;
    }
    
    public getPower(): number {
        return ST01_001_1.power;
    }

    public getCounter(): number {
        return ST01_001_1.counter;
    }

    public getLife(): number {
        return ST01_001_1.life;
    }
}
