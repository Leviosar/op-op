
import Card from "../entities/Card";

export default class OP04_098_860 extends Card {
    public static id: string = "OP04_098_860";
    
    public static _name: string = "Otoko";

    public effect: string = "[On Play] You may trash 2 {Land of Wano} type cards from your hand: If you have 1 or less Life cards, add 1 card from the top of your deck to the top of your Life cards.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-098_97c48b_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP04_098_860.id
    }
    
    public getType() {
        return OP04_098_860.type
    }
    
    public getImage() {
        return OP04_098_860.image
    }
    
    public getName() {
        return OP04_098_860._name
    }
    
    public getCost(): number {
        return parseInt(OP04_098_860.cost)
    }
}
