
import Card, { CardType } from "../entities/Card";

export default class P_001_237 extends Card {
    public static id: string = "P_001_237";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x2] This character gains<Rush> (This card can attack on the turn in which it is played.)\r\n";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-001_3d7d66_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = ["Rush"];
    
    public static archetype: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_001_237.id;
    }
    
    public getType() : CardType {
        return P_001_237.type as CardType;
    }
    
    public getImage() {
        return P_001_237.image;
    }
    
    public getName() {
        return P_001_237._name;
    }
    
    public getCost(): number {
        return parseInt(P_001_237.cost);
    }
    
    public getKeywords(): string[] {
        return P_001_237.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_001_237.archetypes;
    }
    
    public getPower(): number {
        return P_001_237.power;
    }

    public getCounter(): number {
        return P_001_237.counter;
    }

    public getLife(): number {
        return P_001_237.life;
    }
}
