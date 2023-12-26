
import Card, { CardType } from "../entities/Card";

export default class OP03_104_691 extends Card {
    public static id: string = "OP03_104_691";
    
    public static _name: string = "Sharley";

    public effect: string = "<Blocker>\r\n[On Play] Look at the up to 1 card on top of your or your opponent's Life, and place it at the top or bottom of its owner's Life.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-104_bc6e66_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_104_691.id;
    }
    
    public getType() : CardType {
        return OP03_104_691.type as CardType;
    }
    
    public getImage() {
        return OP03_104_691.image;
    }
    
    public getName() {
        return OP03_104_691._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_104_691.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_104_691.keywords;
    }
    
    public getPower(): number {
        return OP03_104_691.power;
    }

    public getCounter(): number {
        return OP03_104_691.counter;
    }

    public getLife(): number {
        return OP03_104_691.life;
    }
}
