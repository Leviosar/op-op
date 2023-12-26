
import Card, { CardType } from "../entities/Card";

export default class OP04_033_815 extends Card {
    public static id: string = "OP04_033_815";
    
    public static _name: string = "Machvise";

    public effect: string = "[On Play] If your Leader has the {Donquixote Pirates} type, rest up to 1 of your opponent's Characters with a cost of 5 or less. Then, set up to 1 of your DON!! cards as active at the end of this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-033_e2760a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Donquixote Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_033_815.id;
    }
    
    public getType() : CardType {
        return OP04_033_815.type as CardType;
    }
    
    public getImage() {
        return OP04_033_815.image;
    }
    
    public getName() {
        return OP04_033_815._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_033_815.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_033_815.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_033_815.archetypes;
    }
    
    public getPower(): number {
        return OP04_033_815.power;
    }

    public getCounter(): number {
        return OP04_033_815.counter;
    }

    public getLife(): number {
        return OP04_033_815.life;
    }
}
