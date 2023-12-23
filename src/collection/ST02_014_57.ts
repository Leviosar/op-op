
import Card, { CardType } from "../entities/Card";

export default class ST02_014_57 extends Card {
    public static id: string = "ST02_014_57";
    
    public static _name: string = "X Drake";

    public effect: string = "[DON!!x1] [During your Turn] While this character is rested, +1000 Power for all your Marines and Supernova Characters and Leader.\r\n[Counter +1000]";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-014_44b504_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST02_014_57.id;
    }
    
    public getType() : CardType {
        return ST02_014_57.type as CardType;
    }
    
    public getImage() {
        return ST02_014_57.image;
    }
    
    public getName() {
        return ST02_014_57._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_014_57.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_014_57.keywords;
    }
}
