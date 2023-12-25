
import Card, { CardType } from "../entities/Card";

export default class OP04_075_845 extends Card {
    public static id: string = "OP04_075_845";
    
    public static _name: string = "Nez-Palm Cannon";

    public effect: string = "[Counter] Up to 1 of your Leader or Character cards gains +6000 power during this battle. Then, if you have 2 or less Life cards, add up to 1 DON!! card from your DON!! deck and rest it.\r\n[Trigger] Add up to 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-075_cedc4c_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_075_845.id;
    }
    
    public getType() : CardType {
        return OP04_075_845.type as CardType;
    }
    
    public getImage() {
        return OP04_075_845.image;
    }
    
    public getName() {
        return OP04_075_845._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_075_845.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_075_845.keywords;
    }
    
    public getPower(): number {
        return OP04_075_845.power;
    }

    public getCounter(): number {
        return OP04_075_845.counter;
    }

    public getLife(): number {
        return OP04_075_845.life;
    }
}
