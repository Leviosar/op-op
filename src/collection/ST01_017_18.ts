
import Card, { CardType } from "../entities/Card";

export default class ST01_017_18 extends Card {
    public static id: string = "ST01_017_18";
    
    public static _name: string = "Thousand Sunny";

    public effect: string = "[Activate: Main] You may rest this Stage: 1 {Straw Hat Crew} type Leader or Character card on your field gains +1000 power during this turn.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-017_8b5901_jp.jpg";
    
    public static type: CardType = "stage";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_017_18.id;
    }
    
    public getType() : CardType {
        return ST01_017_18.type as CardType;
    }
    
    public getImage() {
        return ST01_017_18.image;
    }
    
    public getName() {
        return ST01_017_18._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_017_18.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_017_18.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST01_017_18.archetypes;
    }
    
    public getPower(): number {
        return ST01_017_18.power;
    }

    public getCounter(): number {
        return ST01_017_18.counter;
    }

    public getLife(): number {
        return ST01_017_18.life;
    }
}
