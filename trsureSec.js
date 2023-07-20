const trsureSec = [
    {
        isOpening: false,itemType:"treasure",magRes: 10, meshId: 'bonus1', 
        name: "chiefplate", openingBy: undefined, place: "swampforest", plusDef: 5,
        durability: 100, cState: 100, plusDmg: 0, price: 300, qnty: 1, x: -30 + Math.random()*60, z: -50 + Math.random()*60
    },
    // {
    //     isOpening: false,itemType:"treasure",magRes: 10, meshId: 'bonus2', 
    //     name: "karba", openingBy: undefined, place: "swampforest", plusDef: 40,
    //     durability: 200, cState: 200, plusDmg: 0, price: 20000, qnty: 1, x: -40, z: 70
    // },
    // {
    //     isOpening: false,itemType:"treasure",magRes: 10, meshId: makeRandNum(), 
    //     name: "cladarmor", openingBy: undefined, place: "swampforest", plusDef: 40,
    //     durability: 200, cState: 200, plusDmg: 0, price: 20000, qnty: 1, x: -10, z: -45
    // },
    // {
    //     isOpening: false,itemType:"treasure",magRes: 10, meshId: makeRandNum(), 
    //     name: "karparmor", openingBy: undefined, place: "swampforest", plusDef: 40,
    //     durability: 200, cState: 200, plusDmg: 0, price: 20000, qnty: 1, x: -10, z: -40
    // },
    // {
    //     isOpening: false,itemType:"treasure",magRes: 10, meshId: makeRandNum(), 
    //     name: "hydra", openingBy: undefined, place: "swampforest", plusDef: 35,
    //     durability: 180, cState: 180, plusDmg: 0, price: 20000, qnty: 1, x: 50, z: -70
    // },
    // {
    //     isOpening: false,itemType:"treasure",magRes: 10, meshId: makeRandNum(), 
    //     name: "grimblue", openingBy: undefined, place: "swampforest", plusDef: 0,
    //     durability: 300, cState: 300, plusDmg: 40, price: 20000, qnty: 1, x: 60, z: -68
    // },
    // {
    //     isOpening: false,itemType:"treasure",magRes: 10, meshId: makeRandNum(), 
    //     name: "grimthor", openingBy: undefined, place: "swampforest", plusDef: 0,
    //     durability: 1000, cState: 1000, plusDmg: 100, price: 20000, qnty: 1, x: -3, z: -50
    // },
    // {
    //     isOpening: false,itemType:"treasure",magRes: 10, meshId: makeRandNum(), 
    //     name: "oakblade", openingBy: undefined, place: "swampforest", plusDef: 0,
    //     durability: 1000, cState: 1000, plusDmg: 100, price: 20000, qnty: 1, x: -4, z: -50
    // },
    // {
    //     isOpening: false,itemType:"treasure",magRes: 10, meshId: makeRandNum(), 
    //     name: "staffofmare", openingBy: undefined, place: "swampforest", plusDef: 0,
    //     durability: 1000, cState: 1000, plusDmg: 100, price: 20000, qnty: 1, x: -2, z: -50
    // },
    // {
    //     isOpening: false,itemType:"treasure",magRes: 10, meshId: makeRandNum(), 
    //     name: "masfinaBlade", openingBy: undefined, place: "swampforest", plusDef: 0,
    //     durability: 1000, cState: 1000, plusDmg: 100, price: 20000, qnty: 1, x: -1, z: -47
    // },
    // {
    //     isOpening: false, itemType:"treasure", magRes: 10, meshId: makeRandNum(), 
    //     name: "ancilia", openingBy: undefined, place: "swampforest", plusDef: 20,
    //     durability: 2000, cState: 2000, plusDmg: 0, price: 20000, qnty: 1, x: 0, z: -48
    // },
    // {
    //     isOpening: false, itemType:"treasure", magRes: 10, meshId: makeRandNum(), 
    //     name: "zviadi", openingBy: undefined, place: "swampforest", plusDef: 20,
    //     durability: 2000, cState: 2000, plusDmg: 0, price: 20000, qnty: 1, x: 1, z: -48
    // },
]

function makeRandNum(){
    return Math.random().toString().split(".")[1]
}

module.exports = trsureSec