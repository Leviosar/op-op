
import Card, { CardType } from "../entities/Card";

export default class OP02_116_507 extends Card {
    public static id: string = "OP02_116_507";
    
    public static _name: string = "Monkey.D.Garp";

    public effect: string = "[DON!! x2] [When Attacking] K.O. up to 1 of your opponent's Characters with a cost of 0.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-116_68e7d6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_116_507.id;
    }
    
    public getType() : CardType {
        return OP02_116_507.type as CardType;
    }
    
    public getImage() {
        return OP02_116_507.image;
    }
    
    public getName() {
        return OP02_116_507._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_116_507.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_116_507.keywords;
    }
}
