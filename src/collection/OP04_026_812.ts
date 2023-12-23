
import Card, { CardType } from "../entities/Card";

export default class OP04_026_812 extends Card {
    public static id: string = "OP04_026_812";
    
    public static _name: string = "Senor Pink";

    public effect: string = "[When Attacking] ➀ (You may rest the specified number of DON!! cards in your cost area.): If your Leader has the {Donquixote Pirates} type, rest up to 1 of your opponent's Characters with a cost of 4 or less. Then, set up to 1 of your DON!! cards as active at the end of this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-026_d232be_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_026_812.id;
    }
    
    public getType() : CardType {
        return OP04_026_812.type as CardType;
    }
    
    public getImage() {
        return OP04_026_812.image;
    }
    
    public getName() {
        return OP04_026_812._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_026_812.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_026_812.keywords;
    }
}
