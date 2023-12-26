
import Card, { CardType } from "../entities/Card";

export default class ST08_001_716 extends Card {
    public static id: string = "ST08_001_716";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[Your Turn] When a Character is K.O.'d, give up to 1 rested DON!! to this Leader.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-001_1f93a7_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "0";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return ST08_001_716.id;
    }
    
    public getType() : CardType {
        return ST08_001_716.type as CardType;
    }
    
    public getImage() {
        return ST08_001_716.image;
    }
    
    public getName() {
        return ST08_001_716._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_001_716.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_001_716.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST08_001_716.archetypes;
    }
    
    public getPower(): number {
        return ST08_001_716.power;
    }

    public getCounter(): number {
        return ST08_001_716.counter;
    }

    public getLife(): number {
        return ST08_001_716.life;
    }
}
