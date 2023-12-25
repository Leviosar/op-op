
import Card, { CardType } from "../entities/Card";

export default class OP04_116_875 extends Card {
    public static id: string = "OP04_116_875";
    
    public static _name: string = "Diable Jambe Joue Shot";

    public effect: string = "[Counter] Up to 1 of your Leader or Character cards gains +6000 power during this battle. Then, if you and your opponent have a total of 4 or less Life cards, K.O. up to 1 of your opponent's Characters with a cost of 2 or less.\r\n[Trigger] Draw 1 card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-116_ab0aa7_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_116_875.id;
    }
    
    public getType() : CardType {
        return OP04_116_875.type as CardType;
    }
    
    public getImage() {
        return OP04_116_875.image;
    }
    
    public getName() {
        return OP04_116_875._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_116_875.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_116_875.keywords;
    }
    
    public getPower(): number {
        return OP04_116_875.power;
    }

    public getCounter(): number {
        return OP04_116_875.counter;
    }

    public getLife(): number {
        return OP04_116_875.life;
    }
}
