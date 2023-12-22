
import Card from "../entities/Card";

export default class OP01_008_73 extends Card {
    public static id: string = "OP01_008_73";
    
    public static _name: string = "Cavendish";

    public effect: string = "[On Play] You may return 1 of your Life cards to your hand: This Character gains <Rush> during this turn. (This character can attack the turn it comes into play.)";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-008_4ae5cd_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP01_008_73.id
    }
    
    public getType() {
        return OP01_008_73.type
    }
    
    public getImage() {
        return OP01_008_73.image
    }
    
    public getName() {
        return OP01_008_73._name
    }
    
    public getCost(): number {
        return parseInt(OP01_008_73.cost)
    }
}