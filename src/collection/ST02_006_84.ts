
import Card, { CardType } from "../entities/Card";

export default class ST02_006_84 extends Card {
    public static id: string = "ST02_006_84";
    
    public static _name: string = "Koby";

    public effect: string = "";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-006_120abd_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Navy"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST02_006_84.id;
    }
    
    public getType() : CardType {
        return ST02_006_84.type as CardType;
    }
    
    public getImage() {
        return ST02_006_84.image;
    }
    
    public getName() {
        return ST02_006_84._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_006_84.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_006_84.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST02_006_84.archetypes;
    }
    
    public getPower(): number {
        return ST02_006_84.power;
    }

    public getCounter(): number {
        return ST02_006_84.counter;
    }

    public getLife(): number {
        return ST02_006_84.life;
    }
}
