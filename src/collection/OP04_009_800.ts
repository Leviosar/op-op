
import Card, { CardType } from "../entities/Card";

export default class OP04_009_800 extends Card {
    public static id: string = "OP04_009_800";
    
    public static _name: string = "Super Spot-Billed Duck Troops";

    public effect: string = "[When Attacking] You may give your 1 active Leader −5000 power during this turn: Return this Character to the owner's hand at the end of this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-009_42dcba_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal","Alabasta"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_009_800.id;
    }
    
    public getType() : CardType {
        return OP04_009_800.type as CardType;
    }
    
    public getImage() {
        return OP04_009_800.image;
    }
    
    public getName() {
        return OP04_009_800._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_009_800.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_009_800.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_009_800.archetypes;
    }
    
    public getPower(): number {
        return OP04_009_800.power;
    }

    public getCounter(): number {
        return OP04_009_800.counter;
    }

    public getLife(): number {
        return OP04_009_800.life;
    }
}
