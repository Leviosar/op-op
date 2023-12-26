
import Card, { CardType } from "../entities/Card";

export default class OP01_065_162 extends Card {
    public static id: string = "OP01_065_162";
    
    public static _name: string = "Vergo";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-065_f76326_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy","Donquixote Pirates","Punk Hazard"];
    
    public static power: number = 7000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_065_162.id;
    }
    
    public getType() : CardType {
        return OP01_065_162.type as CardType;
    }
    
    public getImage() {
        return OP01_065_162.image;
    }
    
    public getName() {
        return OP01_065_162._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_065_162.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_065_162.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_065_162.archetypes;
    }
    
    public getPower(): number {
        return OP01_065_162.power;
    }

    public getCounter(): number {
        return OP01_065_162.counter;
    }

    public getLife(): number {
        return OP01_065_162.life;
    }
}
