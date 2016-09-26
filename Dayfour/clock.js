
var adventuringParty = {
    wizard: {

    },
    warrior: {
        health: 206,
        mana: 0,
        weapons: [
            { name: "Axe", damage: 50 },
            { name: "bow", damage: 10, arrow: [
                { name: "+1 Arrows of Punishing", qty: 3},
                { name: "Wooden Arrows", qty: 40}
            ]}
        ]
    }
}

var axeDamage = adventuringParty.warrior.weapons[0].damage;
console.log("Axe Damage: " + axeDamage);