
import Card from "../entities/Card";

export default class ST07_017_546 extends Card {
    public static id: string = "ST07_017_546";
    
    public static _name: string = "Queen Mama Chanter";

    public effect: string = "[Activate:Main] Rest this stage, you may add 1 card from the top or bottom of your Life area to your hand: Place up to 1 of your Characters that costs 3 on top of the owner's Life area face-up.\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-017_44a413_jp.jpg";
    
    public static type: string = "stage";
    
    public static cost: string = "2";
    
    public getId() {
        return ST07_017_546.id
    }
    
    public getType() {
        return ST07_017_546.type
    }
    
    public getImage() {
        return ST07_017_546.image
    }
    
    public getName() {
        return ST07_017_546._name
    }
    
    public getCost(): number {
        return parseInt(ST07_017_546.cost)
    }
}
