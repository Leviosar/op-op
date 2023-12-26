
import Card, { CardType } from "../entities/Card";

export default class OP03_117_700 extends Card {
    public static id: string = "OP03_117_700";
    
    public static _name: string = "Napoleon";

    public effect: string = "[Activate:Main] You may rest this card: Up to 1 of your [Charlotte Linlin] gain +1000 Power until the start of your next turn.\r\n[Trigger] Play this card";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-117_665208_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Big Mom Pirates","Homies"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_117_700.id;
    }
    
    public getType() : CardType {
        return OP03_117_700.type as CardType;
    }
    
    public getImage() {
        return OP03_117_700.image;
    }
    
    public getName() {
        return OP03_117_700._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_117_700.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_117_700.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_117_700.archetypes;
    }
    
    public getPower(): number {
        return OP03_117_700.power;
    }

    public getCounter(): number {
        return OP03_117_700.counter;
    }

    public getLife(): number {
        return OP03_117_700.life;
    }
}
