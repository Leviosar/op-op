
import Card, { CardType } from "../entities/Card";

export default class OP02_117_508 extends Card {
    public static id: string = "OP02_117_508";
    
    public static _name: string = "Ice Age";

    public effect: string = "[Main] Give up to 1 of your opponent's Characters −5 cost during this turn.\r\n[Trigger] K.O. up to 1 of your opponent's Characters with a cost of 3 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-117_39b3bc_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_117_508.id;
    }
    
    public getType() : CardType {
        return OP02_117_508.type as CardType;
    }
    
    public getImage() {
        return OP02_117_508.image;
    }
    
    public getName() {
        return OP02_117_508._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_117_508.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_117_508.keywords;
    }
    
    public getPower(): number {
        return OP02_117_508.power;
    }

    public getCounter(): number {
        return OP02_117_508.counter;
    }

    public getLife(): number {
        return OP02_117_508.life;
    }
}
