
import Card, { CardType } from "../entities/Card";

export default class OP02_101_498 extends Card {
    public static id: string = "OP02_101_498";
    
    public static _name: string = "Strawberry";

    public effect: string = "[When Attacking] If there is a Character with a cost of 0, your opponent cannot activate the <Blocker> of any Character with a cost of 5 or less during this battle.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-101_86d040_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_101_498.id;
    }
    
    public getType() : CardType {
        return OP02_101_498.type as CardType;
    }
    
    public getImage() {
        return OP02_101_498.image;
    }
    
    public getName() {
        return OP02_101_498._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_101_498.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_101_498.keywords;
    }
    
    public getPower(): number {
        return OP02_101_498.power;
    }

    public getCounter(): number {
        return OP02_101_498.counter;
    }

    public getLife(): number {
        return OP02_101_498.life;
    }
}
