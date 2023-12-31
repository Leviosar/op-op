
import Card, { CardType } from "../entities/Card";

export default class ST10_006_892 extends Card {
    public static id: string = "ST10_006_892";
    
    public static _name: string = "Monkey.D.Luffy";

    public effect: string = "[Rush] (This card can attack on the turn in which it is played.)\r\n[Once Per Turn] When your opponent activates a [Blocker], K.O. up to 1 of your opponent's Characters with 8000 power or less.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-006_177e55_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "10";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Straw Hat Crew"];
    
    public static power: number = 11000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST10_006_892.id;
    }
    
    public getType() : CardType {
        return ST10_006_892.type as CardType;
    }
    
    public getImage() {
        return ST10_006_892.image;
    }
    
    public getName() {
        return ST10_006_892._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_006_892.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_006_892.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST10_006_892.archetypes;
    }
    
    public getPower(): number {
        return ST10_006_892.power;
    }

    public getCounter(): number {
        return ST10_006_892.counter;
    }

    public getLife(): number {
        return ST10_006_892.life;
    }
}
