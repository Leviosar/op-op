
import Card, { CardType } from "../entities/Card";

export default class OP03_027_637 extends Card {
    public static id: string = "OP03_027_637";
    
    public static _name: string = "Sham";

    public effect: string = "[On Play] If your Leader has the {East Blue} type, rest up to 1 of your opponent's Characters with a cost of 2 or less. Then, if you don't have [Butchie] in play, play 1 [Butchie] from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-027_ad1a84_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_027_637.id;
    }
    
    public getType() : CardType {
        return OP03_027_637.type as CardType;
    }
    
    public getImage() {
        return OP03_027_637.image;
    }
    
    public getName() {
        return OP03_027_637._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_027_637.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_027_637.keywords;
    }
}
