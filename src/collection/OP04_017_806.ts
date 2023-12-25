
import Card, { CardType } from "../entities/Card";

export default class OP04_017_806 extends Card {
    public static id: string = "OP04_017_806";
    
    public static _name: string = "Happiness Punch";

    public effect: string = "[Counter] Give up to 1 of your opponent's Leader or Character cards −2000 power during this turn. Then, if your Leader is active, give up to 1 of your opponent's Leader or Character cards −1000 power during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-017_1535d6_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_017_806.id;
    }
    
    public getType() : CardType {
        return OP04_017_806.type as CardType;
    }
    
    public getImage() {
        return OP04_017_806.image;
    }
    
    public getName() {
        return OP04_017_806._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_017_806.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_017_806.keywords;
    }
    
    public getPower(): number {
        return OP04_017_806.power;
    }

    public getCounter(): number {
        return OP04_017_806.counter;
    }

    public getLife(): number {
        return OP04_017_806.life;
    }
}
