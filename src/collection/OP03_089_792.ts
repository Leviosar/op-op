
import Card, { CardType } from "../entities/Card";

export default class OP03_089_792 extends Card {
    public static id: string = "OP03_089_792";
    
    public static _name: string = "Brannew";

    public effect: string = "[On Play] Look at the top 3 cards of your deck, reveal up to 1 {Navy} type card other than [Brannew] and add it to your hand. Then, trash the remaining cards.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-089_ab8548_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_089_792.id;
    }
    
    public getType() : CardType {
        return OP03_089_792.type as CardType;
    }
    
    public getImage() {
        return OP03_089_792.image;
    }
    
    public getName() {
        return OP03_089_792._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_089_792.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_089_792.keywords;
    }
    
    public getPower(): number {
        return OP03_089_792.power;
    }

    public getCounter(): number {
        return OP03_089_792.counter;
    }

    public getLife(): number {
        return OP03_089_792.life;
    }
}
