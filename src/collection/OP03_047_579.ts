
import Card, { CardType } from "../entities/Card";

export default class OP03_047_579 extends Card {
    public static id: string = "OP03_047_579";
    
    public static _name: string = "Zeff";

    public effect: string = "[DON!!x1] When your opponent takes damage to their Life through the attack of this Character, you may trash 7 cards from the top of your deck.\r\n\r\n[On Play] Return up 1 Character that costs 3 or less to their owner's hand, and you may trash 2 cards from the top of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-047_e7b606_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_047_579.id;
    }
    
    public getType() : CardType {
        return OP03_047_579.type as CardType;
    }
    
    public getImage() {
        return OP03_047_579.image;
    }
    
    public getName() {
        return OP03_047_579._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_047_579.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_047_579.keywords;
    }
    
    public getPower(): number {
        return OP03_047_579.power;
    }

    public getCounter(): number {
        return OP03_047_579.counter;
    }

    public getLife(): number {
        return OP03_047_579.life;
    }
}
