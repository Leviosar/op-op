
import Card, { CardType } from "../entities/Card";

export default class OP01_071_200 extends Card {
    public static id: string = "OP01_071_200";
    
    public static _name: string = "Jinbe";

    public effect: string = "[On Play] Place 1 Character with a cost of 3 or less at the bottom of the owner's deck.\r\n[Trigger] Play this card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-071_c340d2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Fish-Man","Straw Hat Crew"];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_071_200.id;
    }
    
    public getType() : CardType {
        return OP01_071_200.type as CardType;
    }
    
    public getImage() {
        return OP01_071_200.image;
    }
    
    public getName() {
        return OP01_071_200._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_071_200.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_071_200.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_071_200.archetypes;
    }
    
    public getPower(): number {
        return OP01_071_200.power;
    }

    public getCounter(): number {
        return OP01_071_200.counter;
    }

    public getLife(): number {
        return OP01_071_200.life;
    }
}
