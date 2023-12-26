
import Card, { CardType } from "../entities/Card";

export default class OP04_108_869 extends Card {
    public static id: string = "OP04_108_869";
    
    public static _name: string = "Charlotte Moscato";

    public effect: string = "[DON!! x1] This Character gains <Banish>.\r\n(When this card deals damage, the target card is trashed without activating its Trigger.)\r\n[Trigger] You may trash 1 card from your hand: Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-108_36fc1f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Banish"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_108_869.id;
    }
    
    public getType() : CardType {
        return OP04_108_869.type as CardType;
    }
    
    public getImage() {
        return OP04_108_869.image;
    }
    
    public getName() {
        return OP04_108_869._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_108_869.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_108_869.keywords;
    }
    
    public getPower(): number {
        return OP04_108_869.power;
    }

    public getCounter(): number {
        return OP04_108_869.counter;
    }

    public getLife(): number {
        return OP04_108_869.life;
    }
}
