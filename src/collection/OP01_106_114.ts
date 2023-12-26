
import Card, { CardType } from "../entities/Card";

export default class OP01_106_114 extends Card {
    public static id: string = "OP01_106_114";
    
    public static _name: string = "Basil Hawkins";

    public effect: string = "[On Play] Add 1 DON!! card from your DON!! deck to your Cost Area rested.\r\n[Trigger] Play this card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-106_357461_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal Kingdom Pirates","Hawkins Pirates"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_106_114.id;
    }
    
    public getType() : CardType {
        return OP01_106_114.type as CardType;
    }
    
    public getImage() {
        return OP01_106_114.image;
    }
    
    public getName() {
        return OP01_106_114._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_106_114.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_106_114.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_106_114.archetypes;
    }
    
    public getPower(): number {
        return OP01_106_114.power;
    }

    public getCounter(): number {
        return OP01_106_114.counter;
    }

    public getLife(): number {
        return OP01_106_114.life;
    }
}
