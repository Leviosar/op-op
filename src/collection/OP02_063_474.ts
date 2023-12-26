
import Card, { CardType } from "../entities/Card";

export default class OP02_063_474 extends Card {
    public static id: string = "OP02_063_474";
    
    public static _name: string = "Mr.1(Daz.Bonez)";

    public effect: string = "[On Play] Add up to 1 blue Event card with a cost of 1 from your trash to your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-063_50f50f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 1000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_063_474.id;
    }
    
    public getType() : CardType {
        return OP02_063_474.type as CardType;
    }
    
    public getImage() {
        return OP02_063_474.image;
    }
    
    public getName() {
        return OP02_063_474._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_063_474.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_063_474.keywords;
    }
    
    public getPower(): number {
        return OP02_063_474.power;
    }

    public getCounter(): number {
        return OP02_063_474.counter;
    }

    public getLife(): number {
        return OP02_063_474.life;
    }
}
