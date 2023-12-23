
import Card, { CardType } from "../entities/Card";

export default class ST02_012_44 extends Card {
    public static id: string = "ST02_012_44";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[On Play] Set one of your rested Characters with the Supernovas or Heart Pirates trait with a cost of 5 or less to active";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-012_61c33f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST02_012_44.id;
    }
    
    public getType() : CardType {
        return ST02_012_44.type as CardType;
    }
    
    public getImage() {
        return ST02_012_44.image;
    }
    
    public getName() {
        return ST02_012_44._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_012_44.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_012_44.keywords;
    }
}
