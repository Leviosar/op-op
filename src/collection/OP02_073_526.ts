
import Card, { CardType } from "../entities/Card";

export default class OP02_073_526 extends Card {
    public static id: string = "OP02_073_526";
    
    public static _name: string = "Sadi";

    public effect: string = "[On Play] Play up to 1 Character card with the {Jailer Beast} type from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-073_9e3d76_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Impel Down"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_073_526.id;
    }
    
    public getType() : CardType {
        return OP02_073_526.type as CardType;
    }
    
    public getImage() {
        return OP02_073_526.image;
    }
    
    public getName() {
        return OP02_073_526._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_073_526.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_073_526.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_073_526.archetypes;
    }
    
    public getPower(): number {
        return OP02_073_526.power;
    }

    public getCounter(): number {
        return OP02_073_526.counter;
    }

    public getLife(): number {
        return OP02_073_526.life;
    }
}
