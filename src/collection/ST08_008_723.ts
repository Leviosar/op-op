
import Card, { CardType } from "../entities/Card";

export default class ST08_008_723 extends Card {
    public static id: string = "ST08_008_723";
    
    public static _name: string = "Higuma";

    public effect: string = "[On Play] Give up to 1 of your opponent's Characters -2 cost during this turn.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-008_e99604_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST08_008_723.id;
    }
    
    public getType() : CardType {
        return ST08_008_723.type as CardType;
    }
    
    public getImage() {
        return ST08_008_723.image;
    }
    
    public getName() {
        return ST08_008_723._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_008_723.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_008_723.keywords;
    }
    
    public getPower(): number {
        return ST08_008_723.power;
    }

    public getCounter(): number {
        return ST08_008_723.counter;
    }

    public getLife(): number {
        return ST08_008_723.life;
    }
}
