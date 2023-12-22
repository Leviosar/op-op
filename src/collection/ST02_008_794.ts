
import Card from "../entities/Card";

export default class ST02_008_794 extends Card {
    public static id: string = "ST02_008_794";
    
    public static _name: string = "Scratchmen Apoo";

    public effect: string = "[DON!!x1] [When attacking] Rest one of your opponent's DON!! \r\n[Counter+2000]";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-008_4a9c90_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST02_008_794.id
    }
    
    public getType() {
        return ST02_008_794.type
    }
    
    public getImage() {
        return ST02_008_794.image
    }
    
    public getName() {
        return ST02_008_794._name
    }
    
    public getCost(): number {
        return parseInt(ST02_008_794.cost)
    }
}
