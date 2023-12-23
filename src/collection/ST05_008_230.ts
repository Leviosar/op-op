
import Card, { CardType } from "../entities/Card";

export default class ST05_008_230 extends Card {
    public static id: string = "ST05_008_230";
    
    public static _name: string = "Shiki";

    public effect: string = "If you have 8 or more DON!! cards on your field, this Character cannot be K.O.'d in battle.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-008_de8696_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST05_008_230.id;
    }
    
    public getType() : CardType {
        return ST05_008_230.type as CardType;
    }
    
    public getImage() {
        return ST05_008_230.image;
    }
    
    public getName() {
        return ST05_008_230._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_008_230.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_008_230.keywords;
    }
}
