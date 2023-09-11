const hiddenLandmons = [
    { 
        monsId: makeRandNum(), 
        place: "hiddenland",
        monsLvl: 2,
        monsName: "viper",
        armorName: "",
        monsBreed: "normal",
        pos: {z: -50 + Math.random() * 50, x: -50 + Math.random() * 50},
        spd: 3 + Math.random() * .6, 
        hp: 1200,
        maxHp: 1200,
        atkInterval: 1800, 
        dmg: 75 + Math.random() * 20,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 150,
        effects: { effectType: "poisoned", chance: 6, dura: 1000, plusDmg: 50, dmgPm: 30 }
    },
    { 
        monsId: makeRandNum(), 
        place: "hiddenland",
        monsLvl: 2,
        monsName: "hellhound",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: -50 + Math.random() * 10, z: -50 + Math.random() * 100},
        spd: 5 + Math.random() * .5,
        hp: 600,
        maxHp: 600,
        atkInterval: 1400, 
        dmg: 1 + Math.random() * 30,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 1040,
        effects: { effectType: "absorb", absorbType: "weapon", defaultAbs: 20, chance: 9, dura: 100, plusDmg: 10, dmgPm: 0 }
    },
    { 
        monsId: makeRandNum(), 
        place: "hiddenland",
        monsLvl: 5,
        monsName: "goblin",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: -70 + Math.random() * 140, z: -70 + Math.random() * 140},
        spd: 2.7 + Math.random() * .5,
        hp: 400,
        maxHp: 300,
        atkInterval: 1900, 
        dmg: 30 + Math.random() * 30,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 120
    }
]

function makeRandNum(){
    return Math.random().toString().split(".")[1]
 }

module.exports = hiddenLandmons;