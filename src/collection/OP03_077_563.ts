
import Card, { CardType } from "../entities/Card";

export default class OP03_077_563 extends Card {
    public static id: string = "OP03_077_563";
    
    public static _name: string = "Charlotte Linlin";

    public effect: string = "[DON!!x2] [When Attacking] (2), you may trash 1 card from your hand: If you have 1 or fewer cards in your Life Area, put up to 1 card from the top of your deck on top of your Life Area.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-077_8ed9e8_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "0";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_077_563.id;
    }
    
    public getType() : CardType {
        return OP03_077_563.type as CardType;
    }
    
    public getImage() {
        return OP03_077_563.image;
    }
    
    public getName() {
        return OP03_077_563._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_077_563.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_077_563.keywords;
    }
}
