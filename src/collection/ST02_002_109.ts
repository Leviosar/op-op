
import Card from "../entities/Card";

export default class ST02_002_109 extends Card {
    public static id: string = "ST02_002_109";
    
    public static _name: string = "Capone \"Gang\" Bege";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-002_82252e_jp.png";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST02_002_109.id
    }
    
    public getType() {
        return ST02_002_109.type
    }
    
    public getImage() {
        return ST02_002_109.image
    }
    
    public getName() {
        return ST02_002_109._name
    }
    
    public getCost(): number {
        return parseInt(ST02_002_109.cost)
    }
}
