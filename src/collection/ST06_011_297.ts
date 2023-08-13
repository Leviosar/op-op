
import Card from "../entities/Card";

export default class ST06_011_297 extends Card {
    public static id: string = "ST06_011_297";
    
    public static _name: string = "Tsuru";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Navy [ST-06]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST06-011_4e21de_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST06_011_297.id
    }
    
    public getType() {
        return ST06_011_297.type
    }
    
    public getImage() {
        return ST06_011_297.image
    }
    
    public getName() {
        return ST06_011_297._name
    }
}
