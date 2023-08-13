
import Card from "../entities/Card";

export default class OP04_027_767 extends Card {
    public static id: string = "OP04_027_767";
    
    public static _name: string = "Daddy Masterson";

    public effect: string = "[DONx1] [End of Your Turn] Set this character as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-027_1108d3_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_027_767.id
    }
    
    public getType() {
        return OP04_027_767.type
    }
    
    public getImage() {
        return OP04_027_767.image
    }
    
    public getName() {
        return OP04_027_767._name
    }
}
