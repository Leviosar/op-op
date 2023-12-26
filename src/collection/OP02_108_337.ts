
import Card, { CardType } from "../entities/Card";

export default class OP02_108_337 extends Card {
    public static id: string = "OP02_108_337";
    
    public static _name: string = "Donquixote Rosinante";

    public effect: string = "<Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-108_b6479b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Navy","Donquixote Pirates"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_108_337.id;
    }
    
    public getType() : CardType {
        return OP02_108_337.type as CardType;
    }
    
    public getImage() {
        return OP02_108_337.image;
    }
    
    public getName() {
        return OP02_108_337._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_108_337.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_108_337.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_108_337.archetypes;
    }
    
    public getPower(): number {
        return OP02_108_337.power;
    }

    public getCounter(): number {
        return OP02_108_337.counter;
    }

    public getLife(): number {
        return OP02_108_337.life;
    }
}
