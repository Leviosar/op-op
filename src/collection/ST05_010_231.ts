
import Card, { CardType } from "../entities/Card";

export default class ST05_010_231 extends Card {
    public static id: string = "ST05_010_231";
    
    public static _name: string = "Z";

    public effect: string = "If this Character battles with a <Strike> attribute Character, this Character gains +3000 Power during this turn.\r\n[Activate: Main] [Once per turn] DON!! -1: This Character gains +2000 Power during this turn.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-010_96d5c9_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = ["Strike"];
    
    public getId() {
        return ST05_010_231.id;
    }
    
    public getType() : CardType {
        return ST05_010_231.type as CardType;
    }
    
    public getImage() {
        return ST05_010_231.image;
    }
    
    public getName() {
        return ST05_010_231._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_010_231.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_010_231.keywords;
    }
}
