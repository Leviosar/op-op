
import Card, { CardType } from "../entities/Card";

export default class OP02_100_350 extends Card {
    public static id: string = "OP02_100_350";
    
    public static _name: string = "Django";

    public effect: string = "If you have a [Fullbody] in play, this Character cannot be K.O.'d by battle.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-100_3cc275_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_100_350.id;
    }
    
    public getType() : CardType {
        return OP02_100_350.type as CardType;
    }
    
    public getImage() {
        return OP02_100_350.image;
    }
    
    public getName() {
        return OP02_100_350._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_100_350.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_100_350.keywords;
    }
    
    public getPower(): number {
        return OP02_100_350.power;
    }

    public getCounter(): number {
        return OP02_100_350.counter;
    }

    public getLife(): number {
        return OP02_100_350.life;
    }
}
