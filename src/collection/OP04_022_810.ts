
import Card, { CardType } from "../entities/Card";

export default class OP04_022_810 extends Card {
    public static id: string = "OP04_022_810";
    
    public static _name: string = "Eric";

    public effect: string = "[Activate: Main] You may rest this Character: Rest up to 1 of your opponent's Characters with a cost of 1 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-022_e8d7ad_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["East Blue"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_022_810.id;
    }
    
    public getType() : CardType {
        return OP04_022_810.type as CardType;
    }
    
    public getImage() {
        return OP04_022_810.image;
    }
    
    public getName() {
        return OP04_022_810._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_022_810.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_022_810.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_022_810.archetypes;
    }
    
    public getPower(): number {
        return OP04_022_810.power;
    }

    public getCounter(): number {
        return OP04_022_810.counter;
    }

    public getLife(): number {
        return OP04_022_810.life;
    }
}
