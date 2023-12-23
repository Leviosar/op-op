
import Card, { CardType } from "../entities/Card";

export default class OP02_099_529 extends Card {
    public static id: string = "OP02_099_529";
    
    public static _name: string = "Sakazuki";

    public effect: string = "[On Play] You may trash 1 card from your hand: K.O. up to 1 of your opponent's Characters with a cost 5 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-099_c14255_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_099_529.id;
    }
    
    public getType() : CardType {
        return OP02_099_529.type as CardType;
    }
    
    public getImage() {
        return OP02_099_529.image;
    }
    
    public getName() {
        return OP02_099_529._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_099_529.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_099_529.keywords;
    }
}
