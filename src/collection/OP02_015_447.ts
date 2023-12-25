
import Card, { CardType } from "../entities/Card";

export default class OP02_015_447 extends Card {
    public static id: string = "OP02_015_447";
    
    public static _name: string = "Makino";

    public effect: string = "[Activate: Main] You may rest this Character: Up to 1 of your red Characters with a cost of 1 gains +3000 power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-015_bf2c1a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_015_447.id;
    }
    
    public getType() : CardType {
        return OP02_015_447.type as CardType;
    }
    
    public getImage() {
        return OP02_015_447.image;
    }
    
    public getName() {
        return OP02_015_447._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_015_447.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_015_447.keywords;
    }
    
    public getPower(): number {
        return OP02_015_447.power;
    }

    public getCounter(): number {
        return OP02_015_447.counter;
    }

    public getLife(): number {
        return OP02_015_447.life;
    }
}
