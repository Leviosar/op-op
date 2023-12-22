
import Card from "../entities/Card";

export default class OP04_063_774 extends Card {
    public static id: string = "OP04_063_774";
    
    public static _name: string = "Franky";

    public effect: string = "[On Your Opponent's Attack] [Once Per Turn] DON!! -1: If your Leader has the {Water 7} type, up to 1 of your Leader or Characters gains +1000 Power during this battle.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-063_c6baf2_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP04_063_774.id
    }
    
    public getType() {
        return OP04_063_774.type
    }
    
    public getImage() {
        return OP04_063_774.image
    }
    
    public getName() {
        return OP04_063_774._name
    }
    
    public getCost(): number {
        return parseInt(OP04_063_774.cost)
    }
}
