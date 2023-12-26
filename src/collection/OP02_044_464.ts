
import Card, { CardType } from "../entities/Card";

export default class OP02_044_464 extends Card {
    public static id: string = "OP02_044_464";
    
    public static _name: string = "Wanda";

    public effect: string = "[On Play] Play up to 1 {Minks} type Character card other than [Wanda] with a cost of 3 or less from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-044_f6caa2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Mink Tribe"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_044_464.id;
    }
    
    public getType() : CardType {
        return OP02_044_464.type as CardType;
    }
    
    public getImage() {
        return OP02_044_464.image;
    }
    
    public getName() {
        return OP02_044_464._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_044_464.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_044_464.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_044_464.archetypes;
    }
    
    public getPower(): number {
        return OP02_044_464.power;
    }

    public getCounter(): number {
        return OP02_044_464.counter;
    }

    public getLife(): number {
        return OP02_044_464.life;
    }
}
