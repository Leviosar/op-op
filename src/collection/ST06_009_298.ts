
import Card from "../entities/Card";

export default class ST06_009_298 extends Card {
    public static id: string = "ST06_009_298";
    
    public static _name: string = "Tsuru";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-009_f6a6e4_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST06_009_298.id
    }
    
    public getType() {
        return ST06_009_298.type
    }
    
    public getImage() {
        return ST06_009_298.image
    }
    
    public getName() {
        return ST06_009_298._name
    }
    
    public getCost(): number {
        return parseInt(ST06_009_298.cost)
    }
}
