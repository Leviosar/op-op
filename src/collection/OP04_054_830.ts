
import Card, { CardType } from "../entities/Card";

export default class OP04_054_830 extends Card {
    public static id: string = "OP04_054_830";
    
    public static _name: string = "Rokki";

    public effect: string = "";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-054_4c109a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Giant","Animal Kingdom Pirates"];
    
    public static power: number = 7000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_054_830.id;
    }
    
    public getType() : CardType {
        return OP04_054_830.type as CardType;
    }
    
    public getImage() {
        return OP04_054_830.image;
    }
    
    public getName() {
        return OP04_054_830._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_054_830.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_054_830.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_054_830.archetypes;
    }
    
    public getPower(): number {
        return OP04_054_830.power;
    }

    public getCounter(): number {
        return OP04_054_830.counter;
    }

    public getLife(): number {
        return OP04_054_830.life;
    }
}
