
import Card from "../entities/Card";

export default class OP04_055_831 extends Card {
    public static id: string = "OP04_055_831";
    
    public static _name: string = "Plague Rounds";

    public effect: string = "[Main] You may trash 1 [Ice Oni] from your hand and place 1 Character with a cost of 4 or less at the bottom of the owner's deck: Play 1 [Ice Oni] from your trash.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-055_050fbb_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP04_055_831.id
    }
    
    public getType() {
        return OP04_055_831.type
    }
    
    public getImage() {
        return OP04_055_831.image
    }
    
    public getName() {
        return OP04_055_831._name
    }
}
