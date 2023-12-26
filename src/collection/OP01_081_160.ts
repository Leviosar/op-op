
import Card, { CardType } from "../entities/Card";

export default class OP01_081_160 extends Card {
    public static id: string = "OP01_081_160";
    
    public static _name: string = "Mocha";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-081_e8453f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Punk Hazard"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_081_160.id;
    }
    
    public getType() : CardType {
        return OP01_081_160.type as CardType;
    }
    
    public getImage() {
        return OP01_081_160.image;
    }
    
    public getName() {
        return OP01_081_160._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_081_160.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_081_160.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_081_160.archetypes;
    }
    
    public getPower(): number {
        return OP01_081_160.power;
    }

    public getCounter(): number {
        return OP01_081_160.counter;
    }

    public getLife(): number {
        return OP01_081_160.life;
    }
}
