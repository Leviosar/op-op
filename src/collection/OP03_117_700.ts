
import Card from "../entities/Card";

export default class OP03_117_700 extends Card {
    public static id: string = "OP03_117_700";
    
    public static _name: string = "Napoleon";

    public effect: string = "[Activate:Main] You may rest this card: Up to 1 of your [Charlotte Linlin] gain +1000 Power until the start of your next turn.\r\n[Trigger] Play this card";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-117_665208_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP03_117_700.id
    }
    
    public getType() {
        return OP03_117_700.type
    }
    
    public getImage() {
        return OP03_117_700.image
    }
    
    public getName() {
        return OP03_117_700._name
    }
    
    public getCost(): number {
        return parseInt(OP03_117_700.cost)
    }
}
