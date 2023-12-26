
import Card, { CardType } from "../entities/Card";

export default class OP02_077_482 extends Card {
    public static id: string = "OP02_077_482";
    
    public static _name: string = "Solitaire";

    public effect: string = "";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-077_bc8b33_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Animal Kingdom Pirates","SMILE"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_077_482.id;
    }
    
    public getType() : CardType {
        return OP02_077_482.type as CardType;
    }
    
    public getImage() {
        return OP02_077_482.image;
    }
    
    public getName() {
        return OP02_077_482._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_077_482.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_077_482.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_077_482.archetypes;
    }
    
    public getPower(): number {
        return OP02_077_482.power;
    }

    public getCounter(): number {
        return OP02_077_482.counter;
    }

    public getLife(): number {
        return OP02_077_482.life;
    }
}
