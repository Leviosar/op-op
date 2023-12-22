
import Card from "../entities/Card";

export default class ST09_009_746 extends Card {
    public static id: string = "ST09_009_746";
    
    public static _name: string = "Fuugetsu Omusubi";

    public effect: string = "[Trigger] K.O up to 1 of your opponent's Characters with a cost of 1 or less, and add this card to your hand.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-009_cb6f79_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST09_009_746.id
    }
    
    public getType() {
        return ST09_009_746.type
    }
    
    public getImage() {
        return ST09_009_746.image
    }
    
    public getName() {
        return ST09_009_746._name
    }
    
    public getCost(): number {
        return parseInt(ST09_009_746.cost)
    }
}
