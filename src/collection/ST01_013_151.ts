
import Card, { CardType } from "../entities/Card";

export default class ST01_013_151 extends Card {
    public static id: string = "ST01_013_151";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "[DON!!x1] This Character gains +1000 power.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-013_58546f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_013_151.id;
    }
    
    public getType() : CardType {
        return ST01_013_151.type as CardType;
    }
    
    public getImage() {
        return ST01_013_151.image;
    }
    
    public getName() {
        return ST01_013_151._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_013_151.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_013_151.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST01_013_151.archetypes;
    }
    
    public getPower(): number {
        return ST01_013_151.power;
    }

    public getCounter(): number {
        return ST01_013_151.counter;
    }

    public getLife(): number {
        return ST01_013_151.life;
    }
}
