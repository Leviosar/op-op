
import Card, { CardType } from "../entities/Card";

export default class OP02_025_305 extends Card {
    public static id: string = "OP02_025_305";
    
    public static _name: string = "Kin'emon";

    public effect: string = "[Activate: Main] [Once per turn] When you have 1 or less Characters in play, reduce the play cost of the next cost 3 or higher {Wano Country} type Character card you play from your hand by 1 during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-025_1e26cd_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_025_305.id;
    }
    
    public getType() : CardType {
        return OP02_025_305.type as CardType;
    }
    
    public getImage() {
        return OP02_025_305.image;
    }
    
    public getName() {
        return OP02_025_305._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_025_305.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_025_305.keywords;
    }
}
