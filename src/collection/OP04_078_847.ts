
import Card, { CardType } from "../entities/Card";

export default class OP04_078_847 extends Card {
    public static id: string = "OP04_078_847";
    
    public static _name: string = "Oimo & Kashii";

    public effect: string = "";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-078_53ff4f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Giant","World Government"];
    
    public static power: number = 8000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_078_847.id;
    }
    
    public getType() : CardType {
        return OP04_078_847.type as CardType;
    }
    
    public getImage() {
        return OP04_078_847.image;
    }
    
    public getName() {
        return OP04_078_847._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_078_847.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_078_847.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_078_847.archetypes;
    }
    
    public getPower(): number {
        return OP04_078_847.power;
    }

    public getCounter(): number {
        return OP04_078_847.counter;
    }

    public getLife(): number {
        return OP04_078_847.life;
    }
}
