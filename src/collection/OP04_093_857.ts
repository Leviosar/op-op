
import Card, { CardType } from "../entities/Card";

export default class OP04_093_857 extends Card {
    public static id: string = "OP04_093_857";
    
    public static _name: string = "Gum-Gum King Kong Gun";

    public effect: string = "[Main] Up to 1 of your {Dressrosa} type Characters gains +6000 power during this turn. Then, if you have 15 or more cards in your trash, that card gains [Double Attack] during this turn.\r\n(This card deals 2 damage.)\r\n[Trigger] Draw 3 cards and trash 2 cards from your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-093_04d2a1_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_093_857.id;
    }
    
    public getType() : CardType {
        return OP04_093_857.type as CardType;
    }
    
    public getImage() {
        return OP04_093_857.image;
    }
    
    public getName() {
        return OP04_093_857._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_093_857.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_093_857.keywords;
    }
    
    public getPower(): number {
        return OP04_093_857.power;
    }

    public getCounter(): number {
        return OP04_093_857.counter;
    }

    public getLife(): number {
        return OP04_093_857.life;
    }
}
