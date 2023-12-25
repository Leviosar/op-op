
import Card, { CardType } from "../entities/Card";

export default class OP04_008_801 extends Card {
    public static id: string = "OP04_008_801";
    
    public static _name: string = "Chaka";

    public effect: string = "[DON!! x1] [When Attacking] If your Leader is [Nefeltari Vivi], give up to 1 of your opponent's Characters −3000 power during this turn. Then, K.O. up to 1 of your opponent's Characters with 0 power or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-008_434f19_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_008_801.id;
    }
    
    public getType() : CardType {
        return OP04_008_801.type as CardType;
    }
    
    public getImage() {
        return OP04_008_801.image;
    }
    
    public getName() {
        return OP04_008_801._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_008_801.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_008_801.keywords;
    }
    
    public getPower(): number {
        return OP04_008_801.power;
    }

    public getCounter(): number {
        return OP04_008_801.counter;
    }

    public getLife(): number {
        return OP04_008_801.life;
    }
}
