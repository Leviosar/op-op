
import Card, { CardType } from "../entities/Card";

export default class OP04_079_849 extends Card {
    public static id: string = "OP04_079_849";
    
    public static _name: string = "Orlumbus";

    public effect: string = "[Activate: Main] [Once Per Turn] Give up to 1 of your opponent's Characters −4 cost during this turn and trash 2 cards from the top of your deck. Then, K.O. 1 of your {Dressrosa} type Characters.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-079_c25328_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_079_849.id;
    }
    
    public getType() : CardType {
        return OP04_079_849.type as CardType;
    }
    
    public getImage() {
        return OP04_079_849.image;
    }
    
    public getName() {
        return OP04_079_849._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_079_849.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_079_849.keywords;
    }
    
    public getPower(): number {
        return OP04_079_849.power;
    }

    public getCounter(): number {
        return OP04_079_849.counter;
    }

    public getLife(): number {
        return OP04_079_849.life;
    }
}
