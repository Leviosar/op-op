
import Card, { CardType } from "../entities/Card";

export default class OP02_007_442 extends Card {
    public static id: string = "OP02_007_442";
    
    public static _name: string = "Donquixote Doflamingo";

    public effect: string = "[On Play] Look at 3 cards from the top of your deck and return them to the top or bottom of the deck in any order.\r\n[DON!! x1] [When Attacking] Trash 1 card from your hand: Place up to 1 of your opponent's cost 1 or lower Characters to the bottom of the deck.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-007_8fff06_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static power: number = 8000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_007_442.id;
    }
    
    public getType() : CardType {
        return OP02_007_442.type as CardType;
    }
    
    public getImage() {
        return OP02_007_442.image;
    }
    
    public getName() {
        return OP02_007_442._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_007_442.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_007_442.keywords;
    }
    
    public getPower(): number {
        return OP02_007_442.power;
    }

    public getCounter(): number {
        return OP02_007_442.counter;
    }

    public getLife(): number {
        return OP02_007_442.life;
    }
}
