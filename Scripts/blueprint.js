const itemMap = {
    water: { name: 'water', iconId: 1000, remark: '水' },
    ironOre: {name: 'ironOre', iconId: 1001, remark: '铁矿'},
    copperOre: { name: 'copperOre', iconId: 1002, remark: '铜矿' },
    siliconOre: { name: 'siliconOre', iconId: 1003, remark: '硅石' },
    titaniumOre: {name: 'titaniumOre', iconId: 1004, remark: '钛石'},
    coal: {name: 'coal', iconId: 1006, remark: '煤矿'},
    ironIngot: {name: 'ironIngot', iconId: 1101, remark: '铁块'},
    titaniumIngot: {name: 'titaniumIngot', iconId: 1106, remark: '钛块'},
    energeticGraphite: {name: 'energeticGraphite', iconId: 1109, remark: '高级石墨'},
    diamond: {name: 'diamond', iconId: 1112, remark: '金刚石'},
    proliferatorMk1: {name: 'proliferatorMk1', iconId: 1141, remark: '增产剂Mk.Ⅰ'},
    proliferatorMk2: {name: 'proliferatorMk2', iconId: 1142, remark: '增产剂Mk.Ⅱ'},
    proliferatorMk3: {name: 'proliferatorMk3', iconId: 1143, remark: '增产剂Mk.Ⅲ'},
    gear: {name: 'gear', iconId: 1201, remark: '齿轮'},
    stone: { name: 'stone', iconId: 1005, remark: '石矿' },
    oil: { name: 'oil', iconId: 1007, remark: '原油' },
    refinedOil: { name: 'refinedOil', iconId: 1114, remark: '精炼油' },
    sulfuricAcid: { name: 'sulfuricAcid', iconId: 1116, remark: '硫酸' },
    hydrogen: {name: 'hydrogen', iconId: 1120, remark: '氢'},
    fireIce: { name: 'fireIce', iconId: 1011, remark: '可燃冰' },
    // wood: { name: 'wood', iconId: 1030, remark: '木材' },
    // plant_fuel: { name: 'plant_fuel', iconId: 1031, remark: '植物燃料' },
    kimberliteOre: { name: 'kimberliteOre', iconId: 1012, remark: '金伯利矿石' },
    fractalSilicon: { name: 'fractalSilicon', iconId: 1013, remark: '分形硅石' },
    opticalGratingCrystal: { name: 'opticalGratingCrystal', iconId: 1014, remark: '光栅石' },
    spiniformStalagmiteCrystal: { name: 'spiniformStalagmiteCrystal', iconId: 1015, remark: '刺笋结晶' },
    unipolarMagnet: { name: 'unipolarMagnet', iconId: 1016, remark: '单极磁石' },
    copperIngot: { name: 'copperIngot', iconId: 1104, remark: '铜块' },
    highPuritySilicon: { name: 'highPuritySilicon', iconId: 1105, remark: '高纯硅块' },
    stoneBrick: { name: 'stoneBrick', iconId: 1108, remark: '石材' },
    steel: { name: 'steel', iconId: 1103, remark: '钢材' },
    titaniumAlloy: { name: 'titaniumAlloy', iconId: 1107, remark: '钛合金' },
    glass: { name: 'glass', iconId: 1110, remark: '玻璃' },
    titaniumGlass: {name: 'titaniumGlass', iconId: 1119, remark: '钛化玻璃'},
    prism: { name: 'prism', iconId: 1111, remark: '棱镜' },
    crystalSilicon: { name: 'crystalSilicon', iconId: 1113, remark: '晶格硅' },
    magnet: { name: 'magnet', iconId: 1102, remark: '磁铁' },
    magneticCoil: { name: 'magneticCoil', iconId: 1202, remark: '磁线圈' },
    electricMotor: { name: 'electricMotor', iconId: 1203, remark: '电动机' },
    electromagneticTurbine: { name: 'electromagneticTurbine', iconId: 1204, remark: '电磁涡轮' },
    superMagneticRing: { name: 'superMagneticRing', iconId: 1205, remark: '超级磁场环' },
    particleContainer: { name: 'particleContainer', iconId: 1206, remark: '粒子容器' },
    strangeMatter: { name: 'strangeMatter', iconId: 1127, remark: '奇异物质' },
    circuitBoard: { name: 'circuitBoard', iconId: 1301, remark: '电路板' },
    processor: { name: 'processor', iconId: 1303, remark: '处理器' },
    quantumChip: { name: 'quantumChip', iconId: 1305, remark: '量子芯片' },
    microcrystallineComponent: { name: 'microcrystallineComponent', iconId: 1302, remark: '微晶元件' },
    planeFilter: { name: 'planeFilter', iconId: 1304, remark: '位面过滤器' },
    particleBroadband: { name: 'particleBroadband', iconId: 1402, remark: '粒子带宽' },
    plasmaExciter: { name: 'plasmaExciter', iconId: 1401, remark: '电浆激发器' },
    photonCombiner: { name: 'photonCombiner', iconId: 1404, remark: '光子合并器' },
    solarSail: { name: 'solarSail', iconId: 1501, remark: '太阳帆' },
    deuterium: { name: 'deuterium', iconId: 1121, remark: '重氢' },
    antimatter: { name: 'antimatter', iconId: 1122, remark: '反物质' },
    criticalPhoton: { name: 'criticalPhoton', iconId: 1208, remark: '临界光子' },
    hydrogenFuelRod: { name: 'hydrogenFuelRod', iconId: 1801, remark: '液氢燃料棒' },
    deuteriumFuelRod: { name: 'deuteriumFuelRod', iconId: 1802, remark: '氘核燃料棒' },
    antimatterFuelRod: { name: 'antimatterFuelRod', iconId: 1803, remark: '反物质燃烧棒' },
    plastic: { name: 'plastic', iconId: 1115, remark: '塑料' },
    graphene: { name: 'graphene', iconId: 1123, remark: '石墨烯' },
    carbonNanotube: { name: 'carbonNanotube', iconId: 1124, remark: '碳纳米管' },
    organicCrystal: { name: 'organicCrystal', iconId: 1117, remark: '有机晶体' },
    titaniumCrystal: { name: 'titaniumCrystal', iconId: 1118, remark: '钛晶石' },
    casimirCrystal: { name: 'casimirCrystal', iconId: 1126, remark: '卡西米尔晶片' },
    gravitonLens: { name: 'gravitonLens', iconId: 1209, remark: '引力透镜' },
    spaceWarper: { name: 'spaceWarper', iconId: 1210, remark: '空间翘曲器' },
    annihilationConstraintSphere: { name: 'annihilationConstraintSphere', iconId: 1403, remark: '湮灭约束球' },
    thruster: { name: 'thruster', iconId: 1405, remark: '推进器' },
    reinforcedThruster: { name: 'reinforcedThruster', iconId: 1406, remark: '加力推进器' },
    logisticDrone: { name: 'logisticDrone', iconId: 5001, remark: '物流运输机' },
    logisticVessel: { name: 'logisticVessel', iconId: 5002, remark: '星际物流运输机' },
    frameMaterial: { name: 'frameMaterial', iconId: 1125, remark: '框架材料' },
    dysonSphereComponent: { name: 'dysonSphereComponent', iconId: 1502, remark: '戴森球组件' },
    smallCarrierRocket: { name: 'smallCarrierRocket', iconId: 1503, remark: '小型运载火箭' },
    foundation: { name: 'foundation', iconId: 1131, remark: '地基' },
    conveyorBeltMk1: { name: 'conveyorBeltMk1', iconId: 2001, remark: '传送带' },
    conveyorBeltMk2: { name: 'conveyorBeltMk2', iconId: 2002, remark: '高速传送带' },
    conveyorBeltMk3: { name: 'conveyorBeltMk3', iconId: 2003, remark: '极速传送带' },
    sorterMk1: { name: 'sorterMk1', iconId: 2011, remark: '分拣器' },
    sorterMk2: { name: 'sorterMk2', iconId: 2012, remark: '高速分拣器' },
    sorterMk3: { name: 'sorterMk3', iconId: 2013, remark: '极速分拣器' },
    splitter: { name: 'splitter', iconId: 2020, remark: '四向分流器' },
    autoPiler: { name: 'autoPiler', iconId: 2040, remark: '自动集装机' },
    trafficMonitor: { name: 'trafficMonitor', iconId: 2030, remark: '流速监测器' },
    sprayCoater: { name: 'sprayCoater', iconId: 2313, remark: '喷涂机' },
    storageMk1: { name: 'storageMk1', iconId: 2101, remark: '小型储物仓' },
    storageMk2: { name: 'storageMk2', iconId: 2102, remark: '大型储物仓' },
    storageTank: { name: 'storageTank', iconId: 2106, remark: '储液灌' },
    assemblingMachineMk1: { name: 'assemblingMachineMk1', iconId: 2303, remark: '制作台Mk.Ⅰ' },
    assemblingMachineMk2: { name: 'assemblingMachineMk2', iconId: 2304, remark: '制作台Mk.Ⅱ' },
    assemblingMachineMk3: { name: 'assemblingMachineMk3', iconId: 2305, remark: '制作台Mk.Ⅲ' },
    teslaTower: { name: 'teslaTower', iconId: 2201, remark: '电力感应塔' },
    wirelessPowerTower: { name: 'wirelessPowerTower', iconId: 2202, remark: '无线输电塔' },
    satelliteSubstation: { name: 'satelliteSubstation', iconId: 2212, remark: '卫星配电站' },
    windTurbine: { name: 'windTurbine', iconId: 2203, remark: '风力涡轮机' },
    thermalPowerPlant: { name: 'thermalPowerPlant', iconId: 2204, remark: '火力发电机' },
    miniFusionPowerPlant: { name: 'miniFusionPowerPlant', iconId: 2211, remark: '微型聚变发电站' },
    geothermalPowerStation: { name: 'geothermalPowerStation', iconId: 2213, remark: '地热发电站' },
    miningMachine: { name: 'miningMachine', iconId: 2301, remark: '采矿机' },
    advancedMiningMachine: { name: 'advancedMiningMachine', iconId: 2316, remark: '大型采矿机' },
    waterPump: { name: 'waterPump', iconId: 2306, remark: '抽水机' },
    arcSmelter: { name: 'arcSmelter', iconId: 2302, remark: '电弧熔炉' },
    planeSmelter: { name: 'planeSmelter', iconId: 2315, remark: '位面熔炉' },
    oilExtractor: { name: 'oilExtractor', iconId: 2307, remark: '原油萃取站' },
    oilRefinery: { name: 'oilRefinery', iconId: 2308, remark: '原油精炼厂' },
    chemicalPlant: { name: 'chemicalPlant', iconId: 2309, remark: '化工厂' },
    fractionator: { name: 'fractionator', iconId: 2314, remark: '分馏塔' },
    quantumChemicalPlant: { name: 'quantumChemicalPlant', iconId: 2317, remark: '量子化工厂' },
    solarPanel: { name: 'solarPanel', iconId: 2205, remark: '太阳能板' },
    accumulator: { name: 'accumulator', iconId: 2206, remark: '蓄电池' },
    accumulatorFull: { name: 'accumulatorFull', iconId: 2207, remark: '蓄电池满' },
    emRailEjector: { name: 'emRailEjector', iconId: 2311, remark: '电磁轨道弹射器' },
    rayReceiver: { name: 'rayReceiver', iconId: 2208, remark: '射线接收站' },
    verticalLaunchingSilo: { name: 'verticalLaunchingSilo', iconId: 2312, remark: '垂直发射井' },
    energyExchanger: { name: 'energyExchanger', iconId: 2209, remark: '能量枢纽' },
    miniatureParticleCollider: { name: 'miniatureParticleCollider', iconId: 2310, remark: '微型粒子对撞机' },
    artificialStar: { name: 'artificialStar', iconId: 2210, remark: '人造恒星' },
    logisticsDistributor: { name: 'logisticsDistributor', iconId: 2107, remark: '物流配送器' },
    planetaryLogisticStation: { name: 'planetaryLogisticStation', iconId: 2103, remark: '行星内物流运输站' },
    interstellarLogisticStation: {name: 'interstellarLogisticStation', iconId: 2104, remark: '星际物流运输站'},
    orbitalCollector: { name: 'orbitalCollector', iconId: 2105, remark: '轨道采集器' },
    matrixLab: { name: 'matrixLab', iconId: 2901, remark: '矩阵研究站' },
    electromagneticMatrix: { name: 'electromagneticMatrix', iconId: 6001, remark: '蓝矩阵' },
    energyMatrix: { name: 'energyMatrix', iconId: 6002, remark: '红矩阵' },
    structureMatrix: { name: 'structureMatrix', iconId: 6003, remark: '黄矩阵' },
    informationMatrix: { name: 'informationMatrix', iconId: 6004, remark: '紫矩阵' },
    gravityMatrix: { name: 'gravityMatrix', iconId: 6005, remark: '绿矩阵' },
    universeMatrix: { name: 'universeMatrix', iconId: 6006, remark: '宇宙矩阵' },
    logisticsBot: {name: 'logisticsBot', iconId: 5003, remark: '配送运输机'},

    templateItem: {name: 'templateItem', iconId: 0, remark: '模板'},
}
const productionCategory = {
    smelter: 0,
    assembling: 1,
    plant: 2,
    refinery: 3,
    collider: 4
}
const buildingType = {
    production: 0,
    sorter: 1,
    conveyor: 2
}
const buildingMap = {
    arcSmelter: {remark: '电弧熔炉', name: 'arcSmelter', itemId: 2302, modelIndex: 62, productionSpeed: 1, size: {x: 3, y: 3}, type: buildingType.production, category: productionCategory.smelter, slotMaxIndex: 7},
    assemblingMachineMk1: {remark: '制造台Mk.I', name: 'assemblingMachineMk1', itemId: 2303, modelIndex: 65, productionSpeed: 0.75, size: {x: 3, y: 3}, type: buildingType.production, category: productionCategory.assembling, slotMaxIndex: 8},
    assemblingMachineMk2: {remark: '制造台MkⅡ', name: 'assemblingMachineMk2', itemId: 2304, modelIndex: 66, productionSpeed: 1, size: {x: 3, y: 3}, type: buildingType.production, category: productionCategory.assembling, slotMaxIndex: 8},
    assemblingMachineMk3: { remark: '制造台Mk.III', name: 'assemblingMachineMk3', itemId: 2305, modelIndex: 67, productionSpeed: 1.5, size: {x: 3, y: 3}, type: buildingType.production, category: productionCategory.assembling, slotMaxIndex: 8},
    chemicalPlant: { remark: '化工厂', name: 'chemicalPlant', itemId: 2309, modelIndex: 64, productionSpeed: 1, type: buildingType.production, category: productionCategory.plant, slotMaxIndex: 6},
    quantumChemicalPlant: { remark: '量子化工厂', name: 'quantumChemicalPlant', itemId: 2317, modelIndex: 64, productionSpeed: 2, type: buildingType.production, category: productionCategory.plant, slotMaxIndex: 6},
    oilRefinery: { remark: '原油精炼厂', name: 'oilRefinery', itemId: 2308, modelIndex: 63, productionSpeed: 1, type: buildingType.production, category: productionCategory.refinery, slotMaxIndex: 8},
    sorterMk1: {name: 'sorterMk1', itemId: 2011, modelIndex: 41, sortingSpeed: 1.5, size: {x: 1, y: 1}, type: buildingType.sorter, remark: '分拣器MK.I'},
    // sorterMk2: { remark: '高速分拣器', name: 'sorterMk2', itemId: 2012, modelIndex: 42 },
    sorterMk3: {name: 'sorterMk3', itemId: 2013, modelIndex: 43, sortingSpeed: 6, size: {x: 1, y: 1}, type: buildingType.sorter, remark: '分拣器MK.Ⅲ'},
    conveyorBeltMk1: {name: 'conveyorBeltMk1', itemId: 2001, modelIndex: 35, transportSpeed: 6, size: {x: 1, y: 1}, type: buildingType.conveyor, remark: '传送带MK.I'},
    // conveyorBeltMK2: { remark: '高速传送带', name: 'conveyorBeltMK2', itemId: 2002, modelIndex: 36 },
    conveyorBeltMK3: {name: 'conveyorBeltMK3', itemId: 2003, modelIndex: 37, transportSpeed: 30, size: {x: 1, y: 1}, type: buildingType.conveyor, remark: '传送带MK.Ⅲ'},
    miniatureParticleCollider: {name: 'miniatureParticleCollider', itemId: 2310, modelIndex: 69, productionSpeed: 1, type: buildingType.production, category: productionCategory.collider, slotMaxIndex: 8},
    // piler: { remark: '自动集装机', name: 'piler', itemId: 2040, modelIndex: 257 },
    // monitor: { remark: '流速监测器', name: 'monitor', itemId: 2030, modelIndex: 208 },
    // spray_coater: { remark: '喷涂机', name: 'spray_coater', itemId: 2313, modelIndex: 120 },
    // planeSmelter: { remark: '位面熔炉', name: 'planeSmelter', itemId: 2315, modelIndex: 194 },
    // hadron_collider: { remark: '微型粒子对撞机', name: 'hadron_collider', itemId: 2310, modelIndex: 69 },
    // lab: { remark: '矩阵研究站', name: 'lab', itemId: 2901, modelIndex: 70 },

    templateBuilding: {name: 'templateBuilding', itemId: 0, modelIndex: 0, size: {x: 1, y: 1}, remark: '模板'},
}

const recipeMap = {
    'refinedOil+stone+water=sulfuricAcid': 24,
    'oil=hydrogen+refinedOil': 16,
    'gravityMatrix=spaceWarper': 79,  // 空间翘曲器
    'gravitonLens=spaceWarper': 78,  // 空间翘曲器
    'titaniumAlloy+deuterium+superMagneticRing=deuteriumFuelRod': 41,  // 氘核燃料棒
    'diamond+strangeMatter=gravitonLens': 101,  // 引力透镜
    'stone=siliconOre': 34,  // 硅石
    'ironOre=ironIngot': 1,  // 铁块
    'ironIngot=steel': 63,  // 钢材
    'titaniumOre=titaniumIngot': 65,  // 钛块
    'copperOre=copperIngot': 3,  // 铜块
    'ironOre=magnet': 2,  // 磁铁
    'magnet+copperIngot=magneticCoil': 6,  // 磁线圈
    'ironIngot+copperIngot=circuitBoard': 50,  // 电路板
    'ironIngot=gear': 5,  // 齿轮
    'coal=energeticGraphite': 17,  // 高级石墨
    'refinedOil+hydrogen+coal=refinedOil': 121,  // 精炼油
    'fireIce=hydrogen+graphene': 32,  // 氢 石墨烯
    'stone=glass': 57,  // 玻璃
    'glass=prism': 11,  // 棱镜
    'siliconOre=highPuritySilicon': 59,  // 高纯硅块
    'highPuritySilicon+copperIngot=microcrystallineComponent': 53,  // 微晶元件
    'circuitBoard+microcrystallineComponent=processor': 51,  // 处理器
    'energeticGraphite=diamond': 60,  // 金刚石
    'refinedOil+energeticGraphite=plastic': 23,  // 塑料
    'plastic+refinedOil+water=organicCrystal': 25,  // 有机晶体
    'organicCrystal+titaniumIngot=titaniumCrystal': 26,  // 钛晶石
    'highPuritySilicon=crystalSilicon': 37,  // 晶格硅
    'stone=stoneBrick': 4,  // 石材
    'ironIngot+gear+magneticCoil=electricMotor': 97,  // 电动机
    'electricMotor+magneticCoil=electromagneticTurbine': 98,  // 电磁涡轮
    'sulfuricAcid+energeticGraphite=graphene': 31,  // 石墨烯
    'graphene+titaniumIngot=carbonNanotube': 33,  // 碳纳米管
    'spiniformStalagmiteCrystal=carbonNanotube': 35,  // 碳纳米管
    'carbonNanotube+crystalSilicon+plastic=particleBroadband': 36,  // 粒子带宽
    'glass+titaniumIngot+water=titaniumGlass': 30,  // 钛化玻璃
    'titaniumCrystal+graphene+hydrogen=casimirCrystal': 28,  // 卡西米尔晶片
    'casimirCrystal+titaniumGlass=planeFilter': 38,  // 位面过滤器
    'processor+planeFilter=quantumChip': 52,  // 量子芯片
    'electromagneticTurbine+copperIngot+graphene=particleContainer': 99,  // 粒子容器
    'electromagneticTurbine+magnet+energeticGraphite=superMagneticRing': 103,  // 超级磁场环
    'titaniumIngot+steel+sulfuricAcid=titaniumAlloy': 66,  // 钛合金
    'magneticCoil+prism=plasmaExciter': 12,  // 电浆激发器
    'carbonNanotube+titaniumAlloy+highPuritySilicon=frameMaterial': 80,  // 框架材料
    'prism+circuitBoard=photonCombiner': 68,  // 光子合并器
    'graphene+photonCombiner=solarSail': 70,  // 太阳帆
    'frameMaterial+solarSail+processor=dysonSphereComponent': 81,  // 戴森球组件
    'dysonSphereComponent+deuteriumFuelRod+quantumChip=smallCarrierRocket': 83,  // 小型运载火箭
    'coal=proliferatorMk1': 106,  // 增产剂Mk.Ⅰ
    'proliferatorMk1+diamond=proliferatorMk2': 107,  // 增产剂Mk.Ⅱ
    'proliferatorMk2+carbonNanotube=proliferatorMk3': 108,  // 增产剂Mk.Ⅲ
    'opticalGratingCrystal+graphene+hydrogen=casimirCrystal': 29,  // 卡西米尔晶片
    'unipolarMagnet+copperIngot=particleContainer': 100,  // 粒子容器
    'kimberliteOre=diamond': 61,  // 金刚石
    'fractalSilicon=crystalSilicon': 62,  // 晶格硅
    'stoneBrick+steel=foundation': 112,  // 地基
    'titaniumIngot+hydrogen=hydrogenFuelRod': 19,  // 液氢燃料棒
    'ironIngot+magneticCoil=teslaTower': 8,  // 电力感应塔
    'teslaTower+plasmaExciter=wirelessPowerTower': 13,  // 无线输电塔
    'wirelessPowerTower+superMagneticRing+frameMaterial=satelliteSubstation': 73,  // 卫星配电站
    'ironIngot+gear+magneticCoil=windTurbine': 7,  // 风力涡轮机
    'ironIngot+stoneBrick+gear+magneticCoil=thermalPowerPlant': 64,  // 火力发电机
    'ironIngot+gear=conveyorBeltMk1': 84,  // 传送带
    'conveyorBeltMk1+electromagneticTurbine=conveyorBeltMk2': 89,  // 高速传送带
    'conveyorBeltMk2+superMagneticRing+graphene=conveyorBeltMk3': 92,  // 极速传送带
    'ironIngot+stoneBrick=storageMk1': 86,  // 小型储物仓
    'steel+stoneBrick=storageMk2': 91,  // 大型储物仓
    'highPuritySilicon+copperIngot+circuitBoard=solarPanel': 67,  // 太阳能板
    'ironIngot+superMagneticRing+crystalSilicon=accumulator': 76,  // 蓄电池
    'steel+highPuritySilicon+photonCombiner+processor+superMagneticRing=rayReceiver': 72,  // 射线接收站
    'titaniumAlloy+superMagneticRing+carbonNanotube+processor=miniFusionPowerPlant': 113,  // 微型聚变发电站
    'steel+titaniumAlloy+processor+particleContainer=energyExchanger': 77,  // 能量枢纽
    'ironIngot+stoneBrick+glass=storageTank': 114,  // 储液灌
    'ironIngot+circuitBoard=sorterMk1': 85,  // 分拣器
    'sorterMk1+electricMotor=sorterMk2': 88,  // 高速分拣器
    'sorterMk2+electromagneticTurbine=sorterMk3': 90,  // 极速分拣器
    'ironIngot+circuitBoard+magneticCoil+gear=miningMachine': 48,  // 采矿机
    'ironIngot+stoneBrick+electricMotor+circuitBoard=waterPump': 49,  // 抽水机
    'steel+stoneBrick+circuitBoard+plasmaExciter=oilExtractor': 14,  // 原油萃取站
    'steel+stoneBrick+circuitBoard+plasmaExciter=oilRefinery': 15,  // 原油精炼厂
    'titaniumAlloy+frameMaterial+gravitonLens+quantumChip=verticalLaunchingSilo': 82,  // 垂直发射井
    'ironIngot+gear+circuitBoard=splitter': 87,  // 四向分流器
    'ironIngot+gear+glass+circuitBoard=trafficMonitor': 117,  // 流速监测器
    'ironIngot+gear+circuitBoard=assemblingMachineMk1': 45,  // 制作台Mk.Ⅰ
    'assemblingMachineMk1+graphene+processor=assemblingMachineMk2': 46,  // 制作台Mk.Ⅱ
    'assemblingMachineMk2+particleBroadband+quantumChip=assemblingMachineMk3': 47,  // 制作台Mk.Ⅲ
    'ironIngot+stoneBrick+circuitBoard+magneticCoil=arcSmelter': 56,  // 电弧熔炉
    'arcSmelter+frameMaterial+planeFilter+unipolarMagnet=planeSmelter': 116,  // 位面熔炉
    'steel+stoneBrick+glass+processor=fractionator': 110,  // 分馏塔
    'steel+stoneBrick+glass+circuitBoard=chemicalPlant': 22,  // 化工厂
    'chemicalPlant+titaniumGlass+strangeMatter+quantumChip=quantumChemicalPlant': 124,  // 量子化工厂
    'ironIngot+glass+circuitBoard+magneticCoil=matrixLab': 10,  // 矩阵研究站
    'steel+gear+processor+superMagneticRing=emRailEjector': 71,  // 电磁轨道弹射器
    'steel+titaniumIngot+processor+particleContainer=planetaryLogisticStation': 93,  // 行星内物流运输站
    'ironIngot+plasmaExciter+processor=logisticsDistributor': 122,  // 物流配送器
    'titaniumAlloy+frameMaterial+superMagneticRing+graphene+processor=miniatureParticleCollider': 39,  // 微型粒子对撞机
    'planetaryLogisticStation+titaniumAlloy+particleContainer=interstellarLogisticStation': 95,  // 星际物流运输站
    'titaniumAlloy+electromagneticTurbine=reinforcedThruster': 21,  // 加力推进器
    'interstellarLogisticStation+superMagneticRing+reinforcedThruster+accumulatorFull=orbitalCollector': 111,  // 轨道采集器
    'steel+copperIngot=thruster': 20,  // 推进器
    'ironIngot+electromagneticTurbine+processor=logisticsBot': 123,  // 配送运输机
    'ironIngot+processor+thruster=logisticDrone': 94,  // 物流运输机
    'titaniumAlloy+processor+reinforcedThruster=logisticVessel': 96,  // 星际物流运输机
    'opticalGratingCrystal+circuitBoard=photonCombiner': 69,  // 光子合并器
    'steel+copperIngot+photonCombiner+superMagneticRing=geothermalPowerStation': 118,  // 地热发电站
    'steel+gear+superMagneticRing+processor=autoPiler': 120,  // 自动集装机
    'steel+plasmaExciter+circuitBoard+microcrystallineComponent=sprayCoater': 109,  // 喷涂机
    'hydrogen+refinedOil=hydrogen+energeticGraphite': 58,  // 氢 高级石墨
    // 'electromagneticMatrix+energyMatrix+structureMatrix+informationMatrix+gravityMatrix+antimatter=universeMatrix': ,  // 宇宙矩阵
    // 'accumulator=accumulatorFull': ,  // 蓄电池满
    // 'magneticCoil+circuitBoard=electromagneticMatrix': ,  // 蓝矩阵
    // 'energeticGraphite+hydrogen=energyMatrix': ,  // 红矩阵
    // 'diamond+titaniumCrystal=structureMatrix': ,  // 黄矩阵
    // 'processor+particleBroadband=informationMatrix': ,  // 紫矩阵
    // 'quantumChip+gravitonLens=gravityMatrix': ,  // 绿矩阵
    'hydrogen=deuterium': 40,  // 重氢
    'particleContainer+ironIngot+deuterium=strangeMatter': 104,  // 奇异物质
    'criticalPhoton=antimatter+hydrogen': 74,  // 反物质 氢
    // 'particleContainer+processor=annihilationConstraintSphere': ,  // 湮灭约束球
    // 'antimatter+hydrogen+annihilationConstraintSphere+titaniumAlloy=antimatterFuelRod': ,  // 反物质燃烧棒
    // 'titaniumAlloy+frameMaterial+annihilationConstraintSphere+quantumChip=artificialStar': ,  // 人造恒星
    // 'titaniumAlloy+frameMaterial+superMagneticRing+quantumChip+opticalGratingCrystal=advancedMiningMachine': ,  // 大型采矿机
    // 'gravitonLens=criticalPhoton': ,  // 临界光子
    // 'hydrogen=deuterium+hydrogen': ,  // 重氢 氢
}

class BluePrint {
    constructor(name, recipe) {
        this.name = name
        this.recipe = recipe
        this.buildingIndex = -1
        this.blueprintSize = {x: 0, y: 0}
        this.occupiedArea = []
        this.buildings = []
        this.config = {
            maxSorterNumOneBelt: 8,
            conveyorBeltStackLayer: 4,
            x_y_ratio: 2,  // 长宽比
        }
        this.buildingArray = []
        // {
        //      "coal": [{index: 1, rate: 1.5, ownerIndex: 0}]
        // }
        this.sorters = {}
    }

    blueprintTemplate = {
        header: {
            layout: 10,
            icons: [0, 0, 0, 0, 0],
            time: '2022-11-11T14:24:17.987Z',
            gameVersion: '0.9.26.13026',
            shortDesc: 'New Blueprint',
            desc: ''
        },
        version: 1,
        cursorOffset: {x: 0, y: 0},
        cursorTargetArea: 0,
        dragBoxSize: {x: 1, y: 1},
        primaryAreaIdx: 0,
        areas: [{
            index: 0,
            parentIndex: -1,
            tropicAnchor: 0,
            areaSegments: 200,
            anchorLocalOffset: {x: 0, y: 0},
            size: {x: 1, y: 1}
        }],
        buildings: []
    }

    mapRecipeID() {
        for (let subRecipe of this.recipe.subRecipes) {
            if (!subRecipe.input) { // 原料
                continue
            }
            let recipeStr = ''
            let isFirst = true
            for (let item of subRecipe.input) {
                if (isFirst) {
                    recipeStr = item.name
                    isFirst = false
                }else {
                    recipeStr += '+' + item.name
                }
            }
            isFirst = true
            for (let item of subRecipe.output) {
                if (isFirst) {
                    recipeStr += '=' + item.name
                    isFirst = false
                }else {
                    recipeStr += '+' + item.name
                }
            }
            if (!recipeMap[recipeStr]) {
                throw `unknown recipe - ${recipeStr} ${subRecipe}`
            }
            subRecipe.recipeID = recipeMap[recipeStr]
        }
    }

    getBuildingTemplate(){
        this.buildingIndex++
        return {
            index: this.buildingIndex,
            areaIndex: 0,
            localOffset: null,
            yaw: [0, 0],
            itemId: 0,
            modelIndex: 0,
            outputObjIdx: -1,
            inputObjIdx: -1,
            outputToSlot: 0,
            inputFromSlot: 0,
            outputFromSlot: 0,
            inputToSlot: 0,
            outputOffset: 0,
            inputOffset: 0,
            recipeId: 0,
            filterId: 0,
            parameters: null
        }
    }

    newConveyor(conveyor, direction, inputData, outputData, parameters=null) {
        // 在y轴方向生成一条长度为length的传送带, direction的正负表示传送带方向
        // parameters列表指定每个传送带节点的参数
        if (conveyor.type !== buildingType.conveyor) {
            throw `newConveyor error: error conveyor - ${conveyor}`
        }
        let buildingX = 0, buildingY = 0, buildingZ = 0
        // const direction = length/Math.abs(length)
        // let length = Math.abs(length)
        for (let i=0; i<inputData.length; i++) {
            if (direction < 0) {
                // 输入带不需要处理input，再最后加一个即可
                break
            }
            this.buildingIndex ++
            let outputObjIdx = -1
            let outputToSlot = 0
            if (i===0) {
                buildingX = this.occupiedArea[this.occupiedArea.length-1].x2 + 1
                buildingY = this.occupiedArea[this.occupiedArea.length-2].y2 + 1
                buildingZ = 0
                this.occupiedArea[this.occupiedArea.length-1].x2 += 1
            }else {
                buildingY += 1
            }
            if (!(direction < 0 && i === 0 )) {
                outputObjIdx = this.buildingIndex + direction
                console.log(`conveyor ${this.buildingIndex} outputObjIdx ${outputObjIdx}`)
            }
            let nodeParameters = null
            if (direction < 0 && i === 0) {
                nodeParameters = parameters
            }
            if (outputObjIdx !== -1) {
                outputToSlot = 1
            }
            this.buildings.push({
                index: this.buildingIndex,
                areaIndex: 0,
                localOffset: [
                    {
                        x: buildingX,
                        y: buildingY,
                        z: buildingZ
                    },
                    {
                        x: buildingX,
                        y: buildingY,
                        z: buildingZ
                    }
                ],
                yaw: [
                    0,
                    0
                ],
                itemId: conveyor.itemId,
                modelIndex: conveyor.modelIndex,
                outputObjIdx: outputObjIdx,
                inputObjIdx: -1,
                outputToSlot: outputToSlot,
                inputFromSlot: 0,
                outputFromSlot: 0,
                inputToSlot: 1,
                outputOffset: 0,
                inputOffset: 0,
                recipeId: 0,
                filterId: 0,
                parameters: nodeParameters
            })
            // 修改分拣器指向这个传送带节点
            let toChangeNum = inputData[i].length
            for (let b of this.buildings) {
                if (toChangeNum <= 0) {
                    break
                }
                if (inputData[i].includes(b.index)) {
                    b.outputObjIdx = this.buildingIndex
                    toChangeNum --
                }
            }
        }
        for (let i=0; i<outputData.length; i++) {
            this.buildingIndex ++
            let outputObjIdx = -1
            let outputToSlot = 0
            if (direction < 0 && i === 0) {
                buildingX = this.occupiedArea[this.occupiedArea.length-1].x2 + 1
                buildingY = this.occupiedArea[this.occupiedArea.length-2].y2 + 1
                buildingZ = 0
                this.occupiedArea[this.occupiedArea.length-1].x2 += 1
            }else {
                buildingY += 1
            }
            if (!(direction>0 && i===outputData.length-1)) {
                if (!(direction < 0 && i === 0)) {
                    outputObjIdx = this.buildingIndex + direction
                }
            }
            let nodeParameters = null
            if (direction > 0 && i === outputData.length-1) {
                nodeParameters = parameters
            }

            if (outputObjIdx !== -1) {
                outputToSlot = 1
            }
            this.buildings.push({
                index: this.buildingIndex,
                areaIndex: 0,
                localOffset: [
                    {
                        x: buildingX,
                        y: buildingY,
                        z: buildingZ
                    },
                    {
                        x: buildingX,
                        y: buildingY,
                        z: buildingZ
                    }
                ],
                yaw: [
                    0,
                    0
                ],
                itemId: conveyor.itemId,
                modelIndex: conveyor.modelIndex,
                outputObjIdx: outputObjIdx,
                inputObjIdx: -1,
                outputToSlot: outputToSlot,
                inputFromSlot: 0,
                outputFromSlot: 0,
                inputToSlot: 1,
                outputOffset: 0,
                inputOffset: 0,
                recipeId: 0,
                filterId: 0,
                parameters: nodeParameters
            })
            // 修改分拣器指向这个传送带节点
            let toChangeNum = outputData[i].length
            for (let b of this.buildings) {
                if (toChangeNum <= 0) {
                    break
                }
                if (outputData[i].includes(b.index)) {
                    b.inputObjIdx = this.buildingIndex
                    b.inputFromSlot = -1
                    toChangeNum --
                }
            }
        }
        if (direction < 0) {
            this.buildingIndex ++
            let outputObjIdx = this.buildingIndex + direction
            let outputToSlot = 1
            buildingY += 1
            // outputObjIdx = this.buildingIndex + direction
            // outputToSlot = 1
            this.buildings.push({
                index: this.buildingIndex,
                areaIndex: 0,
                localOffset: [
                    {
                        x: buildingX,
                        y: buildingY,
                        z: buildingZ
                    },
                    {
                        x: buildingX,
                        y: buildingY,
                        z: buildingZ
                    }
                ],
                yaw: [
                    0,
                    0
                ],
                itemId: conveyor.itemId,
                modelIndex: conveyor.modelIndex,
                outputObjIdx: outputObjIdx,
                inputObjIdx: -1,
                outputToSlot: outputToSlot,
                inputFromSlot: 0,
                outputFromSlot: 0,
                inputToSlot: 1,
                outputOffset: 0,
                inputOffset: 0,
                recipeId: 0,
                filterId: 0,
                parameters: parameters
            })
        }
    }

    calculateBuildingArea(subRecipe) {
        // 计算某个配方中单个生产建筑的占地面积
        if (!subRecipe.building) {
            return {area: 0, x: 0, y: 0, centerPoint: [0, 0, 0, 0]}
        }
        switch (buildingMap[subRecipe.building.name].category) {
            case productionCategory.smelter:
                if (subRecipe.output.length + subRecipe.input.length <= 2) {
                    return {area: 12, x: 3, y: 4, centerPoint: [2, 1, 1, 1], yaw: [0, 0]}
                }else {
                    return {area: 16, x: 4, y: 4, centerPoint: [2, 2, 1, 1], yaw: [0, 0]}
                }
            case productionCategory.assembling:
                return {area: 16, x: 4, y: 4, centerPoint: [2, 2, 1, 1], yaw: [0, 0]}
            case productionCategory.plant:
                return {area: 35, x: 7, y: 5, centerPoint: [2, 3, 2, 3], yaw: [0, 0]}
            case productionCategory.refinery:
                return {area: 28, x: 7, y: 4, centerPoint: [1, 2, 2, 4], yaw: [90, 90]}
            case productionCategory.collider:
                return {area: 66, x: 11, y: 6, centerPoint: [3, 5, 2, 5], yaw: [0, 0]}
            default:
                console.log(`unknown production build type - ${buildingMap[subRecipe.building.name].type}`)
                return {}
        }
    }

    calculateBlueprintArea() {
        let totalArea = 0
        for (let subRecipe of this.recipe.subRecipes) {
            if (!subRecipe.building) {
                continue
            }
            totalArea += this.calculateBuildingArea(subRecipe).area * subRecipe.building.num
        }
        // console.log(`total area ${totalArea}`)
        let y = Math.ceil(Math.sqrt(totalArea/this.config.x_y_ratio))
        // let x = Math.ceil(Math.sqrt(totalArea))
        this.blueprintSize = {
            x: Math.ceil(this.config.x_y_ratio * y),
            y: y
        }
        this.occupiedArea = [{x1: -1, y1: -1, x2: this.blueprintSize.x, y2: -1}]
    }

    calculateSorterLocalOffsetAndYaw(buildingOffset, type, slotIndex, rotate=0){
        let data = {
            offset: [],
            yaw: []
        }
        if (type === productionCategory.smelter || type === productionCategory.assembling) {
            switch (slotIndex) {
                case 8:
                    data.offset = [{x: buildingOffset.x-1, y: buildingOffset.y-1, z: 0}, {x: buildingOffset.x-1, y: buildingOffset.y-2, z: 0}]
                    data.yaw = [(180+rotate*180)%360, (180+rotate*180)%360]
                    break
                case 7:
                    data.offset = [{x: buildingOffset.x, y: buildingOffset.y-1, z: 0}, {x: buildingOffset.x, y: buildingOffset.y-2, z: 0}]
                    data.yaw = [(180+rotate*180)%360, (180+rotate*180)%360]
                    break
                case 6:
                    data.offset = [{x: buildingOffset.x+1, y: buildingOffset.y-1, z: 0}, {x: buildingOffset.x+1, y: buildingOffset.y-2, z: 0}]
                    data.yaw = [(180+rotate*180)%360, (180+rotate*180)%360]
                    break
                case 5:
                    data.offset = [{x: buildingOffset.x+1, y: buildingOffset.y-1, z: 0}, {x: buildingOffset.x+2, y: buildingOffset.y-1, z: 0}]
                    data.yaw = [(90+rotate*180)%360, (90+rotate*180)%360]
                    break
                case 4:
                    data.offset = [{x: buildingOffset.x+1, y: buildingOffset.y, z: 0}, {x: buildingOffset.x+2, y: buildingOffset.y, z: 0}]
                    data.yaw = [(90+rotate*180)%360, (90+rotate*180)%360]
                    break
                case 3:
                    data.offset = [{x: buildingOffset.x+1, y: buildingOffset.y+1, z: 0}, {x: buildingOffset.x+2, y: buildingOffset.y+1, z: 0}]
                    data.yaw = [(90+rotate*180)%360, (90+rotate*180)%360]
                    break
                default:
                    throw `calculateSorterLocalOffset error: unsupported slotIndex for smelter - ${slotIndex}`
            }
        }else if (type === productionCategory.plant) {
            switch (slotIndex) {
                case 6:
                    data.offset = [{x: buildingOffset.x-1, y: buildingOffset.y-1, z: 0}, {x: buildingOffset.x-1, y: buildingOffset.y-2, z: 0}]
                    data.yaw = [(180+rotate*180)%360, (180+rotate*180)%360]
                    break
                case 5:
                    data.offset = [{x: buildingOffset.x, y: buildingOffset.y-1, z: 0}, {x: buildingOffset.x, y: buildingOffset.y-2, z: 0}]
                    data.yaw = [(180+rotate*180)%360, (180+rotate*180)%360]
                    break
                case 4:
                    data.offset = [{x: buildingOffset.x+1, y: buildingOffset.y-1, z: 0}, {x: buildingOffset.x+1, y: buildingOffset.y-2, z: 0}]
                    data.yaw = [(180+rotate*180)%360, (180+rotate*180)%360]
                    break
                case 3:
                    data.offset = [{x: buildingOffset.x+2, y: buildingOffset.y-1, z: 0}, {x: buildingOffset.x+2, y: buildingOffset.y-2, z: 0}]
                    data.yaw = [(180+rotate*180)%360, (180+rotate*180)%360]
                    break
                default:
                    throw `unsupported: plant slot < 3`

            }
        }else if (type === productionCategory.refinery) {
            switch (slotIndex) {
                case 8:
                    data.offset = [{x: buildingOffset.x-3, y: buildingOffset.y-1, z: 0}, {x: buildingOffset.x-4, y: buildingOffset.y-1, z: 0}]
                    data.yaw = [(270+rotate*180)%360, (270+rotate*180)%360]
                    break
                case 7:
                    data.offset = [{x: buildingOffset.x-3, y: buildingOffset.y, z: 0}, {x: buildingOffset.x-4, y: buildingOffset.y, z: 0}]
                    data.yaw = [(270+rotate*180)%360, (270+rotate*180)%360]
                    break
                case 6:
                    data.offset = [{x: buildingOffset.x-3, y: buildingOffset.y+1, z: 0}, {x: buildingOffset.x-4, y: buildingOffset.y+1, z: 0}]
                    data.yaw = [(270+rotate*180)%360, (270+rotate*180)%360]
                    break
                case 5:
                    data.offset = [{x: buildingOffset.x-1, y: buildingOffset.y+1, z: 0}, {x: buildingOffset.x-1, y: buildingOffset.y+2, z: 0}]
                    data.yaw = [rotate*180%360, rotate*180%360]
                    break
                case 4:
                    data.offset = [{x: buildingOffset.x, y: buildingOffset.y+1, z: 0}, {x: buildingOffset.x, y: buildingOffset.y+2, z: 0}]
                    data.yaw = [rotate*180%360, rotate*180%360]
                    break
                case 3:
                    data.offset = [{x: buildingOffset.x+1, y: buildingOffset.y+1, z: 0}, {x: buildingOffset.x+1, y: buildingOffset.y+2, z: 0}]
                    data.yaw = [rotate*180%360, rotate*180%360]
                    break
                default:
                    throw `unsupported: refinery slot < 3`
            }

        }else if (type === productionCategory.collider) {
            switch (slotIndex) {
                case 8:
                    data.offset = [{x: buildingOffset.x-0.8, y: buildingOffset.y-2, z: 0}, {x: buildingOffset.x-0.8, y: buildingOffset.y-3, z: 0}]
                    data.yaw = [180 + rotate*180%360, 180 + rotate*180%360]
                    break
                case 7:
                    data.offset = [{x: buildingOffset.x-1.8, y: buildingOffset.y-2, z: 0}, {x: buildingOffset.x-1.8, y: buildingOffset.y-3, z: 0}]
                    data.yaw = [180 + rotate*180%360, 180 + rotate*180%360]
                    break
                case 6:
                    data.offset = [{x: buildingOffset.x-2.5, y: buildingOffset.y-2, z: 0}, {x: buildingOffset.x-2.5, y: buildingOffset.y-3, z: 0}]
                    data.yaw = [180 + rotate*180%360, 180 + rotate*180%360]
                    break
                case 5:
                    data.offset = [{x: buildingOffset.x-4, y: buildingOffset.y-1, z: 0}, {x: buildingOffset.x-5, y: buildingOffset.y-1, z: 0}]
                    data.yaw = [270 + rotate*180%360, 270 + rotate*270%360]
                    break
                case 4:
                    data.offset = [{x: buildingOffset.x-4, y: buildingOffset.y, z: 0}, {x: buildingOffset.x-5, y: buildingOffset.y, z: 0}]
                    data.yaw = [270 + rotate*180%360, 270 + rotate*270%360]
                    break
                case 3:
                    data.offset = [{x: buildingOffset.x-4, y: buildingOffset.y+1, z: 0}, {x: buildingOffset.x-5, y: buildingOffset.y+1, z: 0}]
                    data.yaw = [270 + rotate*180%360, 270 + rotate*270%360]
                    break
                default:
                    throw `unsupported: collider slot < 3`
            }
        }else {
            throw `calculateSorterLocalOffset error: unsupported production category - ${type}`
        }
        if (rotate === 1) {
            data.offset.reverse()
        }
        return data
    }

    newProductionBuilding(subRecipe) {
        for (let i=0; i<subRecipe.building.num; i++){
            this.buildingIndex ++
            let buildingArea, buildingX, buildingY, buildingZ
            buildingArea = this.calculateBuildingArea(subRecipe)
            // }
            let needNewLine = false
            // console.log(this.occupiedArea)
            // console.log(this.blueprintSize)
            if (this.blueprintSize.x - this.occupiedArea[this.occupiedArea.length-1].x2 >= buildingArea.x/2) {
                // 在当前行继续添加
                // this.buildingArray[this.buildingArray.length-1].push({index: this.buildingIndex, sorterList: sorterList})
                buildingX = this.occupiedArea[this.occupiedArea.length-1].x2 + 1 + buildingArea.centerPoint[3]
                buildingY = this.occupiedArea[this.occupiedArea.length-2].y2 + 1 + buildingArea.centerPoint[0]
                buildingZ = 0
                this.occupiedArea[this.occupiedArea.length-1].x2 += buildingArea.x
                if (buildingY + buildingArea.centerPoint[2] > this.occupiedArea[this.occupiedArea.length-1].y2){
                    // 当一行中出现更宽（y轴方向为宽度）的建筑时，占地区域的y2需要更新
                    this.occupiedArea[this.occupiedArea.length-1].y2 = buildingY + buildingArea.centerPoint[2]
                }
            }else {
                // 新的一行
                needNewLine = true
                // this.buildingArray.push([{index: this.buildingIndex, sorterList: sorterList}])
                buildingX = buildingArea.centerPoint[3]
                buildingY = buildingArea.centerPoint[0] + this.occupiedArea[this.occupiedArea.length-1].y2 + 1
                buildingZ = 0
                this.occupiedArea.push({
                    x1: 0,
                    y1: buildingY - buildingArea.centerPoint[0],
                    x2: buildingX + buildingArea.centerPoint[1],
                    y2: buildingY + buildingArea.centerPoint[2]
                })
            }
            this.buildings.push({
                index: this.buildingIndex,
                areaIndex: 0,
                localOffset: [
                    {
                        x: buildingX,
                        y: buildingY,
                        z: buildingZ
                    },
                    {
                        x: buildingX,
                        y: buildingY,
                        z: buildingZ
                    }
                ],
                yaw: buildingArea.yaw,
                itemId: buildingMap[subRecipe.building.name].itemId,
                modelIndex: buildingMap[subRecipe.building.name].modelIndex,
                outputObjIdx: -1,
                inputObjIdx: -1,
                outputToSlot: 0,
                inputFromSlot: 0,
                outputFromSlot: 0,
                inputToSlot: 0,
                outputOffset: 0,
                inputOffset: 0,
                recipeId: parseInt(subRecipe.recipeID),
                filterId: 0,
                parameters: {
                    acceleratorMode: subRecipe.acceleratorMode
                }
            })
            // continue
            // 添加分拣器
            const nowBuildingIndex = this.buildingIndex
            let slotIndex = buildingMap[subRecipe.building.name].slotMaxIndex
            let productionSpeed = buildingMap[subRecipe.building.name].productionSpeed
            let sorterList = []
            let actual_building_num = Math.min(1, subRecipe.building.num - i)  // 建筑不是整数的时候，最后一个建筑分拣器实际rate会更低
            for (let outputItem of subRecipe.output){
                let actual_rate = outputItem.rate * productionSpeed * actual_building_num
                let sorter = buildingMap.sorterMk1
                if (actual_rate > sorter.sortingSpeed) {  // 一级分拣器不够用时直接使用三级分拣器，先不支持二级分拣器
                    sorter = buildingMap.sorterMk3
                }
                let newSorter = this.getBuildingTemplate()
                newSorter.itemId = sorter.itemId
                newSorter.modelIndex = sorter.modelIndex
                newSorter.inputObjIdx = nowBuildingIndex
                newSorter.outputToSlot = -1
                newSorter.inputToSlot = 1
                newSorter.inputFromSlot = slotIndex
                newSorter.filterId = itemMap[outputItem.name].iconId
                newSorter.parameters = {length:1}
                const offsetInfo = this.calculateSorterLocalOffsetAndYaw({x:buildingX, y:buildingY, z: buildingZ}, buildingMap[subRecipe.building.name].category, slotIndex)
                newSorter.localOffset = offsetInfo.offset
                newSorter.yaw = offsetInfo.yaw
                this.buildings.push(newSorter)
                sorterList.push(this.buildingIndex)
                // this.buildingArray[this.buildingArray.length-1].push({index: this.buildingIndex, type: buildingType.sorter})
                if (this.sorters[outputItem.name]){  // 已存在就append
                    if (this.sorters[outputItem.name].output) {
                        this.sorters[outputItem.name].output.push({
                            index: newSorter.index,
                            rate: actual_rate,
                            ownerObjIdx: nowBuildingIndex,  // 分拣器附属生产建筑的index
                            ownerName: subRecipe.building.name,
                            ownerOffset: {x:buildingX, y:buildingY, z: buildingZ}
                        })
                    }else {
                        this.sorters[outputItem.name].output = [{
                            index: newSorter.index,
                            rate: actual_rate,
                            ownerObjIdx: nowBuildingIndex,
                            ownerName: subRecipe.building.name,
                            ownerOffset: {x:buildingX, y:buildingY, z: buildingZ}
                        }]
                    }
                }else {  // 不存在就新建
                    this.sorters[outputItem.name] = {
                        output: [{
                            index: newSorter.index,
                            rate: actual_rate,
                            ownerObjIdx: nowBuildingIndex,
                            ownerName: subRecipe.building.name,
                            ownerOffset: {x:buildingX, y:buildingY, z: buildingZ}
                        }]
                    }
                }
                slotIndex --
            }
            for (let inputItem of subRecipe.input) {
                let actual_rate = inputItem.rate * productionSpeed * actual_building_num
                let sorter = buildingMap.sorterMk1
                if (actual_rate > sorter.sortingSpeed) {  // 一级分拣器不够用时直接使用三级分拣器，先不支持二级分拣器
                    sorter = buildingMap.sorterMk3
                }
                let newSorter = this.getBuildingTemplate()
                newSorter.itemId = sorter.itemId
                newSorter.modelIndex = sorter.modelIndex
                newSorter.outputObjIdx = nowBuildingIndex
                newSorter.outputToSlot = slotIndex
                newSorter.inputToSlot = 1
                console.log(inputItem.name)
                newSorter.filterId = itemMap[inputItem.name].iconId
                newSorter.parameters = {length:1}
                const offsetInfo = this.calculateSorterLocalOffsetAndYaw({x:buildingX, y:buildingY, z: buildingZ}, buildingMap[subRecipe.building.name].category, slotIndex, 1)
                newSorter.localOffset = offsetInfo.offset
                newSorter.yaw = offsetInfo.yaw
                this.buildings.push(newSorter)
                sorterList.push(this.buildingIndex)
                // this.buildingArray[this.buildingArray.length-1].push({index: this.buildingIndex, type: buildingType.sorter})
                if (this.sorters[inputItem.name]){  // 已存在就append
                    if (this.sorters[inputItem.name].input) {
                        this.sorters[inputItem.name].input.push({
                            index: newSorter.index,
                            rate: actual_rate,
                            ownerObjIdx: nowBuildingIndex,  // 分拣器附属生产建筑的index
                            ownerName: subRecipe.building.name,
                            ownerOffset: {x:buildingX, y:buildingY, z: buildingZ}
                        })
                    }else {
                        this.sorters[inputItem.name].input = [{
                            index: newSorter.index,
                            rate: actual_rate,
                            ownerObjIdx: nowBuildingIndex,
                            ownerName: subRecipe.building.name,
                            ownerOffset: {x:buildingX, y:buildingY, z: buildingZ}
                        }]
                    }
                }else {  // 不存在就新建
                    this.sorters[inputItem.name] = {
                        input: [{
                            index: newSorter.index,
                            rate: actual_rate,
                            ownerObjIdx: nowBuildingIndex,
                            ownerName: subRecipe.building.name,
                            ownerOffset: {x:buildingX, y:buildingY, z: buildingZ}
                        }]
                    }
                }
                slotIndex --
            }

            if (needNewLine) {
                // 在当前行继续添加
                this.buildingArray.push([{index: this.buildingIndex, sorterList: sorterList}])
            }else {
                // 新的一行
                this.buildingArray[this.buildingArray.length-1].push({index: this.buildingIndex, sorterList: sorterList})
            }
        }
    }

    init() {
        this.calculateBlueprintArea()
        this.mapRecipeID()
    }

    generateConveyorBelts() {
        let itemSummary = {}
        // 计算物料统计信息，每个物料的产出速率、从多少个建筑产出、供给多少个建筑使用
        for (let subRecipe of this.recipe.subRecipes) {
            for (let outputItem of subRecipe.output){
                let outputRate = 0
                let fromBuildingNum = 0
                if (subRecipe.input === null) {
                    outputRate = outputItem.rate
                }else {
                    outputRate = outputItem.rate * buildingMap[subRecipe.building.name].productionSpeed * subRecipe.building.num
                    fromBuildingNum = subRecipe.building.num
                }
                if (itemSummary[outputItem.name]) {
                    itemSummary[outputItem.name].fromBuildingNum += fromBuildingNum
                    itemSummary[outputItem.name].rate += outputRate
                } else {
                    itemSummary[outputItem.name] = {
                        rate: outputRate,
                        fromBuildingNum: fromBuildingNum,
                        toBuildingNum: 0
                    }
                }
            }
            if (subRecipe.input === null) {
                continue
            }
            for (let inputItem of subRecipe.input) {
                if (itemSummary[inputItem.name]) {
                    itemSummary[inputItem.name].toBuildingNum += subRecipe.building.num
                    itemSummary[inputItem.name].inputRate += inputItem.rate * buildingMap[subRecipe.building.name].productionSpeed * subRecipe.building.num
                }else {
                    itemSummary[inputItem.name] = {
                        rate: 0,
                        inputRate: inputItem.rate * buildingMap[subRecipe.building.name].productionSpeed * subRecipe.building.num,
                        fromBuildingNum: 0,
                        toBuildingNum: subRecipe.building.num
                    }
                }
            }
        }
        for (let key in itemSummary) {
            // rate为0（rate是按output计算的）但inputRate不为0，说明该物品是被排除的中间产物， 把inputRate赋值给rate，生成蓝图时该产物就会被当作原料
            if (itemSummary[key].rate === 0 && itemSummary[key].inputRate !== 0) {
                itemSummary[key].rate = itemSummary[key].inputRate
            }
        }

        console.log(itemSummary)
        // console.log(JSON.stringify(this.sorters))
        // 生成传送带并连接到分拣器
        for (let item in itemSummary){
            const itemName = item
            item = itemSummary[item]
            let conveyorBelt = buildingMap.conveyorBeltMk1
            if (item.rate > conveyorBelt.transportSpeed) {
                conveyorBelt = buildingMap.conveyorBeltMK3  // 直接使用三级传送带，跳过二级
            }

            let maxTransportSpeed = buildingMap.conveyorBeltMK3.transportSpeed
            if (item.fromBuildingNum === 0) {  // 只有原料可以堆叠，中间产物不支持堆叠
                maxTransportSpeed = buildingMap.conveyorBeltMK3.transportSpeed * this.config.conveyorBeltStackLayer
            }
            // this.sortersBackup = this.sorters
            let doneRate = 0
            for (let i=0; i<Math.ceil(item.rate/maxTransportSpeed); i++){
                let parameters = null
                const rate = Math.min(maxTransportSpeed, item.rate-i*maxTransportSpeed)
                let inputRate = rate
                let inputData = []
                let outputData = []
                let doneSorterNum = 0
                if (item.fromBuildingNum !== 0){
                    for (let i=this.sorters[itemName].output.length-1; i>=0; i--){
                        if (this.sorters[itemName].output[i].rate - inputRate > 0.000000000001) {
                            // 当前带接受运力不能满足分拣器，则该分拣器连接下一个带上的节点
                            // rate时每秒生产量，除不尽时会有精度误差，小数点后16位都是准确的，取0.000000000001为判断标准足够了。
                            break
                        }
                        if (doneSorterNum % this.config.maxSorterNumOneBelt === 0) {
                            inputData.push([this.sorters[itemName].output[i].index])
                        }else {
                            inputData[inputData.length-1].push(this.sorters[itemName].output[i].index)
                        }

                        inputRate -= this.sorters[itemName].output[i].rate
                        doneRate += this.sorters[itemName].output[i].rate
                        this.sorters[itemName].output.pop()
                        doneSorterNum ++
                    }
                }else {  // 说明是原料
                    inputData.push([])
                    parameters = {
                        iconId: itemMap[itemName].iconId,
                        count: rate * 60
                    }
                    inputRate = 0
                }

                let outputRate = rate - inputRate  // 当前传送带实际运力
                doneSorterNum = 0
                if (item.toBuildingNum !== 0) {
                    for (let i=this.sorters[itemName].input.length-1; i>=0; i--){
                        // if(
                        //     !([buildingMap.chemicalPlant, buildingMap.quantumChemicalPlant].includes(this.sorters[itemName].input[i].ownerName))
                        //     && outputRate < this.sorters[itemName].input[i].rate
                        // ) {
                        //     // 化工厂和量子化工厂暂不考虑这种情况，所以可能会出现某个分拣器供给速率跟不上，导致总产量小于预期
                        //     // 当前带输出运力不能满足分拣器，则传送带新增一个节点单独该分拣器连接上，同时给对应建筑增加一个分拣器连到下一个节点
                        //     outputData.push([this.sorters[itemName].input[i].index])
                        //     const newSorterRate = this.sorters[itemName].input[i].rate - outputRate
                        //     this.sorters[itemName].input.unshift({
                        //         index: this.sorters[itemName].input[i].index,
                        //         rate: newSorterRate,
                        //         ownerObjIdx: this.sorters[itemName].input[i].ownerObjIdx,
                        //         ownerName: this.sorters[itemName].input[i].ownerName,
                        //         ownerOffset: this.sorters[itemName].input[i].ownerOffset
                        //     })
                        //     let sorter = buildingMap.sorterMk1
                        //     if (newSorterRate > sorter.sortingSpeed) {  // 一级分拣器不够用时直接使用三级分拣器，先不支持二级分拣器
                        //         sorter = buildingMap.sorterMk3
                        //     }
                        //     let newSorter = this.getBuildingTemplate()
                        //     newSorter.itemId = sorter.itemId
                        //     newSorter.modelIndex = sorter.modelIndex
                        //     newSorter.outputObjIdx = this.sorters[itemName].input[i].ownerObjIdx
                        //     newSorter.outputToSlot = buildingMap[this.sorters[itemName].input[i].ownerName].slotMaxIndex - 5
                        //     newSorter.inputToSlot = 1
                        //     newSorter.parameters = {length:1}
                        //     const offsetInfo = this.calculateSorterLocalOffsetAndYaw(this.sorters[itemName].input[i].ownerOffset, buildingMap[this.sorters[itemName].input[i].ownerName].category, newSorter.outputToSlot, 1)
                        //     newSorter.localOffset = offsetInfo.offset
                        //     newSorter.yaw = offsetInfo.yaw
                        //     this.buildings.push(newSorter)
                        //     let startMove = false
                        //     // 寻找目标建筑 把新sorter加进去，并位移此行之后的建筑
                        //     for (let i=0; i<this.buildingArray.length; i++) {
                        //         for (let j=0; j<this.buildingArray[i].length; j++){
                        //             if (this.buildingArray[i][j].index === this.sorters[itemName].input[i].ownerObjIdx){
                        //                 this.buildingArray[i][j].sorterList.push(newSorter.index)
                        //                 startMove = true
                        //             }else if (startMove) {
                        //                 // move building and sorters
                        //                 let toMoveNum = 1 + this.buildingArray[i][j].sorterList.length
                        //                 for (let b of this.buildings) {
                        //                     if (b.index === this.buildingArray[i][j].index) {
                        //                         b.localOffset[0].x += 1
                        //                         b.localOffset[1].x += 1
                        //                         toMoveNum --
                        //                     }else if (this.buildingArray[i][j].sorterList.includes(b.index)) {
                        //                         b.localOffset[0].x += 1
                        //                         b.localOffset[1].x += 1
                        //                         toMoveNum --
                        //                     }
                        //                     if (toMoveNum <= 0) {
                        //                         break
                        //                     }
                        //                 }
                        //             }
                        //         }
                        //         if (startMove) {
                        //             break
                        //         }
                        //     }
                        //
                        //     this.sorters[itemName].input.pop()
                        //     break
                        // }

                        if (doneSorterNum % this.config.maxSorterNumOneBelt === 0) {
                            outputData.push([this.sorters[itemName].input[i].index])
                        }else {
                            outputData[outputData.length-1].push(this.sorters[itemName].input[i].index)
                        }
                        outputRate -= this.sorters[itemName].input[i].rate
                        this.sorters[itemName].input.pop()
                        doneSorterNum ++
                        if (outputRate <= 0) {
                            // 这里output < 0时说明刚连接的这个分拣器可能运力不够用，会导致最终产量略低于预期产量
                            break
                        }
                    }
                }else {  // 说明是产物
                    outputData.push([])
                    parameters = {
                        iconId: itemMap[itemName].iconId,
                        count: item.rate * 60
                    }
                }


                let direction = 1
                if (item.fromBuildingNum === 0) {
                    direction = -1
                }
                console.log(itemName, inputData, outputData, direction)
                this.newConveyor(conveyorBelt, direction, inputData, outputData, parameters)
            }
        }
    }

    generateBuildings(){
        for (let subRecipe of this.recipe.subRecipes) {
            if (subRecipe.building === null){
                continue
            }
            this.newProductionBuilding(subRecipe)
        }
    }
}
// TODO 建筑物类型排序？
// TODO 生成传送带前判断下是否需要新一行
// TODO 生产设施速度不为1时有问题，比如使用1级制造台的蓝图 会出现许多分拣器连接异常
// TODO 原油精炼塔、化工厂和其他建筑的碰撞问题 以及 高纬度的碰撞问题
// TODO 一个物品既是中间产物又是原料输入时 蓝图会有问题，比如量子芯片中的氢
// TODO 1/min的粒子对撞机蓝图 钢材输入分拣器失效、框架材料硅石输入异常
// const tmpRecipe = [
//     {
//         output: [{name: itemMap.proliferatorMk2.name, rate: 1}],
//         input: [{name: itemMap.proliferatorMk1.name, rate: 2}, {name: itemMap.diamond.name, rate: 1}],
//         building: {name: buildingMap.assemblingMachineMk2.name, num: 1},
//         recipeID: 107  // 增产剂2
//     },
//     {
//         output: [{name: itemMap.proliferatorMk1.name, rate: 2}],
//         input: [{name: itemMap.coal.name, rate: 2}],
//         building: {name: buildingMap.assemblingMachineMk2.name, num: 1},
//         recipeID: 106  // 增产剂1
//     },
//     {
//         output: [{name: itemMap.diamond.name, rate: 1/2}],
//         input: [{name: itemMap.energeticGraphite.name, rate: 1/2}],
//         building: {name: buildingMap.arcSmelter.name, num: 2},
//         recipeID: 60,  // 金刚石
//         acceleratorMode: 0,
//     },
//     {
//         output: [{name: itemMap.energeticGraphite.name, rate: 1/2}],
//         input: [{name: itemMap.coal.name, rate: 1}],
//         building: {name: buildingMap.arcSmelter.name, num: 2},
//         recipeID: 17,  // 高能石墨
//         acceleratorMode: 0,
//     },
//     {
//         output: [{name: itemMap.sulfuricAcid.name, rate: 2/3}],
//         input: [{name: itemMap.water.name, rate: 2/3}, {name: itemMap.refinedOil.name, rate: 1}, {name: itemMap.stone.name, rate: 4/3}],
//         building: {name: buildingMap.chemicalPlant.name, num: 3},
//         acceleratorMode: 0,
//         recipeID: 24,  // 硫酸
//     },
//     {
//         output: [{name: itemMap.refinedOil.name, rate: 0.5}, {name: itemMap.hydrogen.name, rate: 0.25}],
//         input: [{name: itemMap.oil.name, rate: 0.5}],
//         building: {name: buildingMap.oilRefinery.name, num: 6},
//         recipeID: 16  // 精炼油
//     },
//     {
//         output: [{name: itemMap.ironOre.name, rate: 1}],
//         input: null,
//         building: null,
//     },
//     {
//         output: [{name: itemMap.coal.name, rate: 4}],
//         input: null,
//         building: null
//     },
// ]

//
//
// const outputRecipe = {
//     output: itemMap.titaniumIngot,
//     rate: 60,
//     subRecipes: [
//         {
//             "building": {"name": buildingMap.miniatureParticleCollider.name, "num": 3},
//             "output": [],
//             "input": [{"name": itemMap.hydrogen.name, "rate": 0.6666666666666666}, {"name": itemMap.hydrogen.name, "rate": 0.6666666666666666},{"name": itemMap.hydrogen.name, "rate": 0.6666666666666666},{"name": itemMap.hydrogen.name, "rate": 0.6666666666666666},{"name": itemMap.hydrogen.name, "rate": 0.6666666666666666},{"name": itemMap.hydrogen.name, "rate": 0.6666666666666666}],
//             "acceleratorMode": 0
//         }]
// }
// //
// b1 = new BluePrint('test', outputRecipe)
// b1.init()
// b1.generateBuildings()
// b1.generateConveyorBelts()
// b1.blueprintTemplate.buildings = b1.buildings
// console.log(JSON.stringify(b1.blueprintTemplate))
