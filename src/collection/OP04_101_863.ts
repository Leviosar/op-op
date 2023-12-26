
import Card, { CardType } from "../entities/Card";

export default class OP04_101_863 extends Card {
    public static id: string = "OP04_101_863";
    
    public static _name: string = "Carmel";

    public effect: string = "[Your Turn] [On Play] Draw 1 card.\r\n[Trigger] Play this card. Then, K.O. up to 1 of your opponent's Characters with a cost of 2 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-101_8c67e3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["The House of Lambs"];
    
    public static power: number = 1000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_101_863.id;
    }
    
    public getType() : CardType {
        return OP04_101_863.type as CardType;
    }
    
    public getImage() {
        return OP04_101_863.image;
    }
    
    public getName() {
        return OP04_101_863._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_101_863.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_101_863.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_101_863.archetypes;
    }
    
    public getPower(): number {
        return OP04_101_863.power;
    }

    public getCounter(): number {
        return OP04_101_863.counter;
    }

    public getLife(): number {
        return OP04_101_863.life;
    }
}
