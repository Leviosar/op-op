
import Card, { CardType } from "../entities/Card";

export default class ST07_002_591 extends Card {
    public static id: string = "ST07_002_591";
    
    public static _name: string = "Charlotte Anana";

    public effect: string = "[Counter] Look at up to 1 Life card from the top of your or your opponent's Life Area and put it either on the top or the bottom of the Life Area. Then, up to 1 of your Leader or Characters gains +2000 Power for this battle.\r\n\r\n[Trigger] Draw 1 card. Look at up to 1 Life card from the top of your or your opponent's Life Area and put it either on the top or the bottom of the Life Area.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-002_36fc6b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST07_002_591.id;
    }
    
    public getType() : CardType {
        return ST07_002_591.type as CardType;
    }
    
    public getImage() {
        return ST07_002_591.image;
    }
    
    public getName() {
        return ST07_002_591._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_002_591.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_002_591.keywords;
    }
    
    public getPower(): number {
        return ST07_002_591.power;
    }

    public getCounter(): number {
        return ST07_002_591.counter;
    }

    public getLife(): number {
        return ST07_002_591.life;
    }
}
