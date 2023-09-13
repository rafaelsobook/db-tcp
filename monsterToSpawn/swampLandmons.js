const swampLandmons = [
    { 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 1,
        monsName: "rabbit",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: -50 + Math.random() * 5, z: -70 + Math.random()*130},
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
    },
    { 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 2,
        monsName: "goblin",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: -70 + Math.random() * 10, z: -70 + Math.random()*100},
        spd: 2.7 + Math.random() * .5,
        hp: 300,
        maxHp: 300,
        atkInterval: 1900, 
        dmg: 20 + Math.random() * 30,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 40
    },
    { 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 5,
        monsName: "minotaur",
        armorName: "",
        monsBreed: "normal",
        pos: {x: 70 + Math.random() * 10, z: -70 + Math.random()*100},
        spd: 3 + Math.random() * .5, 
        hp: 1000,
        maxHp: 1000,
        atkInterval: 2000, 
        dmg: 50 + Math.random() * 20,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 90
    },
    { 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 10,
        monsName: "monoloth",
        armorName: "spikey",
        monsBreed: "normal",
        pos: {x: -70 + Math.random() * 120, z: 50 + Math.random()*15},
        spd: 2.8 + Math.random() * .5,
        hp: 1000,
        maxHp: 1000,
        atkInterval: 2100, 
        dmg: 50 + Math.random() * 20,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 99,
        effects: { effectType: "poisoned", chance: 6, dura: 1000, plusDmg: 50, dmgPm: 30 }
    }
]

function makeRandNum(){
    return Math.random().toString().split(".")[1]
 }

module.exports = swampLandmons;