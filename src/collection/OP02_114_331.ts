
import Card, { CardType } from "../entities/Card";

export default class OP02_114_331 extends Card {
    public static id: string = "OP02_114_331";
    
    public static _name: string = "Borsalino";

    public effect: string = "[Opponent's turn] This Character can't be K.O.ed by effects and it gains +1000 Power.\r\n<Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-114_1d07e9_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return OP02_114_331.id;
    }
    
    public getType() : CardType {
        return OP02_114_331.type as CardType;
    }
    
    public getImage() {
        return OP02_114_331.image;
    }
    
    public getName() {
        return OP02_114_331._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_114_331.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_114_331.keywords;
    }
}
