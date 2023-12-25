
import Card, { CardType } from "../entities/Card";

export default class OP03_016_604 extends Card {
    public static id: string = "OP03_016_604";
    
    public static _name: string = "Flame Emperor";

    public effect: string = "[Main] If your Leader is [Portgas D. Ace], K.O. up to 1 of your opponent's Characters with 8000 power or less, your Leader gains <Double Attack> and +3000 power during this turn.\r\n[Trigger] K.O. up to 1 of your opponent's Characters with 6000 Power or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-018_9b902d_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "7";
    
    public static keywords: string[] = ["Double Attack"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_016_604.id;
    }
    
    public getType() : CardType {
        return OP03_016_604.type as CardType;
    }
    
    public getImage() {
        return OP03_016_604.image;
    }
    
    public getName() {
        return OP03_016_604._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_016_604.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_016_604.keywords;
    }
    
    public getPower(): number {
        return OP03_016_604.power;
    }

    public getCounter(): number {
        return OP03_016_604.counter;
    }

    public getLife(): number {
        return OP03_016_604.life;
    }
}
