
import Card, { CardType } from "../entities/Card";

export default class ST09_008_747 extends Card {
    public static id: string = "ST09_008_747";
    
    public static _name: string = "Shimotsuki Ushimaru";

    public effect: string = "[DON!!×1] [When Attacking] You may add the top or bottom card of your Life area to your hand: Play up to 1 yellow Character card with the {Land of Wano} type and a cost of 4 or less from your hand.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-008_1efa72_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Land of Wano"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST09_008_747.id;
    }
    
    public getType() : CardType {
        return ST09_008_747.type as CardType;
    }
    
    public getImage() {
        return ST09_008_747.image;
    }
    
    public getName() {
        return ST09_008_747._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_008_747.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_008_747.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST09_008_747.archetypes;
    }
    
    public getPower(): number {
        return ST09_008_747.power;
    }

    public getCounter(): number {
        return ST09_008_747.counter;
    }

    public getLife(): number {
        return ST09_008_747.life;
    }
}
