
import Card, { CardType } from "../entities/Card";

export default class OP03_052_656 extends Card {
    public static id: string = "OP03_052_656";
    
    public static _name: string = "Bell-Mère";

    public effect: string = "[DON!!x1] When your opponent takes damage to their Life through the attack of this Character, you may trash 7 cards from the top of your deck.\r\n[On K.O] You may trash 3 cards from the top of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-052_d44b92_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_052_656.id;
    }
    
    public getType() : CardType {
        return OP03_052_656.type as CardType;
    }
    
    public getImage() {
        return OP03_052_656.image;
    }
    
    public getName() {
        return OP03_052_656._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_052_656.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_052_656.keywords;
    }
    
    public getPower(): number {
        return OP03_052_656.power;
    }

    public getCounter(): number {
        return OP03_052_656.counter;
    }

    public getLife(): number {
        return OP03_052_656.life;
    }
}
