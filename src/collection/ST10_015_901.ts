
import Card, { CardType } from "../entities/Card";

export default class ST10_015_901 extends Card {
    public static id: string = "ST10_015_901";
    
    public static _name: string = "Gum-Gum Giant Sumo Slap";

    public effect: string = "[Counter] Up to 1 of your Leader or Character cards gains +2000 power during this battle, and K.O. up to 1 of your opponent's Characters with 2000 power or less.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-015_7dddcd_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST10_015_901.id;
    }
    
    public getType() : CardType {
        return ST10_015_901.type as CardType;
    }
    
    public getImage() {
        return ST10_015_901.image;
    }
    
    public getName() {
        return ST10_015_901._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_015_901.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_015_901.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST10_015_901.archetypes;
    }
    
    public getPower(): number {
        return ST10_015_901.power;
    }

    public getCounter(): number {
        return ST10_015_901.counter;
    }

    public getLife(): number {
        return ST10_015_901.life;
    }
}
