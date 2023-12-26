
import Card, { CardType } from "../entities/Card";

export default class ST04_015_39 extends Card {
    public static id: string = "ST04_015_39";
    
    public static _name: string = "Brachio Bomber";

    public effect: string = "[Main] K.O. 1 of your opponent's Characters witha  cost of 6 or less. Then add 1 DON!! card from your DON!! deck to your Cost Area active.\r\n[Trigger]: Add 1 DON!! card from your DON!! deck to your Cost Area active.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-015_65be70_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_015_39.id;
    }
    
    public getType() : CardType {
        return ST04_015_39.type as CardType;
    }
    
    public getImage() {
        return ST04_015_39.image;
    }
    
    public getName() {
        return ST04_015_39._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_015_39.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_015_39.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST04_015_39.archetypes;
    }
    
    public getPower(): number {
        return ST04_015_39.power;
    }

    public getCounter(): number {
        return ST04_015_39.counter;
    }

    public getLife(): number {
        return ST04_015_39.life;
    }
}
