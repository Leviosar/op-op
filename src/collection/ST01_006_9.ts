
import Card, { CardType } from "../entities/Card";

export default class ST01_006_9 extends Card {
    public static id: string = "ST01_006_9";
    
    public static _name: string = "Tony Tony Chopper";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-006_26d3d1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Animal","Straw Hat Crew"];
    
    public static power: number = 1000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_006_9.id;
    }
    
    public getType() : CardType {
        return ST01_006_9.type as CardType;
    }
    
    public getImage() {
        return ST01_006_9.image;
    }
    
    public getName() {
        return ST01_006_9._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_006_9.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_006_9.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST01_006_9.archetypes;
    }
    
    public getPower(): number {
        return ST01_006_9.power;
    }

    public getCounter(): number {
        return ST01_006_9.counter;
    }

    public getLife(): number {
        return ST01_006_9.life;
    }
}
