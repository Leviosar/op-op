
import Card, { CardType } from "../entities/Card";

export default class OP01_003_132 extends Card {
    public static id: string = "OP01_003_132";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[Activate: Main] [Once Per Turn] (4) (Rest the designated number of DON!! in the Cost Area): Set one of your cost 5 or lower {Supernovas} or {Straw Hat Crew} characters to active and give that character +1000 power this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-003_b2e838_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "0";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_003_132.id;
    }
    
    public getType() : CardType {
        return OP01_003_132.type as CardType;
    }
    
    public getImage() {
        return OP01_003_132.image;
    }
    
    public getName() {
        return OP01_003_132._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_003_132.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_003_132.keywords;
    }
}
