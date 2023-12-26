
import Card, { CardType } from "../entities/Card";

export default class ST06_006_289 extends Card {
    public static id: string = "ST06_006_289";
    
    public static _name: string = "Tashigi";

    public effect: string = "[Activate: Main] You may rest this Character: For this turn, -2 cost for up to one of your opponent's Characters.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-006_d849ff_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Navy"];
    
    public static power: number = 4000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_006_289.id;
    }
    
    public getType() : CardType {
        return ST06_006_289.type as CardType;
    }
    
    public getImage() {
        return ST06_006_289.image;
    }
    
    public getName() {
        return ST06_006_289._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_006_289.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_006_289.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST06_006_289.archetypes;
    }
    
    public getPower(): number {
        return ST06_006_289.power;
    }

    public getCounter(): number {
        return ST06_006_289.counter;
    }

    public getLife(): number {
        return ST06_006_289.life;
    }
}
