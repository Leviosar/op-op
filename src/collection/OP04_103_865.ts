
import Card, { CardType } from "../entities/Card";

export default class OP04_103_865 extends Card {
    public static id: string = "OP04_103_865";
    
    public static _name: string = "Kouzuki Hiyori";

    public effect: string = "[On Play] Up to 1 of your {Land of Wano} type Leader or Character cards gains +1000 power during this turn.\r\n[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-103_7f1dc4_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_103_865.id;
    }
    
    public getType() : CardType {
        return OP04_103_865.type as CardType;
    }
    
    public getImage() {
        return OP04_103_865.image;
    }
    
    public getName() {
        return OP04_103_865._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_103_865.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_103_865.keywords;
    }
    
    public getPower(): number {
        return OP04_103_865.power;
    }

    public getCounter(): number {
        return OP04_103_865.counter;
    }

    public getLife(): number {
        return OP04_103_865.life;
    }
}
