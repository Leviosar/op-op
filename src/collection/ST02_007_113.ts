
import Card from "../entities/Card";

export default class ST02_007_113 extends Card {
    public static id: string = "ST02_007_113";
    
    public static _name: string = "Jewelry Bonney";

    public effect: string = "[Activate:Main] (1) (Rest the designated number of DON!! in your Cost Area) Rest this Character: Look at the top 5 cards of your deck, reveal 1 {Supernovas} type card and add it to your hand. Place the remaining cards at the bottom of the deck in any order.\r\n";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-007_7cce7b_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return ST02_007_113.id
    }
    
    public getType() {
        return ST02_007_113.type
    }
    
    public getImage() {
        return ST02_007_113.image
    }
    
    public getName() {
        return ST02_007_113._name
    }
    
    public getCost(): number {
        return parseInt(ST02_007_113.cost)
    }
}
