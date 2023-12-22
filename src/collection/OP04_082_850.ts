
import Card from "../entities/Card";

export default class OP04_082_850 extends Card {
    public static id: string = "OP04_082_850";
    
    public static _name: string = "Kyros";

    public effect: string = "If this Character would be K.O.'d, you may rest your Leader or 1 [Corrida Coliseum] instead.\r\n[On Play] If your Leader is [Rebecca], K.O. up to 1 of your opponent's Characters with a cost of 1 or less. Then, trash 1 card from the top of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-082_48e32e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP04_082_850.id
    }
    
    public getType() {
        return OP04_082_850.type
    }
    
    public getImage() {
        return OP04_082_850.image
    }
    
    public getName() {
        return OP04_082_850._name
    }
    
    public getCost(): number {
        return parseInt(OP04_082_850.cost)
    }
}
