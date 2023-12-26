
import Card, { CardType } from "../entities/Card";

export default class ST09_014_751 extends Card {
    public static id: string = "ST09_014_751";
    
    public static _name: string = "Narikabura Arrow";

    public effect: string = "[Counter] If you have 2 or less cards in your Life Area, give up to 1 of your opponent's Leader or Characters -3000 Power during this turn.\r\n\r\n[Trigger] You may trash 2 cards from your hand: You may place up to 1 card from the top of your deck at the top of your Life Area.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-014_a498f1_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Land of Wano"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST09_014_751.id;
    }
    
    public getType() : CardType {
        return ST09_014_751.type as CardType;
    }
    
    public getImage() {
        return ST09_014_751.image;
    }
    
    public getName() {
        return ST09_014_751._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_014_751.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_014_751.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST09_014_751.archetypes;
    }
    
    public getPower(): number {
        return ST09_014_751.power;
    }

    public getCounter(): number {
        return ST09_014_751.counter;
    }

    public getLife(): number {
        return ST09_014_751.life;
    }
}
