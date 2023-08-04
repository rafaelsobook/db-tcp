const http = require("http")
const express = require("express")
const app = express()
const cors = require("cors");
const server = http.createServer(app)
const {Server} = require("socket.io")
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({extended: false}))
let uzers = []
let lootz = [
    {
        itemType:"sword",magRes: 0, meshId: makeRandNum(), 
        name: "oakblade", place: "heartland", plusDef: 0,
        durability: 3000, cState: 3000, plusDmg: 35, plusMag: 20, price: 1000,
        x: -53, z: 21
    }
]
let monz = []
let seedz = []
let flowerz = []
let orez = [
{ meshId: '145', spawntype: "ore", place: "swampforest", pos: "10,-30", hits: 30},
{ meshId: 'ore4512', spawntype: "ore", place: "swampforest", pos: "20,-30", hits: 30},
]
// const {swampTreez} = require("./swampforest")
let treez = [{ meshId: '4w2', spawntype: "trees", place: "swampforest", pos: "-50,2", hits: 2}]
const trsureSec = require("./trsureSec.js")
let treasurez = trsureSec;

let housez = []
let bonfires = [{meshId: 'bon12bas', isCooking: false, pos: {x: -14, z: -21}, place: 'swampforest'}]

app.get("/", (req, res) => {
    res.send(uzers).status(200)
})
const io = new Server(server, {
    cors: { 
        origin:["https://dungeon-born.com", 'https://rafael29.itch.io/dungeon-born','https://v6p9d9t4.ssl.hwcdn.net','http://localhost:8080', 'https://dungeonborn.vercel.app'],
        methods: ["GET", "POST"]
    }
})
// ,'http://localhost:8080', 'https://dungeonborn.vercel.app'
// const io = require("socket.io")(server, {
//     allowRequest: (req, callback) => {
//       const noOriginHeader = req.headers.origin === undefined;
//       callback(null, noOriginHeader);
//     }
// });
const log = console.log

let swmpHounds = -15
while(swmpHounds <= 0){
    monz.push({ 
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
    })
    swmpHounds += 4
}
let heartlandRabits = 0
while(heartlandRabits <= 5){
    monz.push({ 
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
    })
    monz.push({ 
        monsId: makeRandNum(), 
        place: "heartland",
        monsLvl: 1,
        monsName: "rabbit",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: -68 + Math.random() * 3, z: -65 + Math.random()*120},
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
    })
    heartlandRabits += 1
}
let swmpRabbits = -0
while(swmpRabbits <= 15){
    monz.push({ 
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
    })
    swmpRabbits += 1
}
let leftGoblins = -45
while(leftGoblins <= 10){
    monz.push({ 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 2,
        monsName: "goblin",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: -70 + Math.random() * 10, z: leftGoblins + Math.random() * 2},
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
    })
    monz.push({ 
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
    })
    leftGoblins += 4
}
let minotaur = -70
while(minotaur <= 100){
    monz.push({ 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 5,
        monsName: "minotaur",
        armorName: "",
        monsBreed: "normal",
        pos: {x: 70 + Math.random() * 10, z: minotaur + Math.random() * 2},
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
    })
    minotaur += 24
}
let snake = -30
while(snake <= 30){
    if(snake > 5){
        monz.push({ 
            monsId: makeRandNum(), 
            place: "swampforest",
            monsLvl: 2,
            monsName: "viper",
            armorName: "",
            monsBreed: "normal",
            pos: {z: 50 + Math.random() * 8, x: snake},
            spd: 3 + Math.random() * .6, 
            hp: 1000,
            maxHp: 1000,
            atkInterval: 1500, 
            dmg: 70 + Math.random() * 20,
            isChasing: false,
            isAttacking: false,
            isHit: false,
            targHero: undefined,
            expGain: 150,
            effects: { effectType: "poisoned", chance: 6, dura: 1000, plusDmg: 50, dmgPm: 30 }
        })
        monz.push({ 
            monsId: makeRandNum(), 
            place: "swampforest",
            monsLvl: 10,
            monsName: "monoloth",
            armorName: "spikey",
            monsBreed: "normal",
            pos: {x: snake - Math.random() * 20, z: 40},
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
        })
    }
    monz.push({ 
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
    })
    snake += 10
}
let golems = -40
while(golems <= 40){
    monz.push({ 
        monsId: makeRandNum(), 
        place: "hiddenland",
        monsLvl: 2,
        monsName: "golem",
        armorName: "",
        monsBreed: "normal",
        pos: {z: -80 + Math.random() * 80, x: -80 + Math.random() * 80},
        spd: 2 + Math.random() * .4, 
        hp: 1000,
        maxHp: 1000,
        atkInterval: 2100, 
        dmg: 105 + Math.random() * 30,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 270,
        //effects: { effectType: "poisoned", chance: 6, dura: 1000, plusDmg: 50, dmgPm: 30 }
    })
    golems += 10
}
// one golem in swampforest
monz.push({ 
    monsId: makeRandNum(), 
    place: "swampforest",
    monsLvl: 2,
    monsName: "golem",
    armorName: "",
    monsBreed: "normal",
    pos: {z: 80, x: -7},
    spd: 2 + Math.random() * .4, 
    hp: 4000,
    maxHp: 4000,
    atkInterval: 2000, 
    dmg: 200 + Math.random() * 100,
    isChasing: false,
    isAttacking: false,
    isHit: false,
    targHero: undefined,
    expGain: 250,
    //effects: { effectType: "poisoned", chance: 6, dura: 1000, plusDmg: 50, dmgPm: 30 }
})
// TREES HIDDEN LAND
let hlandTrees = 0
while(hlandTrees <= 190){
    treez.push({ 
        meshId: makeRandNum(), 
        spawntype: "trees", 
        place: "hiddenland", 
        pos: `${-81 + Math.random() * 161},${-81 + Math.random() * 161}`,
        hits: 130
    })
    hlandTrees += 1
}
// TREES SWAMPFOREST
let rightT1 = 0
while(rightT1 <= 90){
    treez.push({ 
        meshId: Math.random().toString().split(".")[1], 
        spawntype: "trees", 
        place: "swampforest", 
        pos: `${-61 + Math.random() * 20},${rightT1 === 0 ? -75 : -75 + rightT1 + Math.random()}`,
        hits: 30
    })
    // SWAMPFOREST NEAR ENTRANCE TO HIDDEN LAND

    if(rightT1 >= 71) treez.push({ 
        meshId: Math.random().toString().split(".")[1], 
        spawntype: "trees", 
        place: "swampforest", 
        pos: `${-5 + Math.random() * 6},${76+Math.random()*8}`,
        hits: 10273230
    })
    if(rightT1 >= 71) treez.push({ 
        meshId: Math.random().toString().split(".")[1], 
        spawntype: "trees", 
        place: "swampforest", 
        pos: `${-10 - Math.random() * 6},${76+Math.random()*8}`,
        hits: 10273230
    })
    // HIDDEN LAND NEAR ENTRANCE TO HIDDEN LAND
    // entrance
    if(rightT1 >= 71) treez.push({ 
        meshId: Math.random().toString().split(".")[1], 
        spawntype: "trees", 
        place: "hiddenland", 
        pos: `${-5 + Math.random() * 6},${-100+Math.random()*8}`,
        hits: 10273230
    })
    if(rightT1 >= 71) treez.push({ 
        meshId: Math.random().toString().split(".")[1], 
        spawntype: "trees", 
        place: "hiddenland", 
        pos: `${-10 - Math.random() * 6},${-100+Math.random()*8}`,
        hits: 10273230
    })
    rightT1 += 3
}
let leftT = 0
while(leftT <= 90){
    treez.push({ 
        meshId: Math.random().toString().split(".")[1], 
        spawntype: "trees", 
        place: "swampforest", 
        pos: `${61 + Math.random() * 20},${leftT === 0 ? -75 : -75 + leftT + Math.random()}`,
        hits: 30
    })
    leftT += 3
}
let centerFront = 0
while(centerFront <= 50){
    treez.push({ 
        meshId: Math.random().toString().split(".")[1], 
        spawntype: "trees", 
        place: "swampforest", 
        pos: `${centerFront === 0 ? -50 : -50 + centerFront + Math.random()}, ${-70 + Math.random() * 40}`,
        hits: 2
    })
    centerFront += 5
}
let centerBack = 0
while(centerBack <= 30){
    treez.push({ 
        meshId: Math.random().toString().split(".")[1], 
        spawntype: "trees", 
        place: "swampforest", 
        pos: `${centerBack === 0 ? -50 : -50 + centerBack + Math.random()}, ${15 + Math.random() * 50}`,
        hits: 2
    })
    centerBack += 2
}
// flowers
let flowersBack = -30
while(flowersBack <= 40){
    flowerz.push({ 
        meshId: makeRandNum(), 
        spawntype: "flowers", 
        place: "swampforest", 
        pos: {x: flowersBack,z: 45 + Math.random()*15},
        name: "stam1",
    })
    flowerz.push({ 
        meshId: makeRandNum(), 
        spawntype: "herbs", 
        place: "swampforest", 
        pos: {x: -65 + Math.random()*25 ,z: flowersBack+Math.random()*9,},
        name: "lotusHerb",
    })
    flowerz.push({ 
        meshId: makeRandNum(), 
        spawntype: "herbs", 
        place: "swampforest", 
        pos: {x: 65 + Math.random()*25 ,z: flowersBack+Math.random()*9,},
        name: "lotusHerb",
    })
    flowersBack += 5
}
// TREES HEARTLEAND
let hLandTR = 0
while(hLandTR <= 136){
    treez.push({ 
        meshId: Math.random().toString().split(".")[1], 
        spawntype: "trees", 
        place: "heartland", 
        pos: `${-64 - Math.random() * 12},${hLandTR === 0 ? -75 : -75 + hLandTR + Math.random()}`,
        hits: 30
    })
    hLandTR += 3
}
let hLandTL = 0
while(hLandTL <= 136){
    treez.push({ 
        meshId: makeRandNum(),
        spawntype: "house", 
        place: "heartland", 
        pos: `${64 + Math.random() * 12},${hLandTL === 0 ? -75 : -75 + hLandTL + Math.random()}`,
        hits: 30
    })
    hLandTL += 3
}
let hLandBacktree = -70
while(hLandBacktree <= 70){
    treez.push({ 
        meshId: Math.random().toString().split(".")[1], 
        spawntype: "trees", 
        place: "heartland", 
        pos: `${hLandBacktree + Math.random()* 2}, ${66 + Math.random() * 7}`,
        hits: 2
    })
    hLandBacktree += 3
}
// heartLand houses
let hLandHoR = 10
const houseNoMax = 1.8
while(hLandHoR <= 50){
    let houseDet = {
        meshId: '123',
        spawntype: "apartment",
        place: "heartland",
        pos: "1,2",
        houseNo: 1,
        occupiedBy: 'none',
    }
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoR},-50`,
        houseNo: Math.floor(Math.random()*houseNoMax),
        spawntype: "apartment",
        occupiedBy: "none"
    })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoR},-30`,
        houseNo: Math.floor(Math.random()*houseNoMax),
        spawntype: "apartment",
        occupiedBy: "none"
    })
    // housez.push({...houseDet, 
    //     meshId: makeRandNum(),
    //     pos: `${hLandHoR},0`,
    //     houseNo: Math.floor(Math.random()*1.4)
    // })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoR},20`,
        houseNo: Math.floor(Math.random()*houseNoMax),
        spawntype: "apartment",
        occupiedBy: "none"
    })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoR},40`,
        houseNo: Math.floor(Math.random()*houseNoMax),
        spawntype: "apartment",
        occupiedBy: "none"
    })
    hLandHoR += 10
}
let hLandHoL = -10
while(hLandHoL >= -50){
    let houseDet = {
        meshId: '123',
        spawntype: "house",
        place: "heartland",
        pos: "1,2",
        houseNo: 2,
        occupiedBy: 'none',
    }
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoL},-50`,
        houseNo: Math.floor(Math.random()*houseNoMax)
    })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoL},-30`,
        houseNo: Math.floor(Math.random()*houseNoMax)
    })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoL},0`,
        houseNo: Math.floor(Math.random()*houseNoMax)
    })
    // housez.push({...houseDet, 
    //     meshId: makeRandNum(),
    //     pos: `${hLandHoL},20`,
    //     houseNo: Math.floor(Math.random()*houseNoMax)
    // })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoL},40`,
        houseNo: Math.floor(Math.random()*houseNoMax)
    })
    hLandHoL -= 10
}

let worldTime = 1 // 0 - 1 is morning 1-2 is going night
let isNight = false
let timeToAddDeduct = .1
let theSocket = undefined
setInterval(() => {
    if(theSocket === undefined) return
    
    if(!isNight){
        worldTime-=.005
        if(worldTime < .2) isNight = true
    }
    if(isNight){
        worldTime+=.005
        if(worldTime > .9) isNight = false
    }
    io.emit("time-changed", {worldTime})

    // SWAMP FOREST AREA
    let viperQnty = 0
    let minotaurQnty = 0
    let gobQnty = 0
    let monolothQnty = 0
    monz.forEach(mon => {
        mon.monsName === "viper" && viperQnty++
        mon.monsName === "minotaur" && minotaurQnty++
        mon.monsName === "goblin" && gobQnty++
        mon.monsName === "monoloth" && monolothQnty++
    })
    if(viperQnty <= 2){
        log("add more viper")
        monz.push({ 
            monsId: makeRandNum(), 
            place: "swampforest",
            monsLvl: 5,
            monsName: "viper",
            armorName: "",
            monsBreed: "normal",
            pos: {z: 50 + Math.random() * 8, x: 70},
            spd: 3 + Math.random() * .6, 
            hp: 1200,
            maxHp: 1200,
            atkInterval: 1500, 
            dmg: 70 + Math.random() * 20,
            isChasing: false,
            isAttacking: false,
            isHit: false,
            targHero: undefined,
            expGain: 150,
            effects: { effectType: "poisoned", chance: 6, dura: 1000, plusDmg: 50, dmgPm: 30 }
        })
        io.emit("add-recources", {monz, flowerz})
    }
    if(minotaurQnty <= 8){
        log("add more minotaur")
        monz.push({ 
            monsId: makeRandNum(), 
            place: "swampforest",
            monsLvl: 5,
            monsName: "minotaur",
            armorName: "",
            monsBreed: "normal",
            pos: {x: 70 + Math.random() * 10, z: -65 + Math.random() * 120},
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
        })
        io.emit("add-recources", {monz, flowerz})
    }
    if(gobQnty <= 8){
        log("add more goblin")
        monz.push({ 
            monsId: makeRandNum(), 
            place: "swampforest",
            monsLvl: 2,
            monsName: "goblin",
            armorName: "green",
            monsBreed: "normal",
            pos: {x: -70 + Math.random() * 10, z: -65 + Math.random() * 120},
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
        })
        io.emit("add-recources", {monz, flowerz})
    }
    if(monolothQnty <= 3){
        log("add more monoloth")
        monz.push({ 
            monsId: makeRandNum(), 
            place: "swampforest",
            monsLvl: 10,
            monsName: "monoloth",
            armorName: "spikey",
            monsBreed: "normal",
            pos: {x: -30 + Math.random() * 60, z: 40 + Math.random()*5},
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
        })
        io.emit("add-recources", {monz, flowerz})
    }
    // END OF SWAMPFOREST AREA

}, 2000)

io.on("connection", socket => {
    theSocket = socket
    socket.on("join", data => {
        log('someone joined')
        const isUser = uzers.some(user => user._id === data._id)
        if(isUser){
            io.emit("deliver-reload", data._id)
            log("user already in")
        }else{
            uzers.push({...data, socketId: socket.id})
            log(`${data.name} has joined`)
            io.emit("userJoined", {_id: data._id, place: data.currentPlace,uzers,orez,treez, seedz, monz, treasurez, lootz, housez, bonfires, flowerz}) //monz is the AI monsters    
        }
    })
    socket.on("stop", detal => {
        const theUser = uzers.find(user => user._id === detal._id)
        if(!theUser) return log("the uzer stop is not registered on the uzers")
  
        io.emit("aUzerStopped", detal)
        log(`${theUser.name} has stoped walking !`)
        uzers = uzers.map(user => user._id === detal._id ? {...user, _minning: false, _training: false, dirTarg: { x:detal.dirTarg.x ,z:detal.dirTarg.z}, x: detal.mypos.x, z: detal.mypos.z, mode: detal.mode} : user)
    })
    socket.on("redirectTarg", detal => {
        const theUser = uzers.find(user => user._id === detal._id)
        if(!theUser) return log("the uzer stop is not registered on the uzers")
  
        io.emit("targetChanged", detal)
        log(`${theUser.name} has changed target !`)
        uzers = uzers.map(user => user._id === detal._id ? {...user, _minning: false, _training: false, dirTarg: { x:detal.dirTarg.x ,z:detal.dirTarg.z}} : user)
    })
    socket.on("stop-dosomething", detal => {
        const theUser = uzers.find(user => user._id === detal._id)
        if(!theUser) return
  
        io.emit("aUzerWillDoSomething", detal)
        
        uzers = uzers.map(user => user._id === detal._id ? {...user, _minning: false, _training: false, dirTarg: { x:detal.dirTarg.x ,z:detal.dirTarg.z}, x: detal.mypos.x, z: detal.mypos.z, mode: detal.mode} : user)
    })
    socket.on("move", detal => {
        io.emit("aMechMove", detal)
    })
    socket.on("changeMode", detal => {
        const exist = uzers.find(user=>user._id === detal._id)
        if(!exist) return log("cannot find uzer")

        io.emit("changedMode", detal)

        uzers = uzers.map(user => user._id === detal._id ? {...user, mode: detal.mode } : user)
    })
    // ACTIONS FIRING !
    socket.on("willcast", data => {
        const exist = uzers.find(user=>user._id === data._id)
        if(!exist) return log("cannot find uzer")
    
        io.emit('user-iscasting', data)
        uzers = uzers.map(user => user._id === data._id ? {...user, mode: "none", dirTarg: data.inFrontPos, _casting: true } : user)
    })
    socket.on("cast-skill", data => {
        const exist = uzers.find(user=>user._id === data._id)
        if(!exist) return log("cannot find uzer")
        
        io.emit('user-cast', data)
    })
    socket.on("will-drop-sword", data => {
        io.emit('w-d-s', data)
    })
    socket.on("sword-isdroped", data => {
        log('before lootz ', lootz)
        lootz.push(data.swordData)
        io.emit("s-i", {data,lootz})
        log('after lootz ', lootz)
    })
    socket.on("attack", data => {
        const exist = uzers.find(user=>user._id === data._id)
        if(!exist) return log("cannot find uzer")
    
        io.emit('userAttack', data)
        uzers = uzers.map(user => user._id === data._id ? {...user, mode: data.mode, dirTarg: data.dirTarg } : user)
    })
    socket.on("will-throw", data => {
        io.emit('user-throw', data)
    })
    socket.on("action-willthrow", data => {
        io.emit("action-throwing", data)
    })
    socket.on("userMine", data => {
        io.emit("userIsMinning", data)
        uzers = uzers.map(user => user._id === data._id ? {...user, x: data.pos.x, z: data.pos.z, dirTarg: data.dirTarg, _minning: true, mode: data.mode } : user)
    })
    socket.on("userTrain", data => {
        log("mode " + data.mode)
        io.emit("userIsTraining", data)
        uzers = uzers.map(user => user._id === data._id ? {...user, x: data.pos.x, z: data.pos.z, dirTarg: data.dirTarg, _training: true, mode: data.mode } : user)
    })
    socket.on("userBump", data => {
        io.emit("aUserBumped", data)
        uzers = uzers.map(user => user._id === data._id ? {...user, x: data.pos.x, z: data.pos.z, dirTarg: data.dirTarg, _training: false, _minning: false, mode: 'stand' } : user)
    })
    
    // FROM ADMIN EMITS
    socket.on("ore", data => {
        orez.push(data)
        io.emit("receiveOre", data)
    })
    socket.on("trees", data => {
        treez.push(data)
        io.emit("receiveWood", data)
    })
    socket.on("treasure", data => {
        treasurez.push(data);
        // { isOpening: false,itemType:"treasure",magRes: 10, meshId: '1243274', 
        // name: "karba", openingBy: undefined, place: "swampforest", plusDef: 30,
        //     plusDmg: 0, price: 20000, qnty: 1, x: 4, z: -32}
           
        io.emit("putTreasure", data)
    })
    socket.on("sword", data => {
        log(data)
        lootz.push(data)
        io.emit("add-recources", {monz, flowerz, lootz})
    })
    socket.on("will-open-treasure", data => {
        io.emit('treasure-isOpening', data)
        treasurez = treasurez.map(tre => tre.meshId === data.meshId ? {...tre, openingBy: data.openingBy, isOpening: true} : tre)
        log('is opening treasure')
        uzers = uzers.map(user => user._id === data.openingBy ? {...user, mode: data.mode } : user)
    })
    socket.on("reclose-treasure", meshId => {
        log("reclose")
        log(meshId)
        treasurez = treasurez.map(tre => tre.meshId === meshId ? {...tre, openingBy:undefined, isOpening:false} : tre)
        log(treasurez)
        io.emit("reclosedTreasure", meshId)
    })
    socket.on("showSwords", uzerdId => io.emit('shownSwordLength', uzerdId))

    // ABOUT RECOURCES
    socket.on("oreDeductHits", data => {
        io.emit("oreDeducted", data)

        orez = orez.map(oree => oree.meshId === data.meshId ? {...oree, hits: oree.hits-1} : oree)

        const theOre = orez.find(oree => oree.meshId === data.meshId)
        if(theOre && theOre.hits <= 0){
            orez = orez.filter(oree => oree.meshId !== data.meshId)
        }
    })
    socket.on("treeDeductHits", data => {
        io.emit("treeDeducted", data)

        treez = treez.map(puno => puno.meshId === data.meshId ? {...puno, hits: puno.hits-1} : puno)

        const theTree = treez.find(puno => puno.meshId === data.meshId)
        if(theTree && theTree.hits <= 0){
            treez = treez.filter(puno => puno.meshId !== data.meshId)
        }
    })
    socket.on("treasure-opened", data => {
        io.emit("treasure-removed", data)
        log("line 144" + data.meshId)
        treasurez = treasurez.filter(tre => tre.meshId !== data.meshId)
    })
    socket.on("plantSeed", data => {
        const {meshId, spawntype, place,pos,hits} = data
        const toPush = { meshId, spawntype, place,pos,hits}
        seedz.push(toPush)
        io.emit("userWillPlant", data)
    })
    socket.on("plant-bonfire", data => {
        bonfires.push({...data, isCooking: false})

        io.emit('bonfire-crafted', bonfires)
    })
    // spawncheats by admin
    socket.on("sft", data => {
        //isang besses lang dapat irun to 
        // kada simula ng server
        // pag isipan mabuti
        data.forEach(dat => {
            treez.push(dat)
        })
        log("trees " + data.length)
    })
    socket.on("swmpmons", data => {
        //isang besses lang dapat irun to 
        // kada simula ng server
        // pag isipan mabuti
        data.forEach(dat => {
            monz.push(dat)
        })
        log("mons length  " + data.length)
    })

    socket.on("monsWillChase", data => {
        monz = monz.map(mon => mon.monsId === data.monsId ? {...mon, isChasing: true, isAttacking: false, targHero: data.targHero} : mon)
        io.emit("monsIsChasing", data)
    })
    socket.on("monster-willthrow", data => {
        
        io.emit("mons-thrown", data)
    })
    socket.on("monsWillStop", data => {
        monz = monz.map(mon => mon.monsId === data.monsId ? {...mon, isChasing: false, isAttacking: false, targHero: undefined, pos: data.pos} : mon)
        io.emit("monsStopped", data)
    })
    socket.on("monsWillAttack", data => {
        monz = monz.map(mon => mon.monsId === data.monsId ? {...mon, isAttacking: true, isChasing: false, targHero: data.targHero, pos: data.pos} : mon)
        const theMonster = monz.find(mons => mons.monsId === data.monsId)
        io.emit("monsAttack", {detal: data, theMonsterHP: theMonster ? theMonster.hp : 0})
    })
    socket.on("monsterIsHit", data => {
        
        monz = monz.map(mons => mons.monsId === data.monsId ? {...mons,pos: data.pos, hp: mons.hp -= data.dmgTaken} : mons)
        uzers = uzers.map(theuser => theuser._id === data._id ? {...theuser, x: data.mypos.x, z: data.mypos.z} : theuser)
        
        const theMonster = monz.find(mons => mons.monsId === data.monsId)
        
        io.emit("monsterGotHit", {detal: data, theMonsterHP: theMonster ? theMonster.hp : 0})
        
    })
    socket.on("monsDied", data => {
        monz = monz.filter(mons => mons.monsId !== data.monsId)
        
        io.emit("check-monsdied", data)
    })
    socket.on('playerIsHit', data => {
        uzers = uzers.map(user => user._id === data._id ? {...user, _minning: false, _training: false} : user)
        io.emit("playerHitted", data)
    })
    socket.on('playerIsHitByHero', detal => {

        const theUzer = uzers.find(usr => usr._id === detal.targHero)
        if(!theUzer) return log("the player not found line 185")
        uzers = uzers.map(user => user._id === detal.targHero ? {...user, _minning: false, _training: false, dirTarg: { x:detal.dirTarg.x ,z:detal.dirTarg.z}, x: detal.pos.x, z: detal.pos.z} : user)

        io.emit("hitByHero", detal)
    })
    socket.on("showDeductLifeInPublic", data => {
        io.emit('deductLifeInMesh', data)
    })
    socket.on("playerDied", data => {
        const theUzer = uzers.find(user => user._id === data._id)
        if(theUzer){
            const newArr = uzers.filter(user => user._id !== data._id)
            uzers = newArr
            monz = monz.map(mon => mon.targHero === data._id ? {...mon, isChasing: false, isAttacking: false, targHero: undefined} : mon)
            io.emit("aUserDied", data)
        }else{log("a user not found ! line 153")}
    })
    // UNSHOW SWORD AFTER THROWING THE SWORD
    socket.on("unShowSword", data => {
     
        const theUser = uzers.find(uzer => uzer._id === data._id)
        if(!theUser) return log("line 172 unshowsword uzer not found on uzers")
  
        uzers = uzers.map(uzer => uzer._id === data._id ? {...uzer, weapon: "none"} : uzer)
        io.emit('swordhide', data)
    })
    socket.on("equipingSword", data => {
        uzers = uzers.map(uzer => uzer._id === data._id ? {...uzer, weapon: data.swordDetail, mode: data.mode} : uzer)
        io.emit("aUserEquipSword", data)
    })
    socket.on("equipArmor", data => {
        uzers = uzers.map(uzer => uzer._id === data._id ? {...uzer, armor: data.armorDetail, mode: data.mode} : uzer)
        io.emit("aUserEquipArmor", data)
    })
    socket.on("equipGear", data => {
        uzers = uzers.map(uzer => uzer._id === data._id ? {...uzer, gear: data.itemDetail, mode: data.mode} : uzer)
        io.emit("aUserEquipGear", data)
    })
    socket.on("equipingShield", data => {
        uzers = uzers.map(uzer => uzer._id === data._id ? {...uzer, shield: data.itemDetail, mode: data.mode} : uzer)
        io.emit("aUserEquipShield", data)
    })
    socket.on("equipingHelmet", data => {
        uzers = uzers.map(uzer => uzer._id === data._id ? {...uzer, helmet: data.itemDetail, mode: data.mode} : uzer)
        io.emit("aUserEquipHelmet", data)
    })
    socket.on("unequip", data => {
        switch(data.itemType){
            case "armor":
                uzers = uzers.map(uzer => uzer._id === data._id ? {...uzer, armor: "none"} : uzer)
            break;
            case "gear":
                uzers = uzers.map(uzer => uzer._id === data._id ? {...uzer, gear: "none"} : uzer)
            break;
            case "helmet":
                uzers = uzers.map(uzer => uzer._id === data._id ? {...uzer, helmet: "none"} : uzer)
            break;
            case "shield":
                uzers = uzers.map(uzer => uzer._id === data._id ? {...uzer, shield: "none"} : uzer)
            break;
            case "sword":
                uzers = uzers.map(uzer => uzer._id === data._id ? {...uzer, sword: "none"} : uzer)
            break;
        }
        io.emit("aUserUnEquiped", data)
    })
    socket.on("pickSword", data => {
        lootz = lootz.filter(loot => loot.meshId !== data.meshId)
        log("lootz been deducted");

        io.emit("swordIsPicked", data)
    })
    socket.on("pickFlower", data => {
        flowerz = flowerz.filter(loot => loot.meshId !== data.meshId)

        io.emit("flowerIsPicked", data)
    })
    socket.on("ping", data => {
        io.emit('pinged', {name: data.name, length: uzers.length})
    })
    // WORLD CHAT
    socket.on('sendto-world', data => {
        io.emit('sentto-world', data)
    })
    // DISCONNECTIONS
    socket.on('dispose', data => {
        const theUzer = uzers.find(user => user._id === data._id)
        if(theUzer){
            uzers = uzers.filter(user => user._id !== data._id)
            monz = monz.map(mon => mon.targHero === theUzer._id ? {...mon, isChasing: false, isAttacking: false, targHero: undefined} : mon)
        }
        log("total of players after disconnect " + uzers.length)
        io.emit('removeChar', data)
    })
    socket.on("disconnect", () => {
        const theUzer = uzers.find(user => user.socketId === socket.id)
        if(theUzer){
            const newArr = uzers.filter(user => user.socketId !== socket.id)
            uzers = newArr
            monz = monz.map(mon => mon.targHero === theUzer._id ? {...mon, isChasing: false, isAttacking: false, targHero: undefined} : mon)
            io.emit("aUserDisconnect", theUzer._id)
            log("total of players after disconnect " + uzers.length)
        }else{log("a user disconnects not found !")}
    })
})

server.listen(PORT, () => log("TCP server is on"))

function makeRandNum(){
    return Math.random().toString().split(".")[1]
 }