
import Card, { CardType } from "../entities/Card";

export default class OP02_009_324 extends Card {
    public static id: string = "OP02_009_324";
    
    public static _name: string = "Squard";

    public effect: string = "[On Play] If your Leader has [Whitebeard Pirates] in its types, give up to 1 of your opponent's Characters -4000 Power for the turn, add the top card from your Life area to your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-009_5a704a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Whitebeard Pirates Subordinates"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_009_324.id;
    }
    
    public getType() : CardType {
        return OP02_009_324.type as CardType;
    }
    
    public getImage() {
        return OP02_009_324.image;
    }
    
    public getName() {
        return OP02_009_324._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_009_324.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_009_324.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_009_324.archetypes;
    }
    
    public getPower(): number {
        return OP02_009_324.power;
    }

    public getCounter(): number {
        return OP02_009_324.counter;
    }

    public getLife(): number {
        return OP02_009_324.life;
    }
}
