
import Card, { CardType } from "../entities/Card";

export default class OP02_074_479 extends Card {
    public static id: string = "OP02_074_479";
    
    public static _name: string = "Saldeath";

    public effect: string = "Your [Blugori] gains <Blocker>.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-074_285752_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return OP02_074_479.id;
    }
    
    public getType() : CardType {
        return OP02_074_479.type as CardType;
    }
    
    public getImage() {
        return OP02_074_479.image;
    }
    
    public getName() {
        return OP02_074_479._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_074_479.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_074_479.keywords;
    }
}
