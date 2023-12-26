
import Card, { CardType } from "../entities/Card";

export default class OP02_088_490 extends Card {
    public static id: string = "OP02_088_490";
    
    public static _name: string = "Sphinx";

    public effect: string = "";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-088_674596_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_088_490.id;
    }
    
    public getType() : CardType {
        return OP02_088_490.type as CardType;
    }
    
    public getImage() {
        return OP02_088_490.image;
    }
    
    public getName() {
        return OP02_088_490._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_088_490.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_088_490.keywords;
    }
    
    public getPower(): number {
        return OP02_088_490.power;
    }

    public getCounter(): number {
        return OP02_088_490.counter;
    }

    public getLife(): number {
        return OP02_088_490.life;
    }
}
