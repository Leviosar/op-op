
import Card, { CardType } from "../entities/Card";

export default class ST09_012_728 extends Card {
    public static id: string = "ST09_012_728";
    
    public static _name: string = "Yamato";

    public effect: string = "[When Attacking] You may add the top or bottom card of your Life area to your hand: This Character gains +2000 power until the start of your next turn.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-012_69b50f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Land of Wano"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return ST09_012_728.id;
    }
    
    public getType() : CardType {
        return ST09_012_728.type as CardType;
    }
    
    public getImage() {
        return ST09_012_728.image;
    }
    
    public getName() {
        return ST09_012_728._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_012_728.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_012_728.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST09_012_728.archetypes;
    }
    
    public getPower(): number {
        return ST09_012_728.power;
    }

    public getCounter(): number {
        return ST09_012_728.counter;
    }

    public getLife(): number {
        return ST09_012_728.life;
    }
}
