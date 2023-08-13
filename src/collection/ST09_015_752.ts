
import Card from "../entities/Card";

export default class ST09_015_752 extends Card {
    public static id: string = "ST09_015_752";
    
    public static _name: string = "Thunder Bagua";

    public effect: string = "[Counter] Up to 1 of your Leader or Characters gains +4000 Power during this battle. Then, if you have 2 or less cards in your Life Area, place up to 1 of your opponent's Characters with a cost of 3 or less face down at the top or bottom of their Life.\r\n\r\n[Trigger] Draw 1 card.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST09-015_bf4ac3_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST09_015_752.id
    }
    
    public getType() {
        return ST09_015_752.type
    }
    
    public getImage() {
        return ST09_015_752.image
    }
    
    public getName() {
        return ST09_015_752._name
    }
}
