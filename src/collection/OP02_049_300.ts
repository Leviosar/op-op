
import Card, { CardType } from "../entities/Card";

export default class OP02_049_300 extends Card {
    public static id: string = "OP02_049_300";
    
    public static _name: string = "Emporio Ivankov";

    public effect: string = "[End of your turn] If you have 0 cards in your hand, draw 2 cards.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-049_fe802a_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Impel Down","Revolutionary Army"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return OP02_049_300.id;
    }
    
    public getType() : CardType {
        return OP02_049_300.type as CardType;
    }
    
    public getImage() {
        return OP02_049_300.image;
    }
    
    public getName() {
        return OP02_049_300._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_049_300.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_049_300.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_049_300.archetypes;
    }
    
    public getPower(): number {
        return OP02_049_300.power;
    }

    public getCounter(): number {
        return OP02_049_300.counter;
    }

    public getLife(): number {
        return OP02_049_300.life;
    }
}
