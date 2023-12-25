
import Card, { CardType } from "../entities/Card";

export default class OP03_109_695 extends Card {
    public static id: string = "OP03_109_695";
    
    public static _name: string = "Charlotte Chiffon";

    public effect: string = "[On Play] You may trash the top or bottom card of your Life: Place up to 1 card from the top of your deck at the top of your Life.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-109_04a615_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_109_695.id;
    }
    
    public getType() : CardType {
        return OP03_109_695.type as CardType;
    }
    
    public getImage() {
        return OP03_109_695.image;
    }
    
    public getName() {
        return OP03_109_695._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_109_695.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_109_695.keywords;
    }
    
    public getPower(): number {
        return OP03_109_695.power;
    }

    public getCounter(): number {
        return OP03_109_695.counter;
    }

    public getLife(): number {
        return OP03_109_695.life;
    }
}
