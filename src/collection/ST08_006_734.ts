
import Card, { CardType } from "../entities/Card";

export default class ST08_006_734 extends Card {
    public static id: string = "ST08_006_734";
    
    public static _name: string = "Shirahoshi";

    public effect: string = "<Blocker>\r\n[On Play] Give up to 1 of your opponent's Characters -4 cost during this turn.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-006_2bf7e8_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST08_006_734.id;
    }
    
    public getType() : CardType {
        return ST08_006_734.type as CardType;
    }
    
    public getImage() {
        return ST08_006_734.image;
    }
    
    public getName() {
        return ST08_006_734._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_006_734.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_006_734.keywords;
    }
    
    public getPower(): number {
        return ST08_006_734.power;
    }

    public getCounter(): number {
        return ST08_006_734.counter;
    }

    public getLife(): number {
        return ST08_006_734.life;
    }
}
