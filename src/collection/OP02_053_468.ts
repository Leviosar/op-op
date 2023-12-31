
import Card, { CardType } from "../entities/Card";

export default class OP02_053_468 extends Card {
    public static id: string = "OP02_053_468";
    
    public static _name: string = "Crocodile";

    public effect: string = "";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-053_987ff4_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Impel Down","Former Baroque Works"];
    
    public static power: number = 7000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_053_468.id;
    }
    
    public getType() : CardType {
        return OP02_053_468.type as CardType;
    }
    
    public getImage() {
        return OP02_053_468.image;
    }
    
    public getName() {
        return OP02_053_468._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_053_468.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_053_468.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_053_468.archetypes;
    }
    
    public getPower(): number {
        return OP02_053_468.power;
    }

    public getCounter(): number {
        return OP02_053_468.counter;
    }

    public getLife(): number {
        return OP02_053_468.life;
    }
}
