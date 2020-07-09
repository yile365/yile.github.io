
// 地宫遇怪配置

var DUNGEON_DATA = {
    1:{
        mst:{
            creeper:10,
            woodMan:10,
            skeleton:10,
            dust:3,
        },
        reward:[
            {
                things:{
                    iceBumb:3
                },
                chance:0.005,
            },
            {
                things:{
                    teethAxe:1
                },
                chance:0.005,
            },
            {
                things:{
                    staff:1
                },
                chance:0.005,
            },
            {
                things:{
                    bread:1
                },
                chance:0.05,
            },
            {
                things:{
                    beer:1
                },
                chance:0.1,
            },
            {
                things:{
                    hpPotion:1
                },
                chance:0.05,
            },
            {
                things:{
                    psPotion:1
                },
                chance:0.05,
            },
            {
                things:{
                    gold:60
                },
                chance:0.05,
            },
            {
                things:{
                    humanMeat:1
                },
                chance:0.01,
            },
        ]
    },
    2:{
        mst:{
            witch:10,
            bat:10,
            skeletonShooter:10,
            fishman:10,
            plant:3,
        },
        reward:[
            {
                things:{
                    dust:4
                },
                chance:0.05,
            },
            {
                things:{
                    crystal:5
                },
                chance:0.01,
            },
            {
                things:{
                    gem:5
                },
                chance:0.01,
            },
            {
                things:{
                    gold:10
                },
                chance:0.01,
            },
        ]
    },
    3:{
        mst:{
            witch_2:10,
            witch_3:10,
            griffin:6,
            machine:5,
            snake:5,
        },
        reward:[
            {
                things:{
                    darkDust:2
                },
                chance:0.025,
            },
            {
                things:{
                    crystal:5
                },
                chance:0.02,
            },
            {
                things:{
                    gem:5
                },
                chance:0.02,
            },
            {
                things:{
                    gold:10
                },
                chance:0.02,
            },
        ]
    },
    4:{
        mst:{
            woodMan_2:10,
            metalBat:10,
            magicPlant:10,
            mithrilSmith:8,
            fireSnake:2,
            springSprite:1,
        },
        reward:[
            {
                things:{
                    mithril:2
                },
                chance:0.1,
            },
            {
                things:{
                    darkGold:2
                },
                chance:0.01,
            },
            {
                things:{
                    darkDust:2
                },
                chance:0.05,
            },
            {
                things:{
                    crystal:5
                },
                chance:0.03,
            },
            {
                things:{
                    gem:5
                },
                chance:0.03,
            },
            {
                things:{
                    gold:5
                },
                chance:0.03,
            },
        ]
    },
    5:{
        mst:{
            magicFrog:20,
            darkBat:10,
            shootSnake:10,
            mithril:8,
            woodMan_3:1,
            witch_4:1,
            group:1,
        },
        reward:[
            {
                things:{
                    mithril:4
                },
                chance:0.1,
            },
            {
                things:{
                    darkGold:2
                },
                chance:0.01,
            },
            {
                things:{
                    darkDust:2
                },
                chance:0.05,
            },
            {
                things:{
                    crystal:5
                },
                chance:0.03,
            },
            {
                things:{
                    gem:5
                },
                chance:0.03,
            },
            {
                things:{
                    gold:5
                },
                chance:0.03,
            },
        ]
    },
    6:{
        mst:{
            magicSkeleton:10,
            warriorSkeleton:10,
            abyssLord:1,
            skyLord:1,
            waterLord:1,
            fireLord:1,
        },
        reward:[
            {
                things:{
                    mithril:2
                },
                chance:0.1,
            },
            {
                things:{
                    darkGold:2
                },
                chance:0.02,
            },
            {
                things:{
                    darkDust:2
                },
                chance:0.05,
            },
            {
                things:{
                    crystal:5
                },
                chance:0.03,
            },
            {
                things:{
                    gem:5
                },
                chance:0.03,
            },
            {
                things:{
                    gold:5
                },
                chance:0.03,
            },
        ]
    },
    7:{
        mst:{
            lordSkeleton:10,
            queenSkeleton:10,
            punchSkeleton:10,
            blackMist:1,
            whiteMist:1,
        },
        reward:[
            {
                things:{
                    darkGold:2
                },
                chance:0.02,
            },
            {
                things:{
                    darkDust:2
                },
                chance:0.05,
            },
            {
                things:{
                    crystal:5
                },
                chance:0.03,
            },
            {
                things:{
                    gem:5
                },
                chance:0.03,
            },
            {
                things:{
                    gold:5
                },
                chance:0.03,
            },
        ]
    },
    8:{
        mst:{
            fireDragon:10,
            iceDragon:10,
        },
        reward:[
            {
                things:{
                    darkGold:2
                },
                chance:0.02,
            },
            {
                things:{
                    darkDust:2
                },
                chance:0.05,
            },
            {
                things:{
                    crystal:5
                },
                chance:0.03,
            },
            {
                things:{
                    gem:5
                },
                chance:0.03,
            },
            {
                things:{
                    gold:5
                },
                chance:0.03,
            },
            {
                things:{
                    reiPart:5
                },
                chance:0.01,
            },
        ]
    },
    9:{
        mst:{
            vampire:10,
            vampireGirl:10,
        },
        reward:[
            {
                things:{
                    gold:50
                },
                chance:0.02,
            },
            {
                things:{
                    reiPart:10
                },
                chance:0.01,
            },
        ]
    },
    10:{
        mst:{
            superMan:10,
            singleEye:10,
            uang:10,
        },
        reward:[
            {
                things:{
                    gold:50
                },
                chance:0.04,
            },
            {
                things:{
                    reiPart:10
                },
                chance:0.01,
            },
        ]
    },
    11:{
        mst:{
            titan:10,
            bomberman:10,
            rainbowPeacock:5,
        },
        reward:[
            {
                things:{
                    gold:50
                },
                chance:0.04,
            },
            {
                things:{
                    reiPart:10
                },
                chance:0.01,
            },
        ]
    },
    12:{
        mst:{
            hundredGiant:10,
            iceMustache:10,
            seaDragon:8,
        },
        reward:[
            {
                things:{
                    gold:50
                },
                chance:0.04,
            },
            {
                things:{
                    reiPart:10
                },
                chance:0.01,
            },
        ]
    },
    13:{
        mst:{
            degeneratePaladin:4,
            kiteHawk:10,
            mandara:8,
        },
        reward:[
        ]
    },
    14:{
        mst:{
            chimera:4,
            fuseGiant:5,
            hellGladiator:4
        },
        reward:[
        ]
    },
    15:{
        mst:{
            chaos:4,
            vanity:4,
            nightmare:4,
        },
        reward:[
        ]
    },
    16:{
        mst:{
            ethereal:4,
            guard:4,
            stardustFish:4,
        },
        reward:[
        ]
    },
}
