
import Card, { CardType } from "../entities/Card";

export default class OP02_006_441 extends Card {
    public static id: string = "OP02_006_441";
    
    public static _name: string = "Kingdew";

    public effect: string = "[On Play] Look at 3 cards from the top of your deck and return them to the top or bottom of the deck in any order.\r\n[DON!! x1] [When Attacking] Trash 1 card from your hand: Place up to 1 of your opponent's cost 1 or lower Characters to the bottom of the deck.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-006_45c2f3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_006_441.id;
    }
    
    public getType() : CardType {
        return OP02_006_441.type as CardType;
    }
    
    public getImage() {
        return OP02_006_441.image;
    }
    
    public getName() {
        return OP02_006_441._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_006_441.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_006_441.keywords;
    }
    
    public getPower(): number {
        return OP02_006_441.power;
    }

    public getCounter(): number {
        return OP02_006_441.counter;
    }

    public getLife(): number {
        return OP02_006_441.life;
    }
}
