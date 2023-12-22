
import Card from "../entities/Card";

export default class OP03_090_560 extends Card {
    public static id: string = "OP03_090_560";
    
    public static _name: string = "Blueno";

    public effect: string = "[DON!!x1] This Character gains [Blocker]\r\n\r\n[On K.O.] Play up to 1 Character that costs 4 or less whose type contains (CP) from your trash and rest it.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-090_f03939_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP03_090_560.id
    }
    
    public getType() {
        return OP03_090_560.type
    }
    
    public getImage() {
        return OP03_090_560.image
    }
    
    public getName() {
        return OP03_090_560._name
    }
    
    public getCost(): number {
        return parseInt(OP03_090_560.cost)
    }
}