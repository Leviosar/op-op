
import Card, { CardType } from "../entities/Card";

export default class OP01_049_179 extends Card {
    public static id: string = "OP01_049_179";
    
    public static _name: string = "Bepo";

    public effect: string = "[DON!! x1] [When Attacking] Play 1 {Heart Pirates} type card other than Bepo with a cost of 4 or less from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-049_72068b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Mink Tribe","Heart Pirates"];
    
    public static power: number = 4000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_049_179.id;
    }
    
    public getType() : CardType {
        return OP01_049_179.type as CardType;
    }
    
    public getImage() {
        return OP01_049_179.image;
    }
    
    public getName() {
        return OP01_049_179._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_049_179.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_049_179.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_049_179.archetypes;
    }
    
    public getPower(): number {
        return OP01_049_179.power;
    }

    public getCounter(): number {
        return OP01_049_179.counter;
    }

    public getLife(): number {
        return OP01_049_179.life;
    }
}
