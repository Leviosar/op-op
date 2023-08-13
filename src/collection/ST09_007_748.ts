
import Card from "../entities/Card";

export default class ST09_007_748 extends Card {
    public static id: string = "ST09_007_748";
    
    public static _name: string = "Shinobu";

    public effect: string = "<Blocker>\r\n[On Block] You may add the top or bottom card of your Life area to your hand: This Character gains +4000 Power during this battle.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST09-007_1ef7ba_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST09_007_748.id
    }
    
    public getType() {
        return ST09_007_748.type
    }
    
    public getImage() {
        return ST09_007_748.image
    }
    
    public getName() {
        return ST09_007_748._name
    }
}
