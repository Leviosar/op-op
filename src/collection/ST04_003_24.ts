
import Card from "../entities/Card";

export default class ST04_003_24 extends Card {
    public static id: string = "ST04_003_24";
    
    public static _name: string = "Kaido";

    public effect: string = "[On Play] DON!! -5: (You may return the specified number of DON!! cards from your field to your DON!! deck.) You may K.O. one of your opponent's Characters with a cost of 6 or less. Then this character gains <Rush> for the turn. (This character can attack the turn it comes into play.)";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-003_7754a4_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "9";
    
    public getId() {
        return ST04_003_24.id
    }
    
    public getType() {
        return ST04_003_24.type
    }
    
    public getImage() {
        return ST04_003_24.image
    }
    
    public getName() {
        return ST04_003_24._name
    }
    
    public getCost(): number {
        return parseInt(ST04_003_24.cost)
    }
}
