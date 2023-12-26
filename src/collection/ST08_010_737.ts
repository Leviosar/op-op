
import Card, { CardType } from "../entities/Card";

export default class ST08_010_737 extends Card {
    public static id: string = "ST08_010_737";
    
    public static _name: string = "Monkey D Garp";

    public effect: string = "";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-010_66b0ba_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST08_010_737.id;
    }
    
    public getType() : CardType {
        return ST08_010_737.type as CardType;
    }
    
    public getImage() {
        return ST08_010_737.image;
    }
    
    public getName() {
        return ST08_010_737._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_010_737.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_010_737.keywords;
    }
    
    public getPower(): number {
        return ST08_010_737.power;
    }

    public getCounter(): number {
        return ST08_010_737.counter;
    }

    public getLife(): number {
        return ST08_010_737.life;
    }
}
