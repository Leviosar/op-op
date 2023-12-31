
import Card, { CardType } from "../entities/Card";

export default class OP01_077_63 extends Card {
    public static id: string = "OP01_077_63";
    
    public static _name: string = "Perona";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, rearrange them in any order, then return them to the top or bottom of the deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-077_2f4494_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Thriller Bark Pirates"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_077_63.id;
    }
    
    public getType() : CardType {
        return OP01_077_63.type as CardType;
    }
    
    public getImage() {
        return OP01_077_63.image;
    }
    
    public getName() {
        return OP01_077_63._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_077_63.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_077_63.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_077_63.archetypes;
    }
    
    public getPower(): number {
        return OP01_077_63.power;
    }

    public getCounter(): number {
        return OP01_077_63.counter;
    }

    public getLife(): number {
        return OP01_077_63.life;
    }
}
