
import Card, { CardType } from "../entities/Card";

export default class OP04_112_782 extends Card {
    public static id: string = "OP04_112_782";
    
    public static _name: string = "Yamato";

    public effect: string = "[On Play] K.O. up to 1 of your opponent's characters with a cost that is equal to or less than the total life of you and your opponent. Then, if you have 1 or less life, you may add up to 1 card from the top of your deck to your life area.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-112_296d6a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "9";
    
    public static keywords: string[] = [];
    
    public static power: number = 9000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_112_782.id;
    }
    
    public getType() : CardType {
        return OP04_112_782.type as CardType;
    }
    
    public getImage() {
        return OP04_112_782.image;
    }
    
    public getName() {
        return OP04_112_782._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_112_782.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_112_782.keywords;
    }
    
    public getPower(): number {
        return OP04_112_782.power;
    }

    public getCounter(): number {
        return OP04_112_782.counter;
    }

    public getLife(): number {
        return OP04_112_782.life;
    }
}
