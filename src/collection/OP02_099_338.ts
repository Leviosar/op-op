
import Card, { CardType } from "../entities/Card";

export default class OP02_099_338 extends Card {
    public static id: string = "OP02_099_338";
    
    public static _name: string = "Sakazuki";

    public effect: string = "[On Play] You may trash 1 card from your hand: K.O. up to 1 of your opponent's Characters with a cost 5 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-099_93ec7a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_099_338.id;
    }
    
    public getType() : CardType {
        return OP02_099_338.type as CardType;
    }
    
    public getImage() {
        return OP02_099_338.image;
    }
    
    public getName() {
        return OP02_099_338._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_099_338.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_099_338.keywords;
    }
    
    public getPower(): number {
        return OP02_099_338.power;
    }

    public getCounter(): number {
        return OP02_099_338.counter;
    }

    public getLife(): number {
        return OP02_099_338.life;
    }
}
