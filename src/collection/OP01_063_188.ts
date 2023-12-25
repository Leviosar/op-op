
import Card, { CardType } from "../entities/Card";

export default class OP01_063_188 extends Card {
    public static id: string = "OP01_063_188";
    
    public static _name: string = "Arlong";

    public effect: string = "[DON!!x1] [Activate: Main] You may rest this Character: Pick 1 card from your opponent's hand and reveal it. If the revealed card is an Event card, place up to 1 of their Life cards on the bottom of the owner's deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-063_77bb43_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_063_188.id;
    }
    
    public getType() : CardType {
        return OP01_063_188.type as CardType;
    }
    
    public getImage() {
        return OP01_063_188.image;
    }
    
    public getName() {
        return OP01_063_188._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_063_188.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_063_188.keywords;
    }
    
    public getPower(): number {
        return OP01_063_188.power;
    }

    public getCounter(): number {
        return OP01_063_188.counter;
    }

    public getLife(): number {
        return OP01_063_188.life;
    }
}
