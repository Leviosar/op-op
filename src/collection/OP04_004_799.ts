
import Card, { CardType } from "../entities/Card";

export default class OP04_004_799 extends Card {
    public static id: string = "OP04_004_799";
    
    public static _name: string = "Karoo";

    public effect: string = "[Activate: Main] You may rest this Character: Give up to 1 rested DON!! card to each of your {Alabasta} type Characters.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-004_9bc653_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_004_799.id;
    }
    
    public getType() : CardType {
        return OP04_004_799.type as CardType;
    }
    
    public getImage() {
        return OP04_004_799.image;
    }
    
    public getName() {
        return OP04_004_799._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_004_799.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_004_799.keywords;
    }
    
    public getPower(): number {
        return OP04_004_799.power;
    }

    public getCounter(): number {
        return OP04_004_799.counter;
    }

    public getLife(): number {
        return OP04_004_799.life;
    }
}
