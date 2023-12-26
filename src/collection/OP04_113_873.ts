
import Card, { CardType } from "../entities/Card";

export default class OP04_113_873 extends Card {
    public static id: string = "OP04_113_873";
    
    public static _name: string = "Rabiyan";

    public effect: string = "[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-113_4556de_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_113_873.id;
    }
    
    public getType() : CardType {
        return OP04_113_873.type as CardType;
    }
    
    public getImage() {
        return OP04_113_873.image;
    }
    
    public getName() {
        return OP04_113_873._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_113_873.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_113_873.keywords;
    }
    
    public getPower(): number {
        return OP04_113_873.power;
    }

    public getCounter(): number {
        return OP04_113_873.counter;
    }

    public getLife(): number {
        return OP04_113_873.life;
    }
}
