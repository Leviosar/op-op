
import Card from "../entities/Card";

export default class OP03_032_642 extends Card {
    public static id: string = "OP03_032_642";
    
    public static _name: string = "Buggy";

    public effect: string = "This Character can't be K.O.'ed in battle with Slash attribute Characters and Leaders.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-032_3c20e4_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP03_032_642.id
    }
    
    public getType() {
        return OP03_032_642.type
    }
    
    public getImage() {
        return OP03_032_642.image
    }
    
    public getName() {
        return OP03_032_642._name
    }
    
    public getCost(): number {
        return parseInt(OP03_032_642.cost)
    }
}
