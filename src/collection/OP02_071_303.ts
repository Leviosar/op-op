
import Card, { CardType } from "../entities/Card";

export default class OP02_071_303 extends Card {
    public static id: string = "OP02_071_303";
    
    public static _name: string = "Magellan";

    public effect: string = "[Your Turn] [Once per Turn] When a DON!! card is returned from the field to the DON!! deck, this Leader gains +1000 Power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-071_b57d9c_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Impel Down"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return OP02_071_303.id;
    }
    
    public getType() : CardType {
        return OP02_071_303.type as CardType;
    }
    
    public getImage() {
        return OP02_071_303.image;
    }
    
    public getName() {
        return OP02_071_303._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_071_303.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_071_303.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_071_303.archetypes;
    }
    
    public getPower(): number {
        return OP02_071_303.power;
    }

    public getCounter(): number {
        return OP02_071_303.counter;
    }

    public getLife(): number {
        return OP02_071_303.life;
    }
}
