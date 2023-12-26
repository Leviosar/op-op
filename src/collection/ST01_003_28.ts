
import Card, { CardType } from "../entities/Card";

export default class ST01_003_28 extends Card {
    public static id: string = "ST01_003_28";
    
    public static _name: string = "Carue";

    public effect: string = "";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-003_36520e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Animal","Alabasta"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_003_28.id;
    }
    
    public getType() : CardType {
        return ST01_003_28.type as CardType;
    }
    
    public getImage() {
        return ST01_003_28.image;
    }
    
    public getName() {
        return ST01_003_28._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_003_28.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_003_28.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST01_003_28.archetypes;
    }
    
    public getPower(): number {
        return ST01_003_28.power;
    }

    public getCounter(): number {
        return ST01_003_28.counter;
    }

    public getLife(): number {
        return ST01_003_28.life;
    }
}
