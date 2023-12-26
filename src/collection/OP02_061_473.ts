
import Card, { CardType } from "../entities/Card";

export default class OP02_061_473 extends Card {
    public static id: string = "OP02_061_473";
    
    public static _name: string = "Morley";

    public effect: string = "[When Attacking] If you have 1 or less cards in your hand, your opponent cannot activate the <Blocker> of any Character with a cost of 5 or less during this battle.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-061_f32ff6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetype: string[] = ["Giant","Revolutionary Army"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_061_473.id;
    }
    
    public getType() : CardType {
        return OP02_061_473.type as CardType;
    }
    
    public getImage() {
        return OP02_061_473.image;
    }
    
    public getName() {
        return OP02_061_473._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_061_473.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_061_473.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_061_473.archetypes;
    }
    
    public getPower(): number {
        return OP02_061_473.power;
    }

    public getCounter(): number {
        return OP02_061_473.counter;
    }

    public getLife(): number {
        return OP02_061_473.life;
    }
}
