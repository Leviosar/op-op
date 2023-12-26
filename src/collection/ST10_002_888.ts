
import Card, { CardType } from "../entities/Card";

export default class ST10_002_888 extends Card {
    public static id: string = "ST10_002_888";
    
    public static _name: string = "Monkey D Luffy";

    public effect: string = "[Activate: Main] [Once Per Turn] If you have 0 DON!! cards on your field or 8 or more DON!! cards on your field, add up to 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-002_42a695_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Straw Hat Crew"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 3;
    
    public getId() {
        return ST10_002_888.id;
    }
    
    public getType() : CardType {
        return ST10_002_888.type as CardType;
    }
    
    public getImage() {
        return ST10_002_888.image;
    }
    
    public getName() {
        return ST10_002_888._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_002_888.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_002_888.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST10_002_888.archetypes;
    }
    
    public getPower(): number {
        return ST10_002_888.power;
    }

    public getCounter(): number {
        return ST10_002_888.counter;
    }

    public getLife(): number {
        return ST10_002_888.life;
    }
}
