
import Card, { CardType } from "../entities/Card";

export default class OP03_119_577 extends Card {
    public static id: string = "OP03_119_577";
    
    public static _name: string = "Buzz Cut Mochi";

    public effect: string = "[Main] If you have less life than your opponent, K.O. up to 1 of your opponent's Characters with a cost of 4 or less.\r\n[Trigger] Play up to 1 Character with [Trigger] with a cost of 4 or less from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-119_e1001b_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_119_577.id;
    }
    
    public getType() : CardType {
        return OP03_119_577.type as CardType;
    }
    
    public getImage() {
        return OP03_119_577.image;
    }
    
    public getName() {
        return OP03_119_577._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_119_577.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_119_577.keywords;
    }
}
