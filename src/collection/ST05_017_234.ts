
import Card from "../entities/Card";

export default class ST05_017_234 extends Card {
    public static id: string = "ST05_017_234";
    
    public static _name: string = "Union Armado";

    public effect: string = "[Counter] Up to 1 of your {FILM} type Leader or Characters gain +4000 Power during this battle. If that card is a Character, that Character cannot be K.O.'d during this turn.\r\n[Trigger] Add 1 card from your DON!! deck and set it as active.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST05-017_f6e3f6_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST05_017_234.id
    }
    
    public getType() {
        return ST05_017_234.type
    }
    
    public getImage() {
        return ST05_017_234.image
    }
    
    public getName() {
        return ST05_017_234._name
    }
}
