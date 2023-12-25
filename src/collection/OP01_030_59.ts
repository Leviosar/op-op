
import Card, { CardType } from "../entities/Card";

export default class OP01_030_59 extends Card {
    public static id: string = "OP01_030_59";
    
    public static _name: string = "In 2 years!!! To Sabaody";

    public effect: string = "[Main] Look at the top 5 cards of your deck, reveal 1 {Straw Hat Crew} type Character Card and add it to your hand. Return the other cards in any order to the bottom of the deck.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-030_c5209a_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_030_59.id;
    }
    
    public getType() : CardType {
        return OP01_030_59.type as CardType;
    }
    
    public getImage() {
        return OP01_030_59.image;
    }
    
    public getName() {
        return OP01_030_59._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_030_59.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_030_59.keywords;
    }
    
    public getPower(): number {
        return OP01_030_59.power;
    }

    public getCounter(): number {
        return OP01_030_59.counter;
    }

    public getLife(): number {
        return OP01_030_59.life;
    }
}
