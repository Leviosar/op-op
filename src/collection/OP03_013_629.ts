
import Card, { CardType } from "../entities/Card";

export default class OP03_013_629 extends Card {
    public static id: string = "OP03_013_629";
    
    public static _name: string = "Marco";

    public effect: string = "[Your Turn] [On Play] K.O. up to 1 of your opponent's Characters with 3000 Power or less.\r\n[On K.O.] You may trash 1 Event card from your hand: Play this Character from the trash as rested.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-013_00ed8d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_013_629.id;
    }
    
    public getType() : CardType {
        return OP03_013_629.type as CardType;
    }
    
    public getImage() {
        return OP03_013_629.image;
    }
    
    public getName() {
        return OP03_013_629._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_013_629.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_013_629.keywords;
    }
}
