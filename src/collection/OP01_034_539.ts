
import Card, { CardType } from "../entities/Card";

export default class OP01_034_539 extends Card {
    public static id: string = "OP01_034_539";
    
    public static _name: string = "Inuarashi";

    public effect: string = "[DON!! x2][When attacking] Set 1 of your DON!! as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-034_86470d_jp.png";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Mink Tribe","Wano Country","Nine Red Scabbards"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_034_539.id;
    }
    
    public getType() : CardType {
        return OP01_034_539.type as CardType;
    }
    
    public getImage() {
        return OP01_034_539.image;
    }
    
    public getName() {
        return OP01_034_539._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_034_539.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_034_539.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_034_539.archetypes;
    }
    
    public getPower(): number {
        return OP01_034_539.power;
    }

    public getCounter(): number {
        return OP01_034_539.counter;
    }

    public getLife(): number {
        return OP01_034_539.life;
    }
}
