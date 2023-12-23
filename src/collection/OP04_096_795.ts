
import Card, { CardType } from "../entities/Card";

export default class OP04_096_795 extends Card {
    public static id: string = "OP04_096_795";
    
    public static _name: string = "Corrida Colosseum";

    public effect: string = "If your Leader has the {Dressrosa} type, your Characters that have the {Dressrosa} type can attack Characters on the turn they are played.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-096_9472ac_jp.jpg";
    
    public static type: CardType = "stage";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_096_795.id;
    }
    
    public getType() : CardType {
        return OP04_096_795.type as CardType;
    }
    
    public getImage() {
        return OP04_096_795.image;
    }
    
    public getName() {
        return OP04_096_795._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_096_795.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_096_795.keywords;
    }
}
