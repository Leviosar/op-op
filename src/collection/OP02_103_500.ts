
import Card, { CardType } from "../entities/Card";

export default class OP02_103_500 extends Card {
    public static id: string = "OP02_103_500";
    
    public static _name: string = "Sengoku";

    public effect: string = "[DON!! x1] [When Attacking] Give up to 1 of your opponent's Characters −2 cost during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-103_d10cf8_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_103_500.id;
    }
    
    public getType() : CardType {
        return OP02_103_500.type as CardType;
    }
    
    public getImage() {
        return OP02_103_500.image;
    }
    
    public getName() {
        return OP02_103_500._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_103_500.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_103_500.keywords;
    }
    
    public getPower(): number {
        return OP02_103_500.power;
    }

    public getCounter(): number {
        return OP02_103_500.counter;
    }

    public getLife(): number {
        return OP02_103_500.life;
    }
}
