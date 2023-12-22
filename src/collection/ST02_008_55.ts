
import Card from "../entities/Card";

export default class ST02_008_55 extends Card {
    public static id: string = "ST02_008_55";
    
    public static _name: string = "Scratchmen Apoo";

    public effect: string = "[DON!!x1] [When attacking] Rest one of your opponent's DON!! \r\n[Counter+2000]";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-008_4a11c6_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST02_008_55.id
    }
    
    public getType() {
        return ST02_008_55.type
    }
    
    public getImage() {
        return ST02_008_55.image
    }
    
    public getName() {
        return ST02_008_55._name
    }
    
    public getCost(): number {
        return parseInt(ST02_008_55.cost)
    }
}
