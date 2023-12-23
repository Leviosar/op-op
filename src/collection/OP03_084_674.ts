
import Card, { CardType } from "../entities/Card";

export default class OP03_084_674 extends Card {
    public static id: string = "OP03_084_674";
    
    public static _name: string = "Corgi";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, and place up to 2 of them in the trash. Then place the remaining cards on the bottom of your deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-084_9c327f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_084_674.id;
    }
    
    public getType() : CardType {
        return OP03_084_674.type as CardType;
    }
    
    public getImage() {
        return OP03_084_674.image;
    }
    
    public getName() {
        return OP03_084_674._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_084_674.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_084_674.keywords;
    }
}
