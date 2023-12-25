
import Card, { CardType } from "../entities/Card";

export default class OP03_094_681 extends Card {
    public static id: string = "OP03_094_681";
    
    public static _name: string = "Air Door";

    public effect: string = "[Main] If your Leader has {CP} in its types, look at the top 5 cards of your deck, reveal up to 1 Cost 5 or less Character card with {CP} in its types and play it. Trash the remaining cards.\r\n[Trigger] Choose up to 1 Cost 3 or lower Black Character card from your trash and play it.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-094_23d31f_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_094_681.id;
    }
    
    public getType() : CardType {
        return OP03_094_681.type as CardType;
    }
    
    public getImage() {
        return OP03_094_681.image;
    }
    
    public getName() {
        return OP03_094_681._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_094_681.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_094_681.keywords;
    }
    
    public getPower(): number {
        return OP03_094_681.power;
    }

    public getCounter(): number {
        return OP03_094_681.counter;
    }

    public getLife(): number {
        return OP03_094_681.life;
    }
}
