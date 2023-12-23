
import Card, { CardType } from "../entities/Card";

export default class OP03_073_669 extends Card {
    public static id: string = "OP03_073_669";
    
    public static _name: string = "Hull Dismantling Slash";

    public effect: string = "[Main] DON!! -1: If your Leader has the {Water 7} type, K.O. up to 1 of your opponent’s Characters with a cost of 2 or less.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-073_dad3ad_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_073_669.id;
    }
    
    public getType() : CardType {
        return OP03_073_669.type as CardType;
    }
    
    public getImage() {
        return OP03_073_669.image;
    }
    
    public getName() {
        return OP03_073_669._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_073_669.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_073_669.keywords;
    }
}
