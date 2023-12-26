
import Card, { CardType } from "../entities/Card";

export default class OP02_016_448 extends Card {
    public static id: string = "OP02_016_448";
    
    public static _name: string = "Magra";

    public effect: string = "[On Play] Up to 1 of your red Characters with a cost of 1 gains +3000 power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-016_dc7ad2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_016_448.id;
    }
    
    public getType() : CardType {
        return OP02_016_448.type as CardType;
    }
    
    public getImage() {
        return OP02_016_448.image;
    }
    
    public getName() {
        return OP02_016_448._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_016_448.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_016_448.keywords;
    }
    
    public getPower(): number {
        return OP02_016_448.power;
    }

    public getCounter(): number {
        return OP02_016_448.counter;
    }

    public getLife(): number {
        return OP02_016_448.life;
    }
}
