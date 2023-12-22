
import Card from "../entities/Card";

export default class ST08_011_733 extends Card {
    public static id: string = "ST08_011_733";
    
    public static _name: string = "Nefertari Vivi";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-011_46f65c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST08_011_733.id
    }
    
    public getType() {
        return ST08_011_733.type
    }
    
    public getImage() {
        return ST08_011_733.image
    }
    
    public getName() {
        return ST08_011_733._name
    }
    
    public getCost(): number {
        return parseInt(ST08_011_733.cost)
    }
}
