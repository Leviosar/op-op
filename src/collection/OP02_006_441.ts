
import Card, { CardType } from "../entities/Card";

export default class OP02_006_441 extends Card {
    public static id: string = "OP02_006_441";
    
    public static _name: string = "Kingdew";

    public effect: string = "";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-006_45c2f3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 7000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_006_441.id;
    }
    
    public getType() : CardType {
        return OP02_006_441.type as CardType;
    }
    
    public getImage() {
        return OP02_006_441.image;
    }
    
    public getName() {
        return OP02_006_441._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_006_441.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_006_441.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_006_441.archetypes;
    }
    
    public getPower(): number {
        return OP02_006_441.power;
    }

    public getCounter(): number {
        return OP02_006_441.counter;
    }

    public getLife(): number {
        return OP02_006_441.life;
    }
}
