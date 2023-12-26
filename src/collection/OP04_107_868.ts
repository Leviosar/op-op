
import Card, { CardType } from "../entities/Card";

export default class OP04_107_868 extends Card {
    public static id: string = "OP04_107_868";
    
    public static _name: string = "Charlotte Perospero";

    public effect: string = "";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-107_420ced_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Big Mom Pirates"];
    
    public static power: number = 8000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_107_868.id;
    }
    
    public getType() : CardType {
        return OP04_107_868.type as CardType;
    }
    
    public getImage() {
        return OP04_107_868.image;
    }
    
    public getName() {
        return OP04_107_868._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_107_868.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_107_868.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_107_868.archetypes;
    }
    
    public getPower(): number {
        return OP04_107_868.power;
    }

    public getCounter(): number {
        return OP04_107_868.counter;
    }

    public getLife(): number {
        return OP04_107_868.life;
    }
}
