
import Card, { CardType } from "../entities/Card";

export default class OP02_072_307 extends Card {
    public static id: string = "OP02_072_307";
    
    public static _name: string = "Z";

    public effect: string = "[When Attacking] DON!!-4: K.O. one of your opponent's Characters that costs 3 or less. Then, give this leader +1000 power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-072_8494e5_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_072_307.id;
    }
    
    public getType() : CardType {
        return OP02_072_307.type as CardType;
    }
    
    public getImage() {
        return OP02_072_307.image;
    }
    
    public getName() {
        return OP02_072_307._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_072_307.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_072_307.keywords;
    }
}
