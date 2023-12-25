
import Card, { CardType } from "../entities/Card";

export default class OP03_121_703 extends Card {
    public static id: string = "OP03_121_703";
    
    public static _name: string = "Thunder Bolt";

    public effect: string = "[Main] You may trash 1 card from the top of your Life: K.O. up to 1 of your opponent’s Characters with a cost 5 or less.\r\n[Trigger] K.O. up to 1 of your opponent’s Characters with a cost 5 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-121_4c830b_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_121_703.id;
    }
    
    public getType() : CardType {
        return OP03_121_703.type as CardType;
    }
    
    public getImage() {
        return OP03_121_703.image;
    }
    
    public getName() {
        return OP03_121_703._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_121_703.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_121_703.keywords;
    }
    
    public getPower(): number {
        return OP03_121_703.power;
    }

    public getCounter(): number {
        return OP03_121_703.counter;
    }

    public getLife(): number {
        return OP03_121_703.life;
    }
}
