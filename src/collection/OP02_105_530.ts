
import Card, { CardType } from "../entities/Card";

export default class OP02_105_530 extends Card {
    public static id: string = "OP02_105_530";
    
    public static _name: string = "Tashigi";

    public effect: string = "[DON!! ×1] [When Attacking] Give up to 1 of your opponent's Characters -3 to their cost during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-105_ab6c03_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_105_530.id;
    }
    
    public getType() : CardType {
        return OP02_105_530.type as CardType;
    }
    
    public getImage() {
        return OP02_105_530.image;
    }
    
    public getName() {
        return OP02_105_530._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_105_530.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_105_530.keywords;
    }
    
    public getPower(): number {
        return OP02_105_530.power;
    }

    public getCounter(): number {
        return OP02_105_530.counter;
    }

    public getLife(): number {
        return OP02_105_530.life;
    }
}
