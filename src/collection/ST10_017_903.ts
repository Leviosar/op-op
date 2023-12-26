
import Card, { CardType } from "../entities/Card";

export default class ST10_017_903 extends Card {
    public static id: string = "ST10_017_903";
    
    public static _name: string = "Punk Vise";

    public effect: string = "[Main] Rest up to 1 of your opponent's Characters with a cost of 2 or less, and add up to 1 DON!! card from your DON!! deck and rest it.\r\n[Trigger] Add up to 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-017_d2f129_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Kid Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST10_017_903.id;
    }
    
    public getType() : CardType {
        return ST10_017_903.type as CardType;
    }
    
    public getImage() {
        return ST10_017_903.image;
    }
    
    public getName() {
        return ST10_017_903._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_017_903.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_017_903.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST10_017_903.archetypes;
    }
    
    public getPower(): number {
        return ST10_017_903.power;
    }

    public getCounter(): number {
        return ST10_017_903.counter;
    }

    public getLife(): number {
        return ST10_017_903.life;
    }
}
