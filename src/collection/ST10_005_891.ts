
import Card, { CardType } from "../entities/Card";

export default class ST10_005_891 extends Card {
    public static id: string = "ST10_005_891";
    
    public static _name: string = "Jinbe";

    public effect: string = "[DON!! x1] [When Attacking] Give up to 1 of your opponent's Characters −2000 power during this turn.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-005_a15297_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Fish-Man","Straw Hat Crew"];
    
    public static power: number = 2000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return ST10_005_891.id;
    }
    
    public getType() : CardType {
        return ST10_005_891.type as CardType;
    }
    
    public getImage() {
        return ST10_005_891.image;
    }
    
    public getName() {
        return ST10_005_891._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_005_891.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_005_891.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST10_005_891.archetypes;
    }
    
    public getPower(): number {
        return ST10_005_891.power;
    }

    public getCounter(): number {
        return ST10_005_891.counter;
    }

    public getLife(): number {
        return ST10_005_891.life;
    }
}
