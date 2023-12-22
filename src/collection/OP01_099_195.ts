
import Card from "../entities/Card";

export default class OP01_099_195 extends Card {
    public static id: string = "OP01_099_195";
    
    public static _name: string = "Kurozumi Semimaru";

    public effect: string = "{Kurozumi Family} type Characters other than your 'Kurozumi Semimaru' cannot be K.O.'d in battle.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-099_0f7cb9_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP01_099_195.id
    }
    
    public getType() {
        return OP01_099_195.type
    }
    
    public getImage() {
        return OP01_099_195.image
    }
    
    public getName() {
        return OP01_099_195._name
    }
    
    public getCost(): number {
        return parseInt(OP01_099_195.cost)
    }
}