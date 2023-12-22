
import Card from "../entities/Card";

export default class ST09_003_744 extends Card {
    public static id: string = "ST09_003_744";
    
    public static _name: string = "Uzuki Tempura";

    public effect: string = "[Trigger] Rest up to 1 of your opponent's Characters with a cost of 2 or less, and add this card to your hand.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-003_f75874_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return ST09_003_744.id
    }
    
    public getType() {
        return ST09_003_744.type
    }
    
    public getImage() {
        return ST09_003_744.image
    }
    
    public getName() {
        return ST09_003_744._name
    }
    
    public getCost(): number {
        return parseInt(ST09_003_744.cost)
    }
}
