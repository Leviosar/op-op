
import Card, { CardType } from "../entities/Card";

export default class ST08_005_721 extends Card {
    public static id: string = "ST08_005_721";
    
    public static _name: string = "Shanks";

    public effect: string = "[On Play] You may trash 1 card from your hand: KO all characters with a cost of 1 or less.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-005_7e4cdb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "9";
    
    public static keywords: string[] = [];
    
    public static power: number = 10000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST08_005_721.id;
    }
    
    public getType() : CardType {
        return ST08_005_721.type as CardType;
    }
    
    public getImage() {
        return ST08_005_721.image;
    }
    
    public getName() {
        return ST08_005_721._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_005_721.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_005_721.keywords;
    }
    
    public getPower(): number {
        return ST08_005_721.power;
    }

    public getCounter(): number {
        return ST08_005_721.counter;
    }

    public getLife(): number {
        return ST08_005_721.life;
    }
}
