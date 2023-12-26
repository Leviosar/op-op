
import Card, { CardType } from "../entities/Card";

export default class ST01_006_152 extends Card {
    public static id: string = "ST01_006_152";
    
    public static _name: string = "Tony Tony Chopper";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-006_78e412_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetype: string[] = ["Animal","Straw Hat Crew"];
    
    public static power: number = 1000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_006_152.id;
    }
    
    public getType() : CardType {
        return ST01_006_152.type as CardType;
    }
    
    public getImage() {
        return ST01_006_152.image;
    }
    
    public getName() {
        return ST01_006_152._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_006_152.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_006_152.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST01_006_152.archetypes;
    }
    
    public getPower(): number {
        return ST01_006_152.power;
    }

    public getCounter(): number {
        return ST01_006_152.counter;
    }

    public getLife(): number {
        return ST01_006_152.life;
    }
}
