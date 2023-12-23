
import Card, { CardType } from "../entities/Card";

export default class ST01_009_566 extends Card {
    public static id: string = "ST01_009_566";
    
    public static _name: string = "Sanji";

    public effect: string = "[DON!! x1] [Your Turn] While your Life area has 2 or less cards, this Character gains +2000 power.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-009_067c76_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST01_009_566.id;
    }
    
    public getType() : CardType {
        return ST01_009_566.type as CardType;
    }
    
    public getImage() {
        return ST01_009_566.image;
    }
    
    public getName() {
        return ST01_009_566._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_009_566.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_009_566.keywords;
    }
}
