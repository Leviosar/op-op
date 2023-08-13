import json
from pathlib import Path

stub = """
import Card from "../entities/Card";

export default class %s extends Card {
    public static id: string = "%s";
    
    public static _name: string = "%s";

    public effect: string = "%s";
    
    public source: string = "%s";
    
    public static image = "%s";
    
    public static type = "%s";
    
    public getId() {
        return %s.id
    }
    
    public getType() {
        return %s.type
    }
    
    public getImage() {
        return %s.image
    }
    
    public getName() {
        return %s._name
    }
}
"""

with open("../data/cards.json", "r", encoding="utf-8") as fp:
    contents = fp.read()
    cards = json.loads(contents)
    
for card in cards:
    id_ = f"{card['cid'].replace('-', '_')}_{card['gid']}"
    file = Path(f"../collection/{id_}.ts")
    
    if not file.is_file():
        if card["effect"] is not None:
            effect = card["effect"].replace("\n", "\\n").replace("\r", "\\r").replace("\"", '\\"')
            name = card["name"].replace("\n", "\\n").replace("\r", "\\r").replace("\"", '\\"')
        
        types = {
            "1": "leader",
            "2": "char",
            "3": "event",
            "4": "stage",
            "5": "don"
        }
        
        type_ = types[card["card_type"]]
        
        contents = stub % (
            id_, 
            id_, 
            name, 
            effect, 
            card["source_name"], 
            card["iu"], 
            type_,
            id_,
            id_,
            id_,
            id_,
        )
        
        with open(file, 'w', encoding="utf-8") as fp:
            fp.write(contents)

contents = ""

imports = "import %s from \"./%s\";\n"

for card in cards:
    id_ = f"{card['cid'].replace('-', '_')}_{card['gid']}"
    contents += imports % (id_, id_)

contents += "export const collection = [\n"

for card in cards:
    id_ = f"{card['cid'].replace('-', '_')}_{card['gid']}"
    contents += "%s,\n" % (id_)

contents += "];\n"

file = Path(f"../collection/index.ts")
    
with open(file, 'w', encoding="utf-8") as fp:
    fp.write(contents)
