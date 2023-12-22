
import Card from "../entities/Card";

export default class OP01_014_120 extends Card {
    public static id: string = "OP01_014_120";
    
    public static _name: string = "Jinbe";

    public effect: string = "[Blocker] (When your opponent attacks, you may rest this card and it will become the target of the attack)\r\n[DON!!x1] [On Block] You may play a Red Character card that costs 2 or less from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-014_8b357c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP01_014_120.id
    }
    
    public getType() {
        return OP01_014_120.type
    }
    
    public getImage() {
        return OP01_014_120.image
    }
    
    public getName() {
        return OP01_014_120._name
    }
    
    public getCost(): number {
        return parseInt(OP01_014_120.cost)
    }
}
