
import Card, { CardType } from "../entities/Card";

export default class OP03_068_666 extends Card {
    public static id: string = "OP03_068_666";
    
    public static _name: string = "Minozebra";

    public effect: string = "<Banish>\r\n[On K.O.] If your Leader has {{Impel Down}} as a type, add 1 DON!! card from your DON!! deck and rest it.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-068_370fb3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Banish"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_068_666.id;
    }
    
    public getType() : CardType {
        return OP03_068_666.type as CardType;
    }
    
    public getImage() {
        return OP03_068_666.image;
    }
    
    public getName() {
        return OP03_068_666._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_068_666.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_068_666.keywords;
    }
    
    public getPower(): number {
        return OP03_068_666.power;
    }

    public getCounter(): number {
        return OP03_068_666.counter;
    }

    public getLife(): number {
        return OP03_068_666.life;
    }
}
