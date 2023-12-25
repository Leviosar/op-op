
import Card, { CardType } from "../entities/Card";

export default class OP02_021_452 extends Card {
    public static id: string = "OP02_021_452";
    
    public static _name: string = "Seaquake";

    public effect: string = "[Main] If your Leader's type includes \"Whitebeard Pirates\", K.O. up to 1 of your opponent's Characters with 3000 power or less.\r\n[Trigger] Give up to 1 of your opponent's Leader or Character cards −3000 power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-021_0f81a1_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_021_452.id;
    }
    
    public getType() : CardType {
        return OP02_021_452.type as CardType;
    }
    
    public getImage() {
        return OP02_021_452.image;
    }
    
    public getName() {
        return OP02_021_452._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_021_452.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_021_452.keywords;
    }
    
    public getPower(): number {
        return OP02_021_452.power;
    }

    public getCounter(): number {
        return OP02_021_452.counter;
    }

    public getLife(): number {
        return OP02_021_452.life;
    }
}
