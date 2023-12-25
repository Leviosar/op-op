
import Card, { CardType } from "../entities/Card";

export default class OP02_091_492 extends Card {
    public static id: string = "OP02_091_492";
    
    public static _name: string = "Venom Road";

    public effect: string = "[Main] Add up to 1 DON!! card from your DON!! deck and set it as active.\r\n[Trigger] If your opponent has 6 or more DON!! cards on their field, your opponent returns 1 DON!! card from their field to their DON!! deck.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-091_c7d4ec_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_091_492.id;
    }
    
    public getType() : CardType {
        return OP02_091_492.type as CardType;
    }
    
    public getImage() {
        return OP02_091_492.image;
    }
    
    public getName() {
        return OP02_091_492._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_091_492.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_091_492.keywords;
    }
    
    public getPower(): number {
        return OP02_091_492.power;
    }

    public getCounter(): number {
        return OP02_091_492.counter;
    }

    public getLife(): number {
        return OP02_091_492.life;
    }
}
