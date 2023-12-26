
import Card, { CardType } from "../entities/Card";

export default class ST10_012_898 extends Card {
    public static id: string = "ST10_012_898";
    
    public static _name: string = "Bepo";

    public effect: string = "[On Play]/[When Attacking] If your opponent has more DON!! cards on their field than you, add up to 1 DON!! card from your DON!! deck and rest it.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-012_58e391_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Minks","Heart Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST10_012_898.id;
    }
    
    public getType() : CardType {
        return ST10_012_898.type as CardType;
    }
    
    public getImage() {
        return ST10_012_898.image;
    }
    
    public getName() {
        return ST10_012_898._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_012_898.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_012_898.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST10_012_898.archetypes;
    }
    
    public getPower(): number {
        return ST10_012_898.power;
    }

    public getCounter(): number {
        return ST10_012_898.counter;
    }

    public getLife(): number {
        return ST10_012_898.life;
    }
}
