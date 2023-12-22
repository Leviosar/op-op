
import Card from "../entities/Card";

export default class ST03_006_86 extends Card {
    public static id: string = "ST03_006_86";
    
    public static _name: string = "Boa Hancock";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-006_984c88_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST03_006_86.id
    }
    
    public getType() {
        return ST03_006_86.type
    }
    
    public getImage() {
        return ST03_006_86.image
    }
    
    public getName() {
        return ST03_006_86._name
    }
    
    public getCost(): number {
        return parseInt(ST03_006_86.cost)
    }
}
