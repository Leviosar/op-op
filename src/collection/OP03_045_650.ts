
import Card, { CardType } from "../entities/Card";

export default class OP03_045_650 extends Card {
    public static id: string = "OP03_045_650";
    
    public static _name: string = "Carne";

    public effect: string = "<Blocker>\r\n[Opponent's Turn] If your deck has 20 or less cards, this Character gains +3000 Power.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-045_51099d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_045_650.id;
    }
    
    public getType() : CardType {
        return OP03_045_650.type as CardType;
    }
    
    public getImage() {
        return OP03_045_650.image;
    }
    
    public getName() {
        return OP03_045_650._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_045_650.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_045_650.keywords;
    }
    
    public getPower(): number {
        return OP03_045_650.power;
    }

    public getCounter(): number {
        return OP03_045_650.counter;
    }

    public getLife(): number {
        return OP03_045_650.life;
    }
}
