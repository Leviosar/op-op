
import Card from "../entities/Card";

export default class OP03_025_583 extends Card {
    public static id: string = "OP03_025_583";
    
    public static _name: string = "Krieg";

    public effect: string = "[On Play] You may trash 1 card from your hand: K.O. up to 2 of your opponent's rested Characters that cost 4 or less.\r\n[DON!!x1] This Character gains <Double Attack>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-025_6605b2_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "6";
    
    public getId() {
        return OP03_025_583.id
    }
    
    public getType() {
        return OP03_025_583.type
    }
    
    public getImage() {
        return OP03_025_583.image
    }
    
    public getName() {
        return OP03_025_583._name
    }
    
    public getCost(): number {
        return parseInt(OP03_025_583.cost)
    }
}
