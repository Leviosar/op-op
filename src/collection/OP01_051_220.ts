
import Card, { CardType } from "../entities/Card";

export default class OP01_051_220 extends Card {
    public static id: string = "OP01_051_220";
    
    public static _name: string = "Eustass \"Captain\" Kid";

    public effect: string = "[DON!!x1] [Opponent's Turn] As long as this Character is rested, your opponent cannot attack anything other than Characters named [Eustass\"Captain\"Kid].\r\n[Activate: Main] [Once Per Turn] You may rest this Character: You may play up to 1 Character that costs 3 or less from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-051_439415_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public static power: number = 8000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_051_220.id;
    }
    
    public getType() : CardType {
        return OP01_051_220.type as CardType;
    }
    
    public getImage() {
        return OP01_051_220.image;
    }
    
    public getName() {
        return OP01_051_220._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_051_220.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_051_220.keywords;
    }
    
    public getPower(): number {
        return OP01_051_220.power;
    }

    public getCounter(): number {
        return OP01_051_220.counter;
    }

    public getLife(): number {
        return OP01_051_220.life;
    }
}
