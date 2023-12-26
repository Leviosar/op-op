
import Card, { CardType } from "../entities/Card";

export default class OP01_010_166 extends Card {
    public static id: string = "OP01_010_166";
    
    public static _name: string = "Komachiyo";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-010_c4829b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Animal","Wano Country"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_010_166.id;
    }
    
    public getType() : CardType {
        return OP01_010_166.type as CardType;
    }
    
    public getImage() {
        return OP01_010_166.image;
    }
    
    public getName() {
        return OP01_010_166._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_010_166.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_010_166.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_010_166.archetypes;
    }
    
    public getPower(): number {
        return OP01_010_166.power;
    }

    public getCounter(): number {
        return OP01_010_166.counter;
    }

    public getLife(): number {
        return OP01_010_166.life;
    }
}
