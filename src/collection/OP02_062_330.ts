
import Card, { CardType } from "../entities/Card";

export default class OP02_062_330 extends Card {
    public static id: string = "OP02_062_330";
    
    public static _name: string = "Monkey. D. Luffy";

    public effect: string = "[On Play] / [When Attacking] You may trash 2 cards from your hand: Return up to 1 cost 4 or lower Character to its owner's hand. Then, this Character gains <Double Attack> during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-062_1b963d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = ["Double Attack"];
    
    public static archetypes: string[] = ["Impel Down","Straw Hat Crew"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_062_330.id;
    }
    
    public getType() : CardType {
        return OP02_062_330.type as CardType;
    }
    
    public getImage() {
        return OP02_062_330.image;
    }
    
    public getName() {
        return OP02_062_330._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_062_330.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_062_330.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_062_330.archetypes;
    }
    
    public getPower(): number {
        return OP02_062_330.power;
    }

    public getCounter(): number {
        return OP02_062_330.counter;
    }

    public getLife(): number {
        return OP02_062_330.life;
    }
}
