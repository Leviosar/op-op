
import Card, { CardType } from "../entities/Card";

export default class ST09_001_717 extends Card {
    public static id: string = "ST09_001_717";
    
    public static _name: string = "Yamato";

    public effect: string = "[DON!! x1][Opponent's Turn] While your Life area has 2 cards or less, this Leader gains +1000 power.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-001_9b176f_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "0";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST09_001_717.id;
    }
    
    public getType() : CardType {
        return ST09_001_717.type as CardType;
    }
    
    public getImage() {
        return ST09_001_717.image;
    }
    
    public getName() {
        return ST09_001_717._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_001_717.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_001_717.keywords;
    }
}
