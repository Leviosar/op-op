
import Card from "../entities/Card";

export default class ST05_003_262 extends Card {
    public static id: string = "ST05_003_262";
    
    public static _name: string = "Ann";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-003_5aa9af_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST05_003_262.id
    }
    
    public getType() {
        return ST05_003_262.type
    }
    
    public getImage() {
        return ST05_003_262.image
    }
    
    public getName() {
        return ST05_003_262._name
    }
    
    public getCost(): number {
        return parseInt(ST05_003_262.cost)
    }
}
