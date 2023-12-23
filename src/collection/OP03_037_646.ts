
import Card, { CardType } from "../entities/Card";

export default class OP03_037_646 extends Card {
    public static id: string = "OP03_037_646";
    
    public static _name: string = "Tooth Attack";

    public effect: string = "[Main] You may rest 1 of your {East Blue} type Characters: K.O. up to 1 of your opponent's rested characters with a cost of 3 or less.\r\n\r\n[Trigger] Play up to 1 Character with a cost of 4 or less with [Trigger] from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-037_71d507_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_037_646.id;
    }
    
    public getType() : CardType {
        return OP03_037_646.type as CardType;
    }
    
    public getImage() {
        return OP03_037_646.image;
    }
    
    public getName() {
        return OP03_037_646._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_037_646.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_037_646.keywords;
    }
}
