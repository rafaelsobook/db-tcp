const heartLandmons = [
    { 
        monsId: makeRandNum(), 
        place: "heartland",
        monsLvl: 1,
        monsName: "rabbit",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: 67 + Math.random() * 3, z: -65 + Math.random()*120},
        spd: 2 + Math.random() * .5,
        hp: 80,
        maxHp: 80,
        atkInterval: 1800, 
        dmg: 10 + Math.random() * 10,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 10
    }
]

function makeRandNum(){
    return Math.random().toString().split(".")[1]
 }

module.exports = heartLandmons;