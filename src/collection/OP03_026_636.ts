
import Card, { CardType } from "../entities/Card";

export default class OP03_026_636 extends Card {
    public static id: string = "OP03_026_636";
    
    public static _name: string = "Kuroobi";

    public effect: string = "[On Play] If your Leader has the {East Blue} type, rest up to 1 of your opponent's Characters.\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-026_b0abc1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_026_636.id;
    }
    
    public getType() : CardType {
        return OP03_026_636.type as CardType;
    }
    
    public getImage() {
        return OP03_026_636.image;
    }
    
    public getName() {
        return OP03_026_636._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_026_636.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_026_636.keywords;
    }
    
    public getPower(): number {
        return OP03_026_636.power;
    }

    public getCounter(): number {
        return OP03_026_636.counter;
    }

    public getLife(): number {
        return OP03_026_636.life;
    }
}
