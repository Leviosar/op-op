
import Card, { CardType } from "../entities/Card";

export default class OP04_087_779 extends Card {
    public static id: string = "OP04_087_779";
    
    public static _name: string = "Cavendish";

    public effect: string = "[DON!! x1] This Character can attack active Characters. \r\n[When Attacking] You may rest your Leader: K.O. up to 1 of your opponent's Characters that cost 1 or less. Then, trash 2 cards form the top of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-087_f25392_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_087_779.id;
    }
    
    public getType() : CardType {
        return OP04_087_779.type as CardType;
    }
    
    public getImage() {
        return OP04_087_779.image;
    }
    
    public getName() {
        return OP04_087_779._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_087_779.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_087_779.keywords;
    }
    
    public getPower(): number {
        return OP04_087_779.power;
    }

    public getCounter(): number {
        return OP04_087_779.counter;
    }

    public getLife(): number {
        return OP04_087_779.life;
    }
}
