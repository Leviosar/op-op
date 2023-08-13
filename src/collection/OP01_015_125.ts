
import Card from "../entities/Card";

export default class OP01_015_125 extends Card {
    public static id: string = "OP01_015_125";
    
    public static _name: string = "Tony Tony Chopper";

    public effect: string = "[DON!!x1] [When Attacking] (Trash 1 of your cards from your hand): Put one {Straw Hat Crew} type Character other than (Tony Tony Chopper) that costs 4 or less from your Trash into your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-015_ee0a93_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_015_125.id
    }
    
    public getType() {
        return OP01_015_125.type
    }
    
    public getImage() {
        return OP01_015_125.image
    }
    
    public getName() {
        return OP01_015_125._name
    }
}
