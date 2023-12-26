
import Card, { CardType } from "../entities/Card";

export default class OP03_103_690 extends Card {
    public static id: string = "OP03_103_690";
    
    public static _name: string = "Bobbin the Disposer";

    public effect: string = "[DON!! x2] [When Attacking] You may add the top or bottom card of your Life area to your hand: Add up to 1 card from the top of your deck to the top of your Life area. ";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-103_baf83c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_103_690.id;
    }
    
    public getType() : CardType {
        return OP03_103_690.type as CardType;
    }
    
    public getImage() {
        return OP03_103_690.image;
    }
    
    public getName() {
        return OP03_103_690._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_103_690.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_103_690.keywords;
    }
    
    public getPower(): number {
        return OP03_103_690.power;
    }

    public getCounter(): number {
        return OP03_103_690.counter;
    }

    public getLife(): number {
        return OP03_103_690.life;
    }
}
