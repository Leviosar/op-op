
import Card from "../entities/Card";

export default class OP01_098_207 extends Card {
    public static id: string = "OP01_098_207";
    
    public static _name: string = "Kurozumi Orochi";

    public effect: string = "[On Play] Reveal 1 [Artificial Devil Fruit Smile] from your deck and add it to your hand. Then, shuffle your deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-098_290ef3_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_098_207.id
    }
    
    public getType() {
        return OP01_098_207.type
    }
    
    public getImage() {
        return OP01_098_207.image
    }
    
    public getName() {
        return OP01_098_207._name
    }
}
