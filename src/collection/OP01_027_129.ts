
import Card, { CardType } from "../entities/Card";

export default class OP01_027_129 extends Card {
    public static id: string = "OP01_027_129";
    
    public static _name: string = "Round Table";

    public effect: string = "[Main] Give 1 of your opponent's Character -10000 Power during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-027_1e3cbb_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_027_129.id;
    }
    
    public getType() : CardType {
        return OP01_027_129.type as CardType;
    }
    
    public getImage() {
        return OP01_027_129.image;
    }
    
    public getName() {
        return OP01_027_129._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_027_129.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_027_129.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_027_129.archetypes;
    }
    
    public getPower(): number {
        return OP01_027_129.power;
    }

    public getCounter(): number {
        return OP01_027_129.counter;
    }

    public getLife(): number {
        return OP01_027_129.life;
    }
}
