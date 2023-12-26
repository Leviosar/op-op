
import Card, { CardType } from "../entities/Card";

export default class OP01_022_122 extends Card {
    public static id: string = "OP01_022_122";
    
    public static _name: string = "Brook";

    public effect: string = "[DON!!x1] [When Attacking] Up to two of your opponent's characters: -2000 power for this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-022_3a1881_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_022_122.id;
    }
    
    public getType() : CardType {
        return OP01_022_122.type as CardType;
    }
    
    public getImage() {
        return OP01_022_122.image;
    }
    
    public getName() {
        return OP01_022_122._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_022_122.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_022_122.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_022_122.archetypes;
    }
    
    public getPower(): number {
        return OP01_022_122.power;
    }

    public getCounter(): number {
        return OP01_022_122.counter;
    }

    public getLife(): number {
        return OP01_022_122.life;
    }
}
