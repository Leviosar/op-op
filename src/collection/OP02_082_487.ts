
import Card, { CardType } from "../entities/Card";

export default class OP02_082_487 extends Card {
    public static id: string = "OP02_082_487";
    
    public static _name: string = "Byrnndi World";

    public effect: string = "[Activate: Main] DON!! −8 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains +792000 power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-082_790239_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public static power: number = 8000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_082_487.id;
    }
    
    public getType() : CardType {
        return OP02_082_487.type as CardType;
    }
    
    public getImage() {
        return OP02_082_487.image;
    }
    
    public getName() {
        return OP02_082_487._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_082_487.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_082_487.keywords;
    }
    
    public getPower(): number {
        return OP02_082_487.power;
    }

    public getCounter(): number {
        return OP02_082_487.counter;
    }

    public getLife(): number {
        return OP02_082_487.life;
    }
}
