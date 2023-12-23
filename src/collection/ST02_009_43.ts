
import Card, { CardType } from "../entities/Card";

export default class ST02_009_43 extends Card {
    public static id: string = "ST02_009_43";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[On Play] Set one of your rested Characters with the Supernovas or Heart Pirates trait with a cost of 5 or less to active";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-009_977b7d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST02_009_43.id;
    }
    
    public getType() : CardType {
        return ST02_009_43.type as CardType;
    }
    
    public getImage() {
        return ST02_009_43.image;
    }
    
    public getName() {
        return ST02_009_43._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_009_43.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_009_43.keywords;
    }
}
