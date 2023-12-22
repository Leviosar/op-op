
import Card from "../entities/Card";

export default class ST08_015_740 extends Card {
    public static id: string = "ST08_015_740";
    
    public static _name: string = "Gum-Gum Pistol";

    public effect: string = "[Main] K.O up to 1 of your opponent's Characters with a Cost of 2 or less.\r\n\r\n[Trigger] Draw 1 Card.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-015_39d2be_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "3";
    
    public getId() {
        return ST08_015_740.id
    }
    
    public getType() {
        return ST08_015_740.type
    }
    
    public getImage() {
        return ST08_015_740.image
    }
    
    public getName() {
        return ST08_015_740._name
    }
    
    public getCost(): number {
        return parseInt(ST08_015_740.cost)
    }
}
