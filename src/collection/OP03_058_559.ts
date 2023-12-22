
import Card from "../entities/Card";

export default class OP03_058_559 extends Card {
    public static id: string = "OP03_058_559";
    
    public static _name: string = "Iceburg";

    public effect: string = "This Leader can not attack.\r\n[Acitvate:Main] [DON!!-1] You may rest this Leader: Play up to 1 Character with the {Galley-La Company} type that costs 5 or less from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-040_c62b8e_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return OP03_058_559.id
    }
    
    public getType() {
        return OP03_058_559.type
    }
    
    public getImage() {
        return OP03_058_559.image
    }
    
    public getName() {
        return OP03_058_559._name
    }
    
    public getCost(): number {
        return parseInt(OP03_058_559.cost)
    }
}
