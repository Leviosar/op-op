
import Card from "../entities/Card";

export default class ST03_008_105 extends Card {
    public static id: string = "ST03_008_105";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-008_744125_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return ST03_008_105.id
    }
    
    public getType() {
        return ST03_008_105.type
    }
    
    public getImage() {
        return ST03_008_105.image
    }
    
    public getName() {
        return ST03_008_105._name
    }
    
    public getCost(): number {
        return parseInt(ST03_008_105.cost)
    }
}