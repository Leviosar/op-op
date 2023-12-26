
import Card, { CardType } from "../entities/Card";

export default class OP03_090_560 extends Card {
    public static id: string = "OP03_090_560";
    
    public static _name: string = "Blueno";

    public effect: string = "[DON!!x1] This Character gains [Blocker]\r\n\r\n[On K.O.] Play up to 1 Character that costs 4 or less whose type contains (CP) from your trash and rest it.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-090_f03939_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_090_560.id;
    }
    
    public getType() : CardType {
        return OP03_090_560.type as CardType;
    }
    
    public getImage() {
        return OP03_090_560.image;
    }
    
    public getName() {
        return OP03_090_560._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_090_560.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_090_560.keywords;
    }
    
    public getPower(): number {
        return OP03_090_560.power;
    }

    public getCounter(): number {
        return OP03_090_560.counter;
    }

    public getLife(): number {
        return OP03_090_560.life;
    }
}
