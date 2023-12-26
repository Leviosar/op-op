
import Card, { CardType } from "../entities/Card";

export default class P_001_248 extends Card {
    public static id: string = "P_001_248";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x2] This character gains<Rush> (This Character can attack the turn it enters play.)\r\n";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-001_388e29_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = ["Rush"];
    
    public static archetype: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_001_248.id;
    }
    
    public getType() : CardType {
        return P_001_248.type as CardType;
    }
    
    public getImage() {
        return P_001_248.image;
    }
    
    public getName() {
        return P_001_248._name;
    }
    
    public getCost(): number {
        return parseInt(P_001_248.cost);
    }
    
    public getKeywords(): string[] {
        return P_001_248.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_001_248.archetypes;
    }
    
    public getPower(): number {
        return P_001_248.power;
    }

    public getCounter(): number {
        return P_001_248.counter;
    }

    public getLife(): number {
        return P_001_248.life;
    }
}
