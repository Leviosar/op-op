
import Card, { CardType } from "../entities/Card";

export default class ST03_002_103 extends Card {
    public static id: string = "ST03_002_103";
    
    public static _name: string = "Edward Weevil";

    public effect: string = "";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-002_619dd0_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["The Seven Warlords of the Sea"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_002_103.id;
    }
    
    public getType() : CardType {
        return ST03_002_103.type as CardType;
    }
    
    public getImage() {
        return ST03_002_103.image;
    }
    
    public getName() {
        return ST03_002_103._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_002_103.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_002_103.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST03_002_103.archetypes;
    }
    
    public getPower(): number {
        return ST03_002_103.power;
    }

    public getCounter(): number {
        return ST03_002_103.counter;
    }

    public getLife(): number {
        return ST03_002_103.life;
    }
}
