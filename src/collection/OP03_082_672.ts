
import Card, { CardType } from "../entities/Card";

export default class OP03_082_672 extends Card {
    public static id: string = "OP03_082_672";
    
    public static _name: string = "Kumadori";

    public effect: string = "";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-082_4d66c2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_082_672.id;
    }
    
    public getType() : CardType {
        return OP03_082_672.type as CardType;
    }
    
    public getImage() {
        return OP03_082_672.image;
    }
    
    public getName() {
        return OP03_082_672._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_082_672.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_082_672.keywords;
    }
    
    public getPower(): number {
        return OP03_082_672.power;
    }

    public getCounter(): number {
        return OP03_082_672.counter;
    }

    public getLife(): number {
        return OP03_082_672.life;
    }
}
