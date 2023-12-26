
import Card, { CardType } from "../entities/Card";

export default class OP01_084_89 extends Card {
    public static id: string = "OP01_084_89";
    
    public static _name: string = "Mr. 2 Bon Clay (Bentham)";

    public effect: string = "[DON!! x1] [When Attacking] Look at the top 5 cards of your deck. Reveal up to 1 Event card with {Baroque Works} in its type among them and add it to your hand. Place the remaining cards at the bottom of your deck in any order.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-084_52f7de_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Baroque Works"];
    
    public static power: number = 4000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_084_89.id;
    }
    
    public getType() : CardType {
        return OP01_084_89.type as CardType;
    }
    
    public getImage() {
        return OP01_084_89.image;
    }
    
    public getName() {
        return OP01_084_89._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_084_89.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_084_89.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_084_89.archetypes;
    }
    
    public getPower(): number {
        return OP01_084_89.power;
    }

    public getCounter(): number {
        return OP01_084_89.counter;
    }

    public getLife(): number {
        return OP01_084_89.life;
    }
}
