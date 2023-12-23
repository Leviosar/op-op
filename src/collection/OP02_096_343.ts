
import Card, { CardType } from "../entities/Card";

export default class OP02_096_343 extends Card {
    public static id: string = "OP02_096_343";
    
    public static _name: string = "Kuzan";

    public effect: string = "[On Play] Draw 1 card.\r\n[When Attacking] Reduce the cost of up to 1 of your opponent's Character by 4 during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-096_5fca3e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_096_343.id;
    }
    
    public getType() : CardType {
        return OP02_096_343.type as CardType;
    }
    
    public getImage() {
        return OP02_096_343.image;
    }
    
    public getName() {
        return OP02_096_343._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_096_343.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_096_343.keywords;
    }
}
