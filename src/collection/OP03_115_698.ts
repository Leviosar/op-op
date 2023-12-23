
import Card, { CardType } from "../entities/Card";

export default class OP03_115_698 extends Card {
    public static id: string = "OP03_115_698";
    
    public static _name: string = "Streusen";

    public effect: string = "[On Play] You may discard 1 card with [Trigger] from your hand: K.O. up to 1 of your opponent's Characters with a cost of 1 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-115_e8ef14_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_115_698.id;
    }
    
    public getType() : CardType {
        return OP03_115_698.type as CardType;
    }
    
    public getImage() {
        return OP03_115_698.image;
    }
    
    public getName() {
        return OP03_115_698._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_115_698.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_115_698.keywords;
    }
}
