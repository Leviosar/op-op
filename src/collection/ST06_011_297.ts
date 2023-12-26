
import Card, { CardType } from "../entities/Card";

export default class ST06_011_297 extends Card {
    public static id: string = "ST06_011_297";
    
    public static _name: string = "Momonga";

    public effect: string = "";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-011_4e21de_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Navy"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_011_297.id;
    }
    
    public getType() : CardType {
        return ST06_011_297.type as CardType;
    }
    
    public getImage() {
        return ST06_011_297.image;
    }
    
    public getName() {
        return ST06_011_297._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_011_297.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_011_297.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST06_011_297.archetypes;
    }
    
    public getPower(): number {
        return ST06_011_297.power;
    }

    public getCounter(): number {
        return ST06_011_297.counter;
    }

    public getLife(): number {
        return ST06_011_297.life;
    }
}
