
import Card, { CardType } from "../entities/Card";

export default class OP04_052_772 extends Card {
    public static id: string = "OP04_052_772";
    
    public static _name: string = "Black Maria";

    public effect: string = "[Activate: Main] (2) You may rest this Character: Draw 1 card.\r\n[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-052_517636_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_052_772.id;
    }
    
    public getType() : CardType {
        return OP04_052_772.type as CardType;
    }
    
    public getImage() {
        return OP04_052_772.image;
    }
    
    public getName() {
        return OP04_052_772._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_052_772.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_052_772.keywords;
    }
    
    public getPower(): number {
        return OP04_052_772.power;
    }

    public getCounter(): number {
        return OP04_052_772.counter;
    }

    public getLife(): number {
        return OP04_052_772.life;
    }
}
