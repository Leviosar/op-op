
import Card, { CardType } from "../entities/Card";

export default class OP03_028_639 extends Card {
    public static id: string = "OP03_028_639";
    
    public static _name: string = "Django";

    public effect: string = "[On Play] Choose 1 of the following effects.\r\n- Set up to 1 of your Leader or Characters with a cost of 6 or less with the {East Blue} type as active.\r\n- Rest this Character and up to 1 of your opponent's Characters.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-028_eda9ac_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_028_639.id;
    }
    
    public getType() : CardType {
        return OP03_028_639.type as CardType;
    }
    
    public getImage() {
        return OP03_028_639.image;
    }
    
    public getName() {
        return OP03_028_639._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_028_639.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_028_639.keywords;
    }
    
    public getPower(): number {
        return OP03_028_639.power;
    }

    public getCounter(): number {
        return OP03_028_639.counter;
    }

    public getLife(): number {
        return OP03_028_639.life;
    }
}
