
import Card, { CardType } from "../entities/Card";

export default class ST01_005_5 extends Card {
    public static id: string = "ST01_005_5";
    
    public static _name: string = "Jinbe";

    public effect: string = "[DON!! x1] [When Attacking] Your Leader or 1 of your Characters other than this card gains +1000 power during this turn.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-005_f940f0_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST01_005_5.id;
    }
    
    public getType() : CardType {
        return ST01_005_5.type as CardType;
    }
    
    public getImage() {
        return ST01_005_5.image;
    }
    
    public getName() {
        return ST01_005_5._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_005_5.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_005_5.keywords;
    }
}
