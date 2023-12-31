
import Card, { CardType } from "../entities/Card";

export default class OP01_007_165 extends Card {
    public static id: string = "OP01_007_165";
    
    public static _name: string = "Caribou";

    public effect: string = "[On K.O.] K.O. up to one of your opponent's Characters with 4000 power or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-007_d90073_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Supernovas","Caribou Pirates"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_007_165.id;
    }
    
    public getType() : CardType {
        return OP01_007_165.type as CardType;
    }
    
    public getImage() {
        return OP01_007_165.image;
    }
    
    public getName() {
        return OP01_007_165._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_007_165.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_007_165.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_007_165.archetypes;
    }
    
    public getPower(): number {
        return OP01_007_165.power;
    }

    public getCounter(): number {
        return OP01_007_165.counter;
    }

    public getLife(): number {
        return OP01_007_165.life;
    }
}
