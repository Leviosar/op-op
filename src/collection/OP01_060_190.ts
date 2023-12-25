
import Card, { CardType } from "../entities/Card";

export default class OP01_060_190 extends Card {
    public static id: string = "OP01_060_190";
    
    public static _name: string = "Donquixote Doflamingo";

    public effect: string = "[DON!!x2] [When Attacking] (1) (You may rest the designated number for DON!! in your Cost Area): Reveal the top card of your deck. If it is a {The Seven Warlords of the Sea} type Character with a cost of 4 or less, you may play it rested.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-060_ef19ab_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "0";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return OP01_060_190.id;
    }
    
    public getType() : CardType {
        return OP01_060_190.type as CardType;
    }
    
    public getImage() {
        return OP01_060_190.image;
    }
    
    public getName() {
        return OP01_060_190._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_060_190.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_060_190.keywords;
    }
    
    public getPower(): number {
        return OP01_060_190.power;
    }

    public getCounter(): number {
        return OP01_060_190.counter;
    }

    public getLife(): number {
        return OP01_060_190.life;
    }
}
