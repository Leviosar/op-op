
import Card, { CardType } from "../entities/Card";

export default class OP01_025_573 extends Card {
    public static id: string = "OP01_025_573";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "This character gains<Rush> (This Character can attack the turn it enters play.)";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-025_ad0472_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Rush"];
    
    public static archetype: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_025_573.id;
    }
    
    public getType() : CardType {
        return OP01_025_573.type as CardType;
    }
    
    public getImage() {
        return OP01_025_573.image;
    }
    
    public getName() {
        return OP01_025_573._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_025_573.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_025_573.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_025_573.archetypes;
    }
    
    public getPower(): number {
        return OP01_025_573.power;
    }

    public getCounter(): number {
        return OP01_025_573.counter;
    }

    public getLife(): number {
        return OP01_025_573.life;
    }
}
