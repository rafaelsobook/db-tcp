const allMonsterRecord = [
    { 
        monsId: makeRandNum(), 
        place: "hiddenland",
        monsLvl: 2,
        monsName: "golem",
        dn: "Golem",
        armorName: "",
        monsBreed: "normal",
        pos: {z: -80 + Math.random() * 80, x: -80 + Math.random() * 80},
        spd: 2 + Math.random() * .4, 
        hp: 1500,
        maxHp: 1500,
        atkInterval: 2100, 
        dmg: 105 + Math.random() * 30,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 270,
        desc: "Huge Monster that protects the forest, It harms everyone it sees"
        //effects: { effectType: "poisoned", chance: 6, dura: 1000, plusDmg: 50, dmgPm: 30 }
    },
    { 
        monsId: makeRandNum(), 
        place: "hiddenland",
        monsLvl: 2,
        monsName: "viper",
        dn: "Viper",
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
        desc: "Ferocious monster that can poison you to death",
        effects: { effectType: "poisoned", chance: 6, dura: 1000, plusDmg: 50, dmgPm: 30 }
    },
    { 
        monsId: makeRandNum(), 
        place: "hiddenland",
        monsLvl: 2,
        monsName: "hellhound",
        dn: "hellhound",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: -50 + Math.random() * 10, z: -50 + Math.random() * 100},
        spd: 5 + Math.random() * .5,
        hp: 1000,
        maxHp: 1000,
        atkInterval: 1400, 
        dmg: 30 + Math.random() * 30,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 1040,
        desc: "The monster that everyone is afraid of, It can absorb weapon damage and make transfer to its life",
        effects: { effectType: "absorb", absorbType: "weapon", defaultAbs: 20, chance: 9, dura: 100, plusDmg: 10, dmgPm: 0 }
    },
    { 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 1,
        monsName: "rabbit",
        dn: "rabbit",
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
        expGain: 10,
        desc: "Cute monsters that bite, their meat is delicious"
    },
    { 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 2,
        monsName: "goblin",
        dn: "goblin",
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
        expGain: 40,
        desc: "Small monsters but they can hunt for thei prey"
    },
    { 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 5,
        monsName: "ghost",
        dn: "ghost",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: -70 + Math.random() * 10, z: -70 + Math.random()*100},
        spd: 2.7 + Math.random() * .5,
        hp: 700,
        maxHp: 700,
        atkInterval: 2000, 
        dmg: 15 + Math.random() * 30,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 20,
        desc: "Creepy and not anything you throw can struck them"
    },
    { 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 2,
        monsName: "slime",
        dn: "slime",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: -70 + Math.random() * 10, z: -70 + Math.random()*100},
        spd: 2.4 + Math.random() * .5,
        hp: 100,
        maxHp: 100,
        atkInterval: 2000, 
        dmg: 10 + Math.random() * 10,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 10,
        desc: "small and slimey monsters, weak but can kill if they are with their crowd"
    },
    { 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 2,
        monsName: "eater",
        dn: "eater",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: -70 + Math.random() * 10, z: -70 + Math.random()*100},
        spd: 3 + Math.random() * .5,
        hp: 100,
        maxHp: 100,
        atkInterval: 1800, 
        dmg: 50 + Math.random() * 20,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 100,
        desc: "This creepy monsters lives usually inside dungeons"
    },
    { 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 5,
        monsName: "minotaur",
        dn: "minotaur",
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
        expGain: 90,
        desc: "A monstrous beast that will chase anyone they see"
    },
    { 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 10,
        monsName: "monoloth",
        dn: "monoloth",
        armorName: "spikey",
        monsBreed: "normal",
        pos: {x: -70 + Math.random() * 120, z: 50 + Math.random()*15},
        spd: 2.8 + Math.random() * .5,
        hp: 1100,
        maxHp: 1100,
        atkInterval: 2100, 
        dmg: 50 + Math.random() * 20,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 99,
        desc: "Buzzing monsters, You can easily tell if they are near",
        effects: { effectType: "poisoned", chance: 6, dura: 1000, plusDmg: 50, dmgPm: 30 }
    },

]

function makeRandNum(){
    return Math.random().toString().split(".")[1]
 }

module.exports = allMonsterRecord;