
import Card, { CardType } from "../entities/Card";

export default class OP01_029_117 extends Card {
    public static id: string = "OP01_029_117";
    
    public static _name: string = "Radical Beam!!";

    public effect: string = "[Counter] Your Leader or 1 of your Characters gain +2000 power during this battle. Then, if you have 2 or less Life cards, that card gains an additional +2000 power during this battle.\r\n[Trigger] Your Leader or 1 of your Characters gain +1000 power during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-029_6ba3e8_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_029_117.id;
    }
    
    public getType() : CardType {
        return OP01_029_117.type as CardType;
    }
    
    public getImage() {
        return OP01_029_117.image;
    }
    
    public getName() {
        return OP01_029_117._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_029_117.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_029_117.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_029_117.archetypes;
    }
    
    public getPower(): number {
        return OP01_029_117.power;
    }

    public getCounter(): number {
        return OP01_029_117.counter;
    }

    public getLife(): number {
        return OP01_029_117.life;
    }
}
