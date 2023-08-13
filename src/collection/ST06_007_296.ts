
import Card from "../entities/Card";

export default class ST06_007_296 extends Card {
    public static id: string = "ST06_007_296";
    
    public static _name: string = "Tsuru";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Navy [ST-06]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST06-007_25bff6_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST06_007_296.id
    }
    
    public getType() {
        return ST06_007_296.type
    }
    
    public getImage() {
        return ST06_007_296.image
    }
    
    public getName() {
        return ST06_007_296._name
    }
}
