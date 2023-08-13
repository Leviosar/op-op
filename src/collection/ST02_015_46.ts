
import Card from "../entities/Card";

export default class ST02_015_46 extends Card {
    public static id: string = "ST02_015_46";
    
    public static _name: string = "Scalpel";

    public effect: string = "[Counter] Your Leader or up to 1 of your Characters gains 2000 Power for the duration of the battle. Then, switch up to 1 of your Don!! to Active.\r\n[Trigger] Switch up to 2 of your Don!! to Active.";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST02-015_4d646e_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST02_015_46.id
    }
    
    public getType() {
        return ST02_015_46.type
    }
    
    public getImage() {
        return ST02_015_46.image
    }
    
    public getName() {
        return ST02_015_46._name
    }
}
