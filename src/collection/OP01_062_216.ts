
import Card, { CardType } from "../entities/Card";

export default class OP01_062_216 extends Card {
    public static id: string = "OP01_062_216";
    
    public static _name: string = "Crocodile";

    public effect: string = "[DON!! x1] After you activate an Event, you may draw 1 card if you have 4 or less cards in your hand and haven't drawn a card using this Leader's effect during this turn";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-062_dff4c9_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_062_216.id;
    }
    
    public getType() : CardType {
        return OP01_062_216.type as CardType;
    }
    
    public getImage() {
        return OP01_062_216.image;
    }
    
    public getName() {
        return OP01_062_216._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_062_216.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_062_216.keywords;
    }
}
