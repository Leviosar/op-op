
import Card, { CardType } from "../entities/Card";

export default class OP04_080_777 extends Card {
    public static id: string = "OP04_080_777";
    
    public static _name: string = "Gyats";

    public effect: string = "[On Play] Up to 1 of your {Dressrosa} type Characters can also attack active Characters during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-080_a4d611_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Dressrosa"];
    
    public static power: number = 1000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_080_777.id;
    }
    
    public getType() : CardType {
        return OP04_080_777.type as CardType;
    }
    
    public getImage() {
        return OP04_080_777.image;
    }
    
    public getName() {
        return OP04_080_777._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_080_777.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_080_777.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_080_777.archetypes;
    }
    
    public getPower(): number {
        return OP04_080_777.power;
    }

    public getCounter(): number {
        return OP04_080_777.counter;
    }

    public getLife(): number {
        return OP04_080_777.life;
    }
}
