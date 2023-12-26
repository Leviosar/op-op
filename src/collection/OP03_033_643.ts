
import Card, { CardType } from "../entities/Card";

export default class OP03_033_643 extends Card {
    public static id: string = "OP03_033_643";
    
    public static _name: string = "Hatchan";

    public effect: string = "[Trigger] If your Leader has the {East Blue} type, play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-033_d31fe8_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Fish-Man","East Blue","Arlong Crew"];
    
    public static power: number = 4000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_033_643.id;
    }
    
    public getType() : CardType {
        return OP03_033_643.type as CardType;
    }
    
    public getImage() {
        return OP03_033_643.image;
    }
    
    public getName() {
        return OP03_033_643._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_033_643.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_033_643.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_033_643.archetypes;
    }
    
    public getPower(): number {
        return OP03_033_643.power;
    }

    public getCounter(): number {
        return OP03_033_643.counter;
    }

    public getLife(): number {
        return OP03_033_643.life;
    }
}
