
import Card, { CardType } from "../entities/Card";

export default class OP02_093_528 extends Card {
    public static id: string = "OP02_093_528";
    
    public static _name: string = "Smoker";

    public effect: string = "[DON!!x1] [Activate: Main] [Once Per Turn] Give up to 1 of your opponent's Characters -1 to their cost during this turn. Then, if there is a Character with a cost of 0, this Leader gains +1000 Power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-093_b77cea_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_093_528.id;
    }
    
    public getType() : CardType {
        return OP02_093_528.type as CardType;
    }
    
    public getImage() {
        return OP02_093_528.image;
    }
    
    public getName() {
        return OP02_093_528._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_093_528.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_093_528.keywords;
    }
}
