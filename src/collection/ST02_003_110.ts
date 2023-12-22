
import Card from "../entities/Card";

export default class ST02_003_110 extends Card {
    public static id: string = "ST02_003_110";
    
    public static _name: string = "Urouge";

    public effect: string = "[DON!! ×1] If you have 3 or more Characters, this Character gains +2000 Power.";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-003_b3c502_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST02_003_110.id
    }
    
    public getType() {
        return ST02_003_110.type
    }
    
    public getImage() {
        return ST02_003_110.image
    }
    
    public getName() {
        return ST02_003_110._name
    }
    
    public getCost(): number {
        return parseInt(ST02_003_110.cost)
    }
}
