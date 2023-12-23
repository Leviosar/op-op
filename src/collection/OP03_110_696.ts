
import Card, { CardType } from "../entities/Card";

export default class OP03_110_696 extends Card {
    public static id: string = "OP03_110_696";
    
    public static _name: string = "Charlotte Smoothie";

    public effect: string = "[When Attacking] You may add 1 card from the top or bottom of your life to your hand: This Character gains +2000 power during this battle.\r\n[Trigger] You may discard 1 card from your hand: Play this card";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-110_63a349_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_110_696.id;
    }
    
    public getType() : CardType {
        return OP03_110_696.type as CardType;
    }
    
    public getImage() {
        return OP03_110_696.image;
    }
    
    public getName() {
        return OP03_110_696._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_110_696.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_110_696.keywords;
    }
}
