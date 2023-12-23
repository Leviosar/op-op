
import Card, { CardType } from "../entities/Card";

export default class OP03_105_692 extends Card {
    public static id: string = "OP03_105_692";
    
    public static _name: string = "Charlotte Oven";

    public effect: string = "[DON!! x1] [When Attacking] You may discard 1 card with [Trigger] from your hand: This Character gains +3000 power during this battle.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-105_349733_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_105_692.id;
    }
    
    public getType() : CardType {
        return OP03_105_692.type as CardType;
    }
    
    public getImage() {
        return OP03_105_692.image;
    }
    
    public getName() {
        return OP03_105_692._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_105_692.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_105_692.keywords;
    }
}
