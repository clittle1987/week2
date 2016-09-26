
 /*
 Teachers way of doing objects, gandalf vs conan
--------------------------------------------------------------------------------

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
//console.log("Axe Damage: " + axeDamage);

adventuringParty.warrior.swingAxe = function() {
    var maxDamage = adventuringParty.warrior.weapons[0].damage;
    return Math.random() * maxDamage; 
}
console.log("Axe Damage: " + adventuringParty.warrior.swingAxe());
adventuringParty.warrior.shootWoodenArrow = function() {

}

adventuringParty.warrior.shootWoodenArrow = function() {
    var maxDamage = adventuringParty.warrior.weapons[1].arrow[1].damage;
}
*/

          //             Teachers way of doing objects, gandalf vs conan
//----------------------------------------------------------------------------------------

var adventuringParty = {
    wizard: {
        name: "Gandalf",
        health: 43,
        mana: 248,
        weapons: [
            { name: "Staff", damage: 5 },
            { name: "Dagger", damage: 1}
        ]
    },
    warrior: {
        name: "Conan",
        health: 206,
        mana: 0,
        weapons: [
            { name: "Axe", damage: 50 },
            { name: "Bow", arrow: [
                { name: "+1 Arrows of Punishing", damage: 40, qty: 3},
                { name: "Wooden Arrows", damage: 10, qty: 4}
            ]}
        ]
    }
}
adventuringParty.warrior.swingAxe = function() {
    console.log(adventuringParty.warrior.name + " viciously swings his axe");
    var maxDamage = adventuringParty.warrior.weapons[0].damage;
    return Math.round( Math.random() * maxDamage );
}
adventuringParty.warrior.shootWoodenArrow = function() {
    var arrow = adventuringParty.warrior.weapons[1].arrow[1];
    var maxDamage = arrow.damage;

    // return arrow.qty-- > 0 ? Math.round( Math.random() * maxDamage ) : 0;
    if(arrow.qty > 0) {
        console.log(adventuringParty.warrior.name + " shoots a wooden arrow from his bow");
        arrow.qty--;
        return Math.round( Math.random() * maxDamage );
    }
    return 0;
}
var listWeapons = function(character) {
    console.log("Listing weapons for " + character.name);
    for(var i in character.weapons) {
        var weapon = character.weapons[i];
        console.log("\t* " + weapon.name);
    }
}
console.log("Bow Damage: " + adventuringParty.warrior.shootWoodenArrow());
console.log("Bow Damage: " + adventuringParty.warrior.shootWoodenArrow());
console.log("Bow Damage: " + adventuringParty.warrior.shootWoodenArrow());
console.log("Bow Damage: " + adventuringParty.warrior.shootWoodenArrow());
console.log("Bow Damage: " + adventuringParty.warrior.shootWoodenArrow());
console.log("Axe Damage: " + adventuringParty.warrior.swingAxe());
listWeapons( adventuringParty.warrior );
listWeapons( adventuringParty.wizard );

