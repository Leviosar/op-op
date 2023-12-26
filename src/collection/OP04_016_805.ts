
import Card, { CardType } from "../entities/Card";

export default class OP04_016_805 extends Card {
    public static id: string = "OP04_016_805";
    
    public static _name: string = "Bad Manners Kick Course";

    public effect: string = "[Counter] You may trash 1 card from your hand: Up to 1 of your Leader or Character cards gains +3000 power during this battle.\r\n[Trigger] Give up to 1 of your opponent's Leader or Character cards −3000 power during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-016_10cb77_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Alabasta","Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_016_805.id;
    }
    
    public getType() : CardType {
        return OP04_016_805.type as CardType;
    }
    
    public getImage() {
        return OP04_016_805.image;
    }
    
    public getName() {
        return OP04_016_805._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_016_805.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_016_805.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_016_805.archetypes;
    }
    
    public getPower(): number {
        return OP04_016_805.power;
    }

    public getCounter(): number {
        return OP04_016_805.counter;
    }

    public getLife(): number {
        return OP04_016_805.life;
    }
}
