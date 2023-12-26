
import Card, { CardType } from "../entities/Card";

export default class OP02_097_496 extends Card {
    public static id: string = "OP02_097_496";
    
    public static _name: string = "Komille";

    public effect: string = "";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-097_be65f7_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_097_496.id;
    }
    
    public getType() : CardType {
        return OP02_097_496.type as CardType;
    }
    
    public getImage() {
        return OP02_097_496.image;
    }
    
    public getName() {
        return OP02_097_496._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_097_496.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_097_496.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_097_496.archetypes;
    }
    
    public getPower(): number {
        return OP02_097_496.power;
    }

    public getCounter(): number {
        return OP02_097_496.counter;
    }

    public getLife(): number {
        return OP02_097_496.life;
    }
}
