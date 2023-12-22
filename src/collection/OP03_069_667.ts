
import Card from "../entities/Card";

export default class OP03_069_667 extends Card {
    public static id: string = "OP03_069_667";
    
    public static _name: string = "Minorhinoceros";

    public effect: string = "[On K.O.] If your Leader has {{Impel Down}} as a type, draw 2 cards then discard 1 from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-069_f1ce94_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP03_069_667.id
    }
    
    public getType() {
        return OP03_069_667.type
    }
    
    public getImage() {
        return OP03_069_667.image
    }
    
    public getName() {
        return OP03_069_667._name
    }
    
    public getCost(): number {
        return parseInt(OP03_069_667.cost)
    }
}