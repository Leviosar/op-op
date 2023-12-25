
import Card, { CardType } from "../entities/Card";

export default class OP03_003_581 extends Card {
    public static id: string = "OP03_003_581";
    
    public static _name: string = "Izou";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, reveal up to 1 card with \"Whitebeard Pirates\" in its types other than [Izou] and add it to your hand. Place the remaining cards at the bottom of the deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-003_b61b2e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_003_581.id;
    }
    
    public getType() : CardType {
        return OP03_003_581.type as CardType;
    }
    
    public getImage() {
        return OP03_003_581.image;
    }
    
    public getName() {
        return OP03_003_581._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_003_581.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_003_581.keywords;
    }
    
    public getPower(): number {
        return OP03_003_581.power;
    }

    public getCounter(): number {
        return OP03_003_581.counter;
    }

    public getLife(): number {
        return OP03_003_581.life;
    }
}
