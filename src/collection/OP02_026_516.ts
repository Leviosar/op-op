
import Card, { CardType } from "../entities/Card";

export default class OP02_026_516 extends Card {
    public static id: string = "OP02_026_516";
    
    public static _name: string = "Sanji";

    public effect: string = "[Once Per Turn] When you play a Character without an effect from your hand, if you have 3 or less Characters in play, set up to 2 of your Don!! to active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-026_47030f_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 4;
    
    public getId() {
        return OP02_026_516.id;
    }
    
    public getType() : CardType {
        return OP02_026_516.type as CardType;
    }
    
    public getImage() {
        return OP02_026_516.image;
    }
    
    public getName() {
        return OP02_026_516._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_026_516.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_026_516.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_026_516.archetypes;
    }
    
    public getPower(): number {
        return OP02_026_516.power;
    }

    public getCounter(): number {
        return OP02_026_516.counter;
    }

    public getLife(): number {
        return OP02_026_516.life;
    }
}
