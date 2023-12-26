
import Card, { CardType } from "../entities/Card";

export default class ST02_015_46 extends Card {
    public static id: string = "ST02_015_46";
    
    public static _name: string = "Scalpel";

    public effect: string = "[Counter] Your Leader or up to 1 of your Characters gains 2000 Power for the duration of the battle. Then, switch up to 1 of your Don!! to Active.\r\n[Trigger] Switch up to 2 of your Don!! to Active.";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-015_4d646e_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Supernovas","Heart Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST02_015_46.id;
    }
    
    public getType() : CardType {
        return ST02_015_46.type as CardType;
    }
    
    public getImage() {
        return ST02_015_46.image;
    }
    
    public getName() {
        return ST02_015_46._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_015_46.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_015_46.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST02_015_46.archetypes;
    }
    
    public getPower(): number {
        return ST02_015_46.power;
    }

    public getCounter(): number {
        return ST02_015_46.counter;
    }

    public getLife(): number {
        return ST02_015_46.life;
    }
}
