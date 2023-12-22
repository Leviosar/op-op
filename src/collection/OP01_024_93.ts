
import Card from "../entities/Card";

export default class OP01_024_93 extends Card {
    public static id: string = "OP01_024_93";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x2] This Character can’t be K.O.’d when battling (Strike) attribute Characters.\r\n[Activate Main] [Once Per Turn] Give this Character up to 2 of your rested DON!! cards.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-024_334ce5_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP01_024_93.id
    }
    
    public getType() {
        return OP01_024_93.type
    }
    
    public getImage() {
        return OP01_024_93.image
    }
    
    public getName() {
        return OP01_024_93._name
    }
    
    public getCost(): number {
        return parseInt(OP01_024_93.cost)
    }
}
