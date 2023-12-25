
import Card, { CardType } from "../entities/Card";

export default class OP03_086_705 extends Card {
    public static id: string = "OP03_086_705";
    
    public static _name: string = "Spandam";

    public effect: string = "[On Play] Look at the top 3 cards of your deck, reveal up to 1 card with {CP} in its types other than [Spandam] and add it to your hand. Then trash the remaining cards.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-086_537a29_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_086_705.id;
    }
    
    public getType() : CardType {
        return OP03_086_705.type as CardType;
    }
    
    public getImage() {
        return OP03_086_705.image;
    }
    
    public getName() {
        return OP03_086_705._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_086_705.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_086_705.keywords;
    }
    
    public getPower(): number {
        return OP03_086_705.power;
    }

    public getCounter(): number {
        return OP03_086_705.counter;
    }

    public getLife(): number {
        return OP03_086_705.life;
    }
}
