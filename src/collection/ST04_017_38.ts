
import Card from "../entities/Card";

export default class ST04_017_38 extends Card {
    public static id: string = "ST04_017_38";
    
    public static _name: string = "Onigashima ";

    public effect: string = "[Activate Main] You may Rest this card (If your Leader has the [Animal Kingdom Pirates] trait): Add 1 DON!! card from your DON!! deck to your Cost Area in Rest.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST04-017_80f08b_jp.jpg";
    
    public static type = "stage";
    
    public getId() {
        return ST04_017_38.id
    }
    
    public getType() {
        return ST04_017_38.type
    }
    
    public getImage() {
        return ST04_017_38.image
    }
    
    public getName() {
        return ST04_017_38._name
    }
}
