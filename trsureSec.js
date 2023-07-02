const trsureSec = [
    {
        isOpening: false,itemType:"treasure",magRes: 10, meshId: 'bonus1', 
        name: "chiefplate", openingBy: undefined, place: "swampforest", plusDef: 5,
        durability: 100, cState: 100, plusDmg: 0, price: 20000, qnty: 1, x: -30 + makeRandNum()*60, z: -50 + makeRandNum()*60
    },
    {
        isOpening: false,itemType:"treasure",magRes: 10, meshId: 'bonus2', 
        name: "karba", openingBy: undefined, place: "swampforest", plusDef: 40,
        durability: 200, cState: 200, plusDmg: 0, price: 20000, qnty: 1, x: -40, z: 70
    },
    {
        isOpening: false,itemType:"treasure",magRes: 10, meshId: 'bonus3', 
        name: "hydra", openingBy: undefined, place: "swampforest", plusDef: 35,
        durability: 180, cState: 180, plusDmg: 0, price: 20000, qnty: 1, x: 50, z: -70
    },
    {
        isOpening: false,itemType:"treasure",magRes: 10, meshId: 'bonus4', 
        name: "grimblue", openingBy: undefined, place: "swampforest", plusDef: 0,
        durability: 300, cState: 300, plusDmg: 40, price: 20000, qnty: 1, x: 60, z: -68
    },
]

function makeRandNum(){
    return Math.random().toString().split(".")[1]
}

module.exports = trsureSec