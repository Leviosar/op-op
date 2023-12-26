
import Card, { CardType } from "../entities/Card";

export default class OP01_052_98 extends Card {
    public static id: string = "OP01_052_98";
    
    public static _name: string = "Raizo";

    public effect: string = "[When Attacking] [Once Per Turn] If you have 2 or more rested Characters, draw 1.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-052_d70403_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Wano Country","Nine Red Scabbards"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_052_98.id;
    }
    
    public getType() : CardType {
        return OP01_052_98.type as CardType;
    }
    
    public getImage() {
        return OP01_052_98.image;
    }
    
    public getName() {
        return OP01_052_98._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_052_98.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_052_98.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_052_98.archetypes;
    }
    
    public getPower(): number {
        return OP01_052_98.power;
    }

    public getCounter(): number {
        return OP01_052_98.counter;
    }

    public getLife(): number {
        return OP01_052_98.life;
    }
}
