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
let lootz = []
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
        origin:['https://rafael29.itch.io/dungeon-born','https://v6p9d9t4.ssl.hwcdn.net','http://localhost:8080', 'https://dungeonborn.vercel.app'],
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
    leftGoblins += 4
}
let minotaur = -70
while(minotaur <= 100){
    monz.push({ 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 2,
        monsName: "minotaur",
        armorName: "",
        monsBreed: "normal",
        pos: {x: 70 + Math.random() * 10, z: minotaur + Math.random() * 2},
        spd: 3 + Math.random() * .5, 
        hp: 1000,
        maxHp: 1000,
        atkInterval: 2400, 
        dmg: 20 + Math.random() * 30,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 90
    })
    minotaur += 24
}

let snake = -40
while(snake <= 40){
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
        dmg: 65 + Math.random() * 30,
        isChasing: false,
        isAttacking: false,
        isHit: false,
        targHero: undefined,
        expGain: 150
    })
    snake += 10
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
while(hLandHoR <= 50){
    let houseDet = {
        meshId: '123',
        spawntype: "apartment",
        place: "heartland",
        pos: "1,2",
        houseNo: 2,
        occupiedBy: 'none',
    }
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoR},-50`,
        houseNo: Math.floor(Math.random()*1.4),
        spawntype: "apartment",
        occupiedBy: "none"
    })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoR},-30`,
        houseNo: Math.floor(Math.random()*1.4),
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
        houseNo: Math.floor(Math.random()*1.4),
        spawntype: "apartment",
        occupiedBy: "none"
    })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoR},40`,
        houseNo: Math.floor(Math.random()*1.4),
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
        houseNo: Math.floor(Math.random()*1.4)
    })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoL},-30`,
        houseNo: Math.floor(Math.random()*1.4)
    })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoL},0`,
        houseNo: Math.floor(Math.random()*1.4)
    })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoL},20`,
        houseNo: Math.floor(Math.random()*1.4)
    })
    housez.push({...houseDet, 
        meshId: makeRandNum(),
        pos: `${hLandHoL},40`,
        houseNo: Math.floor(Math.random()*1.4)
    })
    hLandHoL -= 10
}

setInterval(() => {
    // log('Uzers length ' + uzers.length)
    // log('HOUSEZ length ' + housez.length)
    uzers.forEach(uzr => log(uzr.weapon.name))
}, 8000)

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
    log(monz.length)
    if(monz.length >= 32) return log("monsters are full")
    monz.push({ 
        monsId: makeRandNum(), 
        place: "swampforest",
        monsLvl: 2,
        monsName: "goblin",
        armorName: "green",
        monsBreed: "normal",
        pos: {x: -70 + Math.random() * 10, z: -50 + Math.random()*60},
        spd: 2.8 + Math.random() * .6,
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
    flowerz.push({ 
        meshId: makeRandNum(), 
        spawntype: "flowers", 
        place: "swampforest", 
        pos: {x: -25 + Math.random()*50,z: 45 + Math.random()*15},
        name: "stam1",
    })
    io.emit("add-recources", {monz, flowerz})
}, 1000)



io.on("connection", socket => {
    theSocket = socket
    socket.on("join", data => {
        log('someone joined')
        const isUser = uzers.some(user => user._id === data._id)
        if(isUser){
            io.emit("deliver-reload", data._id)
            return log("user already in")
        }
        uzers.push({...data, socketId: socket.id})
        log(`${data.name} has joined`)
        io.emit("userJoined", {uzers,orez,treez, seedz, monz, treasurez, lootz, housez, bonfires, flowerz}) //monz is the AI monsters
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
    socket.on("attack", data => {
        const exist = uzers.find(user=>user._id === data._id)
        if(!exist) return log("cannot find uzer")
    
        io.emit('userAttack', data)
        uzers = uzers.map(user => user._id === data._id ? {...user, mode: data.mode, dirTarg: data.dirTarg } : user)
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
        io.emit("dropsword", data)
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

    socket.on("monsWillStop", data => {
        monz = monz.map(mon => mon.monsId === data.monsId ? {...mon, isChasing: false, isAttacking: false, targHero: undefined, pos: data.pos} : mon)
        io.emit("monsStopped", data)
    })
    socket.on("monsWillAttack", data => {
        monz = monz.map(mon => mon.monsId === data.monsId ? {...mon, isAttacking: true, isChasing: false, targHero: data.targHero, pos: data.pos} : mon)
        io.emit("monsAttack", data)
    })
    socket.on("monsterIsHit", data => {
        monz = monz.map(mons => mons.monsId === data.monsId ? {...mons,pos: data.pos, hp: mons.hp -= data.dmgTaken} : mons)
        uzers = uzers.map(theuser => theuser._id === data._id ? {...theuser, x: data.mypos.x, z: data.mypos.z} : theuser)
        io.emit("monsterGotHit", data)
    })
    socket.on("monsDied", data => {
        monz = monz.filter(mons => mons.monsId !== data.monsId)
    })
    socket.on('playerIsHit', data => {
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
            monz = monz.map(mon => mon.targHero === theUzer._id ? {...mon, isChasing: false, targHero: undefined} : mon)
        }
        log(uzers)
        io.emit('removeChar', data)
    })
    socket.on("disconnect", () => {
        const theUzer = uzers.find(user => user.socketId === socket.id)
        if(theUzer){
            const newArr = uzers.filter(user => user.socketId !== socket.id)
            uzers = newArr
            monz = monz.map(mon => mon.targHero === theUzer._id ? {...mon, isChasing: false, targHero: undefined} : mon)
            io.emit("aUserDisconnect", theUzer._id)
        }else{log("a user disconnects not found !")}
    })
})

server.listen(PORT, () => log("TCP server is on"))

function makeRandNum(){
    return Math.random().toString().split(".")[1]
 }