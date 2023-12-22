
import Card from "../entities/Card";

export default class ST02_004_108 extends Card {
    public static id: string = "ST02_004_108";
    
    public static _name: string = "Capone \"Gang\" Bege";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-004_12f439_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return ST02_004_108.id
    }
    
    public getType() {
        return ST02_004_108.type
    }
    
    public getImage() {
        return ST02_004_108.image
    }
    
    public getName() {
        return ST02_004_108._name
    }
    
    public getCost(): number {
        return parseInt(ST02_004_108.cost)
    }
}
