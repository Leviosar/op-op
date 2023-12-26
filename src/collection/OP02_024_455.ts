
import Card, { CardType } from "../entities/Card";

export default class OP02_024_455 extends Card {
    public static id: string = "OP02_024_455";
    
    public static _name: string = "Moby Dick";

    public effect: string = "[Your Turn] If you have 1 or less Life cards, your [Edward.Newgate] and all your Characters with a type including \"Whitebeard Pirates\" gain +2000 power.\r\n[Trigger] Play this card.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-024_dad718_jp.jpg";
    
    public static type: CardType = "stage";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_024_455.id;
    }
    
    public getType() : CardType {
        return OP02_024_455.type as CardType;
    }
    
    public getImage() {
        return OP02_024_455.image;
    }
    
    public getName() {
        return OP02_024_455._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_024_455.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_024_455.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_024_455.archetypes;
    }
    
    public getPower(): number {
        return OP02_024_455.power;
    }

    public getCounter(): number {
        return OP02_024_455.counter;
    }

    public getLife(): number {
        return OP02_024_455.life;
    }
}
