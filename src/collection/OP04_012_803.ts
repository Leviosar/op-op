
import Card from "../entities/Card";

export default class OP04_012_803 extends Card {
    public static id: string = "OP04_012_803";
    
    public static _name: string = "Nefertari Cobra";

    public effect: string = "[Your Turn] All of your {Alabasta} type Characters other than this Character gain +1000 power.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-012_ac679c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP04_012_803.id
    }
    
    public getType() {
        return OP04_012_803.type
    }
    
    public getImage() {
        return OP04_012_803.image
    }
    
    public getName() {
        return OP04_012_803._name
    }
    
    public getCost(): number {
        return parseInt(OP04_012_803.cost)
    }
}
