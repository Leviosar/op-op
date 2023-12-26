
import Card, { CardType } from "../entities/Card";

export default class ST10_001_887 extends Card {
    public static id: string = "ST10_001_887";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[Activate: Main] [Once Per Turn] DON!! −3 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Place up to 1 of your opponent's Characters with 3000 power or less at the bottom of the owner's deck, and play up to 1 Character card with a cost of 4 or less from your hand.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-001_c904b2_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Heart Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 4;
    
    public getId() {
        return ST10_001_887.id;
    }
    
    public getType() : CardType {
        return ST10_001_887.type as CardType;
    }
    
    public getImage() {
        return ST10_001_887.image;
    }
    
    public getName() {
        return ST10_001_887._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_001_887.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_001_887.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST10_001_887.archetypes;
    }
    
    public getPower(): number {
        return ST10_001_887.power;
    }

    public getCounter(): number {
        return ST10_001_887.counter;
    }

    public getLife(): number {
        return ST10_001_887.life;
    }
}
