window.gameData = {
      // ----- UNITS (ручной ввод) -----
      units: [
        { 
          name: `Camera Guy`, 
          imageUrl: "https://i.postimg.cc/qv7FBZfK/Camera-Guy.png",
          rarity: 'common',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Banner", chance: "43%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],

          stats: {
            cost: { min: 200, max: "2,050" },
            placements: { min: 5, max: 5 },
            range: { min: 22, max: 28 },
            speed: { min: 2.5, max: 2 },
            damage: { min: 5, max: 14 },
            dps: { min: 2, max: 14 },
            strokes: { min: 1, max: 2 }
          }
        },
        { 
          name: `Speaker Guy`, 
          imageUrl: "https://i.postimg.cc/59qKBMfc/Speaker-Guy.png",
          rarity: 'common',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Banner", chance: "43%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 100, max: "1,050" },
            placements: { min: 6, max: 6 },
            range: { min: 20, max: 29 },
            speed: { min: 2, max: 1 },
            damage: { min: 4, max: 10 },
            dps: { min: 2, max: 10 }
          }
        },
        { 
          name: `TV Guy`, 
          imageUrl: "https://i.postimg.cc/4dGbym7Y/TV-Guy.png",
          rarity: 'common',
          type: 'Cone AOE',
          obtainmentStats: 
          [
            { from: "Banner", chance: "43%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 300, max: "1,800" },
            placements: { min: 4, max: 4 },
            range: { min: 24, max: 31 },
            speed: { min: 3, max: 2 },
            damage: { min: 3, max: 8 },
            dps: { min: 1, max: 4 },
            angle: { min: 60, max: 80 }
          }
        },
        { 
          name: `Helicopter Speaker`, 
          imageUrl: "https://i.postimg.cc/hvtmQYL8/Helicopter-Speaker.png",
          rarity: 'uncommon',
          type: 'Cone AOE',
          obtainmentStats: 
          [
            { from: "Banner", chance: "30%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 225, max: "1,425" },
            placements: { min: 5, max: 5 },
            range: { min: 22, max: 22 },
            speed: { min: 4, max: 2.4 },
            damage: { min: 4, max: 12 },
            dps: { min: 1, max: 5 },
            angle: { min: 90, max: 120 }
          }
        },
        {
          name: `Dark Speaker Guy`, 
          imageUrl: "https://i.postimg.cc/59898gPh/Dark-Speaker-Guy.png",
          rarity: 'uncommon',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Banner", chance: "30%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 150, max: "1,475" },
            placements: { min: 4, max: 4 },
            range: { min: 20, max: 31 },
            speed: { min: 3, max: 2 },
            damage: { min: 2, max: 7 },
            dps: { min: 1.33, max: 10.5 },
            strokes: { min: 2, max: 3 }
          }
        },
        { 
          name: `Camera Toilet`, 
          imageUrl: "https://i.postimg.cc/Y2DRfNvk/Camera-Toilet.png",
          rarity: 'uncommon',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Banner", chance: "30%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 50, max: "425" },
            placements: { min: 5, max: 5 },
            range: { min: 18, max: 23 },
            speed: { min: 2.5, max: 0.8 },
            damage: { min: 1, max: 5 },
            dps: { min: 0.4, max: 6.25 }
          }
        },
        { 
          name: `Camera Drone`, 
          imageUrl: "https://i.postimg.cc/hGwy49Ts/Camera-Drone.png",
          rarity: 'uncommon',
          type: 'Line AOE',
          obtainmentStats: 
          [
            { from: "Banner", chance: "30%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 400, max: "2,325" },
            placements: { min: 4, max: 4 },
            range: { min: 24, max: 32 },
            speed: { min: 0.8, max: 0.5 },
            damage: { min: 1, max: 3 },
            dps: { min: 1.25, max: 6 }
          }
        },
        { 
          name: `Scientist Camera Guy`, 
          imageUrl: "https://i.postimg.cc/hv9FJZtK/Scientist-Camera-Guy.png",
          rarity: 'rare',
          type: 'Farm',
          obtainmentStats: 
          [
            { from: "Banner", chance: "20%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 250, max: "4,000" },
            placements: { min: 4, max: 4 },
            cash: { min: 50, max: 800 }
          }
        },
        { 
          name: `Rocket Camera Guy`, 
          imageUrl: "https://i.postimg.cc/vH2BGDk9/Rocket-Camera-Guy.png",
          rarity: 'rare',
          type: 'Splash',
          stats: {
            cost: { min: 800, max: "4,900" },
            placements: { min: 3, max: 3 },
            range: { min: 28, max: 32 },
            speed: { min: 4, max: 3.6 },
            damage: { min: 10, max: 22 },
            dps: { min: 2.5, max: 6.11 },
            splash: { min: 9, max: 14 }
          },
          // пример ручной таблицы craft (mode: 'craft')
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Camera Guy',
                rarity: 'common',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/qv7FBZfK/Camera-Guy.png'
              },
              {
                name: 'Rocket Launcher',
                rarity: 'uncommon',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/zB5xtRYs/transparent_Photoroom_(38).png'
              }
            ]
          }
        },
        { 
          name: `Large Speaker Guy`, 
          imageUrl: "https://i.postimg.cc/zGcYLgFp/Large-Speaker-Guy.png",
          rarity: 'rare',
          type: 'Single target → Cone AOE',
          obtainmentStats: 
          [
            { from: "Banner", chance: "20%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 250, max: "1,725" },
            placements: { min: 4, max: 4 },
            range: { min: 25, max: 45 },
            speed: { min: 3, max: 2.5 },
            damage: { min: 6, max: 14 },
            dps: { min: 2, max: 5.6 },
            angle: { min: 0, max: 42 }
          }
        },
        { 
          name: `Large Camera Guy`, 
          imageUrl: "https://i.postimg.cc/Hx32xQQL/Large-Camera-Guy.png",
          rarity: 'rare',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Banner", chance: "20%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 450, max: "2,425" },
            placements: { min: 4, max: 4 },
            range: { min: 28, max: 28 },
            speed: { min: 3.5, max: 2.5 },
            damage: { min: 12, max: 30 },
            dps: { min: 3.43, max: 12 }
          },
          abilities: [
            {
              name: "Heavy Blows",
              description: "+30% damage to enemies above 50% HP",
              onLevel: 5,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Infected Camera Guy`, 
          imageUrl: "https://i.postimg.cc/m2DtKKV0/Infected-Camera-Guy.png",
          rarity: 'rare',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Raid Crate", chance: "54%", imageUrl: "https://i.postimg.cc/mkq9H0vf/Raid_Crate.jpg" }
          ],
          stats: {
            cost: { min: 250, max: "2,150" },
            placements: { min: 5, max: 5 },
            range: { min: 24, max: 28 },
            speed: { min: 2.5, max: 2.5 },
            damage: { min: 8, max: 16 },
            dps: { min: 3.2, max: 6.4 },
            strokes: { min: 1, max: 2 }
          },
          abilities: [
            {
              name: "Active Infection",
              description: "-25% stun duration",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Construction Camera Guy`, 
          imageUrl: "https://i.postimg.cc/mkTT31pK/Construction-Camera-Guy.png",
          rarity: 'rare',
          type: 'Single target → Splash',
          obtainmentStats: 
          [
            { from: "City Map", chance: "Beating the Map (5% on Easy | 6% on Normal | 7% on Hard)", imageUrl: "https://i.postimg.cc/DZykKv0v/Скриншот_06_01_2026_163351.jpg" }
          ],
          stats: {
            cost: { min: 325, max: "2,120" },
            placements: { min: 3, max: 3 },
            range: { min: 24, max: 24 },
            speed: { min: 3, max: 2.5 },
            damage: { min: 12, max: 26 },
            dps: { min: 4, max: 10.4 },
            splash: { min: 0, max: 10 }
          }
        },
        { 
          name: `Bunny Assassin Speaker Guy`, 
          imageUrl: "https://i.postimg.cc/t70tmyWp/Bunny-Assassin-Speaker-Guy.png",
          rarity: 'rare',
          type: 'Single target',
          obtainment: 'Easter Crate (Unobtainable)',
          stats: {
            cost: { min: 325, max: "1,650" },
            placements: { min: 4, max: 4 },
            range: { min: 26, max: 38 },
            speed: { min: 3, max: 2 },
            damage: { min: 4, max: 11 },
            dps: { min: 2.66, max: 16.5 },
            strokes: { min: 2, max: 3 }
          }
        },
        { 
          name: `Chill Camera Toilet`, 
          imageUrl: "https://i.postimg.cc/15HrKxXK/Chill-Camera-Toilet.png",
          rarity: 'rare',
          type: 'Single target',
          obtainment: 'Summer Crate (27.7%)',
          stats: {
            cost: { min: 70, max: "445" },
            placements: { min: 6, max: 6 },
            range: { min: 18, max: 23 },
            speed: { min: 2.5, max: 0.8 },
            damage: { min: 1, max: 5 },
            dps: { min: 0.4, max: 6.25 }
          },
          abilities: [
            {
              name: "Chilling Combo",
              description: "Chill Camera Toilet gains 20% damage for each Chill Camera Toilet in range",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Toxic Camera Guy`, 
          imageUrl: "https://i.postimg.cc/fL3YT0bt/Toxic-Camera-Guy.png",
          rarity: 'epic',
          type: 'Splash → Full AOE',
          obtainmentStats: 
          [
            { from: "Sewers Map", chance: "Beating the Map (2.5% on Easy | 3% on Normal | 3.5% on Hard)", imageUrl: "https://i.postimg.cc/ydY4z1xs/Скриншот_06_01_2026_163413.jpg" }
          ],
          stats: {
            cost: { min: 400, max: "2,650" },
            placements: { min: 4, max: 4 },
            range: { min: 22, max: 36 },
            speed: { min: 4.5, max: 5.5 },
            damage: { min: 4, max: 10 },
            dps: { min: 0.88, max: 1.81 },
            splash: { min: 15, max: 0 },
            angle: { min: 0, max: 360 },
          },
          abilities: [
            {
              name: "Toxic",
              description: "Applies Toxic: enemies take 25% more damage",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Shield Camera Guy`, 
          imageUrl: "https://i.postimg.cc/DZVwLWgW/Shield-Camera-Guy.png",
          rarity: 'epic',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Banner", chance: "6%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 300, max: "2,350" },
            placements: { min: 5, max: 5 },
            range: { min: 22, max: 36 },
            speed: { min: 3, max: 2 },
            damage: { min: 6, max: 30 },
            dps: { min: 2, max: 15 }
          },
          abilities: [
            {
              name: "Stun Absorber",
              description: "Max stun: 1 second",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Ninja Camera Guy`, 
          imageUrl: "https://i.postimg.cc/V6jnCPXG/Ninja-Camera-Guy.png",
          rarity: 'epic',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Banner", chance: "6%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 300, max: "2,325" },
            placements: { min: 4, max: 4 },
            range: { min: 22, max: 52 },
            speed: { min: 2, max: 1.3 },
            damage: { min: 4, max: 16 },
            dps: { min: 2, max: 12.3 },
            crit: { min: 20, max: 50 }
          }
        },
        { 
          name: `Large Toilet Camera Guy`, 
          imageUrl: "https://i.postimg.cc/JhhRXNJv/Large-Toilet-Camera-Guy.png",
          rarity: 'epic',
          type: 'Single target → Full AOE',
          obtainmentStats: 
          [
            { from: "Banner", chance: "6%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 550, max: "3,125" },
            placements: { min: 4, max: 4 },
            range: { min: 22, max: 25 },
            speed: { min: 3.5, max: 2.5 },
            damage: { min: 20, max: 45 },
            dps: { min: 5.7, max: 18 },
            angle: { min: 0, max: 360 }
          }
        },
        { 
          name: `Large TV Guy`, 
          imageUrl: "https://i.postimg.cc/Y9qM11FK/Large-TV-Guy.png",
          rarity: 'epic',
          type: 'AOE',
          obtainmentStats: 
          [
            { from: "Banner", chance: "6%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 750, max: "3,800" },
            placements: { min: 3, max: 3 },
            range: { min: 30, max: 42 },
            speed: { min: 3, max: 3.5 },
            damage: { min: 12, max: 10 },
            dps: { min: 4, max: 14.3 },
            angle: { min: 90, max: 135 },
            strokes: { min: 0, max: 5 }
          }
        },
        { 
          name: `Large Rocket Camera Guy`, 
          imageUrl: "https://i.postimg.cc/bJXFP8zn/Large-Rocket-Camera-Guy.png",
          rarity: 'epic',
          type: 'AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Large Camera Guy',
                rarity: 'rare',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/Hx32xQQL/Large_Camera_Guy.png'
              },
              {
                name: 'Rocket Camera Guy',
                rarity: 'rare',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/vH2BGDk9/Rocket_Camera_Guy.png'
              },
              {
                name: 'Rocket Launcher',
                rarity: 'uncommon',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/zB5xtRYs/transparent_Photoroom_(38).png'
              }
            ]
          },
          stats: {
            cost: { min: 600, max: "4,600" },
            placements: { min: 3, max: 3 },
            range: { min: 34, max: 55 },
            speed: { min: 4, max: 2.8 },
            damage: { min: 20, max: 40 },
            dps: { min: 5, max: 14.3 },
            splash: { min: 12, max: 25 }
          },
          abilities: [
            {
              name: "Explosive",
              description: "+3 damage per enemy hit",
              onLevel: 5,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Scientist TV Guy`, 
          imageUrl: "https://i.postimg.cc/6qvSR3Yj/Scientist-TV-Guy.png",
          rarity: 'epic',
          type: 'Support',
          obtainmentStats: 
          [
            { from: "Gear Lab Map", chance: "Beating the Map (2.5% on Easy | 3% on Normal | 3.5% on Hard | 4% on Insane)", imageUrl: "https://i.postimg.cc/zBXZ1zvB/Скриншот_06_01_2026_163700.jpg" }
          ],
          stats: {
            cost: { min: 600, max: "4,600 (45 scrap)" },
            placements: { min: 4, max: 4 },
            speed: { min: 12, max: 8 }
          },
          abilities: [
            {
              name: "Gear Research",
              description: "Attacks reduce gear cooldown by 1s (1.6s)",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 3,
            prices: [10, 15, 20],
            abilities: [
              { ability: "Gear Research (time reduction)", values: ["1 → 1.2", "1.2 → 1.4", "1.4 → 1.6"] }
            ]
          }
        },
        { 
          name: `Large Infected Camera Guy`, 
          imageUrl: "https://i.postimg.cc/N0Rk1XcT/Large-Infected-Camera-Guy.png",
          rarity: 'epic',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Raid Crate", chance: "33%", imageUrl: "https://i.postimg.cc/mkq9H0vf/Raid_Crate.jpg" }
          ],
          stats: {
            cost: { min: 250, max: "3,075" },
            placements: { min: 4, max: 4 },
            range: { min: 28, max: 28 },
            speed: { min: 3.5, max: 2.5 },
            damage: { min: 25, max: 50 },
            dps: { min: 7.1, max: 20 }
          },
          abilities: [
            {
              name: "Active Infection",
              description: "-25% stun duration",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Heavy Blows",
              description: "+30% damage to enemies above 50% HP",
              onLevel: 5,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Helicopter Speaker (armored)`, 
          imageUrl: "https://i.postimg.cc/qR5crxXv/Helicopter-Speaker-(armored).png",
          rarity: 'epic',
          type: 'Cone AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Helicopter Speaker',
                rarity: 'uncommon',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/hvtmQYL8/Helicopter_Speaker.png'
              },
              {
                name: 'Metal Plating',
                rarity: 'common',
                quantity: 4,
                imageUrl: 'https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png'
              }
            ]
          },
          stats: {
            cost: { min: 225, max: "1,375" },
            placements: { min: 4, max: 4 },
            range: { min: 24, max: 30 },
            speed: { min: 3, max: 1.5 },
            damage: { min: 6, max: 13 },
            dps: { min: 2, max: 8.6 },
            angle: { min: 90, max: 120 }
          }
        },
        { 
          name: "Golden Scientist TV Guy", 
          imageUrl: "https://i.postimg.cc/BnzM4sqr/Golden-Scientist-TV-Guy.png",
          rarity: 'epic',
          type: 'Farm & Support',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Scientist TV Guy',
                rarity: 'epic',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/6qvSR3Yj/Scientist_TV_Guy.png'
              },
              {
                name: 'Gold Bar',
                rarity: 'legendary',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/90PTCdQK/image.png'
              },
              {
                name: 'Reinforced Plating',
                rarity: 'epic',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              },
            ]
          },
          stats: {
            cost: { min: 250, max: "4,550 (75 Scrap)" },
            placements: { min: 2, max: 2 },
            speed: { min: 12, max: 9 },
            cash: { min: 50, max: "1,400" }
          },
          abilities: [
            {
              name: "Gear Research",
              description: "Attacks reduce gear cooldown by 1s",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Emergency Fund",
              description: "Gain +350 (600) cash if below 800 (1,000) cash at wave start",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 4,
            prices: [10, 15, 25, 25],
            abilities: [
              { ability: "Emergency Fund (cash increase)", values: ["350 → 400", "400 → 450", "450 → 525", "525 → 600"] },
              { ability: "Emergency Fund (min cash holding)", values: [" ", " ", "800 → 900", "900 → 1,000"] }
            ]
          }
        },
        { 
          name: `Garage`, 
          imageUrl: "https://i.postimg.cc/x87cqsc9/Garage.png",
          rarity: 'epic',
          type: 'Summoner',
          obtainmentStats: 
          [
            { from: "Banner", chance: "6%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 450, max: "4,900" },
            placements: { min: 2, max: 2 },
            summonspeed: { min: 20, max: 26 },
            minionhp: { min: 20, max: 130 },
            minionspeed: { min: 0, max: 0.5 },
            miniondamage: { min: 0, max: 13 }
          },
          abilities: [
            {
              name: "Armored Vehicle",
              description: "Minions can shoot",
              onLevel: 5,
              type: "Passive",
              speed: { min: 0.5, max: 0.5 },
              damage: { min: 9, max: 13 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Dark Stereocopter`, 
          imageUrl: "https://i.postimg.cc/HxMpBpxn/Dark-Stereocopter.png",
          rarity: 'epic',
          type: 'Cone AOE',
          obtainmentStats: 
          [
            { from: "Banner", chance: "6%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 500, max: "2,600" },
            placements: { min: 3, max: 3 },
            range: { min: 28, max: 40 },
            speed: { min: 3, max: 1.6 },
            damage: { min: 6, max: 18 },
            dps: { min: 2, max: 11.25 },
            angle: { min: 70, max: 360 }
          }
        },
        { 
          name: `Captain Camera Guy`, 
          imageUrl: "https://i.postimg.cc/vZn3Ykcd/Captain-Camera-Guy.png",
          rarity: 'epic',
          type: 'Single target & Booster',
          obtainmentStats: 
          [
            { from: "Train Route Map", chance: "Beating the Map (2.5% on Easy | 3% on Normal | 3.5% on Insane)", imageUrl: "https://i.postimg.cc/NMfqwsFQ/Скриншот_06_01_2026_163441.jpg" }
          ],
          stats: {
            cost: { min: 600, max: "4,550 (165 Scrap)" },
            placements: { min: 4, max: 4 },
            range: { min: 24, max: "30 (31)" },
            speed: { min: 2, max: 1 },
            damage: { min: 5, max: 12 },
            dps: { min: 2.5, max: 12 }
          },
          abilities: [
            {
              name: "Camera Command",
              description: "Camera units in range gain +20% (26%) damage",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 3,
            prices: [50, 50, 65],
            abilities: [
              { ability: "Camera Command (damage buff)", values: ["20% → 22%", "22% → 24%", "24% → 26%"] },
              { ability: "🎯 Range", values: [" ", " ", "30 → 31"] }
            ]
          }
        },
        { 
          name: `Carrot Farmer Camera Guy`, 
          imageUrl: "https://i.postimg.cc/NMkngVC7/Carrot-Farmer-Camera-Guy.png",
          rarity: 'epic',
          type: 'Farm',
          obtainmentStats: 
          [
            { from: "Easter Crate", chance: "Unobtainable", imageUrl: "https://i.postimg.cc/gJmfYzVd/Easter_Crate.jpg" }
          ],
          stats: {
            cost: { min: 300, max: "4,800" },
            placements: { min: 3, max: 3 },
            cash: { min: 75, max: "1,200" }
          }
        },
        { 
          name: `Grillmaster TV Guy`, 
          imageUrl: "https://i.postimg.cc/hj5YYxXS/Grillmaster-TV-Guy.png",
          rarity: 'epic',
          type: 'Splash & Booster',
          obtainmentStats: 
          [
            { from: "Summer Battle Pass", chance: "Unobtainable", imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png" }
          ],
          stats: {
            cost: { min: 500, max: "3,725" },
            placements: { min: 2, max: 2 },
            range: { min: 18, max: 20 },
            speed: { min: 4, max: 2.5 },
            damage: { min: 16, max: 25 },
            dps: { min: 4, max: 10 },
            splash: { min: 10, max: 10 },
            crit: { min: 10, max: 25 }
          },
          abilities: [
            {
              name: "Raging Grill",
              description: "Units in range gain +20% crit chance",
              onLevel: 5,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Cauldron Toilet`, 
          imageUrl: "https://i.postimg.cc/YCjBdpnd/Cauldron-Toilet.png",
          rarity: 'epic',
          type: 'Full AOE & Support',
          obtainment: 'Zombie Crate (39.7% chance)',
          stats: {
            cost: { min: 400, max: "3,950" },
            placements: { min: 3, max: 3 },
            range: { min: 24, max: 36 },
            speed: { min: 12, max: 9 },
            damage: { min: 2, max: 5 },
            dps: { min: 0.16, max: 0.55 },
            angle: { min: 360, max: 360 }
          },
          abilities: [
            {
              name: "Toxic",
              description: "Applies Toxic: enemies take 25% more damage",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Acid Rain",
              description: "Deals 5x damage globally over 10 seconds",
              onLevel: 4,
              type: "Passive",
              speed: { min: 10, max: 10 },
              damage: { min: 20, max: 30 },
              dps: { min: 2, max: 3 }
            }
          ]
        },
        { 
          name: `Shackled Speaker Guy`, 
          imageUrl: "https://i.postimg.cc/qv3fn1Z6/Shackled-Speaker-Guy.png",
          rarity: 'epic',
          type: 'Splash & Booster',
          obtainmentStats: 
          [
            { from: "Zombie Battle Pass", chance: "Tier 15", imageUrl: "https://i.postimg.cc/zvKHfvN1/Скриншот_24_01_2026_223405.jpg" }
          ],
          stats: {
            cost: { min: 500, max: "2,500" },
            placements: { min: 2, max: 2 },
            range: { min: 18, max: 26 },
            speed: { min: 4, max: 2.5 },
            damage: { min: 10, max: 22 },
            dps: { min: 2.5, max: 8.8 }
          },
          abilities: [
            {
              name: "Shackled",
              description: "Absorbs nearby debuffs",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Prison Escape",
              description: "Debuffs on Shackled Speaker Guy last 50% less",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Witch TV Woman`, 
          imageUrl: "https://i.postimg.cc/MZ9b8bD0/transparent_Photoroom_2026_01_28T172737_645.png",
          rarity: 'legendary',
          type: 'Splash & Support',
          obtainmentStats: 
          [
            { from: "Zombie Battle Pass", chance: "Tier 40", imageUrl: "https://i.postimg.cc/zvKHfvN1/Скриншот_24_01_2026_223405.jpg" }
          ],
          stats: {
            cost: { min: 700, max: "5,925" },
            placements: { min: 3, max: 3 },
            range: { min: 26, max: 40 },
            speed: { min: 4, max: 3 },
            damage: { min: 20, max: 50 },
            splash: { min: 14, max: 14 },
            dps: { min: 5, max: 16.66 }
          },
          abilities: [
            {
              name: "Lightning Bottle",
              description: "Chance to strike lightning and stun for 4 seconds",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Acid Bottle",
              description: "Chance to apply Toxic for 8 seconds",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Infernal Bottle",
              description: "Chance to apply Burn for 100% damage",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
          ]
        },
        { 
          name: `Witch TV Woman (broom)`, 
          imageUrl: "https://i.postimg.cc/PfcShLyF/transparent_Photoroom_2026_01_23T232325_156.png",
          rarity: 'legendary',
          type: 'Splash & Support & Booster',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Witch TV Woman',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/MZ9b8bD0/transparent_Photoroom_2026_01_28T172737_645.png'
              },
              {
                name: 'Magical Broom',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/j52HLwdx/transparent_Photoroom_2026_01_27T135251_006.png'
              },
              {
                name: 'Eyeball',
                rarity: 'common',
                quantity: 60,
                imageUrl: 'https://i.postimg.cc/vmDcVhHL/Eyeball.png'
              }
            ]
          },
          stats: {
            cost: { min: 700, max: "11,575" },
            placements: { min: 3, max: 3 },
            range: { min: 32, max: 56 },
            speed: { min: 3.5, max: 2.5 },
            damage: { min: 25, max: 80 },
            splash: { min: 17, max: 17 },
            dps: { min: 7.1, max: 32 }
          },
          abilities: [
            {
              name: "Lightning Bottle",
              description: "Chance to strike lightning and stun for 4 seconds",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Acid Bottle",
              description: "Chance to apply Toxic for 8 seconds",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Infernal Bottle",
              description: "Chance to apply Burn for 100% damage",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Damage Potion",
              description: "Buffs a random nearby unit by 30% damage",
              onLevel: 9,
              type: "Passive",
              speed: { min: 30, max: 30 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
          ]
        },
        { 
          name: `Wave Ninja Camera Guy (ripples)`, 
          imageUrl: "https://i.postimg.cc/CxqzYcCC/transparent_Photoroom_2026_01_23T152459_596.png",
          rarity: 'legendary',
          type: 'Full AOE → Line AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Wave Ninja Camera Guy',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/cHYjbkY8/transparent_Photoroom_2026_01_28T172419_568.png'
              },
              {
                name: 'Surfboard',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/50rwv462/transparent_Photoroom_2026_01_27T170131_079.png'
              },
              {
                name: 'Sunscreen',
                rarity: 'common',
                quantity: 50,
                imageUrl: 'https://i.postimg.cc/66Vb5k2z/Sunscreen_Photoroom.png'
              }
            ]
          },
          stats: {
            cost: { min: 675, max: "7,825" },
            placements: { min: 4, max: 4 },
            range: { min: 20, max: 60 },
            speed: { min: 2.8, max: 5 },
            damage: { min: 16, max: 120 },
            crit: { min: 30, max: 50 },
            angle: { min: 360, max: 0 },
            dps: { min: 5.7, max: 24 }
          },
          abilities: [
            {
              name: "Flush",
              description: "Attacks knock enemies back",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Ripples",
              description: "Crits have 2x knockback",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Wave Ninja Camera Guy`, 
          imageUrl: "https://i.postimg.cc/cHYjbkY8/transparent_Photoroom_2026_01_28T172419_568.png",
          rarity: 'legendary',
          type: 'Full AOE → Line AOE',
          obtainmentStats: 
          [
            { from: "Summer Battle Pass", chance: "Unobtainable", imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png" }
          ],
          stats: {
            cost: { min: 675, max: "6,025" },
            placements: { min: 4, max: 4 },
            range: { min: 20, max: 50 },
            speed: { min: 2.8, max: 5 },
            damage: { min: 16, max: 100 },
            crit: { min: 15, max: 25 },
            angle: { min: 360, max: 0 },
            dps: { min: 5.7, max: 20 }
          },
          abilities: [
            {
              name: "Flush",
              description: "Attacks knock enemies back",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Vampire Camera Woman`, 
          imageUrl: "https://i.postimg.cc/DZLsS6BY/Vampire_Camera_Woman.png",
          rarity: 'legendary',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Zombie Crate", chance: "5%", imageUrl: "https://i.postimg.cc/C5g5d9Z2/Skrinsot-19-04-2026-152142.jpg" }
          ],
          stats: {
            cost: { min: 900, max: "9,350" },
            placements: { min: 2, max: 2 },
            range: { min: 30, max: 45 },
            speed: { min: 2, max: 1.5 },
            damage: { min: 40, max: 80 },
            crit: { min: 25, max: 75 },
            dps: { min: 20, max: 53.33 }
          },
          abilities: [
            {
              name: "Bloodsucker",
              description: "Crits grant 1 blood stack",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Metal Fangs",
              description: "Consumes 30 blood stacks: deal 10x damage and heal base by 5%",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 500, max: 800 },
              dps: { min: 0, max: 0 }
            },
          ]
        },
        { 
          name: `Vampire Camera Woman (royal)`, 
          imageUrl: "https://i.postimg.cc/T1Z0cShc/transparent_Photoroom_2026_01_23T232242_319.png",
          rarity: 'legendary',
          type: 'Single target',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Vampire Camera Woman',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/DZLsS6BY/Vampire_Camera_Woman.png'
              },
              {
                name: 'Blood Bag',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/JnqP9417/transparent_Photoroom_(46).png'
              },
              {
                name: 'Eyeball',
                rarity: 'common',
                quantity: 75,
                imageUrl: 'https://i.postimg.cc/vmDcVhHL/Eyeball.png'
              }
            ]
          },
          stats: {
            cost: { min: 900, max: "11,950 (35 scrap)" },
            placements: { min: 2, max: 2 },
            range: { min: 30, max: 45 },
            speed: { min: 2, max: 1.5 },
            damage: { min: 40, max: 90 },
            crit: { min: 25, max: 80 },
            dps: { min: 20, max: 60 }
          },
          abilities: [
            {
              name: "Bloodsucker",
              description: "Crits grant 1 blood stack",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Metal Fangs",
              description: "Consumes 30 blood stacks: deal 10x damage and heal base by 5% (8%)",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 500, max: 900 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Decompose",
              description: "Kills grant 5 blood stacks",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
          ],
          scrapUpgrades: {
            levels: 3,
            prices: [10, 10, 15],
            abilities: [
              { ability: "Metal Fangs (base heal)", values: ["5% → 6%", "6% → 7%", "7% → 8%"] }
            ]
          }
        },
        { 
          name: `Upgraded Dark Stereocopter`, 
          imageUrl: "https://i.postimg.cc/c1z9xZpr/transparent_Photoroom_(100).png",
          rarity: 'legendary',
          type: 'AOE → Full AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Dark Stereocopter',
                rarity: 'epic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/HxMpBpxn/Dark_Stereocopter.png'
              },
              {
                name: 'Helicopter Speaker',
                rarity: 'uncommon',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/hvtmQYL8/Helicopter_Speaker.png'
              },
              {
                name: 'Metal Plating',
                rarity: 'common',
                quantity: 16,
                imageUrl: 'https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png'
              }
            ]
          },
          stats: {
            cost: { min: 900, max: "4,600" },
            placements: { min: 3, max: 3 },
            range: { min: 28, max: 42 },
            speed: { min: 3, max: 1.5 },
            damage: { min: 8, max: 25 },
            angle: { min: 70, max: 360 },
            dps: { min: 2.66, max: 15.6 }
          },
          abilities: [
            {
              name: "Frequency Fusion",
              description: "Crits grant 1 blood stack",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Thrower Camera Guy`, 
          imageUrl: "https://i.postimg.cc/pXSqnZ2P/transparent_Photoroom_(25).png",
          rarity: 'legendary',
          type: 'Splash',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.9%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 700, max: "7,200" },
            placements: { min: 3, max: 3 },
            range: { min: 28, max: 40 },
            speed: { min: 6, max: 5 },
            damage: { min: 80, max: 200 },
            splash: { min: 14, max: 16 },
            dps: { min: 13.33, max: 40 }
          },
          abilities: [
            {
              name: "Anti-Tank",
              description: "+30% damage when only one target is hit",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 260, max: 260 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Tub Engineer Camera Guy`, 
          imageUrl: "https://i.postimg.cc/x82Xjsp6/Tub_Engineer_Camera_Guy.png",
          rarity: 'legendary',
          type: 'Summoner',
          obtainmentStats: 
          [
            { from: "Summer Crate", chance: "2%", imageUrl: "https://i.postimg.cc/5yGzCZh4/Summer_Crate_(morphs).jpg" }
          ],
          stats: {
            cost: { min: 435, max: "5,635" },
            placements: { min: 2, max: 2 },
            summonspeed: { min: 10, max: 30 },
            minionhp: { min: 20, max: 125 },
            miniondamage: { min: 0, max: 625 }
          },
          abilities: [
            {
              name: "Explosive Ducks",
              description: "Destroyed ducks explode for 500% damage",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 625, max: 625 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `TV Woman`, 
          imageUrl: "https://i.postimg.cc/GpK77s0b/transparent_Photoroom_(26).png",
          rarity: 'legendary',
          type: 'Single Target → Splash',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.9%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 900, max: "5,925" },
            placements: { min: 4, max: 4 },
            range: { min: 25, max: 60 },
            speed: { min: 2.5, max: 4 },
            damage: { min: 25, max: 100 },
            splash: { min: 0, max: 28 },
            dps: { min: 10, max: 25 }
          }
        },
        { 
          name: `Speaker Woman`, 
          imageUrl: "https://i.postimg.cc/QMm44WLM/transparent_Photoroom_(27).png",
          rarity: 'legendary',
          type: 'Single Target',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.9%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: 600, max: "5,425" },
            placements: { min: 4, max: 4 },
            range: { min: 28, max: 90 },
            speed: { min: 2.5, max: 2 },
            damage: { min: 12, max: 16 },
            strokes: { min: 2, max: 4 },
            dps: { min: 9.6, max: 32 }
          }
        },
        { 
          name: `Shackled Speaker Guy (no escape)`, 
          imageUrl: "https://i.postimg.cc/XNhs3ZLm/transparent_Photoroom_2026_01_23T232216_711.png",
          rarity: 'legendary',
          type: 'Single Target',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Shackled Speaker Guy',
                rarity: 'epic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/qv3fn1Z6/Shackled_Speaker_Guy.png'
              },
              {
                name: 'Chains',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/Hn7b9qMd/transparent_Photoroom_2026_01_27T170428_481.png'
              },
              {
                name: 'Eyeballs',
                rarity: 'common',
                quantity: 30,
                imageUrl: 'https://i.postimg.cc/vmDcVhHL/Eyeball.png'
              }
            ]
          },
          stats: {
            cost: { min: 450, max: "5,750" },
            placements: { min: 3, max: 3 },
            range: { min: 18, max: 28 },
            speed: { min: 4, max: 3.5 },
            damage: { min: 10, max: 26 },
            dps: { min: 2.5, max: 7.4 }
          },
          abilities: [
            {
              name: "Shackled",
              description: "Absorbs nearby negative effects",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Prison Escape",
              description: "Negative effects on Shackled Speaker Guy last 50% less",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Shackled 2",
              description: "Also absorbs negative effects from the most debuffed nearby unit",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Wave Crusher Camera Guy`, 
          imageUrl: "https://i.postimg.cc/fyNVWHqH/Wave_Camera_Crusher.png",
          rarity: 'legendary',
          type: 'Single Target',
          obtainmentStats: 
          [
            { from: "Summer Crate", chance: "3%", imageUrl: "https://i.postimg.cc/tJf6xLKb/Summer_Crate.jpg" }
          ],
          stats: {
            cost: { min: "1,400", max: "10,050" },
            placements: { min: 2, max: 2 },
            range: { min: 36, max: 44 },
            speed: { min: 7, max: 2.3 },
            damage: { min: 90, max: 100 },
            angle: { min: 360, max: 0 },
            splash: { min: 0, max: 18 },
            dps: { min: 2.5, max: 43.5 }
          },
          abilities: [
            {
              name: "BOUNCE!",
              description: "Attacks stun enemies for 1.5 seconds",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Pirate Speaker Woman`, 
          imageUrl: "https://i.postimg.cc/vZnQFKTc/Pirate_Speaker_Woman.png",
          rarity: 'legendary',
          type: 'AOE & Farm',
          obtainmentStats: 
          [
            { from: "Zombie Crate", chance: "3%", imageUrl: "https://i.postimg.cc/C5g5d9Z2/Skrinsot-19-04-2026-152142.jpg" }
          ],
          stats: {
            cost: { min: "350", max: "4,000" },
            placements: { min: 3, max: 3 },
            range: { min: 20, max: 26 },
            speed: { min: 3, max: 2.5 },
            damage: { min: 12, max: 34 },
            angle: { min: 100, max: 100 },
            cash: { min: 30, max: 200 },
            dps: { min: 4, max: 13.6 }
          },
          abilities: [
            {
              name: "Rusty Hook",
              description: "Applies Bleed: 25% damage over 3 seconds",
              onLevel: 3,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Smoke Bomb",
              description: "Stuns enemies for 3 seconds",
              onLevel: 5,
              type: "Passive",
              speed: { min: 16, max: 16 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
          ]
        },
        { 
          name: `Ninja Camera Guy (dual wield)`, 
          imageUrl: "https://i.postimg.cc/V6jnCPXG/Ninja_Camera_Guy.png",
          rarity: 'legendary',
          type: 'Single target',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Ninja Camera Guy',
                rarity: 'epic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/V6jnCPXG/Ninja_Camera_Guy.png'
              },
              {
                name: 'Lost Plunger',
                rarity: 'rare',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png'
              }
            ]
          },
          stats: {
            cost: { min: "300", max: "4,000" },
            placements: { min: 4, max: 4 },
            range: { min: 30, max: 70 },
            speed: { min: 1.5, max: 1 },
            damage: { min: 12, max: 25 },
            crit: { min: 25, max: 75 },
            dps: { min: 8, max: 25 }
          }
        },
        { 
          name: "Moyai", 
          imageUrl: "https://i.postimg.cc/wBZqch2Y/Moyai-Totem.png",
          rarity: 'legendary',
          type: 'Booster',
          obtainmentStats: 
          [
            { from: "Easter Event Map", chance: "Unobtainable", imageUrl: "https://i.postimg.cc/MKZNr3vs/Egg_Shell.png" }
          ],
          stats: {
            cost: { min: "1,000", max: "19,000" },
            placements: { min: 1, max: 1 },
            range: { min: 26, max: 50 }
          },
          abilities: [
            {
              name: "Stone Protection 1",
              description: "Units in range have 10% less stun duration",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Stone Protection 2",
              description: "Units in range have 20% less stun duration",
              onLevel: 2,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Stone Protection 3",
              description: "Units in range have 30% less stun duration",
              onLevel: 3,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Stone Awakening",
              description: "Units in range are stun-immune",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
          ]
        },
        { 
          name: `Mace Camera Guy`, 
          imageUrl: "https://i.postimg.cc/nhgPFTty/transparent_Photoroom_2026_01_25T140008_055.png",
          rarity: 'legendary',
          type: 'Splash',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Camera Guy',
                rarity: 'common',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/qv7FBZfK/Camera_Guy.png'
              },
              {
                name: 'Mace',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/fTFpF6VP/transparent_Photoroom_(18).png'
              }
            ]
          },
          stats: {
            cost: { min: "450", max: "5,200" },
            placements: { min: 3, max: 3 },
            range: { min: 22, max: 36 },
            speed: { min: 3.7, max: 2.5 },
            damage: { min: 24, max: 75 },
            splash: { min: 18, max: 21 },
            dps: { min: 6.5, max: 30 }
          },
          abilities: [
            {
              name: "Grand Slam",
              description: "Every other attack is 2x larger",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Heave Blows",
              description: "+30% damage to enemies above 50% HP",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
          ]
        },
        { 
          name: `Large Disabler Camera Guy`, 
          imageUrl: "https://i.postimg.cc/44tspj2j/transparent_Photoroom_(82).png",
          rarity: 'legendary',
          type: 'Single target',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Large Camera Guy',
                rarity: 'rare',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/Hx32xQQL/Large_Camera_Guy.png'
              },
              {
                name: 'Disabler Gun',
                rarity: 'epic',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png'
              },
              {
                name: 'Charged Battery',
                rarity: 'common',
                quantity: 8,
                imageUrl: 'https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png'
              }
            ]
          },
          stats: {
            cost: { min: "800", max: "7,900" },
            placements: { min: 3, max: 3 },
            range: { min: 30, max: 45 },
            speed: { min: 3.5, max: 3 },
            damage: { min: 30, max: 50 },
            strokes: { min: 2, max: 2 },
            dps: { min: 17.1, max: 33.33 }
          },
          abilities: [
            {
              name: "Stun Disabler",
              description: "Can shoot stunned units to remove stun",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Stun Gun",
              description: "Attacks stun enemies for 1 second",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Anti-Parasite",
              description: "2x damage to infected enemies and parasites",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
          ]
        },
        { 
          name: `Grillmaster TV Guy (chef)`, 
          imageUrl: "https://i.postimg.cc/cLnrZF7f/transparent_Photoroom_2026_01_23T153613_892.png",
          rarity: 'legendary',
          type: 'Splash',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Grillmaster TV Guy',
                rarity: 'epic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/hj5YYxXS/Grillmaster_TV_Guy.png'
              },
              {
                name: "Chef's Hat",
                rarity: 'epic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/cHzQYxrC/transparent_Photoroom_2026_01_27T134931_315.png'
              },
              {
                name: 'Sunscreen',
                rarity: 'common',
                quantity: 25,
                imageUrl: 'https://i.postimg.cc/66Vb5k2z/Sunscreen_Photoroom.png'
              }
            ]
          },
          stats: {
            cost: { min: "500", max: "4,975" },
            placements: { min: 2, max: 2 },
            range: { min: 18, max: 22 },
            speed: { min: 4, max: 2.5 },
            damage: { min: 24, max: 40 },
            crit: { min: 10, max: 25 },
            splash: { min: 10, max: 14 },
            dps: { min: 6, max: 16 }
          },
          abilities: [
            {
              name: "Raging Grill",
              description: "Nearby allies gain +20% crit chance",
              onLevel: 5,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "TV Cuisine",
              description: "Nearby TV Guys gain +30% crit chance",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Golden Mace Camera Guy`, 
          imageUrl: "https://i.postimg.cc/G3XBY5Mw/transparent_Photoroom_(91).png",
          rarity: 'legendary',
          type: 'Splash & Farm',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Mace Camera Guy',
                rarity: 'legendary',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/nhgPFTty/transparent_Photoroom_2026_01_25T140008_055.png'
              },
              {
                name: 'Gold Bar',
                rarity: 'legendary',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/90PTCdQK/image.png'
              },
              {
                name: 'Reinforced Plating',
                rarity: 'epic',
                quantity: 6,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              }
            ]
          },
          stats: {
            cost: { min: 500, max: "5,250 (20 scrap)" },
            placements: { min: 3, max: 3 },
            range: { min: 20, max: 38 },
            speed: { min: 4, max: 3 },
            damage: { min: 30, max: 150 },
            splash: { min: 18, max: 21 },
            cash: { min: 50, max: 550 },
            dps: { min: 7.5, max: 50 }
          },
          abilities: [
            {
              name: "Bank Bash",
              description: "Gain 30 cash if an attack hits 4+ enemies",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Overtime",
              description: "Attacks are +1% bigger for each 100 cash you hold, capped at +100%",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Heavy Blows",
              description: "+30% damage to enemies above 50% (40%) HP",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
          ],
          scrapUpgrades: {
            levels: 1,
            prices: [20],
            abilities: [
              { ability: "Heavy Blows (min toilet health)", values: ["50% → 40%"] }
            ]
          }
        },
        { 
          name: `Golden Disabler Camera Guy`, 
          imageUrl: "https://i.postimg.cc/2831x7tX/transparent_Photoroom_(90).png",
          rarity: 'legendary',
          type: 'Single Target & Farm & Support',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Disabler Camera Guy',
                rarity: 'legendary',
                quantity: 4,
                imageUrl: 'https://i.postimg.cc/02H2mQvP/Disabler_Camera_Guy.png'
              },
              {
                name: 'Gold Bar',
                rarity: 'legendary',
                quantity: 6,
                imageUrl: 'https://i.postimg.cc/90PTCdQK/image.png'
              },
              {
                name: 'Disabler Gun',
                rarity: 'epic',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png'
              },
              {
                name: 'Reinforced Plating',
                rarity: 'epic',
                quantity: 6,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              },
              {
                name: 'Camera',
                rarity: 'uncommon',
                quantity: 999,
                imageUrl: 'https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png'
              },
              {
                name: 'Metal Plating',
                rarity: 'common',
                quantity: 99,
                imageUrl: 'https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png'
              },
            ]
          },
          stats: {
            cost: { min: 650, max: "7,600" },
            placements: { min: 4, max: 4 },
            range: { min: 36, max: 52 },
            speed: { min: 2.5, max: 2 },
            damage: { min: 20, max: 80 },
            cash: { min: 200, max: 675 },
            dps: { min: 8, max: 40 }
          },
          abilities: [
            {
              name: "Stun Disabler",
              description: "Can shoot stunned units to remove stun",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Refund",
              description: "Refunds 10% of Unit upgrade cost within range",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Anti-Parasite",
              description: "2x damage to infected enemies and parasites",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Stun Protection",
              description: "Allies within range have -50% reduced stun duration",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Golden Camera Toilet`, 
          imageUrl: "https://i.postimg.cc/7PJv6m87/transparent_Photoroom_(32).png",
          rarity: 'legendary',
          type: 'Single Target & Farm',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Camera Toilet',
                rarity: 'uncommon',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/Y2DRfNvk/Camera_Toilet.png'
              },
              {
                name: 'Gold Bar',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/90PTCdQK/image.png'
              }
            ]
          },
          stats: {
            cost: { min: 500, max: "16,250" },
            placements: { min: 1, max: 1 },
            range: { min: 25, max: 60 },
            speed: { min: 2, max: 0.5 },
            damage: { min: 6, max: 30 },
            cash: { min: 100, max: "1,150" },
            dps: { min: 3, max: 60 }
          },
          abilities: [
            {
              name: "Cash Crush",
              description: "Killing blows: +1% cash per wave, capped at +100%",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Golden Gun",
              description: "Deals +1 damage for each 1,000 cash you hold up, capped at +100",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Diamond Camera Toilet`, 
          imageUrl: "https://i.postimg.cc/tgJ6z7wV/transparent_Photoroom_2026_01_28T184624_448.png",
          rarity: 'mythic',
          type: 'Single Target & Farm',
          obtainmentStats: 
          [
            { from: "Top Donators Leaderboard", chance: "Getting into the top 100", imageUrl: "https://i.postimg.cc/y8tDPz5r/image.png" }
          ],
          stats: {
            cost: { min: 650, max: "16,400" },
            placements: { min: 1, max: 1 },
            range: { min: 25, max: 50 },
            speed: { min: 2, max: 0.5 },
            damage: { min: 5, max: 25 },
            cash: { min: 132, max: "1,758" }
          },
          abilities: [
            {
              name: "Diamond Gun",
              description: "Deals +1 damage for ever 1000 cash you hold up, capped at +125",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Golden Crusher Camera Guy`, 
          imageUrl: "https://i.postimg.cc/Gh94jxff/transparent_Photoroom_(89).png",
          rarity: 'legendary',
          type: 'Single Target → AOE & Farm',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Crusher Camera Guy',
                rarity: 'legendary',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/mDRmXFWN/transparent_Photoroom_(53).png'
              },
              {
                name: 'Gold Bar',
                rarity: 'legendary',
                quantity: 6,
                imageUrl: 'https://i.postimg.cc/90PTCdQK/image.png'
              },
              {
                name: 'Reinforced Plating',
                rarity: 'epic',
                quantity: 8,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              }
            ]
          },
          stats: {
            cost: { min: "1,250", max: "10,150" },
            placements: { min: 3, max: 3 },
            range: { min: 35, max: 66 },
            speed: { min: 3.4, max: 3.5 },
            damage: { min: 70, max: 170 },
            angle: { min: 0, max: 90 },
            cash: { min: 100, max: 500 },
            dps: { min: 20.6, max: 48.6 }
          },
          abilities: [
            {
              name: "Cash Crush",
              description: "Killing blows: +1% cash per wave, capped at +100%",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Crushing Blow",
              description: "+30% damage to enemies below 50% HP",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Golden Lens",
              description: "+1% range per 500 cash held, capped at +50%",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Golden Buzzsaw Camera Guy`, 
          imageUrl: "https://i.postimg.cc/NfLKxknW/transparent_Photoroom_(88).png",
          rarity: 'legendary',
          type: 'AOE & Farm',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Buzzsaw Camera Guy',
                rarity: 'legendary',
                quantity: 4,
                imageUrl: 'https://i.postimg.cc/sDxXBkWG/transparent_Photoroom_2026_01_27T191037_261.png'
              },
              {
                name: 'Gold Bar',
                rarity: 'legendary',
                quantity: 5,
                imageUrl: 'https://i.postimg.cc/90PTCdQK/image.png'
              },
              {
                name: 'Buzzsaw',
                rarity: 'epic',
                quantity: 30,
                imageUrl: 'https://i.postimg.cc/m2cJh223/Buzzsaw.png'
              },
              {
                name: 'Reinforced Plating',
                rarity: 'epic',
                quantity: 6,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              },
              {
                name: 'Scrеw',
                rarity: 'epic',
                quantity: 99,
                imageUrl: 'https://i.postimg.cc/hG80hNdw/Screw.png'
              }
            ]
          },
          stats: {
            cost: { min: 350, max: "4,150 (35 scrap)" },
            placements: { min: 5, max: 5 },
            range: { min: 18, max: "24 (27)" },
            speed: { min: 2, max: 1.6 },
            damage: { min: 3, max: 18 },
            strokes: { min: 3, max: 2 },
            angle: { min: 180, max: 360 },
            cash: { min: 50, max: 275 },
            dps: { min: 4.5, max: 22.5 }
          },
          abilities: [
            {
              name: "Midas Touch",
              description: "Applies Midas: enemies take +40% more damage from golden units",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Saw Fest",
              description: "+2 (3.5) damage per consecutive enemy hit",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 3,
            prices: [5, 10, 20],
            abilities: [
              { ability: "Saw Fest (damage gain)", values: ["2 → 2.5", "2.5 → 3", "3 → 3.5"] },
              { ability: "🎯 Range", values: ["24 → 25", "25 → 26", "26 → 27"] },
            ]
          }
        },
        { 
          name: `Flamethrower Camera Guy (blue flames)`, 
          imageUrl: "https://i.postimg.cc/MZRq1grk/transparent_Photoroom_(81).png",
          rarity: 'legendary',
          type: 'AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Flamethrower Camera Guy',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/j59GcJNx/transparent_Photoroom_(31).png'
              },
              {
                name: 'Charged Battery',
                rarity: 'common',
                quantity: 12,
                imageUrl: 'https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png'
              },
              {
                name: 'Metal Plating',
                rarity: 'common',
                quantity: 5,
                imageUrl: 'https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png'
              }
            ]
          },
          stats: {
            cost: { min: "825", max: "7,175" },
            placements: { min: 3, max: 3 },
            range: { min: 26, max: 36 },
            speed: { min: 3, max: 3 },
            damage: { min: 7, max: 28 },
            angle: { min: 115, max: 160 },
            dps: { min: 11.33, max: 37.33 }
          },
          abilities: [
            {
              name: "Burn",
              description: "Applies Burn: hits 9 times",
              onLevel: 1,
              type: "Passive",
              speed: { min: 9, max: 9 },
              damage: { min: 63, max: 252 },
              dps: { min: 7, max: 28 }
            }
          ]
        },
        { 
          name: `Flamethrower Camera Guy`, 
          imageUrl: "https://i.postimg.cc/j59GcJNx/transparent_Photoroom_(31).png",
          rarity: 'legendary',
          type: 'AOE',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.9%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: "900", max: "7,250" },
            placements: { min: 3, max: 3 },
            range: { min: 24, max: 34 },
            speed: { min: 3, max: 3 },
            damage: { min: 6, max: 24 },
            angle: { min: 115, max: 160 },
            dps: { min: 8, max: 32 }
          },
          abilities: [
            {
              name: "Burn",
              description: "Applies Burn: hits 5 times",
              onLevel: 1,
              type: "Passive",
              speed: { min: 5, max: 5 },
              damage: { min: 30, max: 120 },
              dps: { min: 6, max: 24 }
            }
          ]
        },
        { 
          name: `Egg Launcher Camera Guy`, 
          imageUrl: "https://i.postimg.cc/90k9Dky7/Egg-Launcher-Camera-Guy.png",
          rarity: 'legendary',
          type: 'Splash',
          obtainmentStats: 
          [
            { from: "Easter Crate", chance: "Unobtainable", imageUrl: "https://i.postimg.cc/gJmfYzVd/Easter_Crate.jpg" }
          ],
          stats: {
            cost: { min: "800", max: "5,800" },
            placements: { min: 3, max: 3 },
            range: { min: 36, max: 54 },
            speed: { min: 4, max: 3 },
            damage: { min: 36, max: 70 },
            splash: { min: 16, max: 18 },
            dps: { min: 9, max: 23.3 }
          },
          abilities: [
            {
              name: "Big Egg!",
              description: "Every other attack is 2x larger",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Disabler Camera Guy`, 
          imageUrl: "https://i.postimg.cc/02H2mQvP/Disabler_Camera_Guy.png",
          rarity: 'legendary',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Raid Crate", chance: "12%", imageUrl: "https://i.postimg.cc/mkq9H0vf/Raid_Crate.jpg" }
          ],
          stats: {
            cost: { min: "600", max: "5,700" },
            placements: { min: 4, max: 4 },
            range: { min: 42, max: 70 },
            speed: { min: 2.5, max: 2 },
            damage: { min: 20, max: 60 },
            dps: { min: 8, max: 30 }
          },
          abilities: [
            {
              name: "Stun Disabler",
              description: "Can shoot stunned units to remove stun",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Anti-Parasite",
              description: "2x damage to infected enemies and parasites",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Dark Speaker Guy 2.0 (spear)`, 
          imageUrl: "https://i.postimg.cc/x1h4fg2Y/transparent_Photoroom_2026_01_25T135449_640.png",
          rarity: 'legendary',
          type: 'AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Flamethrower Camera Guy',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/yN648Ksc/transparent_Photoroom_(30).png'
              },
              {
                name: 'Spear',
                rarity: 'epic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/br0rMQgX/transparent_Photoroom_(17).png'
              }
            ]
          },
          stats: {
            cost: { min: "250", max: "2,600 (90 scrap)" },
            placements: { min: 3, max: 3 },
            range: { min: 42, max: 34 },
            speed: { min: 2.5, max: 3.5 },
            damage: { min: 20, max: 30 },
            angle: { min: 115, max: 180 },
            strokes: { min: 1, max: 2 },
            dps: { min: 8, max: 17.2 }
          },
          abilities: [
            {
              name: "Assassin",
              description: "5% (9%) chance to deal x1000 damage to enemies under 25% (29%) health",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "26,000", max: "30,000" },
              dps: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 4,
            prices: [15, 20, 25, 30],
            abilities: [
              { ability: "Assassin (min toilet health)", values: ["25% → 26%", "26% → 27%", "27% → 28%", "28% → 29%" ] },
              { ability: "Assassin (chance)", values: ["5% → 6%", "6% → 7%", "7% → 8%", "8% → 9%"] },
            ]
          }
        },
        { 
          name: `Dark Speaker Guy 2.0`, 
          imageUrl: "https://i.postimg.cc/yN648Ksc/transparent_Photoroom_(30).png",
          rarity: 'legendary',
          type: 'Single target',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.9%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: "250", max: "2,600" },
            placements: { min: 3, max: 3 },
            range: { min: 28, max: 42 },
            speed: { min: 3.5, max: 2.3 },
            damage: { min: 8, max: 21 },
            strokes: { min: 2, max: 3 },
            dps: { min: 4.6, max: 27.4 }
          },
          abilities: [
            {
              name: "Assassin",
              description: "5% chance to deal x1000 damage to enemies under 25% health",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "17,000", max: "21,000" },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Commander Camera Guy`, 
          imageUrl: "https://i.postimg.cc/dtDh9jXc/transparent_Photoroom_(87).png",
          rarity: 'legendary',
          type: 'Single target & Booster',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Captain Camera Guy',
                rarity: 'epic',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/vZn3Ykcd/Captain_Camera_Guy.png'
              },
              {
                name: 'Fuel Cell',
                rarity: 'epic',
                quantity: 12,
                imageUrl: 'https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png'
              },
              {
                name: 'Reinforced Plating',
                rarity: 'epic',
                quantity: 6,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              },
              {
                name: 'Camera',
                rarity: 'uncommon',
                quantity: 25,
                imageUrl: 'https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png'
              }
            ]
          },
          stats: {
            cost: { min: 600, max: "7,050 (90 scrap)" },
            placements: { min: 2, max: 2 },
            range: { min: 24, max: 36 },
            speed: { min: 2, max: 1 },
            damage: { min: 8, max: 20 },
            dps: { min: 4, max: 20 }
          },
          abilities: [
            {
              name: "Camera Command",
              description: "Camera units in range gain +20% damage",
              onLevel: 5,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Final Stand",
              description: "Lowers ability cooldown of Units within range by 5% (10%), 10% (20%) for cameras",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 4,
            prices: [15, 20, 20, 35],
            abilities: [
              { ability: "Final Stand (ability cooldown reduction)", values: ["5% → 6%", "6% → 7%", "7% → 8%", "8% → 10%" ] }
            ]
          }
        },
        { 
          name: `Chief Scientist Camera Guy`, 
          imageUrl: "https://i.postimg.cc/nL2RRQ8X/transparent_Photoroom_(28).png",
          rarity: 'legendary',
          type: 'Line AOE & Farm',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.9%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: "5 scrap", max: "33 scrap" },
            placements: { min: 2, max: 2 },
            range: { min: 0, max: 20 },
            speed: { min: 0, max: 12 },
            damage: { min: 0, max: 25 },
            cash: { min: 125, max: 750 },
            dps: { min: 0, max: 12 }
          },
          abilities: [
            {
              name: "Drone Command",
              description: "Summons a drone that deals 25% damage",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0.5, max: 0.5 },
              damage: { min: "3", max: "6" },
              dps: { min: 6, max: 12 }
            }
          ]
        },
        { 
          name: `Camera Woman 2.0`, 
          imageUrl: "https://i.postimg.cc/PfZT10Fs/transparent_Photoroom_(80).png",
          rarity: 'legendary',
          type: 'AOE → Line AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Camera Woman',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/4d38rNZV/transparent_Photoroom_(29).png'
              },
              {
                name: 'Charged Battery',
                rarity: 'common',
                quantity: 12,
                imageUrl: 'https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png'
              },
              {
                name: 'Metal Plating',
                rarity: 'common',
                quantity: 8,
                imageUrl: 'https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png'
              },
            ]
          },
          stats: {
            cost: { min: "750", max: "7,100" },
            placements: { min: 4, max: 4 },
            range: { min: 22, max: 48 },
            speed: { min: 3, max: 0.4 },
            damage: { min: 25, max: 10 },
            angle: { min: 75, max: 0 },
            dps: { min: 8.33, max: 25 }
          },
          abilities: [
            {
              name: "Incinerator",
              description: "Damage increases while aimed at the same target, max +100%",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Camera Woman`, 
          imageUrl: "https://i.postimg.cc/4d38rNZV/transparent_Photoroom_(29).png",
          rarity: 'legendary',
          type: 'Single Target',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.9%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: "750", max: "7,300" },
            placements: { min: 4, max: 4 },
            range: { min: 30, max: 54 },
            speed: { min: 2.5, max: 0.3 },
            damage: { min: 45, max: 16 },
            dps: { min: 18, max: 53.33 }
          },
          abilities: [
            {
              name: "Incinerator",
              description: "Damage increases while aimed at the same target, max +100%",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Crusher Camera Guy`, 
          imageUrl: "https://i.postimg.cc/mDRmXFWN/transparent_Photoroom_(53).png",
          rarity: 'legendary',
          type: 'Single Target → AOE',
          obtainmentStats: 
          [
            { from: "Wastelands Map", chance: "Beating the Map (0.4% on Easy | 0.73% on Normal | 1.06% on Hard | 1.4% on Insane)", imageUrl: "https://i.postimg.cc/QtxGr8CD/Скриншот_06_01_2026_163504.jpg" }
          ],
          stats: {
            cost: { min: "1,400", max: "10,350" },
            placements: { min: 4, max: 4 },
            range: { min: 36, max: 52 },
            speed: { min: 4, max: 2.8 },
            damage: { min: 90, max: 140 },
            angle: { min: 0, max: 75 },
            dps: { min: 22.5, max: 50 }
          },
          abilities: [
            {
              name: "Crushing Blow",
              description: "+30% damage to enemies below 50% HP",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Buzzsaw Camera Guy`, 
          imageUrl: "https://i.postimg.cc/sDxXBkWG/transparent_Photoroom_2026_01_27T191037_261.png",
          rarity: 'legendary',
          type: 'AOE → Full AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Camera Guy',
                rarity: 'common',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/qv7FBZfK/Camera_Guy.png'
              },
              {
                name: 'Buzzsaw',
                rarity: 'epic',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/m2cJh223/Buzzsaw.png'
              }
            ]
          },
          stats: {
            cost: { min: "400", max: "4,000" },
            placements: { min: 4, max: 4 },
            range: { min: 18, max: 22 },
            speed: { min: 2, max: 1.6 },
            damage: { min: 3, max: 16 },
            angle: { min: 180, max: 360 },
            strokes: { min: 3, max: 2 },
            dps: { min: 4.5, max: 20 }
          },
          abilities: [
            {
              name: "Saw Fest",
              description: "+2 damage per consecutive enemy hit",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Hero Speaker Guy`, 
          imageUrl: "https://i.postimg.cc/mDw802b1/transparent_Photoroom_(49).png",
          rarity: 'legendary',
          type: 'Single Target → AOE',
          obtainmentStats: 
          [
            { from: "Titan Factory Raid", chance: "Beating the Map (0.7% on Easy | 0.95% on Normal | 1.2% on Hard)", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: "400", max: "3,425" },
            placements: { min: 3, max: 3 },
            range: { min: 26, max: 42 },
            speed: { min: 3.5, max: 3 },
            damage: { min: 42, max: 74 },
            angle: { min: 0, max: 75 },
            dps: { min: 12, max: 24.66 }
          },
          abilities: [
            {
              name: "Adrenaline",
              description: "Immune to stun",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Beach Speaker Guy`, 
          imageUrl: "https://i.postimg.cc/Y0Hv2XDy/Beach_Speaker_Guy.png",
          rarity: 'legendary',
          type: 'Booster & Farm',
          obtainmentStats: 
          [
            { from: "Summer Crate", chance: "12%", imageUrl: "https://i.postimg.cc/tJf6xLKb/Summer_Crate.jpg" }
          ],
          stats: {
            cost: { min: "275", max: "4,925" },
            placements: { min: 2, max: 2 },
            cash: { min: 75, max: "1,200" }
          },
          abilities: [
            {
              name: "Umbrella!",
              description: "Speaker units in range gain +20% range",
              onLevel: 5,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "Infected Titan Speaker Guy", 
          imageUrl: "https://i.postimg.cc/HkhfgqS4/Infected-Titan-Speaker-Guy.png",
          rarity: 'mythic',
          type: 'Splash → Full AOE',
          obtainment: 'Raid Crate (0.2% chance)',
          stats: {
            cost: { min: "1,050", max: "33,800 (90 Scrap)" },
            placements: { min: 1, max: 1 },
            range: { min: 48, max: "70 (75)" },
            speed: { min: 4, max: 5 },
            damage: { min: 45, max: 140 },
            dps: { min: 11.25, max: 112 },
            splash: { min: 22, max: 0 },
            angle: { min: 0, max: 360 },
            strokes: { min: 1, max: 4 }
          },
          abilities: [
            {
              name: "Infected Core",
              description: "Immune to stun",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Infused",
              description: "Damage to the toilet is increased by 25% (40%) per debuff inflicted on the toilet",
              onLevel: 9,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 3,
            prices: [25, 30, 35],
            abilities: [
              { ability: "Infused (damage buff)", values: ["25% → 30%", "30% → 35%", "35% → 40%"] },
              { ability: "🎯 Range", values: ["70 → 71", "71 → 73", "73 → 75"] }
            ]
          }
        },
        { 
          name: "Prototype Camera Toilet", 
          imageUrl: "https://i.postimg.cc/sfktdh4N/transparent_Photoroom_2026_01_28T185403_131.png",
          rarity: 'mythic',
          type: 'Single Target → Splash',
          obtainmentStats: 
          [
            { from: "Endless Leaderboard", chance: "Getting into the top 100", imageUrl: "https://i.postimg.cc/y8tDPz5r/image.png" }
          ],
          stats: {
            cost: { min: "350", max: "4,450" },
            placements: { min: 3, max: 3 },
            range: { min: 32, max: 42 },
            speed: { min: 0.8, max: 1.3 },
            damage: { min: 8, max: 200 },
            dps: { min: 10, max: 154 },
            splash: { min: 0, max: 18 }
          },
          abilities: [
            {
              name: "Power Scaling",
              description: "Prototype Camera Toilet gains +5% damage every wave, capped at +300%",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "Titan Speaker Guy", 
          imageUrl: "https://i.postimg.cc/d3zMnZbn/transparent_Photoroom_(35).png",
          rarity: 'mythic',
          type: 'AOE → Splash',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.1%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: "1,250", max: "17,750" },
            placements: { min: 1, max: 1 },
            range: { min: 36, max: 88 },
            speed: { min: 2.6, max: 2 },
            damage: { min: 40, max: 180 },
            dps: { min: 15.4, max: 90 },
            angle: { min: 70, max: 0 },
            splash: { min: 0, max: 36 }
          }
        },
        { 
          name: "Titan Camera Guy", 
          imageUrl: "https://i.postimg.cc/CKYgWDRF/transparent_Photoroom_(33).png",
          rarity: 'mythic',
          type: 'Single Target → Splash',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.1%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: "2,000", max: "30,750" },
            placements: { min: 1, max: 1 },
            range: { min: 42, max: 90 },
            speed: { min: 2.5, max: 0.3 },
            damage: { min: 62, max: 55 },
            dps: { min: 49.6, max: 183.33 },
            strokes: { min: 2, max: 1 },
            splash: { min: 0, max: 14 }
          },
          abilities: [
            {
              name: "Back Shield",
              description: "-50% stun duration",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "Bunny Racer Camera Guy", 
          imageUrl: "https://i.postimg.cc/9MpJvFWC/transparent-Photoroom-(45).png",
          rarity: 'mythic',
          type: 'Full AOE → Line AOE',
          obtainmentStats: 
          [
            { from: "Easter Crate", chance: "Unobtainable", imageUrl: "https://i.postimg.cc/gJmfYzVd/Easter_Crate.jpg" }
          ],
          stats: {
            cost: { min: "900", max: "13,250" },
            placements: { min: 3, max: 3 },
            range: { min: 36, max: 100 },
            speed: { min: 8, max: 5 },
            damage: { min: 72, max: 200 },
            angle: { min: 360, max: 0 }
          },
          abilities: [
            {
              name: "Explosive Maneuver",
              description: "Explodes at the end of the path, dealing 1x damage",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 200, max: 200 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "Pirate Speaker Woman (cannon)", 
          imageUrl: "https://i.postimg.cc/tRfBy1kc/transparent_Photoroom_2026_01_23T232348_224.png",
          rarity: 'mythic',
          type: 'AOE & Farm',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Pirate Speaker Woman',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/vZnQFKTc/Pirate_Speaker_Woman.png'
              },
              {
                name: "Cannon",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/KzNJdvZ4/transparent_Photoroom_(47).png'
              },
              {
                name: "Gold Bar",
                rarity: 'legendary',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/90PTCdQK/image.png'
              },
              {
                name: "Eyeball",
                rarity: 'common',
                quantity: 100,
                imageUrl: 'https://i.postimg.cc/vmDcVhHL/Eyeball.png'
              }
            ]
          },
          stats: {
            cost: { min: "350", max: "5,750" },
            placements: { min: 3, max: 3 },
            cash: { min: 30, max: 300 },
            range: { min: 20, max: 30 },
            speed: { min: 3, max: 2.5 },
            damage: { min: 12, max: 34 },
            angle: { min: 115, max: 115 }
          },
          abilities: [
            {
              name: "Arm Cannon",
              description: "Uses her arm cannon, dealing 10x damage",
              onLevel: 1,
              type: "Active",
              speed: { min: 90, max: 90 },
              damage: { min: 120, max: 340 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Rusty-Hook",
              description: "Attacks bleed emenies for 25% damage over 3 seconds",
              onLevel: 3,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Smoke Bomb",
              description: "Stuns enemies for 3 seconds",
              onLevel: 5,
              type: "Passive",
              speed: { min: 16, max: 16 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Burning Rounds",
              description: "Cannon inflicts 100% burn that deals damage over time",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "Titan TV Guy", 
          imageUrl: "https://i.postimg.cc/fy3nxfrx/transparent_Photoroom_(34).png",
          rarity: 'mythic',
          type: 'Splash → AOE',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.1%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: "2,750", max: "17,750" },
            placements: { min: 1, max: 1 },
            range: { min: 40, max: 86 },
            speed: { min: 3.5, max: 3 },
            damage: { min: 100, max: 150 },
            dps: { min: 28.6, max: 150 },
            angle: { min: 0, max: 150 },
            strokes: { min: 1, max: 3 },
            splash: { min: 16, max: 0 }
          }
        },
        { 
          name: "Titan Sandcastle Guy", 
          imageUrl: "https://i.postimg.cc/sxrMfnHH/Titan-Sandcastle.png",
          rarity: 'mythic',
          type: 'Splash → Splash & Knockback',
          obtainment: 'Summer Crate (0.3%)',
          stats: {
            cost: { min: "2,450", max: "31,450" },
            placements: { min: 1, max: 1 },
            range: { min: 40, max: 80 },
            speed: { min: 2.5, max: 3 },
            damage: { min: 100, max: 450 },
            splash: { min: 15, max: 38 }
          },
          abilities: [
            {
              name: "Anchor",
              description: "Gains +30% range when placed near the end of the path",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Final Stand",
              description: "Knocks back enemies",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "Titan Sandcastle Guy (fortified)", 
          imageUrl: "https://i.postimg.cc/0ywbxVGd/transparent-Photoroom-2026-01-23T151316-035.png",
          rarity: 'mythic',
          type: 'Splash → Splash & Knockback & Booster',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Titan Sandcastle Guy',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/sxrMfnHH/Titan-Sandcastle.png'
              },
              {
                name: "Red Flag",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/WzJ0wBk0/transparent-Photoroom-2026-01-27T172147-455.png'
              },
              {
                name: "Sunscreen",
                rarity: 'common',
                quantity: 100,
                imageUrl: 'https://i.postimg.cc/66Vb5k2z/Sunscreen-Photoroom.png'
              }
            ]
          },
          stats: {
            cost: { min: "2,450", max: "42,950" },
            placements: { min: 1, max: 1 },
            range: { min: 40, max: 85 },
            speed: { min: 2.5, max: 3 },
            damage: { min: 100, max: 450 },
            splash: { min: 15, max: 38 }
          },
          abilities: [
            {
              name: "Anchor",
              description: "Gains +30% range when placed near the end of the path",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Final Stand",
              description: "Knocks back enemies",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Raised Flags!",
              description: "Units in range gain +15% damage",
              onLevel: 9,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "Upgraded Titan Speaker Guy", 
          imageUrl: "https://i.postimg.cc/KYJ5mKgB/transparent_Photoroom_2026_01_27T203432_454.png",
          rarity: 'mythic',
          type: 'Splash',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Titan Speaker Guy',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/d3zMnZbn/transparent_Photoroom_(35).png'
              },
              {
                name: "Titan's Speaker",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/tTyBSVGN/transparent_Photoroom_(40).png'
              },
              {
                name: "Upgraded Blaster",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/gJdgS6b5/transparent_Photoroom_(39).png'
              }
            ]
          },
          stats: {
            cost: { min: "2,000", max: "23,650" },
            placements: { min: 1, max: 1 },
            range: { min: 54, max: 100 },
            speed: { min: 2.5, max: 1.5 },
            damage: { min: 60, max: 150 },
            dps: { min: 24, max: 210 },
            splash: { min: 20, max: 28 }
          },
          abilities: [
            {
              name: "Raging Speakers",
              description: "Attacks with his speakers",
              onLevel: 5,
              type: "Passive",
              speed: { min: 10, max: 10 },
              damage: { min: 220, max: 300 },
              dps: { min: 22, max: 30 }
            },
            {
              name: "Core Beam",
              description: "Shoots with his core beam",
              onLevel: 8,
              type: "Passive",
              speed: { min: 30, max: 30 },
              damage: { min: "2,400", max: "2,400" },
              dps: { min: 80, max: 80 }
            }
          ]
        },
        { 
          name: "Hero Speaker Guy (revived)", 
          imageUrl: "https://i.postimg.cc/WbJ9tCV2/transparent-Photoroom-2026-01-22T220534-143.png",
          rarity: 'mythic',
          type: 'Single Target → AOE & Stun',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Hero Speaker Guy',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/mDw802b1/transparent-Photoroom-(49).png'
              },
              {
                name: "Titan's Core",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/bNX3Pg3C/image.png'
              },
              {
                name: "Metal Plating",
                rarity: 'common',
                quantity: 8,
                imageUrl: 'https://i.postimg.cc/PNsdFDm9/transparent-Photoroom-(24).png'
              }
            ]
          },
          stats: {
            cost: { min: "400", max: "6,625" },
            placements: { min: 3, max: 3 },
            range: { min: 28, max: 65 },
            speed: { min: 3.5, max: 3 },
            damage: { min: 50, max: 135 },
            angle: { min: 0, max: 48 }
          },
          abilities: [
            {
              name: "Adrenaline",
              description: "Immune to stun",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Shock Wave",
              description: "Stuns enemies for 5 seconds",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "Toxic Titan Camera Guy", 
          imageUrl: "https://i.postimg.cc/9QWkD1Q7/transparent-Photoroom-(99).png",
          rarity: 'mythic',
          type: 'Full AOE → AOE & Damage Boost',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Upgraded Titan Camera Guy',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/Kzdbs8QX/transparent-Photoroom-2026-01-27T204848-524.png'
              },
              {
                name: "Titan's Core",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/PJ81Qgw2/transparent-Photoroom-2026-01-27T171940-174.png'
              },
              {
                name: "Toxic Barrel",
                rarity: 'legendary',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/503nZNx4/transparent-Photoroom-(42).png'
              },
              {
                name: "Reinforced Plating",
                rarity: 'epic',
                quantity: 18,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced-Plating.png'
              }
            ]
          },
          stats: {
            cost: { min: "1,800", max: "27,500" },
            placements: { min: 1, max: 1 },
            range: { min: 30, max: 90 },
            speed: { min: 3.6, max: 2.5 },
            damage: { min: 75, max: 270 },
            angle: { min: 360, max: 90 }
          },
          abilities: [
            {
              name: "Toxic (doesn't work)",
              description: "Attacks inflict toxic effect that increases enemy damage taken by +25% (doesn't work)",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Toxic Cannon",
              description: "Sends toxic explosion, dealing 1x damage and applying toxic infliction for 16 seconds",
              onLevel: 4,
              type: "Passive",
              speed: { min: "no info about it blehhh", max: "no info about it blehhh" },
              damage: { min: "145", max: "270" },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Toxic Core",
              description: "Shoots toxic flames, dealing 1x damage",
              onLevel: 8,
              type: "Passive",
              speed: { min: "no info about it blehhh", max: "no info about it blehhh" },
              damage: { min: "250", max: "270" },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "TV Woman (infernal)", 
          imageUrl: "https://i.postimg.cc/T3RsKQ3L/transparent-Photoroom-(98).png",
          rarity: 'mythic',
          type: 'AOE → Line AOE & Burn',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'TV Woman',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/GpK77s0b/transparent-Photoroom-(26).png'
              },
              {
                name: "Photon Grenade",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/hvXM1t1V/transparent-Photoroom-(20).png'
              },
              {
                name: "Reinforced Plating",
                rarity: 'epic',
                quantity: 6,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced-Plating.png'
              }
            ]
          },
          stats: {
            cost: { min: "750", max: "13,350" },
            placements: { min: 3, max: 3 },
            range: { min: 24, max: 80 },
            speed: { min: 2, max: 4 },
            damage: { min: 20, max: 160 },
            angle: { min: 80, max: 0 }
          },
          abilities: [
            {
              name: "Infernal Photons",
              description: "Deals 50% burn damage over 5 seconds",
              onLevel: 5,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 47, max: 80 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Detonate",
              description: "Attacking a burning enemy, the burn damage is dealt in full",
              onLevel: 9,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 3,
            prices: [20, 20, 20],
            abilities: [
              { ability: "Infernal Photons (damage)", values: ["50% → 60%", "60% → 70%", "70% → 80%"] }
            ]
          }
        },
        { 
          name: "Upgraded Titan Camera Guy", 
          imageUrl: "https://i.postimg.cc/Kzdbs8QX/transparent_Photoroom_2026_01_27T204848_524.png",
          rarity: 'mythic',
          type: 'Splash',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Titan Camera Guy',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/CKYgWDRF/transparent_Photoroom_(33).png'
              },
              {
                name: "Titan's Core",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png'
              },
              {
                name: "Titan's Hammer",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/wMj0H8vT/transparent_Photoroom_(50).png'
              }
            ]
          },
          stats: {
            cost: { min: "2,750", max: "36,000" },
            placements: { min: 1, max: 1 },
            range: { min: 50, max: 84 },
            speed: { min: 2.5, max: 2 },
            damage: { min: 85, max: 280 },
            dps: { min: 34, max: 210 },
            splash: { min: 20, max: 28 }
          },
          abilities: [
            {
              name: "Camera Missile",
              description: "Launches missiles dealing 1.5x damage",
              onLevel: 4,
              type: "Passive",
              speed: { min: 10, max: 10 },
              damage: { min: 232, max: 420 }
            },
            {
              name: "Mechanical Hammer",
              description: "Attacks with his hammer, dealing 1.25x damage",
              onLevel: 6,
              type: "Passive",
              speed: { min: 3.25, max: 3.25 },
              damage: { min: 268, max: 350 }
            },
            {
              name: "Core Flames",
              description: "Attacks with his core, applying Burn to enemies",
              onLevel: 8,
              type: "Passive",
              speed: { min: 25, max: 25 },
              damage: { min: 840, max: 840 }
            }
          ]
        },
        { 
          name: "Titan Cinema Guy", 
          imageUrl: "https://i.postimg.cc/0NcC96J6/transparent_Photoroom_2026_01_27T203709_076.png",
          rarity: 'mythic',
          type: 'AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Titan TV Guy',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/fy3nxfrx/transparent_Photoroom_(34).png'
              },
              {
                name: 'Upgraded Dark Stereocopter',
                rarity: 'legendary',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/c1z9xZpr/transparent_Photoroom_(100).png'
              },
              {
                name: "Titan's Core",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png'
              }
            ]
          },
          stats: {
            cost: { min: "3,800", max: "47,800 (40 Scrap)" },
            placements: { min: 1, max: 1 },
            range: { min: 60, max: 80 },
            speed: { min: 4, max: 3.5 },
            damage: { min: 180, max: "125" },
            strokes: { min: 1, max: 5 },
            angle: { min: 60, max: 60 }
          },
          abilities: [
            {
              name: "Cinema Speakers",
              description: "Attacks with his speakers, dealing 2x damage",
              onLevel: 3,
              type: "Passive",
              speed: { min: 15, max: 15 },
              damage: { min: 520, max: "1,250" }
            },
            {
              name: "Flying Speakers",
              description: "Cinema Speakers ability knocks enemies back",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: "0" }
            }
          ],
          scrapUpgrades: {
            levels: 1,
            prices: [40],
            abilities: [
              { ability: "Flying Speakers (knockback cd)", values: ["10 → 9.5"] },
              { ability: "Devour (knockback power)", values: ["100% → 105%"] }
            ]
          }
        },
        { 
          name: "Frankengineer", 
          imageUrl: "https://i.postimg.cc/vT0XW6VC/transparent_Photoroom_(15).png",
          rarity: 'mythic',
          type: 'Splash',
          obtainment: 'Zombie Crate (0.01% chance)',
          stats: {
            cost: { min: "25 Scrap", max: "70 Scrap" },
            placements: { min: 1, max: 1 },
            range: { min: 54, max: 80 },
            speed: { min: 6, max: 12 },
            damage: { min: 140, max: 275 },
            splash: { min: 18, max: 26 }
          },
          abilities: [
            {
              name: "Reanimate",
              description: "Summons a temporary Unit",
              onLevel: 4,
              type: "Passive",
              speed: { min: 30, max: 30 },
              damage: { min: 100, max: 100 }
            },
            {
              name: "Shocking Slam!",
              description: "Undead Crusher stuns for 3 seconds when landing",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: "0" }
            }
          ]
        },    
        { 
          name: "Frankengineer (shocked)", 
          imageUrl: "https://i.postimg.cc/vT0XW6VC/transparent_Photoroom_(15).png",
          rarity: 'mythic',
          type: 'Splash',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Frankengineer',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/vT0XW6VC/transparent_Photoroom_(15).png'
              },
              {
                name: 'Charged Screw',
                rarity: 'mythic',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/vBz3pHQT/transparent_Photoroom_(48).png'
              },
              {
                name: "Eyeball",
                rarity: 'common',
                quantity: 150,
                imageUrl: 'https://i.postimg.cc/vmDcVhHL/Eyeball.png'
              },
              {
                name: "Screw",
                rarity: 'common',
                quantity: 75,
                imageUrl: 'https://i.postimg.cc/hG80hNdw/Screw.png'
              }
            ]
          },
          stats: {
            cost: { min: "25 Scrap", max: "105 Scrap" },
            placements: { min: 1, max: 1 },
            range: { min: 54, max: 84 },
            speed: { min: 6, max: 12 },
            damage: { min: 140, max: 300 },
            splash: { min: 18, max: 26 }
          },
          abilities: [
            {
              name: "Reanimate",
              description: "Summons a temporary Unit - Undead Crusher",
              onLevel: 4,
              type: "Passive",
              speed: { min: 30, max: 30 },
              damage: { min: 100, max: 100 }
            },
            {
              name: "Shocking Slam!",
              description: "Undead Crusher stuns for 3 seconds when landing",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Shocked!",
              description: "Undead Crusher deals x2 damage when Frankengineer is stunned",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: "0" }
            }    
          ],
          scrapUpgrades: {
            levels: 4,
            prices: [5, 10, 15, 15],
            abilities: [
              { ability: "Undead Crusher (health)", values: ["100% → 150%", "150% → 200%", "200% → 250%", "250% → 300%"] },
              { ability: "Undead Crusher (damage)", values: ["100% → 110%", "110% → 120%", "120% → 135%", "135% → 150%"] }
            ]
          }
        },
        { 
          name: "Red Laser Camera Guy", 
          imageUrl: "https://i.postimg.cc/G3Ydv6S2/transparent_Photoroom_(86).png",
          rarity: 'mythic',
          type: 'Line AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Thrower Camera Guy',
                rarity: 'legendary',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/pXSqnZ2P/transparent_Photoroom_(25).png'
              },
              {
                name: 'Upgraded Blaster',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/gJdgS6b5/transparent_Photoroom_(39).png'
              },
              {
                name: "Charged Battery",
                rarity: 'common',
                quantity: 24,
                imageUrl: 'https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png'
              }
            ]
          },
          stats: {
            cost: { min: "800", max: "12,000" },
            placements: { min: 4, max: 4 },
            range: { min: 28, max: 50 },
            speed: { min: 0.5, max: 0.5 },
            damage: { min: 4, max: 18 }
          },
          abilities: [
            {
              name: "Toilet Paper",
              description: "Throws a toilet paper grenade, dealing 10x damage",
              onLevel: 5,
              type: "Passive",
              speed: { min: 10, max: 10 },
              damage: { min: 110, max: 180 }
            },
            {
              name: "Advanced Tech",
              description: "All buff & debuffs are 50% more effective",
              onLevel: 11,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: "0" }
            }
          ],
          scrapUpgrades: {
            levels: 3,
            prices: [20, 25, 30],
            abilities: [
              { ability: "Toilet Grenade (damage)", values: ["1000% → 1100%", "1100% → 1200%", "1200% → 1300%"] }
            ]
          }
        },
        { 
          name: "Large Red Laser Camera Guy", 
          imageUrl: "https://i.postimg.cc/y69s02r1/transparent_Photoroom_(85).png",
          rarity: 'mythic',
          type: 'Line AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Red Laser Camera Guy',
                rarity: 'mythic',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/G3Ydv6S2/transparent_Photoroom_(86).png'
              },
              {
                name: 'Overcharged Blaster',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/nc6hnSs9/transparent_Photoroom_(12).png'
              },
              {
                name: "Fuel Cell",
                rarity: 'epic',
                quantity: 20,
                imageUrl: 'https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png'
              },
              {
                name: "Reinforced Plating",
                rarity: 'epic',
                quantity: 9,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              },
              {
                name: "Charged Battery",
                rarity: 'common',
                quantity: 40,
                imageUrl: 'https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png'
              }
            ]
          },
          stats: {
            cost: { min: "1,200", max: "12,000" },
            placements: { min: 2, max: 2 },
            range: { min: 34, max: 50 },
            speed: { min: 0.4, max: 0.5 },
            damage: { min: 5, max: 18 }
          },
          abilities: [
            {
              name: "OVERCHARGED!",
              description: "Once activated, gains -2x cooldown boost for 10 seconds",
              onLevel: 5,
              type: "Active",
              speed: { min: 120, max: 120 },
              damage: { min: 0, max: 0 }
            },
            {
              name: "Advanced Charge",
              description: "Damage buffs also increase OVERCHARGED! ability duration",
              onLevel: 9,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: "0" }
            }
          ],
          additionalUpgrades: {
            title: 'Additional Upgrades',
            currencyLabel: 'Cash',
            levels: 3,
            prices: ["1,800", "2,400", "3,200"],
            abilities: [
              { ability: "OVERCHARGED! (duration)", values: ["10s → 12s", "12s → 15s", "15s → 20s"] }
            ]
          }
        },
        { 
          name: "Camera Woman 3.0", 
          imageUrl: "https://i.postimg.cc/BZD42Rwj/transparent-Photoroom-(83).png",
          rarity: 'mythic',
          type: 'AOE → Line AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Camera Woman (overcharged)',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/PfZT10Fs/transparent-Photoroom-(80).png'
              },
              {
                name: 'Orbital Laser Drone',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/s2Jj9VTB/transparent-Photoroom-(10).png'
              },
              {
                name: "Fuel Cell",
                rarity: 'epic',
                quantity: 36,
                imageUrl: 'https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png'
              },
              {
                name: "Reinforced Plating",
                rarity: 'epic',
                quantity: 24,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              },
              {
                name: "Lost Plunger",
                rarity: 'rare',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/dtTTRyrN/transparent-Photoroom-(16).png'
              },
              {
                name: "Charged Battery",
                rarity: 'common',
                quantity: 60,
                imageUrl: 'https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png'
              }
            ]
          },
          stats: {
            cost: { min: "750", max: "25,000" },
            placements: { min: 3, max: 3 },
            range: { min: 22, max: 50 },
            speed: { min: 3.5, max: 0.3 },
            angle: { min: 75, max: 0 },
            damage: { min: 32, max: 20 }
          },
          abilities: [
            {
              name: "Orbital Lasers",
              description: "Summons orbital missiles that deal 100x damage within 2x range",
              onLevel: 6,
              type: "Active",
              speed: { min: 180, max: 180 },
              damage: { min: 700, max: 2000 }
            },
            {
              name: "Orbital Drone",
              description: "Orbital Lasers ability summons a drone that deals 2x damage per second",
              onLevel: 9,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "40", max: "40" },
              dps: { min: 0, max: "0" }
            }
          ],
          scrapUpgrades: {
            levels: 3,
            prices: [15, 25, 50],
            abilities: [
              { ability: "Orbital Drone (damage)", values: ["100% → 110%", "110% → 125%", "125% → 150%"] },
              { ability: "Orbital Drone (health)", values: ["100% → 125%", "125% → 150%", "150% → 200%"] }
            ]
          }
        },
        { 
          name: "Golden Engineer Camera Guy", 
          imageUrl: "https://i.postimg.cc/hP8w4Nch/transparent_Photoroom_(95).png",
          rarity: 'mythic',
          type: 'Summoner & Farm',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Engineer Camera Guy',
                rarity: 'mythic',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/2yVdHMLX/Engineer_Camera_Guy.png'
              },
              {
                name: 'Gold Bar',
                rarity: 'legendary',
                quantity: 15,
                imageUrl: 'https://i.postimg.cc/90PTCdQK/image.png'
              },
              {
                name: "Reinforced Plating",
                rarity: 'epic',
                quantity: 9,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              }
            ]
          },
          stats: {
            cost: { min: 400, max: "7,450" },
            cash: { min: 50, max: "50 (Check the Additional Upgrades)" },
            placements: { min: 2, max: 2 },
            summonspeed: { min: 15, max: 19 },
            minionhp: { min: 45, max: 500 },
            minionspeed: { min: 0, max: 3 },
            miniondamage: { min: 0, max: 50 }
          },
          abilities: [
            {
              name: "Golden Wrench",
              description: "Minions have +1 increased damage for every 100 Cash you hold, capped at +800",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 }
            },
            {
              name: "Disabler Carrier",
              description: "Minions can shoot",
              onLevel: 8,
              type: "Passive",
              speed: { min: 3, max: 3 },
              damage: { min: "40", max: "50" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Anti-Parasite",
              description: "2x damage to infected enemies and parasites",
              onLevel: 9,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: "0" }
            }
          ],
          additionalUpgrades: {
            title: 'Additional Upgrades',
            currencyLabel: 'Cash',
            levels: 5,
            prices: ["350", "650", "900", "950", "1,200"],
            abilities: [
              { ability: "💸Cash", values: ["50 → 225", "225 → 500", "500 → 825", "825 → 1,150", "1,150 → 1,550"] }
            ]
          }
        },
        { 
          name: "Chief Scientist Camera Guy (command)", 
          imageUrl: "https://i.postimg.cc/nL2RRQ8X/transparent-Photoroom-(28).png",
          rarity: 'mythic',
          type: 'Summoner & Farm',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Chief Scientist Camera Guy',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/nL2RRQ8X/transparent-Photoroom-(28).png'
              },
              {
                name: 'Camera Drone',
                rarity: 'uncommon',
                quantity: 6,
                imageUrl: 'https://i.postimg.cc/hGwy49Ts/Camera_Drone.png'
              },
              {
                name: "Reinforced Plating",
                rarity: 'epic',
                quantity: 12,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              },
              {
                name: "Large Camera",
                rarity: 'rare',
                quantity: 18,
                imageUrl: 'https://i.postimg.cc/6qHhfXBT/transparent-Photoroom-2026-01-24T175531-684.png'
              }
            ]
          },
          stats: {
            cost: { min: "5 Scrap", max: "45 Scrap" },
            cash: { min: 150, max: "1,250" },
            range: { min: 16, max: "25" },
            placements: { min: 2, max: 2 },
            summonspeed: { min: 12, max: 8 },
            minionspeed: { min: 0.5, max: 0.5 },
            miniondamage: { min: 4, max: 5 }
          },
          abilities: [
            {
              name: "Repair Drone",
              description: "Immune to stun while has an active drone",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 }
            }
          ],
          additionalUpgrades: {
            title: 'Additional Upgrades',
            currencyLabel: 'Cash',
            levels: 4,
            prices: ["750", "1,500", "2,750", "3,800"],
            abilities: [
              { ability: "❤♟ Minion HP", values: ["100% → 105%", "105% → 115%", "115% → 130%", "130% → 150%"] },
              { ability: "Minion (lifetime)", values: ["100% → 110%", "110% → 130%", "130% → 160%", "160% → 200%"] },
            ]
          }
        },
        { 
          name: "Golden Hero Speaker Guy (revived)", 
          imageUrl: "https://i.postimg.cc/44WKtSWj/transparent_Photoroom_(94).png",
          rarity: 'mythic',
          type: 'Single Target & Farm → AOE & Farm & Booster',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Hero Speaker Guy',
                rarity: 'mythic',
                quantity: 3,
                imageUrl: 'https://i.postimg.cc/WbJ9tCV2/transparent_Photoroom_2026_01_22T220534_143.png'
              },
              {
                name: 'Gold Bar',
                rarity: 'legendary',
                quantity: 12,
                imageUrl: 'https://i.postimg.cc/90PTCdQK/image.png'
              },
              {
                name: "Reinforced Plating",
                rarity: 'epic',
                quantity: 25,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              }
            ]
          },
          stats: {
            cost: { min: 600, max: "9,150" },
            cash: { min: 200, max: "700" },
            placements: { min: 3, max: 3 },
            range: { min: 28, max: 75 },
            speed: { min: 3.5, max: 3 },
            damage: { min: 75, max: 185 },
            angle: { min: 0, max: 48 }
          },
          abilities: [
            {
              name: "Adrenaline",
              description: "Immune to stun",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 }
            },
            {
              name: "Gold Thumb",
              description: "Units in range generate +20% more cash",
              onLevel: 3,
              type: "Passive",
              speed: { min: 3, max: 3 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Shock Wave",
              description: "Stuns enemies for 5 seconds",
              onLevel: 9,
              type: "Passive",
              speed: { min: 3, max: 3 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: "0" }
            }
          ],
          additionalUpgrades: {
            title: 'Additional Upgrades',
            currencyLabel: 'Cash',
            levels: 2,
            prices: ["1,250", "1,800"],
            abilities: [
              { ability: "Shock Wave", values: ["5s → 5.5s", "5.5 → 6"] }
            ]
          }
        },
        { 
          name: "Engineer Camera Guy", 
          imageUrl: "https://i.postimg.cc/2yVdHMLX/Engineer_Camera_Guy.png",
          rarity: 'mythic',
          type: 'Summoner',
          obtainment: 'Raid Crate (0.8% chance)',
          stats: {
            cost: { min: 500, max: "17,000" },
            placements: { min: 2, max: 2 },
            summonspeed: { min: 15, max: 20 },
            minionhp: { min: 45, max: 1000 },
            minionspeed: { min: 0, max: 3 },
            miniondamage: { min: 0, max: 100 }
          },
          abilities: [
            {
              name: "Disabler Carrier",
              description: "Minions can shoot",
              onLevel: 8,
              type: "Passive",
              speed: { min: 3, max: 3 },
              damage: { min: "100", max: "100" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Anti-Parasite",
              description: "2x damage to infected enemies and parasites",
              onLevel: 9,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: "0" }
            }
          ]
        },
        { 
          name: "Tub Engineer Camera Guy (atomic)", 
          imageUrl: "https://i.postimg.cc/zGgV5xwK/transparent_Photoroom_2026_01_23T154606_993.png",
          rarity: 'mythic',
          type: 'Summoner',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Tub Engineer Camera Guy',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/Dzc4PnpF/transparent_Photoroom_2026_01_28T172851_074.png'
              },
              {
                name: 'Atomic Bomb',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/W3yMrNhk/transparent_Photoroom_2026_01_27T173151_730.png'
              },
              {
                name: "Sunscreen",
                rarity: 'common',
                quantity: 80,
                imageUrl: 'https://i.postimg.cc/66Vb5k2z/Sunscreen_Photoroom.png'
              }
            ]
          },
          stats: {
            cost: { min: 435, max: "17,635" },
            placements: { min: 2, max: 2 },
            summonspeed: { min: 10, max: 200 },
            minionhp: { min: 20, max: 1000 }
          },
          abilities: [
            {
              name: "Explosive Ducks",
              description: "Minions explode and deal 500% damage",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "625", max: "750" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Atomic Ducks",
              description: "Minions explode and deal 800% damage",
              onLevel: 9,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "8,000", max: "8,000" },
              dps: { min: 0, max: "0" }
            }
          ]
        },
        { 
          name: `Neko TV Woman`, 
          imageUrl: "https://i.postimg.cc/N009f1FG/transparent_Photoroom_2026_01_28T155403_161.png",
          rarity: 'mythic',
          type: 'Splash & Booster',
          obtainmentStats: 
          [
            { from: "Endless Leaderboard", chance: "Unobtainable", imageUrl: "https://i.postimg.cc/y8tDPz5r/image.png" }
          ],
          stats: {
            cost: { min: 360, max: "2,160" },
            placements: { min: 3, max: 3 },
            range: { min: 18, max: 24 },
            speed: { min: 12, max: 12 },
            damage: { min: 36, max: 50 },
            splash: { min: 20, max: 20 }
          },
          abilities: [
            {
              name: "Friendly Service",
              description: "Units in range without buffs gain +15% damage",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: `Neko TV Woman (Fallen)`, 
          imageUrl: "https://i.postimg.cc/R006Vchq/transparent_Photoroom_2026_01_28T155411_641.png",
          rarity: 'mythic',
          type: 'Splash & Booster',
          obtainmentStats: 
          [
            { from: "Endless Leaderboard", chance: "Unobtainable", imageUrl: "https://i.postimg.cc/y8tDPz5r/image.png" }
          ],
          stats: {
            cost: { min: 360, max: "2,160" },
            placements: { min: 3, max: 3 },
            range: { min: 18, max: 24 },
            speed: { min: 12, max: 12 },
            damage: { min: 36, max: 50 },
            splash: { min: 20, max: 20 }
          },
          abilities: [
            {
              name: "Friendly Service",
              description: "Units in range without buffs gain +15% damage",
              onLevel: 4,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "Glitch Camera Guy", 
          imageUrl: "https://i.postimg.cc/CLfvdX0L/transparent_Photoroom_2026_01_22T220717_805.png",
          rarity: 'mythic',
          type: 'Single Target → Line AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Glitch Mainframe',
                rarity: 'mythic',
                quantity: 2,
                imageUrl: 'https://i.postimg.cc/Y9dKVV1s/image.png'
              },
              {
                name: 'Lost Plunger',
                rarity: 'rare',
                quantity: 4,
                imageUrl: 'https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png'
              },
              {
                name: "Metal Plating",
                rarity: 'common',
                quantity: 36,
                imageUrl: 'https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png'
              }
            ]
          },
          stats: {
            cost: { min: "700", max: "20,000" },
            placements: { min: 1, max: 1 },
            range: { min: 36, max: 74 },
            speed: { min: 2, max: 0.7 },
            damage: { min: 15, max: 105 },
            strokes: { min: 2, max: 1 }
          },
          abilities: [
            {
              name: "Teleport",
              description: "Placing down this Unit (for 100 Cash) instead teleports it, gaining temporary 25% damage buff",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 }
            },
            {
              name: "Toilet Armor",
              description: "Immune to stun",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: "0", max: "0" },
              dps: { min: 0, max: "0" }
            }    
          ],
          scrapUpgrades: {
            levels: 3,
            prices: [10, 15, 25],
            abilities: [
              { ability: "Teleporting (damage buff)", values: ["25% → 35%", "35% → 50%", "50% → 75%"] }
            ]
          }
        },
        { 
          name: "Speaker Woman (katana)", 
          imageUrl: "https://i.postimg.cc/W1hycCQj/transparent-Photoroom-2026-01-25T140144-852.png",
          rarity: 'mythic',
          type: 'AOE → Full AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Speaker Woman',
                rarity: 'legendary',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/Y9dKVV1s/image.png'
              },
              {
                name: 'Katana',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/02N6jMZT/image.png'
              }
            ]
          },
          stats: {
            cost: { min: "440", max: "7,640" },
            placements: { min: 4, max: 4 },
            range: { min: 25, max: 35 },
            speed: { min: 2, max: 5 },
            damage: { min: 15, max: 45 },
            angle: { min: 90, max: 360 },
            crit: { min: 25, max: 100 },
            strokes: { min: 1, max: 3 }
          },
          abilities: [
            {
              name: "Clean Cut",
              description: "Critical attacks deal 2x damage",
              onLevel: 5,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 }
            }    
          ],
          scrapUpgrades: {
            levels: 2,
            prices: [10, 10],
            abilities: [
              { ability: "Clean cut (damage)", values: ["200% → 225%", "225% → 250%"] }
            ]
          }
        },
        { 
          name: "Saw Titan Camera", 
          imageUrl: "https://i.postimg.cc/8z1Y7wzW/transparent-Photoroom-(97).png",
          rarity: 'mythic',
          type: 'AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Upgraded Titan Camera Guy',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/Kzdbs8QX/transparent-Photoroom-2026-01-27T204848-524.png'
              },
              {
                name: "Titan's Core",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/bNX3Pg3C/image.png'
              },
              {
                name: 'Reinforced Plating',
                rarity: 'epic',
                quantity: 16,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced-Plating.png'
              },
              {
                name: 'Buzzsaw',
                rarity: 'epic',
                quantity: 25,
                imageUrl: 'https://i.postimg.cc/m2cJh223/Buzzsaw.png'
              }
            ]
          },
          stats: {
            cost: { min: "1,600", max: "23,700" },
            placements: { min: 1, max: 1 },
            range: { min: 30, max: 50 },
            speed: { min: 2.5, max: 1.5 },
            damage: { min: 50, max: 150 },
            angle: { min: 60, max: 60 }
          },
          abilities: [
            {
              name: "Shredder",
              description: "Attacks bleed enemies for 50% damage over 50 seconds",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 25, max: 75 }
            }, 
            {
              name: "Saw Line",
              description: "Drives buzzsaw into the ground, dealing 2.5x damage",
              onLevel: 3,
              type: "Passive",
              speed: { min: 10, max: 10 },
              damage: { min: 187, max: 375 }
            },
            {
              name: "Spinning Saw",
              description: "Unleashes a saw that deals 80% damage per second for 10 seconds",
              onLevel: 6,
              type: "Passive",
              speed: { min: 20, max: 20 },
              damage: { min: 92, max: 120 }
            },
            {
              name: "Blood Infusion",
              description: "Enemies with his bleed take +10% more damage",
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 3,
            prices: [5, 10, 15],
            abilities: [
              { ability: "Spinning Saw (time)", values: ["10s → 12s", "12s → 14s", "14s → 16s"] }
            ]
          }
        },
        { 
          name: "Overcharged Titan Speaker Guy", 
          imageUrl: "https://i.postimg.cc/cLszvTLM/transparent_Photoroom_(96).png",
          rarity: 'mythic',
          type: 'Splash',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Upgraded Titan Speaker Guy',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/KYJ5mKgB/transparent_Photoroom_2026_01_27T203432_454.png'
              },
              {
                name: 'Overcharged Blaster',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/nc6hnSs9/transparent_Photoroom_(12).png'
              },
              {
                name: "Reinforced Plating",
                rarity: 'epic',
                quantity: 8,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              }
            ]
          },
          stats: {
            cost: { min: "2,650", max: "42,050" },
            placements: { min: 1, max: 1 },
            range: { min: 50, max: 92 },
            speed: { min: 2.5, max: 2 },
            damage: { min: 75, max: 245 },
            splash: { min: 36, max: 36 },
            crit: { min: 30, max: 75 }
          },
          abilities: [
            {
              name: "Dual Shot",
              description: "Shoots two energy blasts, dealing 2x damage",
              onLevel: 4,
              type: "Passive",
              speed: { min: 10, max: 10 },
              damage: { min: 280, max: 490 }
            },
            {
              name: "Charged Speakers",
              description: "Emits a sound wave that pushes enemies back, dealing 2x damage",
              onLevel: 6,
              type: "Passive",
              speed: { min: 15, max: 15 },
              damage: { min: "370", max: "490" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Charged Core",
              description: "Unleashes an infernal laser, dealing 3x damage and applying burn",
              onLevel: 9,
              type: "Passive",
              speed: { min: 30, max: 30 },
              damage: { min: "735", max: "735" },
              dps: { min: 0, max: "0" }
            }
          ],
          scrapUpgrades: {
            levels: 1,
            prices: [150],
            abilities: [
              { ability: "Stun Immunity", values: ["100%"] },
              { ability: "🎯✨ Crit %", values: ["75% → 100%"] },
            ]
          }
        },
        { 
          name: "Astro Titan Camera Guy", 
          imageUrl: "https://i.postimg.cc/3rtypcts/transparent_Photoroom_(92).png",
          rarity: 'mythic',
          type: 'Full AOE → Line AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Toxic Titan Camera Guy',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/9QWkD1Q7/transparent_Photoroom_(99).png'
              },
              {
                name: 'Hextech Arm',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/65DpBb7n/transparent_Photoroom_(11).png'
              },
              {
                name: "Reinforced Plating",
                rarity: 'epic',
                quantity: 12,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              }
            ]
          },
          stats: {
            cost: { min: "3,000", max: "52,400" },
            placements: { min: 1, max: 1 },
            range: { min: 34, max: 90 },
            speed: { min: 3, max: 0.25 },
            damage: { min: 100, max: 50 },
            angle: { min: 360, max: 0 }
          },
          abilities: [
            {
              name: "Advanced Tech",
              description: "Immune to stun",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 }
            },
            {
              name: "Energy Ball",
              description: "Deals 15x damage and stuns enemies",
              onLevel: 6,
              type: "Passive",
              speed: { min: 10, max: 10 },
              damage: { min: "450", max: "750" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Energy Finisher",
              description: "Slams down an enemy, dealing 10x damage",
              onLevel: 9,
              type: "Passive",
              speed: { min: 15, max: 15 },
              damage: { min: "500", max: "500" },
              dps: { min: 0, max: "0" }
            }
          ],
          scrapUpgrades: {
            levels: 1,
            prices: [100],
            abilities: [
              { ability: "Energy Finisher (damage)", values: ["1,000% → 1,500%"] },
            ]
          }
        },
        { 
          name: "Dave", 
          imageUrl: "https://i.postimg.cc/3rpY2zb7/transparent_Photoroom_(84).png",
          rarity: 'mythic',
          type: 'Splash | AOE | Single Target',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Large Red Laser Camera Guy',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/y69s02r1/transparent_Photoroom_(85).png'
              },
              {
                name: 'Chainsword',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/Vk8pmXF0/transparent_Photoroom_(21).png'
              },
              {
                name: "Fuel Cell",
                rarity: 'epic',
                quantity: 16,
                imageUrl: 'https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png'
              },
              {
                name: "Reinforced Plating",
                rarity: 'epic',
                quantity: 12,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              },
              {
                name: "Charged Battery",
                rarity: 'common',
                quantity: 24,
                imageUrl: 'https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png'
              }
            ]
          },
          stats: {
            cost: { min: "800", max: "34,850" },
            placements: { min: 1, max: 1 },
            range: { min: 42, max: "74 (Check the abilities)" },
            speed: { min: 5.5, max: "0.7 (Check the abilities)" },
            damage: { min: 100, max: "105 (Check the abilities)" }
          },
          abilities: [
            {
              name: "Arsenal",
              description: "Can switch his active weapon, changing his stats",
              onLevel: 1,
              type: "Active",
              speed: { min: 10, max: 3 },
              damage: { min: 0, max: 0 }
            },
            {
              name: "(WEAPON) Arm Blaster",
              description: "Stuns for 2 seconds, +25% range",
              onLevel: 1,
              type: "Passive",
              speed: { min: 5.5, max: 5 },
              damage: { min: "110", max: "825" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "(WEAPON) Chainsaw",
              description: "Applies bleed, -45% range",
              onLevel: 1,
              type: "Passive",
              speed: { min: 5.5, max: 3.5 },
              damage: { min: "110", max: "600" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "(WEAPON) Minigun",
              description: "Just shoots fast",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0.45, max: 0.4 },
              damage: { min: "18", max: "108" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Fast Hands",
              description: "Arsenal ability cooldown reduced to 3 seconds",
              onLevel: 6,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 }
            },
            {
              name: "Momentum",
              description: "Gains +25% damage for 15 seconds after using Arsenal ability",
              onLevel: 10,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 }
            },    
          ]
        },
        { 
          name: "Upgraded Titan TV Guy", 
          imageUrl: "https://i.postimg.cc/J0FHCJNb/transparent_Photoroom_(77).png",
          rarity: 'mythic',
          type: 'AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Titan Cinema Guy',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/0NcC96J6/transparent_Photoroom_2026_01_27T203709_076.png'
              },
              {
                name: 'Energy Blade',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/m20gTpck/transparent_Photoroom_(13).png'
              },
              {
                name: "Reinforced Plating",
                rarity: 'epic',
                quantity: 18,
                imageUrl: 'https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png'
              }
            ]
          },
          stats: {
            cost: { min: "6,000", max: "89,050" },
            placements: { min: 1, max: 1 },
            range: { min: 60, max: 74 },
            speed: { min: 5, max: 0.7 },
            damage: { min: 65, max: 105 },
            angle: { min: 35, max: 35 },
            strokes: { min: 4, max: 1 }
          },
          abilities: [
            {
              name: "Advanced Tech",
              description: "Immune to stun",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 }
            },
            {
              name: "Core Blast",
              description: "Shoots with his core, dealing 2x damage",
              onLevel: 4,
              type: "Passive",
              speed: { min: 20, max: 20 },
              damage: { min: 800, max: "1,400" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Teleport Pulse",
              description: "Teleports, dealing 3x damage",
              onLevel: 6,
              type: "Passive",
              speed: { min: 30, max: 30 },
              damage: { min: "1,560", max: "2,100" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Side Screen",
              description: "Releases his side screens for 10 seconds",
              onLevel: 9,
              type: "Passive",
              speed: { min: 25, max: 25 },
              damage: { min: "2,330", max: "2,330" },
              dps: { min: 0, max: "0" }
            }
          ],
          scrapUpgrades: {
            levels: 2,
            prices: [100, 125],
            abilities: [
              { ability: "Ability Cooldown", values: ["100% → 95%", "95% → 90%"] },
              { ability: "🎯Range", values: ["100 → 102", "102 → 105"] }
            ]
          }
        },    
        { 
          name: "Zombie Titan TV Guy (enraged)", 
          imageUrl: "https://i.postimg.cc/ryRJxwrP/transparent-Photoroom-2026-01-27T200250-157.png",
          rarity: 'secret',
          type: 'AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Zombie Titan TV Guy',
                rarity: 'secret',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/9FtcjXhF/transparent_Photoroom_(14).png'
              },
              {
                name: 'Zombie Tooth',
                rarity: 'mythic',
                quantity: 32,
                imageUrl: 'https://i.postimg.cc/V6RD3Lzp/transparent_Photoroom_(44).png'
              },
              {
                name: "Titan's Core",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png'
              },
              {
                name: "Eyeball",
                rarity: 'common',
                quantity: 250,
                imageUrl: 'https://i.postimg.cc/vmDcVhHL/Eyeball.png'
              },
            ]
          },
          stats: {
            cost: { min: "4,700", max: "46,500 (140 Scrap)" },
            placements: { min: 1, max: 1 },
            range: { min: 50, max: 65 },
            speed: { min: 6, max: 5 },
            damage: { min: 100, max: "325 (380)" },
            dps: { min: 50, max: "341.25 (402)" },
            strokes: { min: 3, max: 3 },
            angle: { min: 55, max: 55 }
          },
          abilities: [
            {
              name: "Enraged",
              description: "While the base is under 60% HP, gain +25% damage",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            },
            {
              name: "Gnaw",
              description: "Bites enemies for 2x damage in splash radius",
              onLevel: 4,
              type: "Passive",
              speed: { min: 20, max: 20 },
              damage: { min: "1,170", max: "1,950 (2,280)" },
              dps: { min: 48, max: "97.5 (114)" }
            },
            {
              name: "Horror Scream",
              description: "Deals 1.5x damage in Full AOE",
              onLevel: 6,
              type: "Passive",
              speed: { min: 30, max: 30 },
              damage: { min: 832.5, max: "1,237,5 (1,710)" },
              dps: { min: 27.75, max: "48.75 (57)" }
            },
            {
              name: "Devour",
              description: "Gnaw kills grant +1 (3) damage, capped at +50 (105)",
              onLevel: 8,
              type: "Pasive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 4,
            prices: [20, 30, 40, 50],
            abilities: [
              { ability: "Devour (damage gain)", values: ["1 → 2", " ", " ", "2 → 3"] },
              { ability: "Devour (buff limit)", values: [" ", "30 → 50", "50 → 75", "75 → 105"] }
            ]
          }
        },
        { 
          name: "Zombie Titan TV Guy", 
          imageUrl: "https://i.postimg.cc/9FtcjXhF/transparent_Photoroom_(14).png",
          rarity: 'secret',
          type: 'AOE',
          obtainment: 'Zombie Crate (0.01% chance)',
          stats: {
            cost: { min: "4,700", max: "46,500" },
            placements: { min: 1, max: 1 },
            range: { min: 50, max: 65 },
            speed: { min: 6, max: 5 },
            damage: { min: 100, max: "325" },
            dps: { min: 50, max: "341.25)" },
            strokes: { min: 3, max: 3 },
            angle: { min: 55, max: 55 }
          },
          abilities: [
            {
              name: "Gnaw",
              description: "Bites enemies for 2x damage in splash radius",
              onLevel: 4,
              type: "Passive",
              speed: { min: 20, max: 20 },
              damage: { min: "1,170", max: "1,950 (2,280)" },
              dps: { min: 48, max: "97.5 (114)" }
            },
            {
              name: "Horror Scream",
              description: "Deals 1.5x damage in Full AOE",
              onLevel: 6,
              type: "Passive",
              speed: { min: 30, max: 30 },
              damage: { min: 832.5, max: "1,237,5 (1,710)" },
              dps: { min: 27.75, max: "48.75 (57)" }
            },
            {
              name: "Devour",
              description: "Gnaw kills grant +1 damage, capped at +50",
              onLevel: 8,
              type: "Pasive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "Titan Grill Guy", 
          imageUrl: "https://i.postimg.cc/VvWdJj27/Titan_Grill.png",
          rarity: 'secret',
          type: 'Splash',
          obtainment: 'Summer Crate (0.01%)',
          stats: {
            cost: { min: "4,600", max: "44,000" },
            placements: { min: "1", max: "1" },
            range: { min: 45, max: 62 },
            speed: { min: 3.5, max: 3.5 },
            damage: { min: 50, max: 95 },
            strokes: { min: 4, max: 5 },
            splash: { min: 10, max: 30 }
          },
          abilities: [
            {
              name: "Too Hot",
              description: "Titan Grill Guy debuffs allies in range for 40% damage",
              onLevel: 7,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: "0" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Ignition",
              description: "Applies Burn: 100% damage over 10 seconds",
              onLevel: 7,
              type: "Pasive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ]
        },
        { 
          name: "Titan Grill Guy (full gas)", 
          imageUrl: "https://i.postimg.cc/htdfg28L/transparent_Photoroom_2026_01_23T151103_818.png",
          rarity: 'secret',
          type: 'Splash → Full AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Titan Grill Guy',
                rarity: 'secret',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/VvWdJj27/Titan_Grill.png'
              },
              {
                name: 'Hot Coal',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/MTLyR6vf/transparent_Photoroom_2026_01_27T173205_554.png'
              },
              {
                name: "Sunscreen",
                rarity: 'common',
                quantity: 200,
                imageUrl: 'https://i.postimg.cc/66Vb5k2z/Sunscreen_Photoroom.png'
              }
            ]
          },
          stats: {
            cost: { min: "4,600", max: "55,000" },
            placements: { min: 1, max: 1 },
            range: { min: 45, max: "62 (66)" },
            speed: { min: 3.5, max: 7 },
            damage: { min: 50, max: "260" },
            strokes: { min: 4, max: 5 },
            splash: { min: 10, max: 0 },
            angle: { min: 0, max: 360 }
          },
          abilities: [
            {
              name: "Blaze",
              description: "Titan Grill Guy (full gas) deals 25% more damage to burning enemies",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: "0" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Too Hot",
              description: "Titan Grill Guy debuffs allies in range for 40% (30%) damage",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: "0" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Ignition",
              description: "Titan Grill Guy burns enemies for 100% damage over 10 seconds",
              onLevel: 1,
              type: "Pasive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 2,
            prices: [5, 50],
            abilities: [
              { ability: "💥 Damage", values: ["260 → 265", " "] },
              { ability: "🎯 Range", values: [" ", "62 → 66"] },
              { ability: "Ignition (damage debuff)", values: ["", "-40% → -30%"] },
            ]
          }
        },
        { 
          name: "Clock Woman", 
          imageUrl: "https://i.postimg.cc/PJBGKvgm/transparent_Photoroom_(37).png",
          rarity: 'secret',
          type: 'Splash',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.001%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: "5 Scrap", max: "5 Scrap + 29,800 Cash" },
            placements: { min: 1, max: 1 },
            range: { min: 28, max: "38 (42)" },
            speed: { min: 3.5, max: 2.5 },
            damage: { min: 20, max: "120" },
            dps: { min: 11, max: "160" },
            strokes: { min: 2, max: 3 },
            splash: { min: 10, max: 0 }
          },
          abilities: [
            {
              name: "Fast Forward",
              description: "Game speed: +50%",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: "0" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Ticked Off",
              description: "Launches head for 200% damage per bounce",
              onLevel: 3,
              type: "Passive",
              speed: { min: 15, max: 15 },
              damage: { min: 70, max: "240" },
              dps: { min: 5, max: "16" }
            }
          ],
          scrapUpgrades: {
            levels: 1,
            prices: [80],
            abilities: [
              { ability: "🎯 Range", values: ["38 → 42"] },
              { ability: "Infinity", values: ["Allows to place another Clock Woman"] },
            ]
          }
        },
        { 
          name: "Clock Woman (future)", 
          imageUrl: "https://i.postimg.cc/v8NYnLLQ/transparent-Photoroom-(20).png",
          rarity: 'secret',
          type: 'AOE → Line AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Clock Woman',
                rarity: 'secret',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/PJBGKvgm/transparent-Photoroom-(37).png'
              },
              {
                name: 'Doom Blade',
                rarity: 'secret',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/FKfrDTb7/transparent-Photoroom-(27).png'
              },
              {
                name: "Glitch Core",
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/7PnBQwZH/transparent-Photoroom-(26).png'
              },
              {
                name: "Titanium Frame",
                rarity: 'mythic',
                quantity: 9,
                imageUrl: 'https://i.postimg.cc/6QjfrpWb/transparent-Photoroom-(33).png'
              }
            ]
          },
          stats: {
            cost: { min: "20 Scrap", max: "120 Scrap + 49,600 Cash" },
            placements: { min: 1, max: 1 },
            range: { min: 32, max: "72" },
            speed: { min: 3.5, max: 3 },
            damage: { min: 125, max: "500" },
            angle: { min: 120, max: 0 }
          },
          abilities: [
            {
              name: "Fast Forward",
              description: "Game speed: +50%",
              onLevel: 1,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: "0" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Time Rush",
              description: "At the start of each wave gains +50% damage that lowers each seconds",
              onLevel: 3,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: "0" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Time Loop",
              description: 'Every 5 waves, repeats all "wave start" effects 1 more time',
              onLevel: 8,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: "0" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Zero Hour",
              description: 'Resets all Unit ability cooldowns in range',
              onLevel: 10,
              type: "Active",
              speed: { min: 240, max: 240 },
              damage: { min: 0, max: "0" },
              dps: { min: 0, max: "0" }
            }
          ]
        },
        { 
          name: "Energy TV Guy", 
          imageUrl: "https://i.postimg.cc/brKXLS73/transparent_Photoroom_(36).png",
          rarity: 'secret',
          type: 'Sigle Target → Line AOE',
          obtainmentStats: 
          [
            { from: "Banner", chance: "0.001%", imageUrl: "https://i.postimg.cc/m2nsQsmv/Banner.jpg" }
          ],
          stats: {
            cost: { min: "300", max: "9,800" },
            placements: { min: 3, max: 3 },
            range: { min: 36, max: 75 },
            speed: { min: 4, max: 2 },
            damage: { min: 60, max: 150 },
            dps: { min: 15, max: 90 }
          },
          abilities: [
            {
              name: "Energy Rip",
              description: "Steals energy from the toilet and gains +1% base stats, capped at +50%",
              onLevel: 1,
              type: "Passive",
              speed: { min: 20, max: 20 },
              damage: { min: 0, max: "0" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Energy Pulse",
              description: "Knocks enemies back in a large Cone AOE",
              onLevel: 2,
              type: "Passive",
              speed: { min: 10, max: 10 },
              damage: { min: 60, max: 150 },
              dps: { min: 6, max: 15 }
            }
          ]
        },
        { 
          name: "Enhanced Energy TV Guy", 
          imageUrl: "https://i.postimg.cc/brKXLS73/transparent_Photoroom_(36).png",
          rarity: 'secret',
          type: 'Sigle Target → Triple Line AOE',
          obtainmentInfo: {
            mode: 'craft',
            craft: [
              {
                name: 'Energy TV Guy',
                rarity: 'secret',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/brKXLS73/transparent_Photoroom_(36).png'
              },
              {
                name: 'Energy Blade',
                rarity: 'mythic',
                quantity: 1,
                imageUrl: 'https://i.postimg.cc/m20gTpck/transparent_Photoroom_(13).png'
              },
              {
                name: "Battery",
                rarity: 'common',
                quantity: 999,
                imageUrl: 'https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png'
              }
            ]
          },
          stats: {
            cost: { min: "500", max: "40,150" },
            placements: { min: 3, max: 3 },
            range: { min: 36, max: 90 },
            speed: { min: 4, max: 2 },
            damage: { min: 74, max: "675" },
            dps: { min: 18.5, max: "405" }
          },
          abilities: [
            {
              name: "Energy Rip",
              description: "Steals energy from the toilet and gains +1% base stats, capped at +50%",
              onLevel: 1,
              type: "Passive",
              speed: { min: 20, max: 20 },
              damage: { min: 0, max: "0" },
              dps: { min: 0, max: "0" }
            },
            {
              name: "Energy Pulse",
              description: "Knocks enemies back in a large Cone AOE",
              onLevel: 2,
              type: "Passive",
              speed: { min: 10, max: 10 },
              damage: { min: 74, max: "675" },
              dps: { min: 7.4, max: "67.5" }
            },
            {
              name: "Conduit",
              description: "Gains 10% of the damage from all units in range, capped at +300 (350)",
              onLevel: 12,
              type: "Passive",
              speed: { min: 0, max: 0 },
              damage: { min: 0, max: 0 },
              dps: { min: 0, max: 0 }
            }
          ],
          scrapUpgrades: {
            levels: 1,
            prices: [100],
            abilities: [
              { ability: "Conduit (damage gain)", values: ["10% → 15%"] },
              { ability: "Conduit (buff limit)", values: ["300 → 350"] },
            ]
          }
        },
      ],

      // ----- ITEMS (ручной ввод) -----
      items: [
        { 
          name: "Charged Battery", 
          imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png", 
          type: "material", 
          rarity: "common",
          obtainmentStats: [
            {
              from: "TV Woman Shop",
              chance: "300 coins",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "City Map",
              chance: "Wave 20 boss on Hard (10%)",
              imageUrl: "https://i.postimg.cc/DZykKv0v/Скриншот_06_01_2026_163351.jpg"
            },
            {
              from: "Sewers Map",
              chance: "Wave 20, 25 boss on Normal-Hard (10%)",
              imageUrl: "https://i.postimg.cc/ydY4z1xs/Скриншот_06_01_2026_163413.jpg"
            },
            {
              from: "Train Route Map",
              chance: "Wave 20 x2 bosses on Normal-Hard (10%)",
              imageUrl: "https://i.postimg.cc/NMfqwsFQ/Скриншот_06_01_2026_163441.jpg"
            },
            {
              from: "Wastelands Map",
              chance: "Wave 25 x2 bosses on Normal, x4 bosses on Hard (10%)",
              imageUrl: "https://i.postimg.cc/QtxGr8CD/Скриншот_06_01_2026_163504.jpg"
            },
            {
              from: "Deserted City Raid",
              chance: "Wave 10 x2 bosses (10%)",
              imageUrl: "https://i.postimg.cc/76Y8yHhZ/Скриншот_06_01_2026_163552.jpg"
            },
            {
              from: "Titan Factory Raid",
              chance: "Wave 10, 20 x2 bosses (10%)",
              imageUrl: "https://i.postimg.cc/50NdM4yy/Скриншот_06_01_2026_163727.jpg"
            },
            {
              from: "Salvaging Camera Woman",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/pXvQzW8T/Скриншот_14_01_2026_204823.jpg"
            },
            {
              from: "Salvaging Camera Woman 2.0",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/yxhyy4NK/Скриншот_22_01_2026_220813.jpg"
            }
          ],
          usedForStats: [
            { name: "Camera Woman 2.0", imageUrl: "https://i.postimg.cc/PfZT10Fs/transparent_Photoroom_(80).png", details: "" },
            { name: "Flamethrower Camera Guy (blue flames)", imageUrl: "https://i.postimg.cc/MZRq1grk/transparent_Photoroom_(81).png", details: "" },
            { name: "Large Disabler Camera Guy", imageUrl: "https://i.postimg.cc/44tspj2j/transparent_Photoroom_(82).png", details: "" },
            { name: "Camera Woman 3.0", imageUrl: "https://i.postimg.cc/BZD42Rwj/transparent_Photoroom_(83).png", details: "" },
            { name: "Dave", imageUrl: "https://i.postimg.cc/3rpY2zb7/transparent_Photoroom_(84).png", details: "" },
            { name: "Large Red Laser Camera Guy", imageUrl: "https://i.postimg.cc/y69s02r1/transparent_Photoroom_(85).png", details: "" },
            { name: "Red Laser Camera Guy", imageUrl: "https://i.postimg.cc/G3Ydv6S2/transparent_Photoroom_(86).png", details: "" },
            { name: "Enhanced Energy TV Guy", imageUrl: "https://i.postimg.cc/brKXLS73/transparent_Photoroom_(36).png", details: "" },
            { name: "Gears", imageUrl: "https://i.postimg.cc/c4nggDfw/Skrinsot-14-01-2026-204217.jpg", details: "(required for each gear)" }
          ]
        },
        { 
          name: "Metal Plating", 
          imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png", 
          type: "material", 
          rarity: "common",
          obtainmentStats: [
            {
              from: "TV Woman Shop",
              chance: "500 coins",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "City Map",
              chance: "Wave 15 boss on Normal-Hard (6%)",
              imageUrl: "https://i.postimg.cc/DZykKv0v/Скриншот_06_01_2026_163351.jpg"
            },
            {
              from: "Sewers Map",
              chance: "Wave 15 boss on (6%)",
              imageUrl: "https://i.postimg.cc/ydY4z1xs/Скриншот_06_01_2026_163413.jpg"
            },
            {
              from: "Train Route Map",
              chance: "Wave 15 x2 bosses (6%)",
              imageUrl: "https://i.postimg.cc/NMfqwsFQ/Скриншот_06_01_2026_163441.jpg"
            },
            {
              from: "Wastelands Map",
              chance: "Wave 15 x2 bosses (6%)",
              imageUrl: "https://i.postimg.cc/QtxGr8CD/Скриншот_06_01_2026_163504.jpg"
            },
            {
              from: "Gear Lab Map",
              chance: "Wave 7 boss on Easy, x2 bosses on Normal, x3 bosses on Hard, x4 bosses on Insane (6%)",
              imageUrl: "https://i.postimg.cc/zBXZ1zvB/Скриншот_06_01_2026_163700.jpg"
            },
            {
              from: "Deserted City Raid",
              chance: "Wave 5 x2 bosses (6%)",
              imageUrl: "https://i.postimg.cc/76Y8yHhZ/Скриншот_06_01_2026_163552.jpg"
            },
            {
              from: "Titan Factory Raid",
              chance: "Wave 5, 30 x2 bosses (6%)",
              imageUrl: "https://i.postimg.cc/50NdM4yy/Скриншот_06_01_2026_163727.jpg"
            },
            {
              from: "Secret Bunker Raid",
              chance: "Wave 5 x2 bosses (6%)",
              imageUrl: "https://i.postimg.cc/k4X3dJGV/Скриншот_06_01_2026_163755.jpg"
            }
          ],
          usedForStats: [
            { name: "Helicopter Speaker (armored)", imageUrl: "https://i.postimg.cc/qR5crxXv/Helicopter-Speaker-(armored).png", details: "" },
            { name: "Camera Woman 2.0", imageUrl: "https://i.postimg.cc/PfZT10Fs/transparent_Photoroom_(80).png", details: "" },
            { name: "Flamethrower Camera Guy (blue flames)", imageUrl: "https://i.postimg.cc/MZRq1grk/transparent_Photoroom_(81).png", details: "" },
            { name: "Golden Disabler Camera GUy", imageUrl: "https://i.postimg.cc/2831x7tX/transparent_Photoroom_(90).png", details: "" },
            { name: "Upgraded Dark Stereocopter", imageUrl: "https://i.postimg.cc/c1z9xZpr/transparent_Photoroom_(100).png", details: "" },
            { name: "Hero Speaker Guy (revived)", imageUrl: "https://i.postimg.cc/WbJ9tCV2/transparent_Photoroom_2026_01_22T220534_143.png", details: "" },
            { name: "Glitch Camera Guy", imageUrl: "https://i.postimg.cc/CLfvdX0L/transparent_Photoroom_2026_01_22T220717_805.png", details: "" },
            { name: "Gears", imageUrl: "https://i.postimg.cc/c4nggDfw/Skrinsot-14-01-2026-204217.jpg", details: "(required for each gear)" }
          ]
        },
        { 
          name: "Scrеw", 
          imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png", 
          type: "material", 
          rarity: "common",
          obtainmentStats: [
            {
              from: "TV Woman Shop",
              chance: "750 coins",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "Upgraded Raid Crate",
              chance: "52.25%",
              imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg"
            },
            {
              from: "Gear Lab Map",
              chance: "Wave 10, 25 x2 bosses on Easy, x4 bosses on Normal, x6 bosses on Hard, x8 bosses on Insane (4%)",
              imageUrl: "https://i.postimg.cc/zBXZ1zvB/Скриншот_06_01_2026_163700.jpg"
            }
          ],
          usedForStats: [
            { name: "Golden Buzzsaw Camera Guy", imageUrl: "https://i.postimg.cc/NfLKxknW/transparent_Photoroom_(88).png", details: "" },
            { name: "Frankengineer (shocked)", imageUrl: "https://i.postimg.cc/vT0XW6VC/transparent_Photoroom_(15).png", details: "" },
            { name: "Gears", imageUrl: "https://i.postimg.cc/c4nggDfw/Skrinsot-14-01-2026-204217.jpg", details: "(Medkit, Toilet Plunger, Flamethrower, Blaster Turret)" }
          ]
        },
        { 
          name: "Sunscreen", 
          imageUrl: "https://i.postimg.cc/66Vb5k2z/Sunscreen_Photoroom.png", 
          type: "material", 
          rarity: "common",
          obtainmentStats: [
            {
              from: "Summer Event Endless",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/66Vb5k2z/Sunscreen_Photoroom.png"
            },
            {
              from: "Summer Crate",
              chance: "48.5%",
              imageUrl: "https://i.postimg.cc/tJf6xLKb/Summer_Crate.jpg"
            }
          ],
          usedForStats: [
            { name: "Grillmaster TV Guy (chef)", imageUrl: "https://i.postimg.cc/cLnrZF7f/transparent_Photoroom_2026_01_23T153613_892.png", details: "" },
            { name: "Wave Ninja Camera Guy (ripples)", imageUrl: "https://i.postimg.cc/CxqzYcCC/transparent_Photoroom_2026_01_23T152459_596.png", details: "" },
            { name: "Titan Sandcastle Guy (fortified)", imageUrl: "https://i.postimg.cc/0ywbxVGd/transparent_Photoroom_2026_01_23T151316_035.png", details: "" },
            { name: "Tub Engineer (atomic)", imageUrl: "https://i.postimg.cc/zGgV5xwK/transparent_Photoroom_2026_01_23T154606_993.png", details: "" },
            { name: "Titan Grill Guy (full gas)", imageUrl: "https://i.postimg.cc/htdfg28L/transparent_Photoroom_2026_01_23T151103_818.png", details: "" }
          ]
        },
        { 
          name: "TV", 
          imageUrl: "https://i.postimg.cc/4xyF3FBP/transparent_Photoroom_2026_01_23T180041_259.png", 
          type: "material", 
          rarity: "common",
          obtainmentStats: [
            {
              from: "Salvaging TV Guy",
              chance: "20%",
              imageUrl: "https://i.postimg.cc/yYY1Ys9f/Скриншот_23_01_2026_174130.jpg"
            },
            {
              from: "Salvaging any other TV Unit",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/155m5s6J/Скриншот_23_01_2026_174334.jpg"
            },
          ],
          usedForStats: [
            { name: "Useless", imageUrl: "https://i.postimg.cc/4xyF3FBP/transparent_Photoroom_2026_01_23T180041_259.png", details: "" }
          ]
        },
        { 
          name: "Speaker", 
          imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png", 
          type: "material", 
          rarity: "common",
          obtainmentStats: [
            {
              from: "Salvaging Speaker Guy",
              chance: "20%",
              imageUrl: "https://i.postimg.cc/Y9b3L01Q/Скриншот_23_01_2026_223130.jpg"
            },
            {
              from: "Salvaging Dark Speaker Guy",
              chance: "35%",
              imageUrl: "https://i.postimg.cc/PJJMWH4N/Скриншот_23_01_2026_223017.jpg"
            },
            {
              from: "Salvaging any other Speaker Unit (except Large Speaker Guys)",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/tJJz3b5J/Скриншот_23_01_2026_223050.jpg"
            }
          ],
          usedForStats: [
            { name: "Boombox Gear", imageUrl: "https://i.postimg.cc/rFbwf5D3/Скриншот_11_01_2026_145819.jpg", details: "" }
          ]
        },
        { 
          name: "Eyeball", 
          imageUrl: "https://i.postimg.cc/vmDcVhHL/Eyeball.png", 
          type: "material", 
          rarity: "common",
          obtainmentStats: [
            {
              from: "Scientist's Revenge Endless (Zombie Event Endless)",
              chance: "Any boss (75%)",
              imageUrl: "https://i.postimg.cc/50NdM4yY/Скриншот_06_01_2026_163848.jpg"
            }
          ],
          usedForStats: [
            { name: "Shackled Speaker Guy (no escape)", imageUrl: "https://i.postimg.cc/XNhs3ZLm/transparent_Photoroom_2026_01_23T232216_711.png", details: "" },
            { name: "Vampire Camera Woman (royal)", imageUrl: "https://i.postimg.cc/T1Z0cShc/transparent_Photoroom_2026_01_23T232242_319.png", details: "" },
            { name: "Witch TV Woman (broom)", imageUrl: "https://i.postimg.cc/PfcShLyF/transparent_Photoroom_2026_01_23T232325_156.png", details: "" },
            { name: "Frankengineer (shocked)", imageUrl: "https://i.postimg.cc/vT0XW6VC/transparent_Photoroom_(15).png", details: "" },
            { name: "Pirate Speaker Woman (cannon)", imageUrl: "https://i.postimg.cc/tRfBy1kc/transparent_Photoroom_2026_01_23T232348_224.png", details: "" },
            { name: "Zombie Titan TV Guy (enraged)", imageUrl: "https://i.postimg.cc/ryRJxwrP/transparent-Photoroom-2026-01-27T200250-157.png", details: "" }
          ]
        },
        { 
          name: "Rocket Launcher", 
          imageUrl: "https://i.postimg.cc/zB5xtRYs/transparent_Photoroom_(38).png", 
          type: "material", 
          rarity: "uncommon",
          obtainmentStats: [
            {
              from: "City Map",
              chance: "Wave 15 boss (8%)",
              imageUrl: "https://i.postimg.cc/DZykKv0v/Скриншот_06_01_2026_163351.jpg"
            },
            {
              from: "Train Route Map",
              chance: "Wave 10 x2 bosses (8%)",
              imageUrl: "https://i.postimg.cc/NMfqwsFQ/Скриншот_06_01_2026_163441.jpg"
            },
            {
              from: "Titan Factory Raid",
              chance: "Wave 15 x2 bosses (12%)",
              imageUrl: "https://i.postimg.cc/50NdM4yy/Скриншот_06_01_2026_163727.jpg"
            },
            {
              from: "Secret Bunker Raid",
              chance: "Wave 10 boss (12%)",
              imageUrl: "https://i.postimg.cc/k4X3dJGV/Скриншот_06_01_2026_163755.jpg"
            },
            {
              from: "Salvaging Rocket Camera Guy",
              chance: "75%",
              imageUrl: "https://i.postimg.cc/1t1J6bnN/Скриншот_23_01_2026_234708.jpg"
            },
            {
              from: "Salvaging Large Rocket Camera Guy",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/k4Pf8L6R/Скриншот_23_01_2026_234743.jpg"
            }
          ],
          usedForStats: [
            { name: "Rocket Camera Guy", imageUrl: "https://i.postimg.cc/vH2BGDk9/Rocket_Camera_Guy.png", details: "" },
            { name: "Large Rocket Camera Guy", imageUrl: "https://i.postimg.cc/bJXFP8zn/Large_Rocket_Camera_Guy.png", details: "" },
            { name: "Toilet Plunger Gear", imageUrl: "https://i.postimg.cc/wTPjwD1P/Скриншот_11_01_2026_145730.jpg", details: "" }
          ]
        },
        { 
          name: "Egg Shell", 
          imageUrl: "https://i.postimg.cc/MKZNr3vs/Egg_Shell.png", 
          type: "material", 
          rarity: "uncommon",
          obtainmentStats: [
            {
              from: "Easter Event Map",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/MKZNr3vs/Egg_Shell.png"
            }
          ],
          usedForStats: [
            { name: "Opening Easter Crate", imageUrl: "https://i.postimg.cc/gJmfYzVd/Easter_Crate.jpg", details: "" }
          ]
        },
        { 
          name: "Camera", 
          imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent-Photoroom-2026-01-24T151822-437.png", 
          type: "material", 
          rarity: "uncommon",
          obtainmentStats: [
            {
              from: "Salvaging Camera Guy",
              chance: "20%",
              imageUrl: "https://i.postimg.cc/FsJSBNKp/Скриншот_24_01_2026_152634.jpg"
            },
            {
              from: "Salvaging Camera Toilet",
              chance: "25%",
              imageUrl: "https://i.postimg.cc/X7y5z4vx/Скриншот_24_01_2026_152704.jpg"
            },
            {
              from: "Salvaging Scientist Camera Guy",
              chance: "50%",
              imageUrl: "https://i.postimg.cc/vH6nNbmP/Скриншот_24_01_2026_152334.jpg"
            },
            {
              from: "Salvaging Infected Camera Guy",
              chance: "75%",
              imageUrl: "https://i.postimg.cc/rwWRjkJR/Скриншот_24_01_2026_182417.jpg"
            },
            {
              from: "Salvaging any other Camera Unit (except Large Camera Guys)",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/wTsNGgBV/Скриншот_24_01_2026_152302.jpg"
            }
          ],
          usedForStats: [
            { name: "Golden Disabler Camera Guy", imageUrl: "https://i.postimg.cc/2831x7tX/transparent_Photoroom_(90).png", details: "" },
            { name: "Medkit Gear", imageUrl: "https://i.postimg.cc/DyDwx1SR/Скриншот_11_01_2026_145754.jpg", details: "" }
          ]
        },
        { 
          name: "Lost Plunger", 
          imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png", 
          type: "material", 
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Weapon Crate",
              chance: "50%",
              imageUrl: "https://i.postimg.cc/NMdk4f3z/Skrinsot-19-04-2026-152303.jpg"
            },
            {
              from: "Salvaging Ninja Camera Guy",
              chance: "2%",
              imageUrl: "https://i.postimg.cc/x870mXNF/Скриншот_24_01_2026_174829.jpg"
            },
            {
              from: "Salvaging Ninja Camera Guy (dual wield)",
              chance: "50%",
              imageUrl: "https://i.postimg.cc/tJfX6snS/Скриншот_24_01_2026_174757.jpg"
            },
            {
              from: "Salvaging Glitch Camera Guy",
              chance: "50%",
              imageUrl: "https://i.postimg.cc/8c31v7fZ/Скриншот_24_01_2026_174857.jpg"
            }
          ],
          usedForStats: [
            { name: "Ninja Camera Guy (dual wield)", imageUrl: "https://i.postimg.cc/V6jnCPXG/Ninja_Camera_Guy.png", details: "" },
            { name: "Glitch Camera Guy", imageUrl: "https://i.postimg.cc/CLfvdX0L/transparent_Photoroom_2026_01_22T220717_805.png", details: "" }
          ]
        },
        { 
          name: "Large Speaker", 
          imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png", 
          type: "material", 
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Salvaging Helicopter Speaker",
              chance: "20%",
              imageUrl: "https://i.postimg.cc/W3NWGSMP/Скриншот_24_01_2026_180512.jpg"
            },
            {
              from: "Salvaging Large Speaker Guy",
              chance: "50%",
              imageUrl: "https://i.postimg.cc/1tmCGMp1/Скриншот_24_01_2026_180440.jpg"
            },
            {
              from: "Salvaging any other Large Speaker Unit",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/wvqfXFhz/Скриншот_24_01_2026_180315.jpg"
            }
          ],
          usedForStats: [
            { name: "Boombox Gear", imageUrl: "https://i.postimg.cc/rFbwf5D3/Скриншот_11_01_2026_145819.jpg", details: "" }
          ]
        },
        { 
          name: "Large Camera", 
          imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png", 
          type: "material", 
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Salvaging Camera Drone",
              chance: "20%",
              imageUrl: "https://i.postimg.cc/wjJR2pV7/Скриншот_24_01_2026_182202.jpg"
            },
            {
              from: "Salvaging Large Camera Guy",
              chance: "35%",
              imageUrl: "https://i.postimg.cc/FHckp4Zd/Скриншот_24_01_2026_182320.jpg"
            },
            {
              from: "Salvaging Large Toilet Camera Guy",
              chance: "60%",
              imageUrl: "https://i.postimg.cc/CxDn7gNR/Скриншот_24_01_2026_182343.jpg"
            },
            {
              from: "Salvaging Large Infected Camera Guy",
              chance: "75%",
              imageUrl: "https://i.postimg.cc/x1HN52RH/Скриншот_24_01_2026_182440.jpg"
            },
            {
              from: "Salvaging any other Large Camera Unit",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/Z53vHScN/Скриншот_24_01_2026_182548.jpg"
            }
          ],
          usedForStats: [
            { name: "Gears", imageUrl: "https://i.postimg.cc/c4nggDfw/Скриншот_14_01_2026_204217.jpg", details: "(Medkit, Toilet Plunger)" }
          ]
        },
        { 
          name: "Zombie Brain", 
          imageUrl: "https://i.postimg.cc/cHmXV4sd/transparent_Photoroom_(43).png", 
          type: "material", 
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Scientist's Revenge Endless (Zombie Event Endless)",
              chance: "Any boss (80%)",
              imageUrl: "https://i.postimg.cc/50NdM4yY/Скриншот_06_01_2026_163848.jpg"
            }
          ],
          usedForStats: [
            { name: "Zombie Battle Pass", imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg", details: "" }
          ]
        },
        { 
          name: "Stolen Spear", 
          imageUrl: "https://i.postimg.cc/br0rMQgX/transparent_Photoroom_(17).png", 
          type: "material", 
          rarity: "epic",
          obtainmentStats: [
            {
              from: "TV Woman Shop",
              chance: "6,250 coins",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "Weapon Crate",
              chance: "38%",
              imageUrl: "https://i.postimg.cc/NMdk4f3z/Skrinsot-19-04-2026-152303.jpg"
            }
          ],
          usedForStats: [
            { name: "Dark Speaker Guy 2.0 (spear)", imageUrl: "https://i.postimg.cc/x1h4fg2Y/transparent_Photoroom_2026_01_25T135449_640.png", details: "" }
          ]
        },
        { 
          name: "Mace", 
          imageUrl: "https://i.postimg.cc/fTFpF6VP/transparent_Photoroom_(18).png", 
          type: "material", 
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Weapon Crate",
              chance: "10.7%",
              imageUrl: "https://i.postimg.cc/NMdk4f3z/Skrinsot-19-04-2026-152303.jpg"
            },
            {
              from: "Salvaging Mace Camera Guy",
              chance: "75%",
              imageUrl: "https://i.postimg.cc/TYQ0w0rh/Скриншот_25_01_2026_134218.jpg"
            },
            {
              from: "Salvaging Golden Mace Camera Guy",
              chance: "75%",
              imageUrl: "https://i.postimg.cc/Hs3zxzQn/Скриншот_25_01_2026_134258.jpg"
            }
          ],
          usedForStats: [
            { name: "Mace Camera Guy", imageUrl: "https://i.postimg.cc/nhgPFTty/transparent_Photoroom_2026_01_25T140008_055.png", details: "" }
          ]
        },
        { 
          name: "Katana", 
          imageUrl: "https://i.postimg.cc/8cX9TYtW/transparent_Photoroom_(19).png", 
          type: "material", 
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Weapon Crate",
              chance: "0.5%",
              imageUrl: "https://i.postimg.cc/NMdk4f3z/Skrinsot-19-04-2026-152303.jpg"
            },
            {
              from: "Salvaging Speaker Woman (katana)",
              chance: "75%",
              imageUrl: "https://i.postimg.cc/BvF2xB1v/Skrinsot-25-01-2026-134650.jpg"
            }
          ],
          usedForStats: [
            { name: "Speaker Woman (katana)", imageUrl: "https://i.postimg.cc/W1hycCQj/transparent_Photoroom_2026_01_25T140144_852.png", details: "" }
          ]
        },
        { 
          name: "Photon Grenade", 
          imageUrl: "https://i.postimg.cc/hvXM1t1V/transparent_Photoroom_(20).png", 
          type: "material", 
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Weapon Crate",
              chance: "0.5%",
              imageUrl: "https://i.postimg.cc/NMdk4f3z/Skrinsot-19-04-2026-152303.jpg"
            }
          ],
          usedForStats: [
            { name: "Infernal TV Woman", imageUrl: "https://i.postimg.cc/T3RsKQ3L/transparent_Photoroom_(98).png", details: "" },
            { name: "Titan's Hammer Gear", imageUrl: "https://i.postimg.cc/yY58L0DM/Скриншот_11_01_2026_145509.jpg", details: "" }
          ]
        },
        { 
          name: "Chainsword", 
          imageUrl: "https://i.postimg.cc/Vk8pmXF0/transparent_Photoroom_(21).png", 
          type: "material", 
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Weapon Crate",
              chance: "0.3%",
              imageUrl: "https://i.postimg.cc/NMdk4f3z/Skrinsot-19-04-2026-152303.jpg"
            }
          ],
          usedForStats: [
            { name: "Dave", imageUrl: "https://i.postimg.cc/3rpY2zb7/transparent_Photoroom_(84).png", details: "" }
          ]
        },
        { 
          name: "Weapon Key", 
          imageUrl: "https://i.postimg.cc/Kvfmhgvv/Weapon_Key.png", 
          type: "material", 
          rarity: "epic",
          obtainmentStats: [
            {
              from: "TV Woman Shop",
              chance: "4,000 coins",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "Crates Menu Keys Shop",
              chance: "x1 for 199 Robux, x10 for 1,499 Robux",
              imageUrl: "https://i.postimg.cc/0Nk4dKHg/image.png"
            }
          ],
          usedForStats: [
            { name: "Opening Weapon Crate", imageUrl: "https://i.postimg.cc/NMdk4f3z/Skrinsot-19-04-2026-152303.jpg", details: "" }
          ]
        },
        { 
          name: "Tag Key", 
          imageUrl: "https://i.postimg.cc/m2pmGzT0/Tag_Key.png", 
          type: "material", 
          rarity: "epic",
          obtainmentStats: [
            {
              from: "TV Woman Shop",
              chance: "50 gems",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "Crates Menu Keys Shop",
              chance: "x1 for 25 Robux, x10 for 199 Robux",
              imageUrl: "https://i.postimg.cc/0Nk4dKHg/image.png"
            }
          ],
          usedForStats: [
            { name: "Opening Tag Crate", imageUrl: "https://i.postimg.cc/DZxPgy9B/Skrinsot-19-04-2026-152418.jpg", details: "" }
          ]
        },
        { 
          name: "Summer Key", 
          imageUrl: "https://i.postimg.cc/JhWx3tjw/Summer_Key.png", 
          type: "material", 
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Summer Event Endless",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/JhWx3tjw/Summer_Key.png"
            },
            {
              from: "Crates Menu Keys Shop",
              chance: "x1 for 99 Robux, x10 for 799 Robux",
              imageUrl: "https://i.postimg.cc/0Nk4dKHg/image.png"
            }
          ],
          usedForStats: [
            { name: "Opening Summer Crate", imageUrl: "https://i.postimg.cc/tJf6xLKb/Summer_Crate.jpg", details: "" }
          ]
        },
        { 
          name: "Emote Key", 
          imageUrl: "https://i.postimg.cc/RZ0mdbRH/Morph_Key.png", 
          type: "material", 
          rarity: "epic",
          obtainmentStats: [
            {
              from: "TV Woman Shop",
              chance: "100 gems",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "Crates Menu Keys Shop",
              chance: "x1 for 39 Robux, x10 for 349 Robux",
              imageUrl: "https://i.postimg.cc/0Nk4dKHg/image.png"
            }
          ],
          usedForStats: [
            { name: "Opening Emote Crate", imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg", details: "" }
          ]
        },
        { 
          name: "Morph Key", 
          imageUrl: "https://i.postimg.cc/xjpHk1GH/transparent_Photoroom_(61).png", 
          type: "material", 
          rarity: "epic",
          obtainmentStats: [
            {
              from: "TV Woman Shop",
              chance: "100 gems",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "Crates Menu Keys Shop",
              chance: "x1 for 39 Robux, x10 for 349 Robux",
              imageUrl: "https://i.postimg.cc/0Nk4dKHg/image.png"
            }
          ],
          usedForStats: [
            { name: "Opening Morph Crate", imageUrl: "https://i.postimg.cc/D0DGXt9w/Morph_Crate.jpg", details: "" }
          ]
        },
        { 
          name: "Zombie Key", 
          imageUrl: "https://i.postimg.cc/TwBk8nMK/Zombie_Key.png", 
          type: "material", 
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Scientist's Revenge (Zombie Event Endless)",
              chance: "Any boss (30%)",
              imageUrl: "https://i.postimg.cc/50NdM4yY/Скриншот_06_01_2026_163848.jpg"
            },
            {
              from: "Crates Menu Keys Shop",
              chance: "x1 for 99 Robux, x10 for 799 Robux",
              imageUrl: "https://i.postimg.cc/0Nk4dKHg/image.png"
            }
          ],
          usedForStats: [
            { name: "Opening Zombie Crate", imageUrl: "https://i.postimg.cc/C5g5d9Z2/Skrinsot-19-04-2026-152142.jpg", details: "" }
          ]
        },
        { 
          name: "Upgraded Raid Key", 
          imageUrl: "https://i.postimg.cc/ZKhsYP2c/Upgraded_Raid_Key.png", 
          type: "material", 
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Secret Bunker Raid",
              chance: "Beating the Raid (100%)",
              imageUrl: "https://i.postimg.cc/k4X3dJGV/Скриншот_06_01_2026_163755.jpg"
            },
            {
              from: "Crates Menu Keys Shop",
              chance: "x1 for 199 Robux, x10 for 1,499 Robux",
              imageUrl: "https://i.postimg.cc/0Nk4dKHg/image.png"
            }
          ],
          usedForStats: [
            { name: "Opening Upgraded Raid Crate", imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg", details: "" }
          ]
        },
        { 
          name: "Hextech Arm", 
          imageUrl: "https://i.postimg.cc/65DpBb7n/transparent_Photoroom_(11).png", 
          type: "material", 
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Upgraded Raid Crate",
              chance: "0.75%",
              imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg"
            }
          ],
          usedForStats: [
            { name: "Astro Titan Camera Guy", imageUrl: "https://i.postimg.cc/3rtypcts/transparent_Photoroom_(92).png", details: "" },
            { name: "Toilet Plunger Gear", imageUrl: "https://i.postimg.cc/wTPjwD1P/Скриншот_11_01_2026_145730.jpg", details: "" }
          ]
        },
        { 
          name: "Overcharged Blaster", 
          imageUrl: "https://i.postimg.cc/nc6hnSs9/transparent_Photoroom_(12).png", 
          type: "material", 
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Upgraded Raid Crate",
              chance: "0.75%",
              imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg"
            }
          ],
          usedForStats: [
            { name: "Overcharged Titan Speaker Guy", imageUrl: "https://i.postimg.cc/3rtypcts/transparent_Photoroom_(92).png", details: "" },
            { name: "Large Red Laser Camera Guy", imageUrl: "https://i.postimg.cc/y69s02r1/transparent_Photoroom_(85).png", details: "" },
            { name: "Blaster Turret Gear", imageUrl: "https://i.postimg.cc/MK4p91cW/Скриншот_11_01_2026_145601.jpg", details: "" }
          ]
        },
        { 
          name: "Obrital Laser Drone", 
          imageUrl: "https://i.postimg.cc/s2Jj9VTB/transparent_Photoroom_(10).png", 
          type: "material", 
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Upgraded Raid Crate",
              chance: "0.75%",
              imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg"
            }
          ],
          usedForStats: [
            { name: "Camera Woman 3.0", imageUrl: "https://i.postimg.cc/BZD42Rwj/transparent_Photoroom_(83).png", details: "" }
          ]
        },
        { 
          name: "Toilet Sit Emote", 
          imageUrl: "https://i.postimg.cc/qvNT9Jbj/Скриншот_05_01_2026_172900.jpg", 
          type: "equippable",
          rarity: "uncommon",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "8.7%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/qvNT9Jbj/Скриншот_05_01_2026_172900.jpg", details: "" },
          ]
        },
        { 
          name: "Thumbs Up Emote", 
          imageUrl: "https://i.postimg.cc/5NN1Sqwx/Скриншот_05_01_2026_172425.jpg", 
          type: "equippable",
          rarity: "common",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "19%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/5NN1Sqwx/Скриншот_05_01_2026_172425.jpg", details: "" },
          ]
        },
        { 
          name: "T-Pose Emote", 
          imageUrl: "https://i.postimg.cc/MKKxmbyq/Скриншот_05_01_2026_172355.jpg", 
          type: "equippable",
          rarity: "common",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "19%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/MKKxmbyq/Скриншот_05_01_2026_172355.jpg", details: "" },
          ]
        },
        { 
          name: "Threaten Emote", 
          imageUrl: "https://i.postimg.cc/2S1DPkcH/Скриншот_05_01_2026_172844.jpg", 
          type: "equippable",
          rarity: "common",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "19%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/2S1DPkcH/Скриншот_05_01_2026_172844.jpg", details: "" },
          ]
        },
        { 
          name: "Kazotsky Kick Emote", 
          imageUrl: "https://i.postimg.cc/L8Jpr9Cx/Скриншот_05_01_2026_172941.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "8.7%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/L8Jpr9Cx/Скриншот_05_01_2026_172941.jpg", details: "" },
          ]
        },
        { 
          name: "Parrot Wiggle Emote", 
          imageUrl: "https://i.postimg.cc/K812dGqq/Скриншот_05_01_2026_172923.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "8.6%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/K812dGqq/Скриншот_05_01_2026_172923.jpg", details: "" },
          ]
        },
        { 
          name: "Company Dance Emote", 
          imageUrl: "https://i.postimg.cc/rwDkvVnZ/Скриншот_05_01_2026_173030.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "8.6%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/rwDkvVnZ/Скриншот_05_01_2026_173030.jpg", details: "" },
          ]
        },
        { 
          name: "The Star Emote", 
          imageUrl: "https://i.postimg.cc/T3K6Zd7H/Скриншот_05_01_2026_173258.jpg", 
          type: "equippable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "2.5%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/T3K6Zd7H/Скриншот_05_01_2026_173258.jpg", details: "" },
          ]
        },
        { 
          name: "Orange Justice Emote", 
          imageUrl: "https://i.postimg.cc/FHw4vM8C/Скриншот_05_01_2026_173903.jpg", 
          type: "equippable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "2.5%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/FHw4vM8C/Скриншот_05_01_2026_173903.jpg", details: "" },
          ]
        },
        { 
          name: "Shadow Emerge Emote", 
          imageUrl: "https://i.postimg.cc/DwSTtvjH/Скриншот_05_01_2026_173328.jpg", 
          type: "equippable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "0.8%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/DwSTtvjH/Скриншот_05_01_2026_173328.jpg", details: "" },
          ]
        },
        { 
          name: "Boogie Down Emote", 
          imageUrl: "https://i.postimg.cc/mgKs4vJj/Скриншот_05_01_2026_173554.jpg", 
          type: "equippable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "0.8%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/mgKs4vJj/Скриншот_05_01_2026_173554.jpg", details: "" },
          ]
        },
        { 
          name: "Breakdance Emote", 
          imageUrl: "https://i.postimg.cc/52DVJhT3/Скриншот_05_01_2026_173352.jpg", 
          type: "equippable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "0.8%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/52DVJhT3/Скриншот_05_01_2026_173352.jpg", details: "" },
          ]
        },
        { 
          name: "Take the L Emote", 
          imageUrl: "https://i.postimg.cc/wjnpzCZw/Скриншот_05_01_2026_173636.jpg", 
          type: "equippable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "0.4%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/wjnpzCZw/Скриншот_05_01_2026_173636.jpg", details: "" },
          ]
        },
        { 
          name: "The Honored One Emote", 
          imageUrl: "https://i.postimg.cc/XYtbWRmQ/Скриншот_05_01_2026_173615.jpg", 
          type: "equippable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "0.3%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/XYtbWRmQ/Скриншот_05_01_2026_173615.jpg", details: "" },
          ]
        },
        { 
          name: "Gambler Dance Emote", 
          imageUrl: "https://i.postimg.cc/Cx9g03XP/Скриншот_05_01_2026_173655.jpg", 
          type: "equippable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Emote Crate",
              chance: "0.3%",
              imageUrl: "https://i.postimg.cc/50sS3NhP/Skrinsot-19-04-2026-152357.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/Cx9g03XP/Скриншот_05_01_2026_173655.jpg", details: "" },
          ]
        },
        { 
          name: "Coach Nap Emote", 
          imageUrl: "https://i.postimg.cc/hPbcw08X/Скриншот_11_01_2026_192648.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Rewards Menu",
              chance: "Favourite the Game, enable notifications, like the Game and join the Group",
              imageUrl: "https://i.postimg.cc/xT7ywK9p/Skrinsot-11-01-2026-193208.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/hPbcw08X/Скриншот_11_01_2026_192648.jpg", details: "" },
          ]
        },
        { 
          name: "Head Juggle Emote", 
          imageUrl: "https://i.postimg.cc/x1X2Wfx4/Скриншот_05_01_2026_173013.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Zombie Battle Pass",
              chance: "Tier 1",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/x1X2Wfx4/Скриншот_05_01_2026_173013.jpg", details: "" },
          ]
        },
        { 
          name: "Zombie Dance Emote", 
          imageUrl: "https://i.postimg.cc/kgJqdtwb/Скриншот_11_01_2026_172126.jpg", 
          type: "equippable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Premium Zombie Battle Pass",
              chance: "Tier 10",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/kgJqdtwb/Скриншот_11_01_2026_172126.jpg", details: "" },
          ]
        },
        { 
          name: "Reaper's Ride Emote", 
          imageUrl: "https://i.postimg.cc/15csTK0g/Скриншот_11_01_2026_192430.jpg", 
          type: "equippable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Premium Zombie Battle Pass",
              chance: "Tier 30",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/15csTK0g/Скриншот_11_01_2026_192430.jpg", details: "" },
          ]
        },
        { 
          name: "Trick or Treat Emote", 
          imageUrl: "https://i.postimg.cc/6pWtNGzp/Скриншот_11_01_2026_192542.jpg", 
          type: "equippable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Zombie Battle Pass",
              chance: "Tier 35",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/6pWtNGzp/Скриншот_11_01_2026_192542.jpg", details: "" },
          ]
        },
        { 
          name: "Sunbath Emote", 
          imageUrl: "https://i.postimg.cc/wjqgdsF9/Скриншот_11_01_2026_192502.jpg", 
          type: "equippable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/wjqgdsF9/Скриншот_11_01_2026_192502.jpg", details: "" },
          ]
        },
        { 
          name: "Ice Cream Cart Emote", 
          imageUrl: "https://i.postimg.cc/JhqWY7jP/Скриншот_11_01_2026_195042.jpg", 
          type: "equippable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/JhqWY7jP/Скриншот_11_01_2026_195042.jpg", details: "" },
          ]
        },
        { 
          name: "Surfer Emote", 
          imageUrl: "https://i.postimg.cc/FHrNQJGk/Скриншот_11_01_2026_192339.jpg", 
          type: "equippable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/FHrNQJGk/Скриншот_11_01_2026_192339.jpg", details: "" },
          ]
        },
        { 
          name: "Coconut Launch Emote", 
          imageUrl: "https://i.postimg.cc/pLWRtnk9/Скриншот_11_01_2026_192312.jpg", 
          type: "equippable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Using this Emote", imageUrl: "https://i.postimg.cc/pLWRtnk9/Скриншот_11_01_2026_192312.jpg", details: "" },
          ]
        },
        { 
          name: "VIP Booth", 
          imageUrl: "https://i.postimg.cc/fWKTVSMM/Скриншот_10_01_2026_193602.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Obtaining VIP Gamepass",
              chance: "",
              imageUrl: "https://i.postimg.cc/V60grBXv/Скриншот_04-08-2025_214628-Photoroom.png"
            }
          ],
          usedForStats: [
            { name: "Using this Booth", imageUrl: "https://i.postimg.cc/fWKTVSMM/Скриншот_10_01_2026_193602.jpg", details: "" },
          ]
        },
        { 
          name: "Grill Booth", 
          imageUrl: "https://i.postimg.cc/fyFKwXQP/Скриншот_11_01_2026_200132.jpg", 
          type: "equippable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Using this Booth", imageUrl: "https://i.postimg.cc/fyFKwXQP/Скриншот_11_01_2026_200132.jpg", details: "" },
          ]
        },
        { 
          name: "Beach Booth", 
          imageUrl: "https://i.postimg.cc/cCjmsYG5/Скриншот_11_01_2026_200221.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Using this Booth", imageUrl: "https://i.postimg.cc/cCjmsYG5/Скриншот_11_01_2026_200221.jpg", details: "" },
          ]
        },
        { 
          name: "Sunken Ship Booth", 
          imageUrl: "https://i.postimg.cc/MZrtbkfq/Скриншот_11_01_2026_200607.jpg", 
          type: "equippable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Using this Booth", imageUrl: "https://i.postimg.cc/MZrtbkfq/Скриншот_11_01_2026_200607.jpg", details: "" },
          ]
        },
        { 
          name: "Cell Booth", 
          imageUrl: "https://i.postimg.cc/vZzdmHDT/image.png", 
          type: "equippable",
          rarity: "uncommon",
          obtainmentStats: [
            {
              from: "Rewards Menu",
              chance: "Enable notifications",
              imageUrl: "https://i.postimg.cc/xT7ywK9p/Скриншот_11_01_2026_193208.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Booth", imageUrl: "https://i.postimg.cc/vZzdmHDT/image.png", details: "" },
          ]
        },
        { 
          name: "Raid Key", 
          imageUrl: "https://i.postimg.cc/43TxBSS7/Raid-Key.png", 
          type: "material", 
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Deserted City Raid",
              chance: "Raid drop (100%)",
              imageUrl: "https://i.postimg.cc/76Y8yHhZ/Скриншот_06_01_2026_163552.jpg"
            },
            {
              from: "TV Woman Shop",
              chance: "2,000 coins",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "Crates Menu Keys Shop",
              chance: "x1 for 99 Robux, x10 for 799 Robux",
              imageUrl: "https://i.postimg.cc/0Nk4dKHg/image.png"
            }
          ],
          usedForStats: [
            { name: "Opening Raid Crate", imageUrl: "https://i.postimg.cc/mkq9H0vf/Raid_Crate.jpg", details: "" },
          ]
        },
        { 
          name: "Bewitched Booth", 
          imageUrl: "https://i.postimg.cc/KjVNZLhV/Скриншот_11_01_2026_200253.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Zombie Battle Pass",
              chance: "Tier 10",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Booth", imageUrl: "https://i.postimg.cc/KjVNZLhV/Скриншот_11_01_2026_200253.jpg", details: "" },
          ]
        },
        { 
          name: "Graveyard Booth", 
          imageUrl: "https://i.postimg.cc/2yJwzvNg/Скриншот_11_01_2026_200450.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Zombie Battle Pass",
              chance: "Tier 42",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Booth", imageUrl: "https://i.postimg.cc/2yJwzvNg/Скриншот_11_01_2026_200450.jpg", details: "" },
          ]
        },
        { 
          name: "Castle Booth", 
          imageUrl: "https://i.postimg.cc/C5tNFDpv/Скриншот_11_01_2026_200321.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Premium Zombie Battle Pass",
              chance: "Tier 1",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Booth", imageUrl: "https://i.postimg.cc/C5tNFDpv/Скриншот_11_01_2026_200321.jpg", details: "" },
          ]
        },
        { 
          name: "Witch's Garden Booth", 
          imageUrl: "https://i.postimg.cc/y6rnXq3B/Скриншот_11_01_2026_200512.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Premium Zombie Battle Pass",
              chance: "Tier 48",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Booth", imageUrl: "https://i.postimg.cc/y6rnXq3B/Скриншот_11_01_2026_200512.jpg", details: "" },
          ]
        },
        { 
          name: "Cave Booth", 
          imageUrl: "https://i.postimg.cc/QCPbX5Zw/Скриншот_11_01_2026_200353.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Zombie Battle Pass",
              chance: "Tier 23",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Booth", imageUrl: "https://i.postimg.cc/QCPbX5Zw/Скриншот_11_01_2026_200353.jpg", details: "" },
          ]
        },
        { 
          name: "Classic Tag", 
          imageUrl: "https://i.postimg.cc/Zn4d9SSh/Скриншот_05_01_2026_145226.jpg", 
          type: "equippable",
          rarity: "common",
          obtainmentStats: [
            {
              from: "Tag Crate",
              chance: "40%",
              imageUrl: "https://i.postimg.cc/DZxPgy9B/Skrinsot-19-04-2026-152418.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/Zn4d9SSh/Скриншот_05_01_2026_145226.jpg", details: "" },
          ]
        },
        { 
          name: "Rainbow Tag", 
          imageUrl: "https://i.postimg.cc/sxshBrrz/Скриншот_05_01_2026_145203.jpg", 
          type: "equippable",
          rarity: "uncommon",
          obtainmentStats: [
            {
              from: "Tag Crate",
              chance: "20%",
              imageUrl: "https://i.postimg.cc/DZxPgy9B/Skrinsot-19-04-2026-152418.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/sxshBrrz/Скриншот_05_01_2026_145203.jpg", details: "" },
          ]
        },
        { 
          name: "Vice Tag", 
          imageUrl: "https://i.postimg.cc/90C74hh5/Скриншот_05_01_2026_145148.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Tag Crate",
              chance: "8%",
              imageUrl: "https://i.postimg.cc/DZxPgy9B/Skrinsot-19-04-2026-152418.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/90C74hh5/Скриншот_05_01_2026_145148.jpg", details: "" },
          ]
        },
        { 
          name: "Speaker Tag", 
          imageUrl: "https://i.postimg.cc/tCrxgwvf/Скриншот_05_01_2026_145115.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Tag Crate",
              chance: "8%",
              imageUrl: "https://i.postimg.cc/DZxPgy9B/Skrinsot-19-04-2026-152418.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/tCrxgwvf/Скриншот_05_01_2026_145115.jpg", details: "" },
          ]
        },
        { 
          name: "TV Tag", 
          imageUrl: "https://i.postimg.cc/qMm37SDS/Скриншот_05_01_2026_145131.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Tag Crate",
              chance: "8%",
              imageUrl: "https://i.postimg.cc/DZxPgy9B/Skrinsot-19-04-2026-152418.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/qMm37SDS/Скриншот_05_01_2026_145131.jpg", details: "" },
          ]
        },
        { 
          name: "Camera Tag", 
          imageUrl: "https://i.postimg.cc/9Fx7fKgk/Скриншот_05_01_2026_145049.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Tag Crate",
              chance: "8%",
              imageUrl: "https://i.postimg.cc/DZxPgy9B/Skrinsot-19-04-2026-152418.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/9Fx7fKgk/Скриншот_05_01_2026_145049.jpg", details: "" },
          ]
        },
        { 
          name: "Anime Tag", 
          imageUrl: "https://i.postimg.cc/YSFGb92B/Скриншот_05_01_2026_145003.jpg", 
          type: "equippable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Tag Crate",
              chance: "5.5%",
              imageUrl: "https://i.postimg.cc/DZxPgy9B/Skrinsot-19-04-2026-152418.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/YSFGb92B/Скриншот_05_01_2026_145003.jpg", details: "" },
          ]
        },
        { 
          name: "Inverted Tag", 
          imageUrl: "https://i.postimg.cc/W4ZFX3NB/Скриншот_05_01_2026_144940.jpg", 
          type: "equippable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Tag Crate",
              chance: "2%",
              imageUrl: "https://i.postimg.cc/DZxPgy9B/Skrinsot-19-04-2026-152418.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/W4ZFX3NB/Скриншот_05_01_2026_144940.jpg", details: "" },
          ]
        },
        { 
          name: "Toilet Tag", 
          imageUrl: "https://i.postimg.cc/d3wy7YYM/Скриншот_05_01_2026_145305.jpg", 
          type: "equippable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Tag Crate",
              chance: "0.5%",
              imageUrl: "https://i.postimg.cc/DZxPgy9B/Skrinsot-19-04-2026-152418.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/d3wy7YYM/Скриншот_05_01_2026_145305.jpg", details: "" },
          ]
        },
        { 
          name: "Surfer Tag", 
          imageUrl: "https://i.postimg.cc/qvbwBWmv/Скриншот_13_01_2026_182506.jpg", 
          type: "equippable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/qvbwBWmv/Скриншот_13_01_2026_182506.jpg", details: "" },
          ]
        },
        { 
          name: "Chill Tag", 
          imageUrl: "https://i.postimg.cc/9Q8bXsxF/Скриншот_13_01_2026_182551.jpg", 
          type: "equippable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/9Q8bXsxF/Скриншот_13_01_2026_182551.jpg", details: "" },
          ]
        },
        { 
          name: "Tropical Tag", 
          imageUrl: "https://i.postimg.cc/QCfYW2HW/Скриншот_14_01_2026_193510.jpg", 
          type: "equippable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/QCfYW2HW/Скриншот_14_01_2026_193510.jpg", details: "" },
          ]
        },
        { 
          name: "Bat Tag", 
          imageUrl: "https://i.postimg.cc/brSp69ky/Скриншот_13_01_2026_183506.jpg", 
          type: "equippable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Premuim Zombie Battle Pass",
              chance: "Tier 5",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/brSp69ky/Скриншот_13_01_2026_183506.jpg", details: "" },
          ]
        },
        { 
          name: "Grim Reaper Tag", 
          imageUrl: "https://i.postimg.cc/fySDHfmW/Скриншот_13_01_2026_183409.jpg", 
          type: "equippable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Premuim Zombie Battle Pass",
              chance: "Tier 40",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/fySDHfmW/Скриншот_13_01_2026_183409.jpg", details: "" },
          ]
        },
        { 
          name: "Pumpkin Tag", 
          imageUrl: "https://i.postimg.cc/BbP4hBHn/Скриншот_13_01_2026_183435.jpg", 
          type: "equippable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Premuim Zombie Battle Pass",
              chance: "Tier 40",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Using this Tag", imageUrl: "https://i.postimg.cc/BbP4hBHn/Скриншот_13_01_2026_183435.jpg", details: "" }
          ]
        },
        { 
          name: "Reinforced Plating", 
          imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png", 
          type: "material",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Salvaging Banner Legendary Unit",
              chance: "80%",
              imageUrl: "https://i.postimg.cc/pXvQzW8T/Skrinsot-14-01-2026-204823.jpg"
            },
            {
              from: "Salvaging Camera Woman 2.0",
              chance: "80%",
              imageUrl: "https://i.postimg.cc/yxhyy4NK/Skrinsot-22-01-2026-220813.jpg"
            },
            {
              from: "Salvaging Vampire Camera Woman",
              chance: "80%",
              imageUrl: "https://i.postimg.cc/GmVvWhVs/Скриншот_22_01_2026_214609.jpg"
            },
            {
              from: "Salvaging Vampire Camera Woman (royal)",
              chance: "80%",
              imageUrl: "https://i.postimg.cc/bwW17NWt/Скриншот_22_01_2026_214503.jpg"
            },
            {
              from: "Upgraded Raid Crate",
              chance: "10%",
              imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg"
            }
          ],
          usedForStats: [
            { name: "Golden Scientist TV Guy", imageUrl: "https://i.postimg.cc/BnzM4sqr/Golden_Scientist_TV_Guy.png", details: "" },
            { name: "Commander Camera Guy", imageUrl: "https://i.postimg.cc/dtDh9jXc/transparent_Photoroom_(87).png", details: "" },
            { name: "Golden Buzzsaw Camera Guy", imageUrl: "https://i.postimg.cc/NfLKxknW/transparent_Photoroom_(88).png", details: "" },
            { name: "Golden Crusher Camera Guy", imageUrl: "https://i.postimg.cc/Gh94jxff/transparent_Photoroom_(89).png", details: "" },
            { name: "Golden Disabler Camera Guy", imageUrl: "https://i.postimg.cc/2831x7tX/transparent_Photoroom_(90).png", details: "" },
            { name: "Golden Mace Camera Guy", imageUrl: "https://i.postimg.cc/G3XBY5Mw/transparent_Photoroom_(91).png", details: "" },
            { name: "Astro Titan Camera Guy", imageUrl: "https://i.postimg.cc/3rtypcts/transparent_Photoroom_(92).png", details: "" },
            { name: "Camera Woman 3.0", imageUrl: "https://i.postimg.cc/BZD42Rwj/transparent_Photoroom_(83).png", details: "" },
            { name: "Chief Scientist Camera Guy (command)", imageUrl: "https://i.postimg.cc/59sHvRsg/transparent_Photoroom_(93).png", details: "" },
            { name: "Dave", imageUrl: "https://i.postimg.cc/3rpY2zb7/transparent_Photoroom_(84).png", details: "" },
            { name: "Golden Hero Speaker Guy", imageUrl: "https://i.postimg.cc/44WKtSWj/transparent_Photoroom_(94).png", details: "" },
            { name: "Golden Engineer Camera Guy", imageUrl: "https://i.postimg.cc/hP8w4Nch/transparent_Photoroom_(95).png", details: "" },
            { name: "Overcharged Titan Speaker Guy", imageUrl: "https://i.postimg.cc/cLszvTLM/transparent_Photoroom_(96).png", details: "" },
            { name: "Large Red Laser Camera Guy Guy", imageUrl: "https://i.postimg.cc/y69s02r1/transparent_Photoroom_(85).png", details: "" },
            { name: "Saw Titan Camera Guy", imageUrl: "https://i.postimg.cc/8z1Y7wzW/transparent_Photoroom_(97).png", details: "" },
            { name: "TV Woman (infernal)", imageUrl: "https://i.postimg.cc/T3RsKQ3L/transparent_Photoroom_(98).png", details: "" },
            { name: "Upgraded Titan TV Guy", imageUrl: "https://i.postimg.cc/J0FHCJNb/transparent_Photoroom_(77).png", details: "" },
            { name: "Toxic Titan Camera Guy", imageUrl: "https://i.postimg.cc/9QWkD1Q7/transparent_Photoroom_(99).png", details: "" },
            { name: "Gears", imageUrl: "https://i.postimg.cc/c4nggDfw/Skrinsot-14-01-2026-204217.jpg", details: "(Toilet Plunger, Flamethrower, Buzzsaw, Blaster Turret, Energy Blade)" },
          ]
        },
        { 
          name: "Knife", 
          imageUrl: "https://i.postimg.cc/sXLpSjvM/transparent_Photoroom_2026_01_27T134245_166.png", 
          type: "material",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Salvaging Dark Speaker Guy 2.0",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/qM45vQVQ/Скриншот_27_01_2026_174332.jpg"
            },
            {
              from: "Salvaging Speaker Woman",
              chance: "50% (x4)",
              imageUrl: "https://i.postimg.cc/ZYrQm2gG/Скриншот_27_01_2026_174419.jpg"
            }
          ],
          usedForStats: [
            { name: "Buzzsaw Gear", imageUrl: "https://i.postimg.cc/zXMGxTLq/Скриншот_11_01_2026_145533.jpg", details: "" }
          ]
        },
        { 
          name: "Fuel Cell", 
          imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png", 
          type: "material",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Upgraded Raid Crate",
              chance: "30%",
              imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg"
            },
            {
              from: "Salvaging Flamethrower Camera Guy",
              chance: "90%",
              imageUrl: "https://i.postimg.cc/QtBH5pLV/Скриншот_27_01_2026_175317.jpg"
            },
            {
              from: "Salvaging Flamethrower Camera Guy (blue flames)",
              chance: "90%",
              imageUrl: "https://i.postimg.cc/JnyGJbws/Скриншот_27_01_2026_175253.jpg"
            }
          ],
          usedForStats: [
            { name: "Camera Woman 3.0", imageUrl: "https://i.postimg.cc/BZD42Rwj/transparent_Photoroom_(83).png", details: "" },
            { name: "Dave", imageUrl: "https://i.postimg.cc/3rpY2zb7/transparent_Photoroom_(84).png", details: "" },
            { name: "Large Red Laser Camera Guy", imageUrl: "https://i.postimg.cc/y69s02r1/transparent_Photoroom_(85).png", details: "" },
            { name: "Gears", imageUrl: "https://i.postimg.cc/c4nggDfw/Скриншот_14_01_2026_204217.jpg", details: "(Flamethrower, Buzzsaw, Titan's Hammer, Energy Blade" }
          ]
        },
        { 
          name: "Disabler Gun", 
          imageUrl: "https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png", 
          type: "material",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Salvaging Disabler Camera Guy",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/k4rkFbDj/Skrinsot-27-01-2026-182207.jpg"
            }
          ],
          usedForStats: [
            { name: "Large Disabler Camera Guy", imageUrl: "https://i.postimg.cc/44tspj2j/transparent_Photoroom_(82).png", details: "" },
            { name: "Gears", imageUrl: "https://i.postimg.cc/c4nggDfw/Скриншот_14_01_2026_204217.jpg", details: "(Medkit, Blaster Turret)" }
          ]
        },
        { 
          name: "Clams", 
          imageUrl: "https://i.postimg.cc/zBQnWzVV/transparent_Photoroom_2026_01_27T134712_514.png", 
          type: "material",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Summer Event Endless",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/zBQnWzVV/transparent_Photoroom_2026_01_27T134712_514.png"
            }
          ],
          usedForStats: [
            { name: "Summer Battle Pass", imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png", details: "" }
          ]
        },
        { 
          name: "Chef's Hat", 
          imageUrl: "https://i.postimg.cc/cHzQYxrC/transparent_Photoroom_2026_01_27T134931_315.png", 
          type: "material",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Grillmaster TV Guy (chef)", imageUrl: "https://i.postimg.cc/cLnrZF7f/transparent_Photoroom_2026_01_23T153613_892.png", details: "" }
          ]
        },
        { 
          name: "Buzzsaw", 
          imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png", 
          type: "material",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Upgraded Raid Crate",
              chance: "3%",
              imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg"
            },
            {
              from: "Train Route Map",
              chance: "Wave 30 x2 bosses on Hard",
              imageUrl: "https://i.postimg.cc/NMfqwsFQ/Скриншот_06_01_2026_163441.jpg"
            },
            {
              from: "Deserted City Raid",
              chance: "Wave 25 x4 bosses (10%)",
              imageUrl: "https://i.postimg.cc/76Y8yHhZ/Скриншот_06_01_2026_163552.jpg"
            },
            {
              from: "Titan Factory Raid",
              chance: "Wave 25 x2 bosses (10%)",
              imageUrl: "https://i.postimg.cc/50NdM4yy/Скриншот_06_01_2026_163727.jpg"
            },
            {
              from: "Secret Bunker Raid",
              chance: "Wave 15 x2 bosses (10%)",
              imageUrl: "https://i.postimg.cc/k4X3dJGV/Скриншот_06_01_2026_163755.jpg"
            },
            {
              from: "Salvaging Buzzsaw Camera Guy",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/gjPVcYjS/Skrinsot-27-01-2026-190713.jpg"
            }
          ],
          usedForStats: [
            { name: "Buzzsaw Camera Guy", imageUrl: "https://i.postimg.cc/sDxXBkWG/transparent-Photoroom-2026-01-27T191037-261.png", details: "" },
            { name: "Saw Titan Camera Guy", imageUrl: "https://i.postimg.cc/8z1Y7wzW/transparent_Photoroom_(97).png", details: "" },
            { name: "Buzzsaw Gear", imageUrl: "https://i.postimg.cc/zXMGxTLq/Скриншот_11_01_2026_145533.jpg", details: "" }
          ]
        },
        { 
          name: "Toxic Barrel", 
          imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png", 
          type: "material",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Upgraded Raid Crate",
              chance: "3%",
              imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg"
            },
            {
              from: "Salvaging Toxic Camera Guy",
              chance: "50%",
              imageUrl: "https://i.postimg.cc/g079T7jY/Skrinsot-27-01-2026-191556.jpg"
            }
          ],
          usedForStats: [
            { name: "Toxic Titan Camera Guy", imageUrl: "https://i.postimg.cc/9QWkD1Q7/transparent_Photoroom_(99).png", details: "" },
            { name: "Flamethrower Gear", imageUrl: "https://i.postimg.cc/pX7LsK9v/Скриншот_11_01_2026_145647.jpg", details: "" }
          ]
        },
        { 
          name: "Surfboard", 
          imageUrl: "https://i.postimg.cc/50rwv462/transparent_Photoroom_2026_01_27T170131_079.png", 
          type: "material",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable%",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Wave Ninja Camera Guy (ripples)", imageUrl: "https://i.postimg.cc/CxqzYcCC/transparent_Photoroom_2026_01_23T152459_596.png", details: "" }
          ]
        },
        { 
          name: "Shiny Potion", 
          imageUrl: "https://i.postimg.cc/qqNTDL5f/transparent_Photoroom_(59).png", 
          type: "material",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "TV Woman Shop",
              chance: "125 gems",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "Robux Shop",
              chance: "x1 for 49 Robux, x10 for 399 Robux",
              imageUrl: "https://i.postimg.cc/Wpk6vsjZ/image.png"
            }
          ],
          usedForStats: [
            { name: "Obtaining +100% Shiny luck boost", imageUrl: "https://i.postimg.cc/qqNTDL5f/transparent_Photoroom_(59).png", details: "" }
          ]
        },
        { 
          name: "Plunger Potion", 
          imageUrl: "https://i.postimg.cc/JhhMBM5k/transparent_Photoroom_(60).png", 
          type: "material",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "TV Woman Shop",
              chance: "125 gems",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "Robux Shop",
              chance: "x1 for 49 Robux, x10 for 399 Robux",
              imageUrl: "https://i.postimg.cc/Wpk6vsjZ/image.png"
            }
          ],
          usedForStats: [
            { name: "Obtaining +50% Map item drops boost", imageUrl: "https://i.postimg.cc/JhhMBM5k/transparent_Photoroom_(60).png", details: "" }
          ]
        },
        { 
          name: "Magical Broom", 
          imageUrl: "https://i.postimg.cc/j52HLwdx/transparent_Photoroom_2026_01_27T135251_006.png", 
          type: "material",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Zombie Battle Pass",
              chance: "Tier 50",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Скриншот_24_01_2026_223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Witch TV Woman (broom)", imageUrl: "https://i.postimg.cc/PfcShLyF/transparent_Photoroom_2026_01_23T232325_156.png", details: "" }
          ]
        },
        { 
          name: "Gold Bar", 
          imageUrl: "https://i.postimg.cc/90PTCdQK/image.png", 
          type: "material",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "TV Woman Shop",
              chance: "10,000 coins",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            },
            {
              from: "Salvaging Golden Camera Toilet",
              chance: "50%",
              imageUrl: "https://i.postimg.cc/LX7ytqDn/Skrinsot-27-01-2026-193546.jpg"
            }
          ],
          usedForStats: [
            { name: "Golden Scientist TV Guy", imageUrl: "https://i.postimg.cc/BnzM4sqr/Golden_Scientist_TV_Guy.png", details: "" },
            { name: "Golden Buzzsaw Camera Guy", imageUrl: "https://i.postimg.cc/NfLKxknW/transparent_Photoroom_(88).png", details: "" },
            { name: "Golden Crusher Camera Guy", imageUrl: "https://i.postimg.cc/Gh94jxff/transparent_Photoroom_(89).png", details: "" },
            { name: "Golden Camera Toilet", imageUrl: "https://i.postimg.cc/vTcJMFqX/transparent-Photoroom-2026-01-27T194342-587.png", details: "" },
            { name: "Golden Disabler Camera Guy", imageUrl: "https://i.postimg.cc/2831x7tX/transparent_Photoroom_(90).png", details: "" },
            { name: "Golden Mace Camera Guy", imageUrl: "https://i.postimg.cc/G3XBY5Mw/transparent_Photoroom_(91).png", details: "" },
            { name: "Golden Hero Speaker Guy (revived)", imageUrl: "https://i.postimg.cc/44WKtSWj/transparent_Photoroom_(94).png", details: "" },
            { name: "Golden Engineer Camera Guy", imageUrl: "https://i.postimg.cc/hP8w4Nch/transparent_Photoroom_(95).png", details: "" }
          ]
        },
        { 
          name: "Chains", 
          imageUrl: "https://i.postimg.cc/Hn7b9qMd/transparent_Photoroom_2026_01_27T170428_481.png", 
          type: "material",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Zombie Battle Pass",
              chance: "Tier 25",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Скриншот_24_01_2026_223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Shackled Speaker Guy (no escape)", imageUrl: "https://i.postimg.cc/XNhs3ZLm/transparent_Photoroom_2026_01_23T232216_711.png", details: "" }
          ]
        },
        { 
          name: "Blood Bag", 
          imageUrl: "https://i.postimg.cc/JnqP9417/transparent_Photoroom_(46).png", 
          type: "material",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Scientist's Revenge Endless (Zombie Event Endless)",
              chance: "Wave 10, 50, 90, etc. boss (3%)",
              imageUrl: "https://i.postimg.cc/50NdM4yY/Скриншот_06_01_2026_163848.jpg"
            }
          ],
          usedForStats: [
            { name: "Vampire Camera Woman (royal)", imageUrl: "https://i.postimg.cc/T1Z0cShc/transparent_Photoroom_2026_01_23T232242_319.png", details: "" }
          ]
        },
        { 
          name: "Zombie Tooth", 
          imageUrl: "https://i.postimg.cc/V6RD3Lzp/transparent_Photoroom_(44).png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Scientist's Revenge Endless (Zombie Event Endless)",
              chance: "Zombie Titan TV Guy boss (pull 3 levers to summon) (80%)",
              imageUrl: "https://i.postimg.cc/50NdM4yY/Скриншот_06_01_2026_163848.jpg"
            }
          ],
          usedForStats: [
            { name: "Zombie Titan TV Guy (enraged)", imageUrl: "https://i.postimg.cc/ryRJxwrP/transparent-Photoroom-2026-01-27T200250-157.png", details: "" }
          ]
        },
        { 
          name: "Cannon", 
          imageUrl: "https://i.postimg.cc/KzNJdvZ4/transparent_Photoroom_(47).png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Scientist's Revenge Endless (Zombie Event Endless)",
              chance: "Wave 20 boss",
              imageUrl: "https://i.postimg.cc/50NdM4yY/Скриншот_06_01_2026_163848.jpg"
            }
          ],
          usedForStats: [
            { name: "Pirate Speaker Woman (cannon)", imageUrl: "https://i.postimg.cc/tRfBy1kc/transparent_Photoroom_2026_01_23T232348_224.png", details: "" }
          ]
        },
        { 
          name: "Upgraded Blaster", 
          imageUrl: "https://i.postimg.cc/gJdgS6b5/transparent_Photoroom_(39).png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Deserted City Raid",
              chance: "Beating the Raid (2.5% on Easy | 3% on Normal | 3.5% on Hard)",
              imageUrl: "https://i.postimg.cc/76Y8yHhZ/Скриншот_06_01_2026_163552.jpg"
            }
          ],
          usedForStats: [
            { name: "Red Laser Camera Guy", imageUrl: "https://i.postimg.cc/G3Ydv6S2/transparent_Photoroom_(86).png", details: "" },
            { name: "Upgraded Titan Speaker Guy", imageUrl: "https://i.postimg.cc/KYJ5mKgB/transparent_Photoroom_2026_01_27T203432_454.png", details: "" },
            { name: "Blaster Turret Gear", imageUrl: "https://i.postimg.cc/MK4p91cW/Скриншот_11_01_2026_145601.jpg", details: "" }
          ]
        },
        { 
          name: "Toy Flag", 
          imageUrl: "https://i.postimg.cc/WzJ0wBk0/transparent_Photoroom_2026_01_27T172147_455.png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Summer Event Endless",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/WzJ0wBk0/transparent_Photoroom_2026_01_27T172147_455.png"
            }
          ],
          usedForStats: [
            { name: "Titan Sandcastle Guy (fortified)", imageUrl: "https://i.postimg.cc/0ywbxVGd/transparent_Photoroom_2026_01_23T151316_035.png", details: "" }
          ]
        },
        { 
          name: "Titan's Speaker", 
          imageUrl: "https://i.postimg.cc/tTyBSVGN/transparent_Photoroom_(40).png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Deserted City Raid",
              chance: "Wave 40 boss (3%)",
              imageUrl: "https://i.postimg.cc/76Y8yHhZ/Скриншот_06_01_2026_163552.jpg"
            }
          ],
          usedForStats: [
            { name: "Upgraded Titan Speaker Guy", imageUrl: "https://i.postimg.cc/KYJ5mKgB/transparent_Photoroom_2026_01_27T203432_454.png", details: "" },
            { name: "Boombox Gear", imageUrl: "https://i.postimg.cc/rFbwf5D3/Скриншот_11_01_2026_145819.jpg", details: "" }
          ]
        },
        { 
          name: "Titan's Hammer", 
          imageUrl: "https://i.postimg.cc/wMj0H8vT/transparent_Photoroom_(50).png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Titan Factory Raid",
              chance: "Beating the Raid (2.5% on Easy | 3% on Normal | 3.5% on Hard)",
              imageUrl: "https://i.postimg.cc/50NdM4yy/Скриншот_06_01_2026_163727.jpg"
            }
          ],
          usedForStats: [
            { name: "Upgraded Titan Camera Guy", imageUrl: "https://i.postimg.cc/Kzdbs8QX/transparent-Photoroom-2026-01-27T204848-524.png", details: "" },
            { name: "Titan's Hammer Gear", imageUrl: "https://i.postimg.cc/yY58L0DM/Скриншот_11_01_2026_145509.jpg", details: "" }
          ]
        },
        { 
          name: "Titan's Core", 
          imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Salvaging Banner Mythic Unit",
              chance: "100%",
              imageUrl: "https://i.postimg.cc/jjLG0rDs/Skrinsot-27-01-2026-205045.jpg"
            }
          ],
          usedForStats: [
            { name: "Hero Speaker Guy (revived)", imageUrl: "https://i.postimg.cc/WbJ9tCV2/transparent_Photoroom_2026_01_22T220534_143.png", details: "" },
            { name: "Saw Titan Camera Guy", imageUrl: "https://i.postimg.cc/8z1Y7wzW/transparent_Photoroom_(97).png", details: "" },
            { name: "Titan Cinema Guy", imageUrl: "https://i.postimg.cc/0NcC96J6/transparent_Photoroom_2026_01_27T203709_076.png", details: "" },
            { name: "Upgraded Titan Camera Guy", imageUrl: "https://i.postimg.cc/Kzdbs8QX/transparent_Photoroom_2026_01_27T204848_524.png", details: "" },
            { name: "Toxic Titan Camera Guy", imageUrl: "https://i.postimg.cc/9QWkD1Q7/transparent_Photoroom_(99).png", details: "" },
            { name: "Zombie Titan TV Guy (enraged)", imageUrl: "https://i.postimg.cc/ryRJxwrP/transparent_Photoroom_2026_01_27T200250_157.png", details: "" },
            { name: "Gears", imageUrl: "https://i.postimg.cc/c4nggDfw/Скриншот_14_01_2026_204217.jpg", details: "(Medkit, Boombox, Titan's Hammer, Blaster Turret)" }
          ]
        },
        { 
          name: "Shell Trophy", 
          imageUrl: "https://i.postimg.cc/5jdL7s5V/transparent_Photoroom_2026_01_27T172500_650.png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Summer Event Endless",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/5jdL7s5V/transparent_Photoroom_2026_01_27T172500_650.png"
            }
          ],
          usedForStats: [
            { name: "Obtaining +5% Banner luck and +5% Banner secret luck boosts (tradeable)", imageUrl: "https://i.postimg.cc/5jdL7s5V/transparent_Photoroom_2026_01_27T172500_650.png", details: "" }
          ]
        },
        { 
          name: "Haunted Branch", 
          imageUrl: "https://i.postimg.cc/1z25b3m5/Haunted_Branch.png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Scientist's Revenge Endless (Zombie Endless)",
              chance: "Any boss (1%)",
              imageUrl: "https://i.postimg.cc/50NdM4yY/Скриншот_06_01_2026_163848.jpg"
            }
          ],
          usedForStats: [
            { name: "Obtaining +5% Banner luck and +5% Banner secret luck boosts (tradeable)", imageUrl: "https://i.postimg.cc/1z25b3m5/Haunted_Branch.png", details: "" }
          ]
        },
        { 
          name: "Lucky Egg", 
          imageUrl: "https://i.postimg.cc/MKZNr3vs/Egg_Shell.png", 
          type: "material",
          rarity: "secret",
          obtainmentStats: [
            {
              from: "Being on the same server with Malachite (@MalachiteTheGreat)",
              chance: "(doesn't always work))",
              imageUrl: "https://i.postimg.cc/hGsLSkry/no_Filte23r.png"
            }
          ],
          usedForStats: [
            { name: "Obtaining +5% Banner luck and +5% Banner secret luck boosts (untradeable)", imageUrl: "https://i.postimg.cc/MKZNr3vs/Egg_Shell.png", details: "" }
          ]
        },
        { 
          name: "Hot Coal", 
          imageUrl: "https://i.postimg.cc/MTLyR6vf/transparent-Photoroom-2026-01-27T173205-554.png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Summer Event Endless",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/5jdL7s5V/transparent_Photoroom_2026_01_27T172500_650.png"
            }
          ],
          usedForStats: [
            { name: "Titan Grill Guy (full gas)", imageUrl: "https://i.postimg.cc/htdfg28L/transparent_Photoroom_2026_01_23T151103_818.png", details: "" }
          ]
        },
        { 
          name: "Atomic Bomb", 
          imageUrl: "https://i.postimg.cc/W3yMrNhk/transparent_Photoroom_2026_01_27T173151_730.png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Summer Event Endless",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/W3yMrNhk/transparent_Photoroom_2026_01_27T173151_730.png"
            }
          ],
          usedForStats: [
            { name: "Tub Engineer Camera Guy (atomic)", imageUrl: "https://i.postimg.cc/zGgV5xwK/transparent_Photoroom_2026_01_23T154606_993.png", details: "" }
          ]
        },
        { 
          name: "Champion Trophy", 
          imageUrl: "https://i.postimg.cc/ZRQr3bCx/transparent_Photoroom_2026_01_27T172745_672.png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Endless Leaderboard",
              chance: "Getting into the top 100",
              imageUrl: "https://i.postimg.cc/y8tDPz5r/image.png"
            }
          ],
          usedForStats: [
            { name: "Obtaining +5% Banner luck and +5% Banner secret luck boosts (untradeable)", imageUrl: "https://i.postimg.cc/ZRQr3bCx/transparent_Photoroom_2026_01_27T172745_672.png", details: "" }
          ]
        },
        { 
          name: "Glitch Mainframe", 
          imageUrl: "https://i.postimg.cc/vBM0q6w3/transparent_Photoroom_(51).png", 
          type: "material",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Endless Leaderboard",
              chance: "Getting into the top 100",
              imageUrl: "https://i.postimg.cc/y8tDPz5r/image.png"
            }
          ],
          usedForStats: [
            { name: "Glitch Camera Guy", imageUrl: "https://i.postimg.cc/CLfvdX0L/transparent_Photoroom_2026_01_22T220717_805.png", details: "" },
            { name: "Medkit Gear", imageUrl: "https://i.postimg.cc/DyDwx1SR/Скриншот_11_01_2026_145754.jpg", details: "" }
          ]
        },
        { 
          name: "x2 Speed Token", 
          imageUrl: "https://i.postimg.cc/jScKCX9C/Скриншот_18-08-2025_201936-Photoroom.png", 
          type: "usable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Robux Shop",
              chance: "299 Robux",
              imageUrl: "https://i.postimg.cc/Wpk6vsjZ/image.png"
            }
          ],
          usedForStats: [
            { name: "Unlocking 2x Speed", imageUrl: "https://i.postimg.cc/jScKCX9C/Скриншот_18-08-2025_201936-Photoroom.png", details: "" }
          ] 
        },
        { 
          name: "VIP Token", 
          imageUrl: "https://i.postimg.cc/V60grBXv/Скриншот_04-08-2025_214628-Photoroom.png", 
          type: "usable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Robux Shop",
              chance: "299 Robux",
              imageUrl: "https://i.postimg.cc/Wpk6vsjZ/image.png"
            }
          ],
          usedForStats: [
            { name: "VIP Tag", imageUrl: "https://i.postimg.cc/MZDKnfzx/Скриншот_10_01_2026_193533.jpg", details: "" },
            { name: "VIP Booth", imageUrl: "https://i.postimg.cc/fWKTVSMM/Скриншот_10_01_2026_193602.jpg", details: "" },
            { name: "Golden Camera Guy Morph", imageUrl: "https://i.postimg.cc/NG4fK2Qg/Скриншот_10_01_2026_193741.jpg", details: "" },
            { name: "+25% Coins boost", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png", details: "" },
            { name: "+25% EXP boost", imageUrl: "https://i.postimg.cc/HL6FGM5V/transparent_Photoroom_(58).png", details: "" },
          ] 
        },
        { 
          name: "Black Market VIP Token", 
          imageUrl: "https://i.postimg.cc/3R5hn3TJ/transparent-Photoroom-(5).png", 
          type: "usable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Robux Shop",
              chance: "599 Robux/month",
              imageUrl: "https://i.postimg.cc/Wpk6vsjZ/image.png"
            }
          ],
          usedForStats: [
            { name: "Black Market VIP Tag", imageUrl: "https://i.postimg.cc/MZDKnfzx/Скриншот_10_01_2026_193533.jpg", details: "" },
            { name: "Diamond Camera Guy Morph", imageUrl: "https://i.postimg.cc/fWKTVSMM/Скриншот_10_01_2026_193602.jpg", details: "" },
            { name: "+20% Coins boost", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png", details: "" },
            { name: "+20% EXP boost", imageUrl: "https://i.postimg.cc/HL6FGM5V/transparent_Photoroom_(58).png", details: "" },
            { name: "+10% Coins boost to your party", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png", details: "" },
            { name: "+20% EXP boost to your party", imageUrl: "https://i.postimg.cc/HL6FGM5V/transparent-Photoroom-(58).png", details: "" },
            { name: "+15% more rewards from Robux purchases", imageUrl: "https://i.postimg.cc/MG42MRGL/image.png", details: "" },
            { name: "+15% more rewards from Black Market trades", imageUrl: "https://i.postimg.cc/t4541Qd1/image.png", details: "" },
            { name: "+2 Units slots in your Base", imageUrl: "https://i.postimg.cc/cLC8NB8s/image.png", details: "" },
            { name: "Monthly: Plunger Potion (x2) (+1 for every month subscribed, capped at 5)", imageUrl: "https://i.postimg.cc/JhhMBM5k/transparent-Photoroom-(60).png", details: "" },
            { name: "Monthly: Shiny Potion (x2) (+1 for every month subscribed, capped at 5)", imageUrl: "https://i.postimg.cc/qqNTDL5f/transparent-Photoroom-(59).png", details: "" },
            { name: "First time: 7,500 Coins", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png", details: "" },
            { name: "First time: 250 Gems", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png", details: "" },
          ] 
        },
        { 
          name: "x2 Coins Token", 
          imageUrl: "https://i.postimg.cc/C1SXb2L5/Скриншот_04-08-2025_214204-Photoroom.png", 
          type: "usable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Robux Shop",
              chance: "399 Robux",
              imageUrl: "https://i.postimg.cc/Wpk6vsjZ/image.png"
            }
          ],
          usedForStats: [
            { name: "Obtaining +100% Coins boost", imageUrl: "https://i.postimg.cc/C1SXb2L5/Скриншот_04-08-2025_214204-Photoroom.png", details: "" }
          ] 
        },
        { 
          name: "+300 Storage Token", 
          imageUrl: "https://i.postimg.cc/Z5D68vbd/Скриншот_04-08-2025_214829-Photoroom.png", 
          type: "usable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Robux Shop",
              chance: "199 Robux",
              imageUrl: "https://i.postimg.cc/Wpk6vsjZ/image.png"
            }
          ],
          usedForStats: [
            { name: "Obtaining +300 Unit slots in the Storage", imageUrl: "https://i.postimg.cc/Z5D68vbd/Скриншот_04-08-2025_214829-Photoroom.png", details: "" }
          ] 
        },
        { 
          name: "Lucky Token", 
          imageUrl: "https://i.postimg.cc/WbLWZKWv/Скриншот_04-08-2025_214517-Photoroom.png", 
          type: "usable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Robux Shop",
              chance: "199 Robux",
              imageUrl: "https://i.postimg.cc/Wpk6vsjZ/image.png"
            }
          ],
          usedForStats: [
            { name: "Obtaining +25% Banner luck boost", imageUrl: "https://i.postimg.cc/WbLWZKWv/Скриншот_04-08-2025_214517-Photoroom.png", details: "" }
          ] 
        },
        { 
          name: "Ultra Lucky Token", 
          imageUrl: "https://i.postimg.cc/4dhCfcdb/Скриншот_04-08-2025_215410-Photoroom.png", 
          type: "usable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Robux Shop",
              chance: "499 Robux",
              imageUrl: "https://i.postimg.cc/4dhCfcdb/Скриншот_04-08-2025_215410-Photoroom.png"
            }
          ],
          usedForStats: [
            { name: "Obtaining +50% Banner luck boost", imageUrl: "https://i.postimg.cc/4dhCfcdb/Скриншот_04-08-2025_215410-Photoroom.png", details: "" }
          ] 
        },
        { 
          name: "Premium Zombie Battle Pass Token", 
          imageUrl: "https://i.postimg.cc/2ST11ntS/transparent_Photoroom_(71).png", 
          type: "usable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Zombie Battle Pass Menu",
              chance: "599 Robux",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking premium path in Zombie Battle Pass", imageUrl: "https://i.postimg.cc/2ST11ntS/transparent_Photoroom_(71).png", details: "" }
          ] 
        },
        { 
          name: "Beach Ball Skin (Toilet Plunger Gear)", 
          imageUrl: "https://i.postimg.cc/bYmhKL4n/transparent_Photoroom_(64).png", 
          type: "usable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Summer Bundle",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/bYmhKL4n/transparent_Photoroom_(64).png"
            }
          ],
          usedForStats: [
            { name: "Unlocking Beach Ball Skin for Toilet Plunger Gear", imageUrl: "https://i.postimg.cc/bYmhKL4n/transparent_Photoroom_(64).png", details: "" }
          ] 
        },
        { 
          name: "Graveblade Skin (Titan's Hammer Gear)", 
          imageUrl: "https://i.postimg.cc/MZ9Shtgj/transparent_Photoroom_(65).png", 
          type: "usable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Premium Zombie Battle Pass",
              chance: "Tier 45",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Graveblade Skin for Titan's Hammer Gear", imageUrl: "https://i.postimg.cc/MZ9Shtgj/transparent_Photoroom_(65).png", details: "" }
          ] 
        },
        { 
          name: "Volt Kanabo Skin (Titan's Hammer Gear)", 
          imageUrl: "https://i.postimg.cc/nrbTMcDj/transparent-Photoroom-(8).png", 
          type: "usable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Premium Samurai Battle Pass",
              chance: "Tier 50",
              imageUrl: "https://i.postimg.cc/0NZbbtKJ/image.png"
            }
          ],
          usedForStats: [
            { name: "Unlocking Volt Kanabo Skin for Titan's Hammer Gear", imageUrl: "https://i.postimg.cc/nrbTMcDj/transparent-Photoroom-(8).png", details: "" }
          ] 
        },
        { 
          name: "Dragon Flamethrower Skin (Titan's Hammer Gear)", 
          imageUrl: "https://i.postimg.cc/zBW6xQwX/transparent-Photoroom-(10).png", 
          type: "usable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Samurai Battle Pass",
              chance: "Tier 30",
              imageUrl: "https://i.postimg.cc/0NZbbtKJ/image.png"
            }
          ],
          usedForStats: [
            { name: "Unlocking Dragon Flamethrower Skin for Flamethrower Gear", imageUrl: "https://i.postimg.cc/zBW6xQwX/transparent-Photoroom-(10).png", details: "" }
          ] 
        },
        { 
          name: "Tomoe Gate Skin (Medkit Gear)", 
          imageUrl: "https://i.postimg.cc/g28z6gQm/transparent-Photoroom-(9).png", 
          type: "usable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Premium Samurai Battle Pass",
              chance: "Tier 28",
              imageUrl: "https://i.postimg.cc/0NZbbtKJ/image.png"
            }
          ],
          usedForStats: [
            { name: "Unlocking Tomoe Gate Skin for Medkit Gear", imageUrl: "https://i.postimg.cc/g28z6gQm/transparent-Photoroom-(9).png", details: "" }
          ] 
        },
        { 
          name: "Demon Fangs Skin (Buzzsaw Gear)", 
          imageUrl: "https://i.postimg.cc/bJq9j2xF/transparent-Photoroom-(7).png", 
          type: "usable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Samurai Battle Pass",
              chance: "Tier 45",
              imageUrl: "https://i.postimg.cc/0NZbbtKJ/image.png"
            }
          ],
          usedForStats: [
            { name: "Unlocking Demon Fangs Skin for Buzzsaw Gear", imageUrl: "https://i.postimg.cc/bJq9j2xF/transparent-Photoroom-(7).png", details: "" }
          ] 
        },
        { 
          name: "Gravestone Skin (Medkit Gear)", 
          imageUrl: "https://i.postimg.cc/BZm0dNRx/transparent_Photoroom_(66).png", 
          type: "usable",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Premium Zombie Battle Pass",
              chance: "Tier 25",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Gravestone Skin for Medkit Gear", imageUrl: "https://i.postimg.cc/BZm0dNRx/transparent_Photoroom_(66).png", details: "" }
          ] 
        },
        { 
          name: "Pool Noodle Skin (Titan's Hammer Gear)", 
          imageUrl: "https://i.postimg.cc/VsK8342J/transparent_Photoroom_(67).png", 
          type: "usable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Unlocking Pool Noodle Skin for Titan's Hammer Gear", imageUrl: "https://i.postimg.cc/VsK8342J/transparent_Photoroom_(67).png", details: "" }
          ] 
        },
        { 
          name: "Pumpkin Blaster Skin (Blaster Turret Gear)", 
          imageUrl: "https://i.postimg.cc/430cLzsG/transparent_Photoroom_(68).png", 
          type: "usable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Zombie Battle Pass",
              chance: "Tier 45",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Pumpkin Blaster Skin for Blaster Turret Gear", imageUrl: "https://i.postimg.cc/430cLzsG/transparent_Photoroom_(68).png", details: "" }
          ] 
        },
        { 
          name: "Pumpkin's Head Skin (Toilet Plunger Gear)", 
          imageUrl: "https://i.postimg.cc/XNsbTxtK/transparent_Photoroom_(69).png", 
          type: "usable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Zombie Battle Pass",
              chance: "Tier 30",
              imageUrl: "https://i.postimg.cc/zvKHfvN1/Skrinsot-24-01-2026-223405.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Pumpkin Blaster Skin for Toilet Plunger Gear", imageUrl: "https://i.postimg.cc/XNsbTxtK/transparent_Photoroom_(69).png", details: "" }
          ] 
        },
        { 
          name: "Water Gun Skin (Flamethrower Gear)", 
          imageUrl: "https://i.postimg.cc/QNf3RSvQ/transparent_Photoroom_(70).png", 
          type: "usable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Summer Battle Pass",
              chance: "Unobtainable",
              imageUrl: "https://i.postimg.cc/fL7ZNXkt/Скриншот_04-08-2025_213737-Photoroom_(1).png"
            }
          ],
          usedForStats: [
            { name: "Unlocking Water Gun Skin for Flamethrower Gear", imageUrl: "https://i.postimg.cc/QNf3RSvQ/transparent_Photoroom_(70).png", details: "" }
          ] 
        },
        { 
          name: "Titan's Hammer Gear Blueprint", 
          imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", 
          type: "usable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Titan Factory Raid",
              chance: "Wave 40 boss (2%)",
              imageUrl: "https://i.postimg.cc/50NdM4yy/Скриншот_06_01_2026_163727.jpg"
            },
            {
              from: "TV Woman Shop",
              chance: "250 Gems",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Titan's Hammer Gear craft in Gear Lab", imageUrl: "https://i.postimg.cc/yY58L0DM/Скриншот_11_01_2026_145509.jpg", details: "" }
          ] 
        },
        { 
          name: "Blaster Turret Gear Blueprint", 
          imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", 
          type: "usable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Secret Bunker Raid",
              chance: "Wave 40 boss (1%)",
              imageUrl: "https://i.postimg.cc/k4X3dJGV/Скриншот_06_01_2026_163755.jpg"
            },
            {
              from: "TV Woman Shop",
              chance: "250 Gems",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Blaster Turret Gear craft in Gear Lab", imageUrl: "https://i.postimg.cc/MK4p91cW/Скриншот_11_01_2026_145601.jpg", details: "" }
          ] 
        },
        { 
          name: "Energy Blade Gear Blueprint", 
          imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", 
          type: "usable",
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Secret Bunker Raid",
              chance: "Beating the Raid (0.5% on Easy | 1% on Normal | 1.5% on Hard%)",
              imageUrl: "https://i.postimg.cc/k4X3dJGV/Скриншот_06_01_2026_163755.jpg"
            },
            {
              from: "TV Woman Shop",
              chance: "250 Gems",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Energy Blade Gear craft in Gear Lab", imageUrl: "https://i.postimg.cc/15T3vDgP/Скриншот_11_01_2026_145621.jpg", details: "" }
          ] 
        },
        { 
          name: "Toilet Plunger Gear Blueprint", 
          imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", 
          type: "usable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Gear Lab",
              chance: "Wave 30 bosses (1.5%)",
              imageUrl: "https://i.postimg.cc/zBXZ1zvB/Скриншот_06_01_2026_163700.jpg"
            },
            {
              from: "TV Woman Shop",
              chance: "150 Gems",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Toilet Plunger Gear craft in Gear Lab", imageUrl: "https://i.postimg.cc/wTPjwD1P/Скриншот_11_01_2026_145730.jpg", details: "" }
          ] 
        },
        { 
          name: "Medkit Gear Blueprint", 
          imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", 
          type: "usable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Gear Lab",
              chance: "Wave 25 bosses (1.5%)",
              imageUrl: "https://i.postimg.cc/zBXZ1zvB/Скриншот_06_01_2026_163700.jpg"
            },
            {
              from: "TV Woman Shop",
              chance: "150 Gems",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Medkit Gear craft in Gear Lab", imageUrl: "https://i.postimg.cc/DyDwx1SR/Скриншот_11_01_2026_145754.jpg", details: "" }
          ] 
        },
        { 
          name: "Boombox Gear Blueprint", 
          imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", 
          type: "usable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Gear Lab",
              chance: "Wave 35 bosses (0.5%)",
              imageUrl: "https://i.postimg.cc/zBXZ1zvB/Скриншот_06_01_2026_163700.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Boombox Gear craft in Gear Lab", imageUrl: "https://i.postimg.cc/rFbwf5D3/Скриншот_11_01_2026_145819.jpg", details: "" }
          ] 
        },
        { 
          name: "Flamethrower Gear Blueprint", 
          imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", 
          type: "usable",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Gear Lab",
              chance: "Wave 40 bosses (3%)",
              imageUrl: "https://i.postimg.cc/zBXZ1zvB/Скриншот_06_01_2026_163700.jpg"
            },
            {
              from: "TV Woman Shop",
              chance: "150 Gems",
              imageUrl: "https://i.postimg.cc/j5rzbc3Q/TV_Woman_Shop.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Flamethrower Gear craft in Gear Lab", imageUrl: "https://i.postimg.cc/pX7LsK9v/Скриншот_11_01_2026_145647.jpg", details: "" }
          ] 
        },
        { 
          name: "Buzzsaw Gear Blueprint", 
          imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", 
          type: "usable",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Secret Bunker Raid",
              chance: "Wave 30 boss (3%)",
              imageUrl: "https://i.postimg.cc/k4X3dJGV/Скриншот_06_01_2026_163755.jpg"
            }
          ],
          usedForStats: [
            { name: "Unlocking Buzzsaw Gear craft in Gear Lab", imageUrl: "https://i.postimg.cc/zXMGxTLq/Скриншот_11_01_2026_145533.jpg", details: "" }
          ] 
        },
        { 
          name: "Green Key", 
          imageUrl: "https://i.postimg.cc/RZ2YNZWf/transparent_Photoroom_(72).png", 
          type: "misc",
          rarity: "common",
          obtainmentStats: [
            {
              from: "City",
              chance: "First time beating the Map (100%)",
              imageUrl: "https://i.postimg.cc/DZykKv0v/Скриншот_06_01_2026_163351.jpg"
            }
          ],
          usedForStats: [
            { name: "Opening Deserted City Raid Door (need Green Key, Yellow Key, Red Key)", imageUrl: "https://i.postimg.cc/J0y6rwRk/Скриншот_11_01_2026_155701.jpg", details: "" }
          ] 
        },
        { 
          name: "Yellow Key", 
          imageUrl: "https://i.postimg.cc/NjZn5jKX/transparent_Photoroom_(73).png", 
          type: "misc",
          rarity: "uncommon",
          obtainmentStats: [
            {
              from: "Sewers",
              chance: "First time beating the Map (100%)",
              imageUrl: "https://i.postimg.cc/ydY4z1xs/Скриншот_06_01_2026_163413.jpg"
            }
          ],
          usedForStats: [
            { name: "Opening Deserted City Raid Door (need Green Key, Yellow Key, Red Key)", imageUrl: "https://i.postimg.cc/J0y6rwRk/Скриншот_11_01_2026_155701.jpg", details: "" }
          ] 
        },
        { 
          name: "Red Key", 
          imageUrl: "https://i.postimg.cc/BnRzXnj1/transparent_Photoroom_(74).png", 
          type: "misc",
          rarity: "rare",
          obtainmentStats: [
            {
              from: "Train Route",
              chance: "First time beating the Map (100%)",
              imageUrl: "https://i.postimg.cc/NMfqwsFQ/Скриншот_06_01_2026_163441.jpg"
            }
          ],
          usedForStats: [
            { name: "Opening Deserted City Raid Door (need Green Key, Yellow Key, Red Key)", imageUrl: "https://i.postimg.cc/J0y6rwRk/Скриншот_11_01_2026_155701.jpg", details: "" }
          ] 
        },
        { 
          name: "Evolution Chamber Keycard", 
          imageUrl: "https://i.postimg.cc/FHw67HYL/transparent_Photoroom_(75).png", 
          type: "misc",
          rarity: "epic",
          obtainmentStats: [
            {
              from: "Dumpster near the Banner",
              chance: "Gathering the Keycard",
              imageUrl: "https://i.postimg.cc/V6F1qCtH/image.png"
            }
          ],
          usedForStats: [
            { name: "Opening Evolution Chamber Door", imageUrl: "https://i.postimg.cc/d37HsMJ1/Скриншот_11_01_2026_155826.jpg", details: "" }
          ] 
        },
        { 
          name: "Gear Lab Keycard", 
          imageUrl: "https://i.postimg.cc/VNMVMPtd/transparent_Photoroom_(76).png", 
          type: "misc",
          rarity: "legendary",
          obtainmentStats: [
            {
              from: "Wastelands",
              chance: "First time beating the Map (100%)",
              imageUrl: "https://i.postimg.cc/QtxGr8CD/Скриншот_06_01_2026_163504.jpg"
            }
          ],
          usedForStats: [
            { name: "Opening Gear Lab Door", imageUrl: "https://i.postimg.cc/Px0c8f34/Скриншот_11_01_2026_160018.jpg", details: "" }
          ] 
        },
        { 
          name: "Energy Blade",
          imageUrl: "https://i.postimg.cc/m20gTpck/transparent_Photoroom_(13).png", 
          type: "material", 
          rarity: "mythic",
          obtainmentStats: [
            {
              from: "Upgraded Raid Crate",
              chance: "0.5%",
              imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg"
            }
          ],
          usedForStats: [
            { name: "Upgraded Titan TV Guy", imageUrl: "https://i.postimg.cc/J0FHCJNb/transparent_Photoroom_(77).png", details: "" },
            { name: "Enhanced Energy TV Guy", imageUrl: "https://i.postimg.cc/brKXLS73/transparent_Photoroom_(36).png", details: "" },
            { name: "Energy Blade Gear", imageUrl: "https://i.postimg.cc/15T3vDgP/Скриншот_11_01_2026_145621.jpg", details: "" }
          ]
        },
        { 
          name: "Master Key", 
          imageUrl: "https://i.postimg.cc/fT21Vmkh/transparent-Photoroom-(63).png", 
          type: "material", 
          rarity: "secret",
          obtainmentStats: [
            {
              from: "Key Bundle in the Robux Shop",
              chance: "4,999 Robux",
              imageUrl: "https://i.postimg.cc/C5C6Mnt6/Скриншот_10_01_2026_205238.jpg"
            }
          ],
          usedForStats: [
            { name: "Opening any Crate", imageUrl: "https://i.postimg.cc/fT21Vmkh/transparent_Photoroom_(63).png", details: "" }
          ] 
        },
        { 
          name: "Secret Ticket", 
          imageUrl: "https://i.postimg.cc/j2JtMcDP/transparent_Photoroom_(62).png", 
          type: "material", 
          rarity: "secret",
          obtainmentStats: [
            {
              from: "Secret Bundle in the Robux Shop",
              chance: "5,999 Robux",
              imageUrl: "https://i.postimg.cc/tJdmRnfc/Скриншот_10_01_2026_205259.jpg"
            }
          ],
          usedForStats: [
            { name: "Obtaining +200% Secret luck buff (destroyed after obtaining a secret, UNTRADEABLE)", imageUrl: "https://i.postimg.cc/j2JtMcDP/transparent_Photoroom_(62).png", details: "" }
          ] 
        }
      ],

      // ----- MAPS (ручной ввод) -----
      maps: [
        { 
          id: 1, 
          name: "City", 
          type: "Basic Map",
          category: "basic",
          difficulty: "1/10",
          imageUrl: "https://i.postimg.cc/DZykKv0v/Скриншот_06_01_2026_163351.jpg",
          difficulties: [
            { name: "Easy",   waves: 10, coinsReward: 130, expReward: 25 },
            { name: "Normal", waves: 15, coinsReward: 195, expReward: 35 },
            { name: "Hard",   waves: 20, coinsReward: 260, expReward: 55 }
          ],
          dropItems: [
            { name: "Construction Camera Guy", imageUrl: "https://i.postimg.cc/mkTT31pK/Construction_Camera_Guy.png", from: "Beating the Map", chance: "5% on Easy | 6% on Normal | 7% on Hard", rarity: "rare" },
            { name: "Rocket Launcher",    imageUrl: "https://i.postimg.cc/zB5xtRYs/transparent_Photoroom_(38).png", from: "Wave 10 boss",     chance: "8%",  rarity: "uncommon" },
            { name: "Metal Plating", imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png", from: "Wave 15 boss (on Normal-Hard)", chance: "6%", rarity: "common" },
            { name: "Charged Battery", imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png", from: "Wave 20 boss (on Hard)", chance: "10%", rarity: "common" }
          ]
        },
        { 
          id: 2, 
          name: "Deserted City Raid", 
          type: "Raid Map",
          category: "raid",
          difficulty: "6/10",
          imageUrl: "https://i.postimg.cc/76Y8yHhZ/Скриншот_06_01_2026_163552.jpg",
          difficulties: [
            { name: "Easy",   waves: 40, coinsReward: 495, expReward: 300 },
            { name: "Normal", waves: 40, coinsReward: 770, expReward: 400 },
            { name: "Hard",   waves: 40, coinsReward: 1100, expReward: 500 }
          ],
          dropItems: [
            { name: "Raid Key", imageUrl: "https://i.postimg.cc/43TxBSS7/Raid_Key.png", from: "Beating the Raid", chance: "100%", rarity: "rare" },
            { name: "Upgraded Blaster",             imageUrl: "https://i.postimg.cc/gJdgS6b5/transparent_Photoroom_(39).png", from: "Beating the Raid",       chance: "2.5% on Easy | 3% on Normal | 3.5% on Hard", rarity: "mythic" },
            { name: "Metal Plating",     imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png", from: "Wave 5 bosses (x2)",         chance: "6%", rarity: "common" },
            { name: "Charged Battery",     imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png", from: "Wave 10 bosses (x2)",         chance: "10%", rarity: "common" },
            { name: "Buzzsaw",     imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png", from: "Wave 25 bosses (x4)",         chance: "10%", rarity: "epic" },
            { name: "Titan's Speaker",     imageUrl: "https://i.postimg.cc/tTyBSVGN/transparent_Photoroom_(40).png", from: "Wave 40 boss",         chance: "3%", rarity: "mythic" }
          ]
        },
        { 
          id: 3, 
          name: "Scientist's Revenge Endless (Zombie Event Endless)", 
          type: "Event Map",
          category: "event",
          difficulty: "Endless",
          imageUrl: "https://i.postimg.cc/50NdM4yY/Скриншот_06_01_2026_163848.jpg",
          difficulties: [
            { name: "Endless", waves: "∞", coinsReward: "∞", expReward: "∞" }
          ],
          dropItems: [
            { name: "Eyeball",  imageUrl: "https://i.postimg.cc/vmDcVhHL/Eyeball.png", from: "Any boss", chance: "75%", rarity: "common" },
            { name: "Zombie Brain", imageUrl: "https://i.postimg.cc/cHmXV4sd/transparent_Photoroom_(43).png", from: "Any boss", chance: "80%", rarity: "epic" },
            { name: "Zombie Key", imageUrl: "https://i.postimg.cc/TwBk8nMK/Zombie_Key.png", from: "Any boss", chance: "30%", rarity: "legendary" },
            { name: "Haunted Branch", imageUrl: "https://i.postimg.cc/1z25b3m5/Haunted_Branch.png", from: "Any boss", chance: "1%", rarity: "mythic" },
            { name: "Zombie Tooth", imageUrl: "https://i.postimg.cc/V6RD3Lzp/transparent_Photoroom_(44).png", from: "Zombie Titan TV boss (pull 3 levers to summon)", chance: "80%", rarity: "mythic" },
            { name: "Blood Bag", imageUrl: "https://i.postimg.cc/JnqP9417/transparent_Photoroom_(46).png", from: "Wave 10, 50, 90, etc. boss", chance: "3%", rarity: "legendary" },
            { name: "Cannon", imageUrl: "https://i.postimg.cc/KzNJdvZ4/transparent_Photoroom_(47).png", from: "Wave 20, 60, 100, etc. boss", chance: "3%", rarity: "mythic" },
            { name: "Charged Scrеw", imageUrl: "https://i.postimg.cc/vBz3pHQT/transparent_Photoroom_(48).png", from: "Wave 40, 80, 120, etc. boss", chance: "2%", rarity: "mythic" }
          ]
        },
        { 
          id: 4, 
          name: "Titan Factory Raid", 
          type: "Raid Map",
          category: "raid",
          difficulty: "7/10",
          imageUrl: "https://i.postimg.cc/50NdM4yy/Скриншот_06_01_2026_163727.jpg",
          difficulties: [
            { name: "Easy",   waves: 40, coinsReward: 550, expReward: 25 },
            { name: "Normal", waves: 40, coinsReward: 825, expReward: 35 },
            { name: "Hard",   waves: 40, coinsReward: 1375, expReward: 55 }
          ],
          dropItems: [
            { name: "Hero Speaker Guy", imageUrl: "https://i.postimg.cc/mDw802b1/transparent_Photoroom_(49).png", from: "Beating the Raid", chance: "0.7% on Easy | 0.95% on Normal | 1.2% on Hard", rarity: "legendary" },
            { name: "Titan's Hammer",             imageUrl: "https://i.postimg.cc/wMj0H8vT/transparent_Photoroom_(50).png", from: "Beating the Raid",       chance: "2.5% on Easy | 3% on Normal | 3.5% on Hard", rarity: "mythic" },
            { name: "Metal Plating",     imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png", from: "Wave 5, 30 bosses (x2)",         chance: "6%", rarity: "common" },
            { name: "Charged Battery",     imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png", from: "Wave 10, 20 bosses (x2)",         chance: "10%", rarity: "common" },
            { name: "Rocket Launcher",     imageUrl: "https://i.postimg.cc/zB5xtRYs/transparent_Photoroom_(38).png", from: "Wave 15 bosses (x2)",         chance: "12%", rarity: "uncommon" },
            { name: "Buzzsaw",     imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png", from: "Wave 25 Bosses (x2)",         chance: "10%", rarity: "epic" },
            { name: "Glitch Mainframe",     imageUrl: "https://i.postimg.cc/vBM0q6w3/transparent_Photoroom_(51).png", from: "Wave 35 boss",         chance: "1%", rarity: "mythic" },
            { name: "Titan's Hammer Gear Blueprint",     imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", from: "Wave 40 boss",         chance: "2%", rarity: "mythic" },
          ]
        },
        { 
          id: 5, 
          name: "Secret Bunker Raid", 
          type: "Raid Map",
          category: "raid",
          difficulty: "8/10",
          imageUrl: "https://i.postimg.cc/k4X3dJGV/Скриншот_06_01_2026_163755.jpg",
          difficulties: [
            { name: "Easy",   waves: 40, coinsReward: 780, expReward: 90 },
            { name: "Normal", waves: 40, coinsReward: 1170, expReward: 125 },
            { name: "Hard",   waves: 40, coinsReward: 1950, expReward: 200 }
          ],
          dropItems: [
            { name: "Upgraded Raid Key", imageUrl: "https://i.postimg.cc/ZKhsYP2c/Upgraded_Raid_Key.png", from: "Beating the Raid", chance: "100%", rarity: "legendary" },
            { name: "Energy Blade Gear Blueprint",             imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", from: "Beating the Raid",       chance: "0.5% on Easy | 1% on Normal | 1.5% on Hard%", rarity: "mythic" },
            { name: "Metal Plating",     imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png", from: "Wave 5 bosses (x2)",         chance: "6%", rarity: "common" },
            { name: "Rocket Launcher",     imageUrl: "https://i.postimg.cc/zB5xtRYs/transparent_Photoroom_(38).png", from: "Wave 10 boss",         chance: "12%", rarity: "uncommon" },
            { name: "Buzzsaw",     imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png", from: "Wave 15 bosses (x2)",         chance: "10%", rarity: "epic" },
            { name: "Buzzsaw Gear Blueprint",     imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", from: "Wave 30 bosses",         chance: "2%", rarity: "epic" },
            { name: "Blaster Turret Gear Blueprint",     imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", from: "Wave 40 boss",         chance: "1%", rarity: "mythic" },
          ]
        },
        { 
          id: 7, 
          name: "Sewers", 
          type: "Basic Map",
          category: "basic",
          difficulty: "2/10",
          imageUrl: "https://i.postimg.cc/ydY4z1xs/Скриншот_06_01_2026_163413.jpg",
          difficulties: [
            { name: "Easy",   waves: 15, coinsReward: 180, expReward: 45 },
            { name: "Normal", waves: 20, coinsReward: 270, expReward: 60 },
            { name: "Hard",   waves: 25, coinsReward: 360, expReward: 90 }
          ],
          dropItems: [
            { name: "Toxic Camera Guy", imageUrl: "https://i.postimg.cc/fL3YT0bt/Toxic_Camera_Guy.png", from: "Beating the Map", chance: "2.5% on Easy | 3% on Normal | 3.5% on Hard", rarity: "epic" },
            { name: "Metal Plating", imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png", from: "Wave 15 boss", chance: "6%", rarity: "common" },
            { name: "Charged Battery", imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png", from: "Wave 20, 25 boss (on Normal-Hard)", chance: "10%", rarity: "common" }
          ]
        },
        { 
          id: 8, 
          name: "Train Route", 
          type: "Basic Map",
          category: "basic",
          difficulty: "3/10",
          imageUrl: "https://i.postimg.cc/NMfqwsFQ/Скриншот_06_01_2026_163441.jpg",
          difficulties: [
            { name: "Easy",   waves: 20, coinsReward: 270, expReward: 75 },
            { name: "Normal", waves: 25, coinsReward: 390, expReward: 115 },
            { name: "Hard",   waves: 30, coinsReward: 510, expReward: 175 }
          ],
          dropItems: [
            { name: "Captain Camera Guy", imageUrl: "https://i.postimg.cc/vZn3Ykcd/Captain_Camera_Guy.png", from: "Beating the Map", chance: "2.5% on Easy | 3% on Normal | 3.5% on Insane", rarity: "epic" },
            { name: "Rocket Launcher",    imageUrl: "https://i.postimg.cc/zB5xtRYs/transparent_Photoroom_(38).png", from: "Wave 10 bosses (x2)",     chance: "8%",  rarity: "uncommon" },
            { name: "Metal Plating", imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png", from: "Wave 15 bosses (x2)", chance: "6%", rarity: "common" },
            { name: "Charged Battery", imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png", from: "Wave 20 bosses (x2 on Normal-Hard)", chance: "10%", rarity: "common" },
            { name: "Buzzsaw", imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png", from: "Wave 30 bosses (x2 on Hard)", chance: "10%", rarity: "epic" }
          ]
        },
        { 
          id: 9, 
          name: "Wastelands", 
          type: "Basic Map",
          category: "basic",
          difficulty: "5/10",
          imageUrl: "https://i.postimg.cc/QtxGr8CD/Скриншот_06_01_2026_163504.jpg",
          difficulties: [
            { name: "Easy",   waves: 20, coinsReward: 300, expReward: 125 },
            { name: "Normal", waves: 25, coinsReward: 420, expReward: 190 },
            { name: "Hard",   waves: 30, coinsReward: 570, expReward: 250 },
            { name: "Insane",   waves: 30, coinsReward: 660, expReward: 250 }
          ],
          dropItems: [
            { name: "Crusher Camera Guy", imageUrl: "https://i.postimg.cc/mDRmXFWN/transparent_Photoroom_(53).png", from: "Beating the Map", chance: "0.4% on Easy | 0.73% on Normal | 1.06% on Hard | 1.4% on Insane", rarity: "rare" },
            { name: "Metal Plating",    imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png", from: "Wave 15 bosses (x2)",     chance: "6%",  rarity: "common" },
            { name: "Charged Battery", imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png", from: "Wave 25 bosses (x2 on Hard | x4 on Insane)", chance: "10%", rarity: "common" }
          ]
        },
        { 
          id: 10, 
          name: "Gear Lab", 
          type: "Basic Map",
          category: "basic",
          difficulty: "6/10",
          imageUrl: "https://i.postimg.cc/zBXZ1zvB/Скриншот_06_01_2026_163700.jpg",
          difficulties: [
            { name: "Easy",   waves: 25, coinsReward: 200, expReward: 75 },
            { name: "Normal", waves: 30, coinsReward: 480, expReward: 100 },
            { name: "Hard",   waves: 35, coinsReward: 600, expReward: 150 },
            { name: "Insane",   waves: 40, coinsReward: 900, expReward: 300 }
          ],
          dropItems: [
            { name: "Scientist TV Guy", imageUrl: "https://i.postimg.cc/PxnHVNPD/transparent_Photoroom_(41).png", from: "Beating the Map", chance: "2.5% on Easy | 3% on Normal | 3.5% on Hard | 4% on Insane", rarity: "epic" },
            { name: "Toxic Barrel",    imageUrl: "https://i.postimg.cc/503nZNx4/transparent_Photoroom_(42).png", from: "Beating the Map",     chance: "2.5% on Easy | 3% on Normal | 3.5% on Hard | 4% on Insane",  rarity: "legendary" },
            { name: "Metal Plating", imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png", from: "Wave 7 boss (x1 on Easy | x2 on Normal | x3 on Hard | x4 on Insane)", chance: "6%", rarity: "common" },
            { name: "Sсrеw", imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png", from: "Wave 10, 25 bosses (x2 on Easy | x4 on Normal | x6 on Hard | x8 on Insane)", chance: "4%", rarity: "common" },
            { name: "Medkit Gear Blueprint", imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", from: "Wave 25 bosses (x1 on Easy | x2 on Normal | x3 on Hard | x4 on Insane)", chance: "1.5%", rarity: "epic" },
            { name: "Toilet Plunger Gear Blueprint", imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", from: "Wave 30 bosses (x2 on Normal | x3 on Hard | x4 on Insane)", chance: "1.5%", rarity: "epic" },
            { name: "Boombox Gear Blueprint", imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", from: "Wave 35 bosses (x2 on Hard | x4 on Insane)", chance: "0.5%", rarity: "legendary" },
            { name: "Flamethrower Gear Blueprint", imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png", from: "Wave 40 bosses (x4 on Insane)", chance: "3%", rarity: "epic" }
          ]
        },
        { 
          id: 11, 
          name: "Plunger Temple Raid", 
          type: "Raid Map",
          category: "raid",
          difficulty: "10/10",
          imageUrl: "https://i.postimg.cc/QxGVBqTw/image.png",
          difficulties: [
            { name: "Depends on chosen modifiers",   waves: 40, coinsReward: "?", expReward: "?" }
          ],
          dropItems: [
            { name: "Samurai Plating", imageUrl: "https://i.postimg.cc/90XFcLSP/transparent-Photoroom.png", from: "Favor Reward", chance: "66%", rarity: "rare" },
            { name: "Sushi", imageUrl: "https://i.postimg.cc/g276DtkN/transparent-Photoroom-(11).png", from: "Favor Reward", chance: "8%", rarity: "epic" },
            { name: "Weapon Key", imageUrl: "https://i.postimg.cc/Kvfmhgvv/Weapon-Key.png", from: "Favor Reward", chance: "10%", rarity: "epic" },
            { name: "Samurai Speaker Guy", imageUrl: "https://i.ibb.co/B2P56ZPS/Samurai-Speaker-Guy.png", from: "Favor Reward", chance: "6%", rarity: "legendary" },
            { name: "Gourd", imageUrl: "https://i.postimg.cc/GpHbgBDX/transparent-Photoroom-(4).png", from: "Favor Reward", chance: "4%", rarity: "legendary" },
            { name: "Samurai Camera Guy", imageUrl: "https://i.ibb.co/9kXpnHRQ/Samurai-Camera-Guy.png", from: "Favor Reward", chance: "2%", rarity: "mythic" },
            { name: "Cobalt Katana", imageUrl: "https://i.postimg.cc/tCWZDcbq/transparent-Photoroom-(2).png", from: "Favor Reward", chance: "1.25%", rarity: "mythic" },
            { name: "Samurai TV Guy", imageUrl: "https://i.postimg.cc/d30k5QqK/transparent-Photoroom-(1).png", from: "Favor Reward", chance: "1.75%", rarity: "mythic" },
            { name: "Metal Crest", imageUrl: "https://i.postimg.cc/gcR2P6Ty/transparent-Photoroom-(3).png", from: "Favor Reward", chance: "0.95%", rarity: "mythic" },
            { name: "Titan Samurai (lower)", imageUrl: "https://i.postimg.cc/x87S7mJ9/transparent-Photoroom-(12).png", from: "Favor Reward", chance: "0.025%", rarity: "mythic" },
            { name: "Titan Samurai (upper)", imageUrl: "https://i.postimg.cc/0yYLGFfr/transparent-Photoroom-(13).png", from: "Favor Reward", chance: "0.025%", rarity: "mythic" },
            { name: "Titan Samurai (head)", imageUrl: "https://i.postimg.cc/gJ1xyxzN/transparent-Photoroom-(14).png", from: "Favor Reward", chance: "0.025%", rarity: "mythic" },
            { name: "Titan Samuria (final)", imageUrl: "https://i.postimg.cc/76j515HK/transparent-Photoroom-(15).png", from: "Favor Reward", chance: "0.001%", rarity: "mythic" },
          ]
        }
      ],

      // ----- CRATES (ручной ввод) -----
      crates: [
        {
          id: 1,
          name: "Raid Crate",
          imageUrl: "https://i.postimg.cc/mkq9H0vf/Raid_Crate.jpg",
          openswith: "Raid Key",
          openswithImageUrl: "https://i.postimg.cc/43TxBSS7/Raid_Key.png",
          drops: [
            { item: "Infected Camera Guy", imageUrl: "https://i.postimg.cc/m2DtKKV0/Infected-Camera-Guy.png", rarity: "rare",    chance: "54%" },
            { item: "Large Infected Camera Guy", imageUrl: "https://i.postimg.cc/N0Rk1XcT/Large_Infected_Camera_Guy.png", rarity: "epic", chance: "33%" },
            { item: "Disabler Camera Guy", imageUrl: "https://i.postimg.cc/02H2mQvP/Disabler_Camera_Guy.png", rarity: "legendary", chance: "12%" },
            { item: "Engineer Camera Guy", imageUrl: "https://i.postimg.cc/2yVdHMLX/Engineer-Camera-Guy.png", rarity: "mythic", chance: "0.8%" },
            { item: "Infected Titan Speaker Guy", imageUrl: "https://i.postimg.cc/HkhfgqS4/Infected_Titan_Speaker_Guy.png", rarity: "mythic", chance: "0.2%" }
          ]
        },
        {
          id: 2,
          name: "Upgraded Raid Crate",
          imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg",
          openswith: "Upgraded Raid Key",
          openswithImageUrl: "https://i.postimg.cc/ZKhsYP2c/Upgraded_Raid_Key.png",
          drops: [
            { item: "Sсrеw", imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png", rarity: "common",    chance: "54.25%" },
            { item: "Fuel Cell", imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel-Cell.png", rarity: "epic", chance: "30%" },
            { item: "Reinforced Plating", imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced-Plating.png", rarity: "epic", chance: "10%" },
            { item: "Buzzsaw", imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png", rarity: "epic", chance: "3%" },
            { item: "Orbital Laser Drone", imageUrl: "https://i.postimg.cc/s2Jj9VTB/transparent-Photoroom-(10).png", rarity: "mythic", chance: "0.75%" },
            { item: "Hextech Arm", imageUrl: "https://i.postimg.cc/65DpBb7n/transparent_Photoroom_(11).png", rarity: "mythic", chance: "0.75%" },
            { item: "Overcharged Blaster", imageUrl: "https://i.postimg.cc/nc6hnSs9/transparent_Photoroom_(12).png", rarity: "mythic", chance: "0.75%" },
            { item: "Energy Blade", imageUrl: "https://i.postimg.cc/m20gTpck/transparent_Photoroom_(13).png", rarity: "mythic", chance: "0.5%" }
          ]
        },
        {
          id: 3,
          name: "Zombie Crate",
          imageUrl: "https://i.postimg.cc/C5g5d9Z2/Skrinsot-19-04-2026-152142.jpg",
          openswith: "Zombie Key",
          openswithImageUrl: "https://i.postimg.cc/TwBk8nMK/Zombie_Key.png",
          drops: [
            { item: "Eyeball", imageUrl: "https://i.postimg.cc/vmDcVhHL/Eyeball.png", rarity: "common",    chance: "52%" },
            { item: "Cauldron Camera Toilet", imageUrl: "https://i.postimg.cc/g27GfWm3/Cauldron-Camera-Toilet.png", rarity: "epic", chance: "39.7%" },
            { item: "Vampire Camera Woman", imageUrl: "https://i.postimg.cc/DZLsS6BY/Vampire-Camera-Woman.png", rarity: "legendary", chance: "5%" },
            { item: "Pirate Speaker Woman", imageUrl: "https://i.postimg.cc/vZnQFKTc/Pirate-Speaker-Woman.png", rarity: "legendary", chance: "3%" },
            { item: "Frankengineer", imageUrl: "https://i.postimg.cc/vT0XW6VC/transparent_Photoroom_(15).png", rarity: "mythic", chance: "0.3%" },
            { item: "Zombie Titan TV Guy", imageUrl: "https://i.postimg.cc/9FtcjXhF/transparent_Photoroom_(14).png", rarity: "secret", chance: "0.01%" }
          ]
        },
        {
          id: 4,
          name: "Easter Crate",
          imageUrl: "https://i.postimg.cc/gJmfYzVd/Easter_Crate.jpg",
          openswith: "Egg Shell",
          openswithImageUrl: "https://i.postimg.cc/MKZNr3vs/Egg-Shell.png",
          drops: [
            { item: "Bunny Assassin Speaker Guy", imageUrl: "https://i.postimg.cc/t70tmyWp/Bunny-Assassin-Speaker-Guy.png", rarity: "rare",    chance: "72.7%" },
            { item: "Carrot Farmer Camera Guy", imageUrl: "https://i.postimg.cc/NMkngVC7/Carrot-Farmer-Camera-Guy.png", rarity: "epic", chance: "24%" },
            { item: "Egg Launcher Camera Guy", imageUrl: "https://i.postimg.cc/90k9Dky7/Egg-Launcher-Camera-Guy.png", rarity: "legendary", chance: "3%" },
            { item: "Bunny Racer Camera Guy", imageUrl: "https://i.postimg.cc/9MpJvFWC/transparent_Photoroom_(45).png", rarity: "mythic", chance: "0.3%" }
          ]
        },
        {
          id: 5,
          name: "Weapon Crate",
          imageUrl: "https://i.postimg.cc/brhrd4Dc/Skrinsot-19-04-2026-152303.jpg",
          openswith: "Weapon Key",
          openswithImageUrl: "https://i.postimg.cc/Kvfmhgvv/Weapon-Key.png",
          drops: [
            { item: "Lost Plunger", imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent-Photoroom-(16).png", rarity: "rare",    chance: "50%" },
            { item: "Lost Spear", imageUrl: "https://i.postimg.cc/br0rMQgX/transparent-Photoroom-(17).png", rarity: "epic", chance: "38%" },
            { item: "Mace", imageUrl: "https://i.postimg.cc/fTFpF6VP/transparent-Photoroom-(18).png", rarity: "legendary", chance: "10.7%" },
            { item: "Katana", imageUrl: "https://i.postimg.cc/8cX9TYtW/transparent-Photoroom-(19).png", rarity: "mythic", chance: "0.5%" },
            { item: "Photon Grenade", imageUrl: "https://i.postimg.cc/hvXM1t1V/transparent-Photoroom-(20).png", rarity: "mythic", chance: "0.5%" },
            { item: "Chainsword", imageUrl: "https://i.postimg.cc/Vk8pmXF0/transparent-Photoroom-(21).png", rarity: "mythic", chance: "0.3%" },
            { item: "Doom Blade", imageUrl: "https://i.postimg.cc/FKfrDTb7/transparent-Photoroom-(27).png", rarity: "secret", chance: "0.01%" }
          ]
        },
        {
          id: 6,
          name: "Tag Crate",
          imageUrl: "https://i.postimg.cc/zvrv34LM/Skrinsot-19-04-2026-152418.jpg",
          openswith: "Tag Key",
          openswithImageUrl: "https://i.postimg.cc/m2pmGzT0/Tag-Key.png",
          drops: [
            { item: "Classic Tag", imageUrl: "https://i.postimg.cc/Zn4d9SSh/Скриншот_05_01_2026_145226.jpg", rarity: "common",    chance: "40%" },
            { item: "Rainbow Tag", imageUrl: "https://i.postimg.cc/sxshBrrz/Скриншот_05_01_2026_145203.jpg", rarity: "uncommon", chance: "20%" },
            { item: "Vice Tag", imageUrl: "https://i.postimg.cc/90C74hh5/Скриншот_05_01_2026_145148.jpg", rarity: "rare", chance: "8%" },
            { item: "Speaker Tag", imageUrl: "https://i.postimg.cc/tCrxgwvf/Скриншот_05_01_2026_145115.jpg", rarity: "rare", chance: "8%" },
            { item: "TV Tag", imageUrl: "https://i.postimg.cc/qMm37SDS/Скриншот_05_01_2026_145131.jpg", rarity: "rare", chance: "8%" },
            { item: "Camera Tag", imageUrl: "https://i.postimg.cc/9Fx7fKgk/Скриншот_05_01_2026_145049.jpg", rarity: "rare", chance: "8%" },
            { item: "Anime Tag", imageUrl: "https://i.postimg.cc/YSFGb92B/Скриншот_05_01_2026_145003.jpg", rarity: "epic", chance: "5.5%" },
            { item: "Inverted Tag", imageUrl: "https://i.postimg.cc/W4ZFX3NB/Скриншот_05_01_2026_144940.jpg", rarity: "legendary", chance: "2%" },
            { item: "Toilet Tag", imageUrl: "https://i.postimg.cc/d3wy7YYM/Скриншот_05_01_2026_145305.jpg", rarity: "mythic", chance: "0.5%" }
          ]
        },
        {
          id: 7,
          name: "Emote Crate",
          imageUrl: "https://i.postimg.cc/rsksz70L/Skrinsot-19-04-2026-152357.jpg",
          openswith: "Emote Key",
          openswithImageUrl: "https://i.postimg.cc/RZ0mdbRH/Morph-Key.png",
          drops: [
            { item: "Thumbs Up Emote", imageUrl: "https://i.postimg.cc/5NN1Sqwx/Скриншот_05_01_2026_172425.jpg", rarity: "common",    chance: "19%" },
            { item: "T-Pose Emote", imageUrl: "https://i.postimg.cc/MKKxmbyq/Скриншот_05_01_2026_172355.jpg", rarity: "common", chance: "19%" },
            { item: "Threaten Emote", imageUrl: "https://i.postimg.cc/2S1DPkcH/Скриншот_05_01_2026_172844.jpg", rarity: "common", chance: "19%" },
            { item: "Toilet Sit Emote", imageUrl: "https://i.postimg.cc/qvNT9Jbj/Скриншот_05_01_2026_172900.jpg", rarity: "uncommon", chance: "4.5%" },
            { item: "Dap Up Emote", imageUrl: "https://i.postimg.cc/tCqxtbxY/transparent-Photoroom-(36).png", rarity: "uncommon", chance: "4.4%" },
            { item: "Kazotsky Kick Emote", imageUrl: "https://i.postimg.cc/L8Jpr9Cx/Скриншот_05_01_2026_172941.jpg", rarity: "rare", chance: "8.7%" },
            { item: "Parrot Wiggle Emote", imageUrl: "https://i.postimg.cc/K812dGqq/Скриншот_05_01_2026_172923.jpg", rarity: "rare", chance: "8.6%" },
            { item: "Company Dance Emote", imageUrl: "https://i.postimg.cc/rwDkvVnZ/Скриншот_05_01_2026_173030.jpg", rarity: "rare", chance: "8.6%" },
            { item: "Beatbox Emote", imageUrl: "https://i.postimg.cc/BQSKc3K8/transparent-Photoroom-(37).png", rarity: "epic", chance: "1.6%" },
            { item: "The Star Emote", imageUrl: "https://i.postimg.cc/T3K6Zd7H/Скриншот_05_01_2026_173258.jpg", rarity: "epic", chance: "1.6%" },
            { item: "Orange Justice Emote", imageUrl: "https://i.postimg.cc/FHw4vM8C/Скриншот_05_01_2026_173903.jpg", rarity: "epic", chance: "1.6%" },
            { item: "Breakdance Emote", imageUrl: "https://i.postimg.cc/52DVJhT3/Скриншот_05_01_2026_173352.jpg", rarity: "legendary", chance: "0.8%" },
            { item: "Shadow Emerge Emote", imageUrl: "https://i.postimg.cc/DwSTtvjH/Скриншот_05_01_2026_173328.jpg", rarity: "legendary", chance: "0.8%" },
            { item: "Boogie Down Emote", imageUrl: "https://i.postimg.cc/mgKs4vJj/Скриншот_05_01_2026_173554.jpg", rarity: "legendary", chance: "0.65%" },
            { item: "Take The L Emote", imageUrl: "https://i.postimg.cc/wjnpzCZw/Скриншот_05_01_2026_173636.jpg", rarity: "mythic", chance: "0.4%" },
            { item: "The Honored One Emote", imageUrl: "https://i.postimg.cc/XYtbWRmQ/Скриншот_05_01_2026_173615.jpg", rarity: "mythic", chance: "0.3%" },
            { item: "Gambler Dance Emote", imageUrl: "https://i.postimg.cc/Cx9g03XP/Скриншот_05_01_2026_173655.jpg", rarity: "mythic", chance: "0.3%" },
            { item: "Neko Dance Emote", imageUrl: "https://i.postimg.cc/c4xnMWnv/transparent-Photoroom-(38).png", rarity: "mythic", chance: "0.15%" }
          ]
        },
        {
          id: 8,
          name: "Morph Crate",
          imageUrl: "https://i.postimg.cc/Vv8v52rw/Skrinsot-19-04-2026-152325.jpg",
          openswith: "Morph Key",
          openswithImageUrl: "https://i.postimg.cc/xjpHk1GH/transparent-Photoroom-(61).png",
          drops: [
            { item: "TV Guy Morph Token", imageUrl: "https://i.postimg.cc/c12tV2C1/Skrinsot-05-01-2026-171415.jpg", rarity: "common",    chance: "29.1%" },
            { item: "Speaker Guy Morph Token", imageUrl: "https://i.postimg.cc/WzNTdM27/Скриншот_05_01_2026_171553.jpg", rarity: "common", chance: "27.85%" },
            { item: "Dark Speaker Guy Morph Token", imageUrl: "https://i.postimg.cc/XNLnTD8L/Скриншот_05_01_2026_171610.jpg", rarity: "uncommon", chance: "20%" },
            { item: "Scientist Camera Guy Morph Token", imageUrl: "https://i.postimg.cc/jqcRGkXM/Скриншот_05_01_2026_171628.jpg", rarity: "rare", chance: "7%" },
            { item: "Large Speaker Guy Morph Token", imageUrl: "https://i.postimg.cc/qBwp9ZLm/Скриншот_05_01_2026_171641.jpg", rarity: "rare", chance: "7%" },
            { item: "Large TV Guy Morph Token", imageUrl: "https://i.postimg.cc/3r13PbBZ/Скриншот_05_01_2026_171704.jpg", rarity: "epic", chance: "2.5%" },
            { item: "Shield Camera Guy Morph Token", imageUrl: "https://i.postimg.cc/66cBD101/Скриншот_05_01_2026_171734.jpg", rarity: "epic", chance: "2.5%" },
            { item: "Camera Woman Morph Token", imageUrl: "https://i.postimg.cc/qBwp9ZLF/Скриншот_05_01_2026_171752.jpg", rarity: "legendary", chance: "1%" },
            { item: "Buzzsaw Camera Guy Morph Token", imageUrl: "https://i.postimg.cc/NGDQWP4Z/Скриншот_05_01_2026_171814.jpg", rarity: "legendary", chance: "1%" },
            { item: "Engineer Camera Guy Morph Token", imageUrl: "https://i.postimg.cc/XNLnTD8m/Скриншот_05_01_2026_171831.jpg", rarity: "mythic", chance: "0.4%" },
            { item: "Katana Speaker Woman Morph Token", imageUrl: "https://i.postimg.cc/c1hdV5mp/Скриншот_05_01_2026_171842.jpg", rarity: "mythic", chance: "0.4%" },
            { item: "Bomb Woman Morph Token", imageUrl: "https://i.postimg.cc/GmcLWkY8/Skrinsot-21-04-2026-204025.jpg", rarity: "mythic", chance: "0.2%" },
            { item: "Slotman (highroller) Morph Token", imageUrl: "https://i.postimg.cc/c1hdV5mp/Скриншот_05_01_2026_171842.jpg", rarity: "mythic", chance: "0.05%" }
          ]
        },
        {
          id: 9,
          name: "Black Market Crate",
          imageUrl: "https://i.postimg.cc/vB0tzHJk/Skrinsot-19-04-2026-152236.jpg",
          openswith: "Black Market Key",
          openswithImageUrl: "https://i.postimg.cc/qvpsW3gm/transparent-Photoroom-(34).png",
          drops: [
            { item: "Chain Link", imageUrl: "https://i.postimg.cc/zXBTqr8n/transparent-Photoroom-(31).png", rarity: "epic",    chance: "50%" },
            { item: "Gas Can", imageUrl: "https://i.postimg.cc/HnfWGXTN/transparent-Photoroom-(32).png", rarity: "epic", chance: "35%" },
            { item: "Supply Override Chip", imageUrl: "https://i.postimg.cc/XYyv6NGF/transparent-Photoroom-(39).png", rarity: "legendary", chance: "7.5" },
            { item: "Speaker Mortar", imageUrl: "https://i.postimg.cc/jqcRGkXM/Скриншот_05_01_2026_171628.jpg", rarity: "legendary", chance: "5%" },
            { item: "Overcharged Axe", imageUrl: "https://i.postimg.cc/RFFDcYwb/transparent-Photoroom-(30).png", rarity: "mythic", chance: "1.5%" },
            { item: "Chainsaw Arm", imageUrl: "https://i.postimg.cc/x18NVyyn/transparent-Photoroom-(29).png", rarity: "mythic", chance: "0.7%" },
            { item: "Crimson Dagger", imageUrl: "https://i.postimg.cc/FRMV7CpT/transparent-Photoroom-(28).png", rarity: "mythic", chance: "0.3%" },
            { item: "Bomb Woman", imageUrl: "https://i.postimg.cc/W4CCLjZz/transparent-Photoroom-(40).png", rarity: "secret", chance: "0.01%" },
            { item: "Slotman", imageUrl: "https://i.postimg.cc/9MkpdnQG/transparent-Photoroom-(19).png", rarity: "secret", chance: "0.01%" }
          ]
        }
      ],

      // ----- BANNER INFO (manual, for icon & rotation) -----
      banner: {
        imageUrl: "https://i.postimg.cc/3N4XZZ3m/image.png",
        rotationMinutes: 60,

        // Banner units list (MANUAL) — edit this array to control the Banner table
        // Fields: name, rarity, chance, imageUrl (optional)
        units: [
          // examples (replace with your real Banner units)
          { name: "Camera Guy",  rarity: "common",   chance: "43%", imageUrl: "https://i.postimg.cc/qv7FBZfK/Camera-Guy.png" },
          { name: "Speaker Guy", rarity: "common",   chance: "43%", imageUrl: "https://i.postimg.cc/59qKBMfc/Speaker-Guy.png" },
          { name: "TV Guy",      rarity: "common",   chance: "43%", imageUrl: "https://i.postimg.cc/4dGbym7Y/TV-Guy.png" },
          { name: "Helicopter Speaker", rarity: "uncommon",   chance: "30%", imageUrl: "https://i.postimg.cc/hvtmQYL8/Helicopter-Speaker.png" },
          { name: "Camera Toilet", rarity: "uncommon",   chance: "30%", imageUrl: "https://i.postimg.cc/Y2DRfNvk/Camera-Toilet.png" },
          { name: "Dark Speaker Guy", rarity: "uncommon",   chance: "30%", imageUrl: "https://i.postimg.cc/59898gPh/Dark-Speaker-Guy.png" },
          { name: "Camera Drone", rarity: "uncommon",   chance: "30%", imageUrl: "https://i.postimg.cc/hGwy49Ts/Camera-Drone.png" },
          { name: "Large Camera Guy", rarity: "rare",   chance: "20%", imageUrl: "https://i.postimg.cc/Hx32xQQL/Large-Camera-Guy.png" },
          { name: "Large Speaker Guy", rarity: "rare",   chance: "20%", imageUrl: "https://i.postimg.cc/zGcYLgFp/Large-Speaker-Guy.png" },
          { name: "Scientist Camera Guy", rarity: "rare",   chance: "20%", imageUrl: "https://i.postimg.cc/hv9FJZtK/Scientist-Camera-Guy.png" },
          { name: "Dark Stereocopter", rarity: "epic",   chance: "6%", imageUrl: "https://i.postimg.cc/HxMpBpxn/Dark-Stereocopter.png" },
          { name: "Garage", rarity: "epic",   chance: "6%", imageUrl: "https://i.postimg.cc/x87cqsc9/Garage.png" },
          { name: "Large Toilet Camera Guy", rarity: "epic",   chance: "6%", imageUrl: "https://i.postimg.cc/JhhRXNJv/Large-Toilet-Camera-Guy.png" },
          { name: "Large TV Guy", rarity: "epic",   chance: "6%", imageUrl: "https://i.postimg.cc/Y9qM11FK/Large-TV-Guy.png" },
          { name: "Ninja Camera Guy", rarity: "epic",   chance: "6%", imageUrl: "https://i.postimg.cc/V6jnCPXG/Ninja-Camera-Guy.png" },
          { name: "Shield Camera Guy", rarity: "epic",   chance: "6%", imageUrl: "https://i.postimg.cc/DZVwLWgW/Shield-Camera-Guy.png" },
          { name: "Thrower Camera Guy", rarity: "legendary",   chance: "0.9%", imageUrl: "https://i.postimg.cc/pXSqnZ2P/transparent_Photoroom_(25).png" },
          { name: "TV Woman", rarity: "legendary",   chance: "0.9%", imageUrl: "https://i.postimg.cc/GpK77s0b/transparent_Photoroom_(26).png" },
          { name: "Speaker Woman", rarity: "legendary",   chance: "0.9%", imageUrl: "https://i.postimg.cc/QMm44WLM/transparent_Photoroom_(27).png" },
          { name: "Dark Speaker Guy", rarity: "legendary",   chance: "0.9%", imageUrl: "https://i.postimg.cc/yN648Ksc/transparent_Photoroom_(30).png" },
          { name: "Golden Camera Toilet (only when Camera Toilet is in the Banner)", rarity: "legendary",   chance: "0.9%", imageUrl: "https://i.postimg.cc/7PJv6m87/transparent_Photoroom_(32).png" },
          { name: "Chief Scientist Camera Guy", rarity: "legendary",   chance: "0.9%", imageUrl: "https://i.postimg.cc/nL2RRQ8X/transparent_Photoroom_(28).png" },
          { name: "Flamethrower Camera Guy", rarity: "legendary",   chance: "0.9%", imageUrl: "https://i.postimg.cc/j59GcJNx/transparent_Photoroom_(31).png" },
          { name: "Camera Woman", rarity: "legendary",   chance: "0.9%", imageUrl: "https://i.postimg.cc/4d38rNZV/transparent_Photoroom_(29).png" },
          { name: "Titan Camera Guy", rarity: "mythic",   chance: "0.1%", imageUrl: "https://i.postimg.cc/CKYgWDRF/transparent_Photoroom_(33).png" },
          { name: "Titan TV Guy", rarity: "mythic",   chance: "0.1%", imageUrl: "https://i.postimg.cc/fy3nxfrx/transparent_Photoroom_(34).png" },
          { name: "Titan Speaker Guy", rarity: "mythic",   chance: "0.1%", imageUrl: "https://i.postimg.cc/d3zMnZbn/transparent_Photoroom_(35).png" },
          { name: "Energy TV Guy", rarity: "secret",   chance: "0.001%", imageUrl: "https://i.postimg.cc/brKXLS73/transparent_Photoroom_(36).png" },
          { name: "Clock Woman", rarity: "secret",   chance: "0.001%", imageUrl: "https://i.postimg.cc/PJBGKvgm/transparent_Photoroom_(37).png" },
          // add more...
        ]
      },

      // ----- TV WOMAN SHOP (manual) -----
      tvWomanShop: {
        rotationMinutes: 60,
        materialsInBanner: [
          {
            name: "Raid Key",
            imageUrl: "https://i.postimg.cc/43TxBSS7/Raid-Key.png",
            rarity: "rare",
            price: "2,000 coins"
          },
          {
            name: "Lost Plunger",
            imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png",
            rarity: "rare",
            price: "4,750 coins"
          },
          {
            name: "Plunger Potion",
            imageUrl: "https://i.postimg.cc/JhhMBM5k/transparent-Photoroom-(60).png",
            rarity: "legendary",
            price: "125 gems"
          },
          {
            name: "Upgraded Raid Key",
            imageUrl: "https://i.postimg.cc/ZKhsYP2c/Upgraded_Raid_Key.png",
            rarity: "legendary",
            price: "180 gems"
          },
          {
            name: "Charged Battery",
            imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent-Photoroom-(23).png",
            rarity: "common",
            price: "300 coins"
          },
          {
            name: "Metal Plating",
            imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent-Photoroom-(24).png",
            rarity: "common",
            price: "500 coins"
          },
          {
            name: "Scrеw",
            imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png",
            rarity: "common",
            price: "750 coins"
          },
          {
            name: "Tag Key",
            imageUrl: "https://i.postimg.cc/m2pmGzT0/Tag_Key.png",
            rarity: "epic",
            price: "50 gems"
          },
          {
            name: "Morph Key",
            imageUrl: "https://i.postimg.cc/xjpHk1GH/transparent-Photoroom-(61).png",
            rarity: "epic",
            price: "100 gems"
          },
          {
            name: "Emote Key",
            imageUrl: "https://i.postimg.cc/RZ0mdbRH/Morph-Key.png",
            rarity: "epic",
            price: "100 gems"
          },
          {
            name: "Weapon Key",
            imageUrl: "https://i.postimg.cc/Kvfmhgvv/Weapon_Key.png",
            rarity: "epic",
            price: "4,000 coins"
          },
          {
            name: "Flamethrower Gear Blueprint",
            imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent-Photoroom-(22).png",
            rarity: "epic",
            price: "150 gems"
          },
          {
            name: "Toilet Plunger Gear Blueprint",
            imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent-Photoroom-(22).png",
            rarity: "epic",
            price: "150 gems"
          },
          {
            name: "Medkit Gear Blueprint",
            imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent-Photoroom-(22).png",
            rarity: "epic",
            price: "150 gems"
          },
          {
            name: "Blaster Turret Gear Blueprint",
            imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent-Photoroom-(22).png",
            rarity: "mythic",
            price: "250 gems"
          },
          {
            name: "Energy Blade Gear Blueprint",
            imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent-Photoroom-(22).png",
            rarity: "mythic",
            price: "250 gems"
          },
          {
            name: "Stolen Spear",
            imageUrl: "https://i.postimg.cc/br0rMQgX/transparent_Photoroom_(17).png",
            rarity: "epic",
            price: "6,250 coins"
          },
          {
            name: "Gold Bar",
            imageUrl: "https://i.postimg.cc/90PTCdQK/image.png",
            rarity: "legendary",
            price: "10,000 coins"
          },
          {
            name: "Titan's Hammer Gear Blueprint",
            imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent-Photoroom-(22).png",
            rarity: "mythic",
            price: "250 gems"
          },
          {
            name: "Shiny Potion",
            imageUrl: "https://i.postimg.cc/qqNTDL5f/transparent-Photoroom-(59).png",
            rarity: "legendary",
            price: "125 gems"
          }
          // добавь сюда остальные материалы, если нужно
        ]
      },

      // ----- BLACK MARKET (manual) -----
      blackMarket: {
        rotationMinutes: 60,
        possibleMarketItems: [
        ]
      },

      robuxShop: {
        imageUrl: "https://i.postimg.cc/Wpk6vsjZ/image.png",

        stats: {
          howToBuyGamepassTokens: "Click Buy Mode button at the bottom of the Menu to switch to Token mode",
          whereToBuyKeys: "Keys are bought in the Crates Menu (click Keys button)"
        },

        bundles: [
          {
            name: "Starter Pack",
            imageUrl: "https://i.postimg.cc/fy7gWSF6/Скриншот_10_01_2026_205036.jpg",
            price: "299 Robux",
            included: [
              { name: "Random Banner Legendary (x1)", imageUrl: "https://i.postimg.cc/056VVFyh/Скриншот_10_01_2026_212331.jpg" },
              { name: "Random Banner Epic (x2)", imageUrl: "https://i.postimg.cc/XNZssmYT/Скриншот_10_01_2026_212357.jpg" },
              { name: "2,000 Coins", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" },
              { name: "200 Gems", imageUrl: "https://i.postimg.cc/8kHP7fTp/Gem.png" }
            ]
          },
          {
            name: "Zombie Bundle",
            imageUrl: "https://i.postimg.cc/GtPS3TN6/Скриншот_10_01_2026_205143.jpg",
            price: "599 Robux",
            included: [
              { name: "Zombie Brain (x100) - 10 Battle Pass tiers", imageUrl: "https://i.postimg.cc/cHmXV4sd/transparent_Photoroom_(43).png" },
              { name: "Zombie Key (x5)", imageUrl: "https://i.postimg.cc/TwBk8nMK/Zombie_Key.png" },
              { name: "200 Gems", imageUrl: "https://i.postimg.cc/8kHP7fTp/Gem.png" }
            ]
          },
          {
            name: "Key Bundle",
            imageUrl: "https://i.postimg.cc/C5C6Mnt6/Скриншот_10_01_2026_205238.jpg",
            price: "4,999 Robux",
            included: [
              { name: "100,000 Coins", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" },
              { name: "Master Key (x30)", imageUrl: "https://i.postimg.cc/fT21Vmkh/transparent-Photoroom-(63).png" },
              { name: "Upgraded Raid Key (x30)", imageUrl: "https://i.postimg.cc/ZKhsYP2c/Upgraded_Raid_Key.png" }
            ]
          },
          {
            name: "Secret Bundle",
            imageUrl: "https://i.postimg.cc/tJdmRnfc/Скриншот_10_01_2026_205259.jpg",
            price: "5,999 Robux",
            included: [
              { name: "250,000 Coins", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" },
              { name: "Secret Ticket (+200% Secret Luck, UNTRADEABLE) (x1)", imageUrl: "https://i.postimg.cc/j2JtMcDP/transparent-Photoroom-(62).png" }
            ]
          }
        ],

        coins: [
          { name: "500 Coins", detailsText: "", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" , price: "30 Robux" },
          { name: "2,900 Coins", detailsText: "", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" , price: "165 Robux" },
          { name: "5,000 Coins", detailsText: "", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" , price: "280 Robux" },
          { name: "10,000 Coins", detailsText: "", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" , price: "550 Robux" },
          { name: "20,000 Coins", detailsText: "", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" , price: "1,000 Robux" },
          { name: "60,000 Coins", detailsText: "", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" , price: "2,499 Robux" }
        ],

        gems: [
          { name: "10 Gems", detailsText: "", imageUrl: "https://i.postimg.cc/8kHP7fTp/Gem.png" , price: "30 Robux" },
          { name: "50 Gems", detailsText: "", imageUrl: "https://i.postimg.cc/8kHP7fTp/Gem.png" , price: "90 Robux" },
          { name: "100 Gems", detailsText: "", imageUrl: "https://i.postimg.cc/8kHP7fTp/Gem.png" , price: "170 Robux" },
          { name: "500 Gems", detailsText: "", imageUrl: "https://i.postimg.cc/8kHP7fTp/Gem.png" , price: "820 Robux" },
          { name: "1,000 Gems", detailsText: "", imageUrl: "https://i.postimg.cc/8kHP7fTp/Gem.png" , price: "1,550 Robux" },
          { name: "2,500 Gems", detailsText: "", imageUrl: "https://i.postimg.cc/8kHP7fTp/Gem.png" , price: "3,600 Robux" }
        ],

        gamepasses: [
          { name: "+300 Storage", detailsText: "Gives you +300 Unit slots in the Storage", imageUrl: "https://i.postimg.cc/Z5D68vbd/Скриншот_04-08-2025_214829-Photoroom.png", price: "199 Robux" },
          { name: "Lucky", detailsText: "Gives you +25% Banner luck boost", imageUrl: "https://i.postimg.cc/WbLWZKWv/Скриншот_04-08-2025_214517-Photoroom.png", price: "199 Robux" },
          { name: "x2 Speed", detailsText: "Unlocks x2 Speed in match", imageUrl: "https://i.postimg.cc/jScKCX9C/Скриншот_18-08-2025_201936-Photoroom.png", price: "299 Robux" },

          {
            name: "VIP",
            imageUrl: "https://i.postimg.cc/V60grBXv/Скриншот_04-08-2025_214628-Photoroom.png",
            price: "299 Robux",
            included: [
              { name: "VIP Tag", imageUrl: "https://i.postimg.cc/MZDKnfzx/Скриншот_10_01_2026_193533.jpg" },
              { name: "Vip Booth", imageUrl: "https://i.postimg.cc/fWKTVSMM/Скриншот_10_01_2026_193602.jpg" },
              { name: "Golden Camera Guy Morph", imageUrl: "https://i.postimg.cc/NG4fK2Qg/Скриншот_10_01_2026_193741.jpg" },
              { name: "+25% Coins boost", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" },
              { name: "+25% EXP boost", imageUrl: "https://i.postimg.cc/HL6FGM5V/transparent-Photoroom-(58).png" }
            ]
          },

          { name: "x2 Coins", detailsText: "Gives you +100% Coins boost", imageUrl: "https://i.postimg.cc/C1SXb2L5/Скриншот_04-08-2025_214204-Photoroom.png", price: "399 Robux" },
          { name: "Ultra Lucky", detailsText: "Gives you +50% Banner luck boost", imageUrl: "https://i.postimg.cc/4dhCfcdb/Скриншот_04-08-2025_215410-Photoroom.png", price: "499 Robux" },
          { name: "Premium Zombie Battle Pass", detailsText: "Unlocks premium path in Zombie Battle Pass (bought in the Battle Pass Menu)", imageUrl: "https://i.postimg.cc/2ST11ntS/transparent_Photoroom_(71).png", price: "599 Robux" },

          {
            name: "Black Market VIP",
            imageUrl: "https://i.postimg.cc/3R5hn3TJ/transparent-Photoroom-(5).png",
            price: "599 Robux/month",
            included: [
              { name: "Black Market VIP Tag", imageUrl: "https://i.postimg.cc/nVkcX9nc/Скриншот_10_01_2026_193447.jpg" },
              { name: "Diamond Camera Guy Morph", imageUrl: "https://i.postimg.cc/1RH58Vys/Скриншот_10_01_2026_193701.jpg" },
              { name: "+20% Coins boost", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" },
              { name: "+20% EXP boost", imageUrl: "https://i.postimg.cc/HL6FGM5V/transparent-Photoroom-(58).png" },
              { name: "+10% Coins boost to your Party", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" },
              { name: "+10% EXP boost to your Party", imageUrl: "https://i.postimg.cc/HL6FGM5V/transparent-Photoroom-(58).png" },
              { name: "+15% more rewards from Robux purchases", imageUrl: "https://i.postimg.cc/MG42MRGL/image.png" },
              { name: "+15% more rewards from Black Market Trades", imageUrl: "https://i.postimg.cc/t4541Qd1/image.png" },
              { name: "+2 Units slots in your Base", imageUrl: "https://i.postimg.cc/cLC8NB8s/image.png" },
              { name: "Monthly: Plunger Potion (x2) (+1 for every month subscribed, capped at 5)", imageUrl: "https://i.postimg.cc/JhhMBM5k/transparent-Photoroom-(60).png" },
              { name: "Monthly: Shiny Potion (x2) (+1 for every month subscribed, capped at 5)", imageUrl: "https://i.postimg.cc/qqNTDL5f/transparent-Photoroom-(59).png" },
              { name: "First time: 7,500 Coins", imageUrl: "https://i.postimg.cc/zv0J66xX/Coin.png" },
              { name: "First time: 250 Gems", imageUrl: "https://i.postimg.cc/8kHP7fTp/Gem.png" }
            ]
          }
        ],

        potions: [
          { name: "Shiny Potion", detailsText: "Gives you +100% Shiny luck (works ONLY for Crafting, Banner, Map drops).", imageUrl: "https://i.postimg.cc/qqNTDL5f/transparent-Photoroom-(59).png" , priceX1: "49 Robux", priceX10: "399 Robux" },
          { name: "Plunger Potion", detailsText: "Gives you +50% Map drops chance.", imageUrl: "https://i.postimg.cc/JhhMBM5k/transparent-Photoroom-(60).png" , priceX1: "49 Robux", priceX10: "399 Robux" }
        ],

        keys: [
          { name: "Tag Key", detailsText: "For opening Tag Crate", imageUrl: "https://i.postimg.cc/m2pmGzT0/Tag_Key.png" , priceX1: "25 Robux", priceX10: "199 Robux" },
          { name: "Emote Key", detailsText: "For opening Emote Crate", imageUrl: "https://i.postimg.cc/RZ0mdbRH/Morph_Key.png" , priceX1: "39 Robux", priceX10: "349 Robux" },
          { name: "Morph Key", detailsText: "For opening Morph Crate", imageUrl: "https://i.postimg.cc/xjpHk1GH/transparent-Photoroom-(61).png" , priceX1: "39 Robux", priceX10: "349 Robux" },
          { name: "Summer Key", detailsText: "For opening Summer Crate", imageUrl: "https://i.postimg.cc/JhWx3tjw/Summer_Key.png" , priceX1: "99 Robux", priceX10: "799 Robux" },
          { name: "Zombie Key", detailsText: "For opening Zombie Crate", imageUrl: "https://i.postimg.cc/TwBk8nMK/Zombie_Key.png" , priceX1: "99 Robux", priceX10: "799 Robux" },
          { name: "Raid Key", detailsText: "For opening Raid Crate", imageUrl: "https://i.postimg.cc/43TxBSS7/Raid_Key.png" , priceX1: "99 Robux", priceX10: "799 Robux" },
          { name: "Weapon Key", detailsText: "For opening Weapon Crate", imageUrl: "https://i.postimg.cc/Kvfmhgvv/Weapon_Key.png" , priceX1: "199 Robux", priceX10: "1,499 Robux" },
          { name: "Upgraded Raid Key", detailsText: "For opening Upgraded Raid Crate", imageUrl: "https://i.postimg.cc/d15jBtbz/Skrinsot-19-04-2026-152205.jpg" , priceX1: "199 Robux", priceX10: "1,499 Robux" }
        ]
      },

      // ----- CODES (manual) -----
      codes: [
        { code: "SamuraiUpdate", reward: "350 coins" },
        { code: "125KLIKES", reward: "500 coins" },
        { code: "450KMEMBERS", reward: "1000 coins" },
        { code: "475KMEMBERS", reward: "1000 coins" },
        { code: "475KFavorites", reward: "500 coins" },
        { code: "2YearAnniversary", reward: "2000 coins" },
        { code: "FOLLOWETHYRIAS", reward: "50 coins" },
        { code: "FOLLOWMALACHITE", reward: "50 coins" },
        { code: "FOLLOWU_VKV", reward: "50 coins" }
        // замени на реальные коды
      ],

      // ----- SIGNS (manual) -----
      // Fill this list with the ONLY people who can sign Units.
      // Each row: imageUrl + username (left column), role, signEffect + signEffectImageUrl (right side).
      signs: [
        // Example:
        // {
        //   username: "ExampleUser",
        //   role: "Developer",
        //   imageUrl: "https://i.postimg.cc/3N4XZZ3m/image.png",
        //   signEffect: "+2.5% Unit damage",
        //   signEffectImageUrl: "https://i.postimg.cc/3N4XZZ3m/image.png"
        // }
      ],

      // ----- TIER LISTS (ручной ввод, NEW) -----
// Overall Tier List: ranks units across ALL rarities together (manual list).
overallTierList: {
  S: [
    { name: "Golden Scientist TV Guy", rarity: "epic", imageUrl: "https://i.postimg.cc/BnzM4sqr/Golden-Scientist-TV-Guy.png" },
    { name: "Toxic Titan Camera Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/9QWkD1Q7/transparent_Photoroom_(99).png" },
    { name: "Upgraded Titan TV Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/J0FHCJNb/transparent_Photoroom_(77).png" },
    { name: "Enhanced Energy TV Guy", rarity: "secret", imageUrl: "https://i.postimg.cc/brKXLS73/transparent_Photoroom_(36).png" },
  ],
  A: [
    { name: "Titan Grill Guy (full gas)", rarity: "secret", imageUrl: "https://i.postimg.cc/htdfg28L/transparent_Photoroom_2026_01_23T151103_818.png" },
    { name: "Clock Woman", rarity: "secret", imageUrl: "https://i.postimg.cc/PJBGKvgm/transparent_Photoroom_(37).png" },
    { name: "Infected Titan Speaker Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/HkhfgqS4/Infected_Titan_Speaker_Guy.png" },
    { name: "Golden Hero Speaker Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/44WKtSWj/transparent_Photoroom_(94).png" },
    { name: "Saw Titan Camera Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/8z1Y7wzW/transparent_Photoroom_(97).png" },
    { name: "Golden Disabler Camera Guy", rarity: "legendary", imageUrl: "https://i.postimg.cc/2831x7tX/transparent_Photoroom_(90).png" },
    { name: "Astro Titan Camera Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/3rtypcts/transparent_Photoroom_(92).png" },
    { name: "Upgraded Titan Speaker Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/KYJ5mKgB/transparent_Photoroom_2026_01_27T203432_454.png" },
    { name: "Overcharged Titan Speaker Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/cLszvTLM/transparent_Photoroom_(96).png" },
    { name: "Golden Engineer Camera Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/hP8w4Nch/transparent_Photoroom_(95).png" },
    { name: "Titan Sandcastle Guy (fortified)", rarity: "mythic", imageUrl: "https://i.postimg.cc/0ywbxVGd/transparent_Photoroom_2026_01_23T151316_035.png" },
    { name: "Glitch Camera Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/CLfvdX0L/transparent_Photoroom_2026_01_22T220717_805.png" },
    { name: "Commander Camera Guy", rarity: "legendary", imageUrl: "https://i.postimg.cc/dtDh9jXc/transparent_Photoroom_(87).png" },
    { name: "Moyai", rarity: "legendary", imageUrl: "https://i.postimg.cc/wBZqch2Y/Moyai-Totem.png" },
    { name: "Shackled Speaker Guy (no escape)", rarity: "legendary", imageUrl: "https://i.postimg.cc/XNhs3ZLm/transparent_Photoroom_2026_01_23T232216_711.png" },
  ],
  B: [
    { name: "Golden Buzzsaw Camera Guy", rarity: "legendary", imageUrl: "https://i.postimg.cc/NfLKxknW/transparent_Photoroom_(88).png" },
    { name: "Speaker Woman (katana)", rarity: "mythic", imageUrl: "https://i.postimg.cc/W1hycCQj/transparent_Photoroom_2026_01_25T140144_852.png" },
    { name: "Golden Mace Camera Guy", rarity: "legendary", imageUrl: "https://i.postimg.cc/G3XBY5Mw/transparent_Photoroom_(91).png" },
    { name: "Zombie Titan TV Guy (enraged)", rarity: "secret", imageUrl: "https://i.postimg.cc/ryRJxwrP/transparent-Photoroom-2026-01-27T200250-157.png" },
    { name: "Upgraded Titan Camera Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/Kzdbs8QX/transparent_Photoroom_2026_01_27T204848_524.png" },
    { name: "Dave", rarity: "mythic", imageUrl: "https://i.postimg.cc/3rpY2zb7/transparent_Photoroom_(84).png" },
    { name: "Dark Speaker Guy 2.0 (spear)", rarity: "legendary", imageUrl: "https://i.postimg.cc/x1h4fg2Y/transparent_Photoroom_2026_01_25T135449_640.png" },
    { name: `Camera Woman 3.0`, rarity: "mythic", imageUrl: "https://i.postimg.cc/BZD42Rwj/transparent_Photoroom_(83).png" },
    { name: `Shackled Speaker Guy`, rarity: "epic", imageUrl: "https://i.postimg.cc/qv3fn1Z6/Shackled-Speaker-Guy.png" },
    { name: "Witch TV Woman (broom)", rarity: "legendary", imageUrl: "https://i.postimg.cc/PfcShLyF/transparent_Photoroom_2026_01_23T232325_156.png" },
    { name: `Toxic Camera Guy`, rarity: "epic", imageUrl: "https://i.postimg.cc/fL3YT0bt/Toxic-Camera-Guy.png" },
    { name: `Carrot Farmer Camera Guy`, rarity: "epic", imageUrl: "https://i.postimg.cc/NMkngVC7/Carrot-Farmer-Camera-Guy.png" },
    { name: `Captain Camera Guy`, rarity: "epic", imageUrl: "https://i.postimg.cc/vZn3Ykcd/Captain-Camera-Guy.png" },
    { name: "Titan Cinema Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/0NcC96J6/transparent_Photoroom_2026_01_27T203709_076.png" },
    { name: "Engineer Camera Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/2yVdHMLX/Engineer_Camera_Guy.png" },
    { name: "Golden Crusher Camera Guy", rarity: "legendary", imageUrl: "https://i.postimg.cc/Gh94jxff/transparent_Photoroom_(89).png" },
    { name: "Chief Scientist Camera Guy (command)", rarity: "mythic", imageUrl: "https://i.postimg.cc/59sHvRsg/transparent_Photoroom_(93).png" },
    { name: "Tub Engineer Camera Guy (atomic)", rarity: "mythic", imageUrl: "https://i.postimg.cc/zGgV5xwK/transparent_Photoroom_2026_01_23T154606_993.png" },
    { name: "Hero Speaker Guy (revived)", rarity: "mythic", imageUrl: "https://i.postimg.cc/WbJ9tCV2/transparent_Photoroom_2026_01_22T220534_143.png" },
    { name: "Large Red Laser Camera Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/y69s02r1/transparent_Photoroom_(85).png" },
  ],
  C: [
    { name: "Prototype Camera Toilet", rarity: "mythic", imageUrl: "https://i.postimg.cc/sfktdh4N/transparent_Photoroom_2026_01_28T185403_131.png" },
    { name: `TV Woman (infernal)`, rarity: "mythic", imageUrl: "https://i.postimg.cc/T3RsKQ3L/transparent_Photoroom_(98).png" },
    { name: "Dark Speaker Guy 2.0", rarity: "legendary", imageUrl: "https://i.postimg.cc/yN648Ksc/transparent_Photoroom_(30).png" },
    { name: `Energy TV Guy`, rarity: "secret", imageUrl: "https://i.postimg.cc/brKXLS73/transparent_Photoroom_(36).png" },
    { name: "Zombie Titan TV Guy", rarity: "secret", imageUrl: "https://i.postimg.cc/9FtcjXhF/transparent_Photoroom_(14).png" },
    { name: `Titan Grill Guy`, rarity: "secret", imageUrl: "https://i.postimg.cc/VvWdJj27/Titan_Grill.png" },
    { name: "Chief Scientist Camera Guy", rarity: "legendary", imageUrl: "https://i.postimg.cc/nL2RRQ8X/transparent_Photoroom_(28).png" },
    { name: `Vampire Camera Woman (royale)`, rarity: "legendary", imageUrl: "https://i.postimg.cc/T1Z0cShc/transparent_Photoroom_2026_01_23T232242_319.png" },
    { name: `Grillmaster TV Guy`, rarity: "epic", imageUrl: "https://i.postimg.cc/dtWQqDkh/transparent_Photoroom_2026_01_28T170415_552.png" },
    { name: `Cauldron Toilet`, rarity: "epic", imageUrl: "https://i.postimg.cc/YCjBdpnd/Cauldron-Toilet.png" },
    { name: `Beach Speaker Guy`, rarity: "legendary", imageUrl: "https://i.postimg.cc/Y0Hv2XDy/Beach_Speaker_Guy.png" },
    { name: "Large Disabler Camera Guy", rarity: "legendary", imageUrl: "https://i.postimg.cc/44tspj2j/transparent_Photoroom_(82).png" },
    { name: "Disabler Camera Guy", rarity: "legendary", imageUrl: "https://i.postimg.cc/02H2mQvP/Disabler_Camera_Guy.png" },
    { name: `Grillmaster TV Guy (chef)`, rarity: "legendary", imageUrl: "https://i.postimg.cc/cLnrZF7f/transparent_Photoroom_2026_01_23T153613_892.png" },
    { name: `Frankengineer (shocked)`, rarity: "mythic", imageUrl: "https://i.postimg.cc/vT0XW6VC/transparent_Photoroom_(15).png" },
    { name: `Titan Sandcastle Guy`, rarity: "mythic", imageUrl: "https://i.postimg.cc/sxrMfnHH/Titan_Sandcastle.png" },
  ],
  D: [
    { name: `Bunny Racer Camera Guy`, rarity: "mythic", imageUrl: "https://i.postimg.cc/9MpJvFWC/transparent_Photoroom_(45).png" },
    { name: "Diamond Camera Toilet", rarity: "mythic", imageUrl: "https://i.postimg.cc/tgJ6z7wV/transparent_Photoroom_2026_01_28T184624_448.png" },
    { name: `Frankengineer`, rarity: "mythic", imageUrl: "https://i.postimg.cc/vT0XW6VC/transparent_Photoroom_(15).png" },
    { name: `Scientist Camera Guy`, rarity: "rare", imageUrl: "https://i.postimg.cc/hv9FJZtK/Scientist-Camera-Guy.png" },
    { name: `Vampire Camera Woman`, rarity: "legendary", imageUrl: "https://i.postimg.cc/DZLsS6BY/Vampire_Camera_Woman.png" },
    { name: "Red Laser Camera Guy", rarity: "mythic", imageUrl: "https://i.postimg.cc/G3Ydv6S2/transparent_Photoroom_(86).png" },
    { name: "Pirate Speaker Woman (cannon)", rarity: "mythic", imageUrl: "https://i.postimg.cc/tRfBy1kc/transparent_Photoroom_2026_01_23T232348_224.png" },
    { name: `Titan Camera Guy`, rarity: "mythic", imageUrl: "https://i.postimg.cc/CKYgWDRF/transparent_Photoroom_(33).png" },
    { name: `Titan TV Guy`, rarity: "mythic", imageUrl: "https://i.postimg.cc/fy3nxfrx/transparent_Photoroom_(34).png" },
    { name: `Titan Speaker Guy`, rarity: "mythic", imageUrl: "https://i.postimg.cc/d3zMnZbn/transparent_Photoroom_(35).png" },
  ],
  E: [
    { name: `Neko TV Woman`, rarity: "mythic", imageUrl: "https://i.postimg.cc/N009f1FG/transparent_Photoroom_2026_01_28T155403_161.png" },
    { name: `Neko TV Woman (fallen)`, rarity: "mythic", imageUrl: "https://i.postimg.cc/R006Vchq/transparent_Photoroom_2026_01_28T155411_641.png" },
    { name: `Scientist TV Guy`, rarity: "epic", imageUrl: "https://i.postimg.cc/6qvSR3Yj/Scientist-TV-Guy.png" },
  ],
},

// Rarity Tier Lists: fill tiers separately for each rarity (manual lists).

            rarityTierLists: {
        common: {
          S: [],
          A: [
            { name: "Speaker Guy", imageUrl: "https://i.postimg.cc/59qKBMfc/Speaker-Guy.png" },
            { name: "TV Guy", imageUrl: "https://i.postimg.cc/4dGbym7Y/TV-Guy.png" },
          ],
          B: [
            { name: "Camera Guy", imageUrl: "https://i.postimg.cc/qv7FBZfK/Camera-Guy.png" },
          ],
          C: [],
          D: [],
          E: []
        },
        uncommon: {
          S: [],
          A: [
            { name: "Helicopter Speaker", imageUrl: "https://i.postimg.cc/hvtmQYL8/Helicopter-Speaker.png" },
            { name: `Dark Speaker Guy`, imageUrl: "https://i.postimg.cc/59898gPh/Dark-Speaker-Guy.png" },
          ],
          B: [
            { name: `Camera Toilet`, imageUrl: "https://i.postimg.cc/Y2DRfNvk/Camera-Toilet.png" },
          ],
          C: [
            { name: `Camera Drone`, imageUrl: "https://i.postimg.cc/hGwy49Ts/Camera-Drone.png" },
          ],
          D: [],
          E: []
        },
        rare: {
          S: [],
          A: [
            { name: `Scientist Camera Guy`, imageUrl: "https://i.postimg.cc/hv9FJZtK/Scientist-Camera-Guy.png" },
          ],
          B: [
            { name: `Construction Camera Guy`, imageUrl: "https://i.postimg.cc/mkTT31pK/Construction-Camera-Guy.png" },
            { name: `Large Speaker Guy`, imageUrl: "https://i.postimg.cc/zGcYLgFp/Large-Speaker-Guy.png" },
          ],
          C: [
            { name: `Rocket Camera Guy`, imageUrl: "https://i.postimg.cc/vH2BGDk9/Rocket-Camera-Guy.png" },
            { name: `Infected Camera Guy`, imageUrl: "https://i.postimg.cc/m2DtKKV0/Infected-Camera-Guy.png" },
            { name: `Chill Camera Toilet`, imageUrl: "https://i.postimg.cc/15HrKxXK/Chill-Camera-Toilet.png" },
          ],
          D: [
            { name: `Large Camera Guy`, imageUrl: "https://i.postimg.cc/Hx32xQQL/Large-Camera-Guy.png" },
            { name: `Bunny Assassin Speaker Guy`, imageUrl: "https://i.postimg.cc/t70tmyWp/Bunny-Assassin-Speaker-Guy.png" },
          ],
          E: []
        },
        epic: {
          S: [
            { name: "Golden Scientist TV Guy", imageUrl: "https://i.postimg.cc/BnzM4sqr/Golden-Scientist-TV-Guy.png" },
          ],
          A: [
            { name: `Shackled Speaker Guy`, imageUrl: "https://i.postimg.cc/qv3fn1Z6/Shackled-Speaker-Guy.png" },
            { name: `Toxic Camera Guy`, imageUrl: "https://i.postimg.cc/fL3YT0bt/Toxic-Camera-Guy.png" },
            { name: `Captain Camera Guy`, imageUrl: "https://i.postimg.cc/vZn3Ykcd/Captain-Camera-Guy.png" },
            { name: `Carrot Farmer Camera Guy`, imageUrl: "https://i.postimg.cc/NMkngVC7/Carrot-Farmer-Camera-Guy.png" },
          ],
          B: [
            { name: `Cauldron Toilet`, imageUrl: "https://i.postimg.cc/YCjBdpnd/Cauldron-Toilet.png" },
            { name: `Large Toilet Camera Guy`, imageUrl: "https://i.postimg.cc/JhhRXNJv/Large-Toilet-Camera-Guy.png" },
            { name: `Large TV Guy`, imageUrl: "https://i.postimg.cc/Y9qM11FK/Large-TV-Guy.png" },
            { name: `Dark Stereocopter`, imageUrl: "https://i.postimg.cc/HxMpBpxn/Dark-Stereocopter.png" },
            { name: `Large Rocket Camera Guy`, imageUrl: "https://i.postimg.cc/bJXFP8zn/Large-Rocket-Camera-Guy.png" },
            { name: `Garage`, imageUrl: "https://i.postimg.cc/x87cqsc9/Garage.png" },
            { name: `Ninja Camera Guy`, imageUrl: "https://i.postimg.cc/V6jnCPXG/Ninja-Camera-Guy.png" },
          ],
          C: [
            { name: `Grillmaster TV Guy`, imageUrl: "https://i.postimg.cc/dtWQqDkh/transparent_Photoroom_2026_01_28T170415_552.png" },
            { name: `Shield Camera Guy`, imageUrl: "https://i.postimg.cc/DZVwLWgW/Shield_Camera_Guy.png" },
            { name: `Large Infected Camera Guy`, imageUrl: "https://i.postimg.cc/N0Rk1XcT/Large-Infected-Camera-Guy.png" },
          ],
          D: [
          ],
          E: [
            { name: `Scientist TV Guy`, imageUrl: "https://i.postimg.cc/6qvSR3Yj/Scientist-TV-Guy.png" },
          ]
        },
        legendary: {
          S: [
            { name: "Golden Crusher Camera Guy", imageUrl: "https://i.postimg.cc/Gh94jxff/transparent_Photoroom_(89).png" },
            { name: "Golden Buzzsaw Camera Guy", imageUrl: "https://i.postimg.cc/NfLKxknW/transparent_Photoroom_(88).png" },
            { name: "Golden Mace Camera Guy", imageUrl: "https://i.postimg.cc/G3XBY5Mw/transparent_Photoroom_(91).png" },
            { name: "Golden Disabler Camera Guy", imageUrl: "https://i.postimg.cc/2831x7tX/transparent_Photoroom_(90).png" },
            { name: "Commander Camera Guy", imageUrl: "https://i.postimg.cc/dtDh9jXc/transparent_Photoroom_(87).png" },
          ],
          A: [
            { name: "Moyai", imageUrl: "https://i.postimg.cc/wBZqch2Y/Moyai-Totem.png" },
            { name: "Shackled Speaker Guy (no escape)", imageUrl: "https://i.postimg.cc/XNhs3ZLm/transparent_Photoroom_2026_01_23T232216_711.png" },
            { name: "Mace Camera Guy", imageUrl: "https://i.postimg.cc/nhgPFTty/transparent_Photoroom_2026_01_25T140008_055.png" },
            { name: `Beach Speaker Guy`, imageUrl: "https://i.postimg.cc/Y0Hv2XDy/Beach_Speaker_Guy.png" },
            { name: "Tub Engineer", imageUrl: "https://i.postimg.cc/x82Xjsp6/Tub_Engineer_Camera_Guy.png" },
            { name: "Witch TV Woman (broom)", imageUrl: "https://i.postimg.cc/PfcShLyF/transparent_Photoroom_2026_01_23T232325_156.png" },
            { name: "Dark Speaker Guy 2.0 (spear)", imageUrl: "https://i.postimg.cc/x1h4fg2Y/transparent_Photoroom_2026_01_25T135449_640.png" },
            { name: "Chief Scientist Camera Guy", imageUrl: "https://i.postimg.cc/nL2RRQ8X/transparent_Photoroom_(28).png" },
            { name: "Wave Ninja Camera Guy (ripples)", imageUrl: "https://i.postimg.cc/CxqzYcCC/transparent_Photoroom_2026_01_23T152459_596.png" },
            { name: `Vampire Camera Woman (royale)`, imageUrl: "https://i.postimg.cc/T1Z0cShc/transparent_Photoroom_2026_01_23T232242_319.png" },
          ],
          B: [
            { name: "Buzzsaw Camera Guy", imageUrl: "https://i.postimg.cc/sDxXBkWG/transparent_Photoroom_2026_01_27T191037_261.png" },
            { name: "Speaker Woman", imageUrl: "https://i.postimg.cc/QMm44WLM/transparent_Photoroom_(27).png" },
            { name: "Dark Speaker Guy 2.0", imageUrl: "https://i.postimg.cc/yN648Ksc/transparent_Photoroom_(30).png" },
            { name: "TV Woman", imageUrl: "https://i.postimg.cc/GpK77s0b/transparent_Photoroom_(26).png" },
            { name: "Wave Crusher Camera Guy", imageUrl: "https://i.postimg.cc/fyNVWHqH/Wave_Camera_Crusher.png" },
            { name: "Disabler Camera Guy", imageUrl: "https://i.postimg.cc/02H2mQvP/Disabler_Camera_Guy.png" },
            { name: "Witch TV Woman", imageUrl: "https://i.postimg.cc/MZ9b8bD0/transparent_Photoroom_2026_01_28T172737_645.png" },
            { name: "Camera Woman 2.0", imageUrl: "https://i.postimg.cc/PfZT10Fs/transparent_Photoroom_(80).png" },
            { name: `Pirate Speaker Woman`, imageUrl: "https://i.postimg.cc/vZnQFKTc/Pirate_Speaker_Woman.png" },
            { name: `Crusher Camera Guy`, imageUrl: "https://i.postimg.cc/mDRmXFWN/transparent_Photoroom_(53).png" },
            { name: "Wave Ninja Camera Guy", imageUrl: "https://i.postimg.cc/cHYjbkY8/transparent_Photoroom_2026_01_28T172419_568.png" },
            { name: `Upgraded Dark Stereocopter`, imageUrl: "https://i.postimg.cc/c1z9xZpr/transparent_Photoroom_(100).png" },
            { name: "Golden Camera Toilet", imageUrl: "https://i.postimg.cc/7PJv6m87/transparent_Photoroom_(32).png" },
            { name: `Vampire Camera Woman`, imageUrl: "https://i.postimg.cc/DZLsS6BY/Vampire_Camera_Woman.png" },
            { name: `Camera Woman`, imageUrl: "https://i.postimg.cc/4d38rNZV/transparent_Photoroom_(29).png" },
            { name: "Large Disabler Camera Guy", imageUrl: "https://i.postimg.cc/44tspj2j/transparent_Photoroom_(82).png" },
          ],
          C: [
            { name: `Grillmaster TV Guy (chef)`, imageUrl: "https://i.postimg.cc/cLnrZF7f/transparent_Photoroom_2026_01_23T153613_892.png" },
            { name: "Thrower Camera Guy", imageUrl: "https://i.postimg.cc/pXSqnZ2P/transparent_Photoroom_(25).png" },
            { name: "Flamethrower Camera Guy", imageUrl: "https://i.postimg.cc/j59GcJNx/transparent_Photoroom_(31).png" },
            { name: "Flamethrower Camera Guy (blue flames)", imageUrl: "https://i.postimg.cc/MZRq1grk/transparent_Photoroom_(81).png" },
          ],
          D: [
            { name: "Egg Launcher Camera Guy", imageUrl: "https://i.postimg.cc/90k9Dky7/Egg_Launcher_Camera_Guy.png" },
          ],
          E: [
            { name: "Hero Speaker Guy", imageUrl: "https://i.postimg.cc/mDw802b1/transparent_Photoroom_(49).png" },
          ]
        },
        mythic: {
          S: [
            { name: "Upgraded Titan TV Guy", imageUrl: "https://i.postimg.cc/J0FHCJNb/transparent_Photoroom_(77).png" },
            { name: "Toxic Titan Camera Guy", imageUrl: "https://i.postimg.cc/9QWkD1Q7/transparent_Photoroom_(99).png" },
          ],
          A: [
            { name: "Infected Titan Speaker Guy", imageUrl: "https://i.postimg.cc/HkhfgqS4/Infected_Titan_Speaker_Guy.png" },
            { name: "Golden Hero Speaker Guy", imageUrl: "https://i.postimg.cc/44WKtSWj/transparent_Photoroom_(94).png" },
            { name: "Astro Titan Camera Guy", imageUrl: "https://i.postimg.cc/3rtypcts/transparent_Photoroom_(92).png" },
            { name: "Upgraded Titan Speaker Guy", imageUrl: "https://i.postimg.cc/KYJ5mKgB/transparent_Photoroom_2026_01_27T203432_454.png" },
            { name: "Saw Titan Camera Guy", imageUrl: "https://i.postimg.cc/8z1Y7wzW/transparent_Photoroom_(97).png" },
            { name: "Overcharged Titan Speaker Guy", imageUrl: "https://i.postimg.cc/cLszvTLM/transparent_Photoroom_(96).png" },
            { name: "Golden Engineer Camera Guy", imageUrl: "https://i.postimg.cc/hP8w4Nch/transparent_Photoroom_(95).png" },
            { name: "Titan Sandcastle Guy (fortified)", imageUrl: "https://i.postimg.cc/0ywbxVGd/transparent_Photoroom_2026_01_23T151316_035.png" },
            { name: "Glitch Camera Guy", imageUrl: "https://i.postimg.cc/CLfvdX0L/transparent_Photoroom_2026_01_22T220717_805.png" },
          ],
          B: [
            { name: "Upgraded Titan Camera Guy", imageUrl: "https://i.postimg.cc/Kzdbs8QX/transparent_Photoroom_2026_01_27T204848_524.png" },
            { name: "Dave", imageUrl: "https://i.postimg.cc/3rpY2zb7/transparent_Photoroom_(84).png" },
            { name: "Speaker Woman (katana)", imageUrl: "https://i.postimg.cc/W1hycCQj/transparent_Photoroom_2026_01_25T140144_852.png" },
            { name: `Camera Woman 3.0`, imageUrl: "https://i.postimg.cc/BZD42Rwj/transparent_Photoroom_(83).png" },
            { name: "Titan Cinema Guy", imageUrl: "https://i.postimg.cc/0NcC96J6/transparent_Photoroom_2026_01_27T203709_076.png" },
            { name: "Engineer Camera Guy", imageUrl: "https://i.postimg.cc/2yVdHMLX/Engineer_Camera_Guy.png" },
            { name: "Chief Scientist Camera Guy (command)", imageUrl: "https://i.postimg.cc/59sHvRsg/transparent_Photoroom_(93).png" },
            { name: "Tub Engineer Camera Guy (atomic)", imageUrl: "https://i.postimg.cc/zGgV5xwK/transparent_Photoroom_2026_01_23T154606_993.png" },
            { name: "Hero Speaker Guy (revived)", imageUrl: "https://i.postimg.cc/WbJ9tCV2/transparent_Photoroom_2026_01_22T220534_143.png" },
          ],
          C: [
            { name: "Prototype Camera Toilet", imageUrl: "https://i.postimg.cc/sfktdh4N/transparent_Photoroom_2026_01_28T185403_131.png" },
            { name: `TV Woman (infernal)`, imageUrl: "https://i.postimg.cc/T3RsKQ3L/transparent_Photoroom_(98).png" },
            { name: "Large Red Laser Camera Guy", imageUrl: "https://i.postimg.cc/y69s02r1/transparent_Photoroom_(85).png" },
            { name: `Frankengineer (shocked)`, imageUrl: "https://i.postimg.cc/vT0XW6VC/transparent_Photoroom_(15).png" },
            { name: `Titan Sandcastle Guy`, imageUrl: "https://i.postimg.cc/sxrMfnHH/Titan_Sandcastle.png" },
          ],
          D: [
            { name: `Bunny Racer Camera Guy`, imageUrl: "https://i.postimg.cc/9MpJvFWC/transparent_Photoroom_(45).png" },
            { name: `Frankengineer`, imageUrl: "https://i.postimg.cc/vT0XW6VC/transparent_Photoroom_(15).png" },
            { name: "Red Laser Camera Guy", imageUrl: "https://i.postimg.cc/G3Ydv6S2/transparent_Photoroom_(86).png" },
            { name: "Pirate Speaker Woman (cannon)", imageUrl: "https://i.postimg.cc/tRfBy1kc/transparent_Photoroom_2026_01_23T232348_224.png" },
            { name: `Titan Camera Guy`, imageUrl: "https://i.postimg.cc/CKYgWDRF/transparent_Photoroom_(33).png" },
            { name: "Diamond Camera Toilet", imageUrl: "https://i.postimg.cc/tgJ6z7wV/transparent_Photoroom_2026_01_28T184624_448.png" },
            { name: `Titan TV Guy`, imageUrl: "https://i.postimg.cc/fy3nxfrx/transparent_Photoroom_(34).png" },
            { name: `Titan Speaker Guy`, imageUrl: "https://i.postimg.cc/d3zMnZbn/transparent_Photoroom_(35).png" },
          ],
          E: [
            { name: `Neko TV Woman`, imageUrl: "https://i.postimg.cc/N009f1FG/transparent_Photoroom_2026_01_28T155403_161.png" },
            { name: `Neko TV Woman (fallen)`, imageUrl: "https://i.postimg.cc/R006Vchq/transparent_Photoroom_2026_01_28T155411_641.png" },
          ]
        },
        secret: {
          S: [
            { name: "Enhanced Energy TV Guy", imageUrl: "https://i.postimg.cc/brKXLS73/transparent_Photoroom_(36).png" },
          ],
          A: [
            { name: "Titan Grill Guy (full gas)", imageUrl: "https://i.postimg.cc/htdfg28L/transparent_Photoroom_2026_01_23T151103_818.png" },
            { name: "Clock Woman", imageUrl: "https://i.postimg.cc/PJBGKvgm/transparent_Photoroom_(37).png" },
          ],
          B: [
            { name: "Zombie Titan TV Guy (enraged)", imageUrl: "https://i.postimg.cc/ryRJxwrP/transparent-Photoroom-2026-01-27T200250-157.png" },
          ],
          C: [
            { name: `Energy TV Guy`, imageUrl: "https://i.postimg.cc/brKXLS73/transparent_Photoroom_(36).png" },
            { name: `Titan Grill Guy`, imageUrl: "https://i.postimg.cc/VvWdJj27/Titan_Grill.png" },
            { name: "Zombie Titan TV Guy", imageUrl: "https://i.postimg.cc/9FtcjXhF/transparent_Photoroom_(14).png" },
          ],
          D: [],
          E: []
        }
      }
      ,
      // ----- GEARS (manual) -----
      gears: [
        {
          name: "Titan's Hammer",
          imageUrl: "https://i.postimg.cc/yY58L0DM/Скриншот_11_01_2026_145509.jpg",
          unlockedWith: {
            name: "Titan's Hammer Gear Blueprint",
            imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png"
          },
          levels: [
            {
              level: 1,
              cooldown: "85 seconds",
              craft: [
                { name: "Titan's Hammer", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/wMj0H8vT/transparent_Photoroom_(50).png" },
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 200 damage in 25 splash radius", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 2,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 225 damage in 25 splash radius", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 3,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 250 damage in 25 splash radius", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 4,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 275 damage in 25 splash radius", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 5,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 300 damage in 25 splash radius and removes 1 shield", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 6,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 325 damage in 25 splash radius and removes 1 shield", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 7,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 350 damage in 25 splash radius and removes 1 shield", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 8,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 375 damage in 25 splash radius and removes 2 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 9,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 400 damage in 25 splash radius and removes 2 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 10,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 425 damage in 25 splash radius and removes 2 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 11,
              cooldown: "85 seconds",
              craft: [
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 450 damage in 25 splash radius and removes 3 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 12,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 475 damage in 25 splash radius and removes 3 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 13,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 500 damage in 25 splash radius and removes 3 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 14,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 525 damage in 25 splash radius and removes 3 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 15,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 550 damage in 25 splash radius and removes 4 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 16,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 575 damage in 25 splash radius and removes 4 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 17,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 600 damage in 25 splash radius and removes 4 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 18,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 625 damage in 25 splash radius and removes 5 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 19,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 650 damage in 25 splash radius and removes 5 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 20,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 675 damage in 25 splash radius and removes 5 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 21,
              cooldown: "85 seconds",
              craft: [
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 700 damage in 25 splash radius and removes 6 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 22,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 725 damage in 25 splash radius and removes 6 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 23,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 750 damage in 25 splash radius and removes 6 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 24,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 775 damage in 25 splash radius and removes 6 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" }
              ]
            },
            {
              level: 25,
              cooldown: "85 seconds",
              craft: [
                { name: "Photon Grenade", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/hvXM1t1V/transparent_Photoroom_(20).png" },
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Fuel Cell", rarity: "epic", quantity: 4, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Charged Battery", rarity: "common", quantity: 40, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 800 damage in 25 splash radius and removes 7 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,000 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 26,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 825 damage in 25 splash radius and removes 7 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,056 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 27,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 850 damage in 25 splash radius and removes 7 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,114 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 28,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 875 damage in 25 splash radius and removes 8 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,173 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 29,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 900 damage in 25 splash radius and removes 8 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,233 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 30,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 925 damage in 25 splash radius and removes 8 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,295 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 31,
              cooldown: "85 seconds",
              craft: [
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 950 damage in 25 splash radius and removes 9 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,359 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 32,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 975 damage in 25 splash radius and removes 9 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,424 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 33,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,000 damage in 25 splash radius and removes 9 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,490 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 34,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,025 damage in 25 splash radius and removes 9 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,558 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 35,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,050 damage in 25 splash radius and removes 10 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,628 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 36,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,075 damage in 25 splash radius and removes 10 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,699 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 37,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,100 damage in 25 splash radius and removes 10 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,771 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 38,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,125 damage in 25 splash radius and removes 11 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,845 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 39,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,150 damage in 25 splash radius and removes 11 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,921 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 40,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,175 damage in 25 splash radius and removes 11 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 1,998 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 41,
              cooldown: "85 seconds",
              craft: [
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,200 damage in 25 splash radius and removes 12 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 2,076 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 42,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,225 damage in 25 splash radius and removes 12 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 2,156 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 43,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,250 damage in 25 splash radius and removes 12 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 2,238 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 44,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,275 damage in 25 splash radius and removes 12 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 2,321 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 45,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,300 damage in 25 splash radius and removes 13 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 2,405 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 46,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,325 damage in 25 splash radius and removes 13 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 2,491 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 47,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,350 damage in 25 splash radius and removes 13 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 2,579 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 48,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,375 damage in 25 splash radius and removes 14 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 2,668 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 49,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,400 damage in 25 splash radius and removes 14 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 2,758 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
            {
              level: 50,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/y6P4vWKW/Battery.png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Ground Smash", description: "Deals 1,425 damage in 25 splash radius and removes 14 shields", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent-Photoroom-2026-02-02T192832-676.png" },
                { name: "Charged Smash", description: "Charge hammer for 9 seconds to deal 2,850 damage", imageUrl: "https://i.postimg.cc/W4XWD9dN/transparent-Photoroom-2026-02-02T214844-050.png" }
              ]
            },
          ],
          skins: [
            { name: "Pool Noodle", rarity: "epic", imageUrl: "https://i.postimg.cc/VsK8342J/transparent_Photoroom_(67).png" },
            { name: "Graveblade", rarity: "legendary", imageUrl: "https://i.postimg.cc/MZ9Shtgj/transparent_Photoroom_(65).png" },
            { name: "Volt Kanabo", rarity: "legendary", imageUrl: "https://i.postimg.cc/nrbTMcDj/transparent-Photoroom-(8).png" }
          ]
        },

        {
          name: "Buzzsaw",
          imageUrl: "https://i.postimg.cc/zXMGxTLq/Скриншот_11_01_2026_145533.jpg",
          unlockedWith: { name: "Buzzsaw Gear Blueprint", imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png" },
          levels: [
            {
              level: 1,
              cooldown: "100 seconds",
              craft: [
                { name: "Buzzsaw", rarity: "epic", quantity: 4, imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png" },
                { name: "Reinforced Plating", rarity: "epic", quantity: 4, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 3 speed, dealing 10 damage in 17 radius with Full AOE for 3 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 2,
              cooldown: "99.25 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 3.2 speed, dealing 11.6 damage in 17 radius with Full AOE for 3.2 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 3,
              cooldown: "98.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 3.4 speed, dealing 13.2 damage in 17 radius with Full AOE for 3.4 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 4,
              cooldown: "97.75 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 3.6 speed, dealing 14.8 damage in 17 radius with Full AOE for 3.6 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 5,
              cooldown: "97 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 3.8 speed, dealing 16.4 damage in 17 radius with Full AOE for 3.8 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 6,
              cooldown: "96.25 seconds",
              craft: [
                { name: "Buzzsaw", rarity: "epic", quantity: 1, imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png" },
                { name: "Charged Battery", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 4 speed, dealing 18 damage in 17 radius with Full AOE for 4 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 7,
              cooldown: "95.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 4.2 speed, dealing 19.6 damage in 17 radius with Full AOE for 4.2 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 8,
              cooldown: "94.75 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 4.4 speed, dealing 21.2 damage in 17 radius with Full AOE for 4.4 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 9,
              cooldown: "94 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 4.6 speed, dealing 22.8 damage in 17 radius with Full AOE for 4.6 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 10,
              cooldown: "93.25 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 4.8 speed, dealing 24.4 damage in 17 radius with Full AOE for 4.8 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 11,
              cooldown: "92.5 seconds",
              craft: [
                { name: "Buzzsaw", rarity: "epic", quantity: 1, imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png" },
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 5 speed, dealing 26 damage in 17 radius with Full AOE for 5 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 12,
              cooldown: "91.75 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 5.2 speed, dealing 27.6 damage in 17 radius with Full AOE for 5.2 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 13,
              cooldown: "91 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 5.4 speed, dealing 29.2 damage in 17 radius with Full AOE for 5.4 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 14,
              cooldown: "90.25 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 5.6 speed, dealing 30.8 damage in 17 radius with Full AOE for 5.6 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 15,
              cooldown: "89.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 5.8 speed, dealing 32.4 damage in 17 radius with Full AOE for 5.8 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 16,
              cooldown: "88.75 seconds",
              craft: [
                { name: "Buzzsaw", rarity: "epic", quantity: 1, imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png" },
                { name: "Charged Battery", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 6 speed, dealing 34 damage in 17 radius with Full AOE for 6 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 17,
              cooldown: "88 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 6.2 speed, dealing 35.6 damage in 17 radius with Full AOE for 6.2 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 18,
              cooldown: "87.25 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 6.4 speed, dealing 37.2 damage in 17 radius with Full AOE for 6.4 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 19,
              cooldown: "86.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 6.6 speed, dealing 38.8 damage in 17 radius with Full AOE for 6.6 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 20,
              cooldown: "85.75 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 6.8 speed, dealing 40.4 damage in 17 radius with Full AOE for 6.8 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 21,
              cooldown: "85 seconds",
              craft: [
                { name: "Buzzsaw", rarity: "epic", quantity: 1, imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png" },
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 7 speed, dealing 42 damage in 17 radius with Full AOE for 7 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 22,
              cooldown: "84.25 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 7.2 speed, dealing 43.6 damage in 17 radius with Full AOE for 7.2 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 23,
              cooldown: "83.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 7.4 speed, dealing 45.2 damage in 17 radius with Full AOE for 7.4 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 24,
              cooldown: "82.75 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 7.6 speed, dealing 46.8 damage in 17 radius with Full AOE for 7.6 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" }
              ]
            },
            {
              level: 25,
              cooldown: "82 seconds",
              craft: [
                { name: "Katana", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/8cX9TYtW/transparent_Photoroom_(19).png" },
                { name: "Mace", rarity: "legendary", quantity: 2, imageUrl: "https://i.postimg.cc/fTFpF6VP/transparent_Photoroom_(18).png" },
                { name: "Knife", rarity: "epic", quantity: 6, imageUrl: "https://i.postimg.cc/sXLpSjvM/transparent_Photoroom_2026_01_27T134245_166.png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 7.8 speed, dealing 48.4 damage in 17 radius with Full AOE for 7.8 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 12.4 damage 8 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 26,
              cooldown: "81.25 seconds",
              craft: [
                { name: "Buzzsaw", rarity: "epic", quantity: 1, imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png" },
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 8 speed, dealing 50 damage in 17 radius with Full AOE for 8 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 12.5 damage 8 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 27,
              cooldown: "80.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 8.2 speed, dealing 51.6 damage in 17 radius with Full AOE for 8.2 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 12.6 damage 8 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 28,
              cooldown: "79.75 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 8.4 speed, dealing 53.2 damage in 17 radius with Full AOE for 8.4 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 12.7 damage 9 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 29,
              cooldown: "79 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 8.6 speed, dealing 54.8 damage in 17 radius with Full AOE for 8.6 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 12.8 damage 9 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 30,
              cooldown: "78.25 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 8.8 speed, dealing 56.4 damage in 17 radius with Full AOE for 8.8 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 12.9 damage 9 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 31,
              cooldown: "77.5 seconds",
              craft: [
                { name: "Buzzsaw", rarity: "epic", quantity: 1, imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png" },
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 9 speed, dealing 58 damage in 17 radius with Full AOE for 9 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 13 damage 9 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 32,
              cooldown: "76.75 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 9.2 speed, dealing 59.6 damage in 17 radius with Full AOE for 9.2 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 13.1 damage 9 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 33,
              cooldown: "76 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 9.4 speed, dealing 61.2 damage in 17 radius with Full AOE for 9.4 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 13.2 damage 9 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 34,
              cooldown: "75.25 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 9.6 speed, dealing 62.8 damage in 17 radius with Full AOE for 9.6 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 13.3 damage 9 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 35,
              cooldown: "74.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 9.8 speed, dealing 64.4 damage in 17 radius with Full AOE for 9.8 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 13.4 damage 10 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 36,
              cooldown: "73.75 seconds",
              craft: [
                { name: "Buzzsaw", rarity: "epic", quantity: 1, imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png" },
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 10 speed, dealing 66 damage in 17 radius with Full AOE for 10 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 13.5 damage 10 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 37,
              cooldown: "73 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 10.2 speed, dealing 67.6 damage in 17 radius with Full AOE for 10.2 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 13.6 damage 10 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 38,
              cooldown: "72.25 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 10.4 speed, dealing 69.2 damage in 17 radius with Full AOE for 10.4 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 13.7 damage 10 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 39,
              cooldown: "71.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 10.6 speed, dealing 70.8 damage in 17 radius with Full AOE for 10.6 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 13.8 damage 10 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 40,
              cooldown: "70.75 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 10.8 speed, dealing 72.4 damage in 17 radius with Full AOE for 10.8 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 13.9 damage 10 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 41,
              cooldown: "70 seconds",
              craft: [
                { name: "Buzzsaw", rarity: "epic", quantity: 1, imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png" },
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 11 speed, dealing 74 damage in 17 radius with Full AOE for 11 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 14 damage 11 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 42,
              cooldown: "69.25 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 11.2 speed, dealing 75.6 damage in 17 radius with Full AOE for 11.2 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 14.1 damage 11 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 43,
              cooldown: "68.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 11.4 speed, dealing 77.2 damage in 17 radius with Full AOE for 11.4 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 14.2 damage 11 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 44,
              cooldown: "67.75 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 11.6 speed, dealing 78.8 damage in 17 radius with Full AOE for 11.6 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 14.3 damage 11 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 45,
              cooldown: "67 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 11.8 speed, dealing 80.4 damage in 17 radius with Full AOE for 11.8 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 14.4 damage 11 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 46,
              cooldown: "66.25 seconds",
              craft: [
                { name: "Buzzsaw", rarity: "epic", quantity: 1, imageUrl: "https://i.postimg.cc/m2cJh223/Buzzsaw.png" },
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 12 speed, dealing 80.4 damage in 17 radius with Full AOE for 12 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 14.5 damage 11 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 47,
              cooldown: "65.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 12.2 speed, dealing 83.6 damage in 17 radius with Full AOE for 12.2 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 14.6 damage 11 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 48,
              cooldown: "64.75 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 12.4 speed, dealing 85.2 damage in 17 radius with Full AOE for 12.4 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 14.7 damage 12 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 49,
              cooldown: "64 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 12.6 speed, dealing 86.8 damage in 17 radius with Full AOE for 12.6 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 14.8 damage 12 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" }
              ]
            },
            {
              level: 50,
              cooldown: "63.25 seconds",
              craft: [
                { name: "Photon Grenade", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/hvXM1t1V/transparent_Photoroom_(20).png" },
                { name: "Fuel Cell", rarity: "epic", quantity: 4, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Reinforced Plating", rarity: "epic", quantity: 10, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 40, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Whirling Flurry", description: "Spin rapidly at 12.8 speed, dealing 88.4 damage in 17 radius with Full AOE for 12.8 seconds", imageUrl: "https://i.postimg.cc/q7Km55p4/transparent-Photoroom-2026-02-03T170225-249.png" },
                { name: "Bleeding Flurry", description: "Apply bleed status effect on enemies hit, dealing 14.9 damage 12 times", imageUrl: "https://i.postimg.cc/j5KwPZcS/transparent-Photoroom-2026-02-03T183527-024.png" },
                { name: "Burning Flurry", description: "Apply burn status effect on enemies hit, dealing 24.7 damage 9 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent_Photoroom_2026_02_03T173557_315.png" }
              ]
            },
          ],
          skins: [
            { name: "Demon Fangs", rarity: "legendary", imageUrl: "https://i.postimg.cc/bJq9j2xF/transparent-Photoroom-(7).png" }
          ]
        },
        {
          name: "Blaster Turret",
          imageUrl: "https://i.postimg.cc/MK4p91cW/Скриншот_11_01_2026_145601.jpg",
          unlockedWith: { name: "Blaster Turret Gear Blueprint", imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png" },
          levels: [
            {
              level: 1,
              cooldown: "120 seconds",
              craft: [
                { name: "Upgraded Blaster", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/gJdgS6b5/transparent_Photoroom_(39).png" },
                { name: "Disabler Gun", rarity: "epic", quantity: 4, imageUrl: "https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png" },
                { name: "Reinforced Plating", rarity: "epic", quantity: 5, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Metal Plating", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 1 damage with piercing in 30 range for 5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 2,
              cooldown: "119.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 2, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 2, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 1.3 damage with piercing in 30.5 range for 5.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 3,
              cooldown: "119 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 2, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 1.6 damage with piercing in 31 range for 6 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 4,
              cooldown: "118.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 1.9 damage with piercing in 31.5 range for 6.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 5,
              cooldown: "118 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 2.2 damage with piercing in 32 range for 7 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 6,
              cooldown: "117.5 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 5, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 2.5 damage with piercing in 32.5 range for 7.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 7,
              cooldown: "117 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 2.8 damage with piercing in 33 range for 8 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 8,
              cooldown: "116.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 3.1 damage with piercing in 33.5 range for 8.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 9,
              cooldown: "116 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 3.4 damage with piercing in 34 range for 9 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 10,
              cooldown: "115.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 3.7 damage with piercing in 34.5 range for 9.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 11,
              cooldown: "115 seconds",
              craft: [
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Reinforced Plating", rarity: "epic", quantity: 7, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 4 damage with piercing in 35 range for 10 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 12,
              cooldown: "114.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 4.3 damage with piercing in 35.5 range for 10.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 13,
              cooldown: "114 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 4.6 damage with piercing in 36 range for 11 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 14,
              cooldown: "113.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 4.9 damage with piercing in 36.5 range for 11.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 15,
              cooldown: "113 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 5.2 damage with piercing in 37 range for 12 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 16,
              cooldown: "112.5 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 8, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 5.5 damage with piercing in 37.5 range for 12.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 17,
              cooldown: "112 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 5.8 damage with piercing in 38 range for 13 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 18,
              cooldown: "111.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 6.1 damage with piercing in 38.5 range for 13.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 19,
              cooldown: "111 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 6.3 damage with piercing in 39 range for 14 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 20,
              cooldown: "110.5 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 6.7 damage with piercing in 39.5 range for 14.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 21,
              cooldown: "110 seconds",
              craft: [
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Reinforced Plating", rarity: "epic", quantity: 9, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 7 damage with piercing in 40 range for 15 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 22,
              cooldown: "109.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 7.3 damage with piercing in 40.5 range for 15.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 23,
              cooldown: "109 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 7.6 damage with piercing in 41 range for 16 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 24,
              cooldown: "108.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 7.9 damage with piercing in 41.5 range for 16.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 25,
              cooldown: "108 seconds",
              craft: [  
                { name: "Overcharged Blaster", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/nc6hnSs9/transparent_Photoroom_(12).png" },
                { name: "Reinforced Plating", rarity: "epic", quantity: 12, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 8.2 damage with piercing in 42 range for 17 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 19 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 26,
              cooldown: "107.5 seconds",
              craft: [  
                { name: "Reinforced Plating", rarity: "epic", quantity: 10, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 8.5 damage with piercing in 42.5 range for 17.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 18.75 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 27,
              cooldown: "107 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 8.8 damage with piercing in 43 range for 18 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 18.5 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 28,
              cooldown: "106.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 9.1 damage with piercing in 43.5 range for 18.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 18.25 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 29,
              cooldown: "106 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 9.4 damage with piercing in 44 range for 19 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 18 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 30,
              cooldown: "105.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 9.7 damage with piercing in 44.5 range for 19.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 17.75 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 31,
              cooldown: "105 seconds",
              craft: [  
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Reinforced Plating", rarity: "epic", quantity: 11, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 10 damage with piercing in 45 range for 20 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 17.5 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 32,
              cooldown: "104.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 10.2 damage with piercing in 45.5 range for 20.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 17.25 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 33,
              cooldown: "104 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 10.6 damage with piercing in 46 range for 21 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 17 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 34,
              cooldown: "103.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 10.9 damage with piercing in 46.5 range for 21.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 16.75 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 35,
              cooldown: "103 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 11.2 damage with piercing in 47 range for 22 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 16.5 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 36,
              cooldown: "102.5 seconds",
              craft: [  
                { name: "Reinforced Plating", rarity: "epic", quantity: 12, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 11.5 damage with piercing in 47.5 range for 22.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 16.25 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 37,
              cooldown: "102 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 11.7 damage with piercing in 48 range for 23 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 16 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 38,
              cooldown: "101.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 12.1 damage with piercing in 48.5 range for 23.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 15.75 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 39,
              cooldown: "101 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 12.4 damage with piercing in 49 range for 24 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 15.5 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 40,
              cooldown: "100.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 12.7 damage with piercing in 49.5 range for 24.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 15.25 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 41,
              cooldown: "100 seconds",
              craft: [  
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Reinforced Plating", rarity: "epic", quantity: 13, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 13 damage with piercing in 50 range for 25 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 15 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 42,
              cooldown: "99.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 13.3 damage with piercing in 50.5 range for 25.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 14.75 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 43,
              cooldown: "99 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 13.6 damage with piercing in 51 range for 26 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 14.5 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 44,
              cooldown: "98.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 13.9 damage with piercing in 51.5 range for 26.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 14.25 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 45,
              cooldown: "98 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 14.2 damage with piercing in 52 range for 27 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 14 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 46,
              cooldown: "97.5 seconds",
              craft: [  
                { name: "Reinforced Plating", rarity: "epic", quantity: 14, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 14.5 damage with piercing in 52.5 range for 27.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 13.75 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 47,
              cooldown: "97 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 14.8 damage with piercing in 53 range for 28 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 13.5 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 48,
              cooldown: "96.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 15.1 damage with piercing in 53.5 range for 28.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 13.25 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 49,
              cooldown: "96 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 15.4 damage with piercing in 54 range for 29 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 13 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
            {
              level: 50,
              cooldown: "95.5 seconds",
              craft: [  
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" },
              ],
              abilities: [
                { name: "Laser Strike", description: "Summon a turret which deals 15.7 damage with piercing in 54.5 range for 29.5 seconds", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" },
                { name: "Lightweight Son", description: "Allows to move the turret, reduces your movement speed by 12.75 when holding it", imageUrl: "https://i.postimg.cc/Cxs6grN2/transparent_Photoroom_2026_02_02T192832_676.png" }
              ]
            },
          ],
          skins: [
            { name: "Pumpking blaster", rarity: "epic", imageUrl: "https://i.postimg.cc/430cLzsG/transparent_Photoroom_(68).png" }
          ]
        },
        {
          name: "Energy Blade",
          imageUrl: "https://i.postimg.cc/15T3vDgP/Скриншот_11_01_2026_145621.jpg",
          unlockedWith: { name: "Energy Blade Gear Blueprint", imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png" },
          levels: [
            {
              level: 1,
              cooldown: "80 seconds",
              craft: [
                { name: "Energy Blade", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/m20gTpck/transparent_Photoroom_(13).png" },
                { name: "Reinforced Plating", rarity: "epic", quantity: 4, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 3 seconds at 25 speed, dealing 10 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 2,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 2, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 3.2 seconds at 25.15 speed, dealing 11.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 3,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 3.4 seconds at 25.3 speed, dealing 13 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 4,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 3.6 seconds at 25.45 speed, dealing 14.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 5,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 3.8 seconds at 25.6 speed, dealing 16 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 6,
              cooldown: "80 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 5, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 4 seconds at 25.75 speed, dealing 17.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 7,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 4.2 seconds at 25.9 speed, dealing 19 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 8,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 4.4 seconds at 26.05 speed, dealing 20.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 9,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 4.6 seconds at 26.2 speed, dealing 22 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 10,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 4.8 seconds at 26.35 speed, dealing 23.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 11,
              cooldown: "80 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 7, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 5 seconds at 26.5 speed, dealing 25 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 12,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 5.2 seconds at 26.65 speed, dealing 26.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 13,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 5.4 seconds at 26.8 speed, dealing 28 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 14,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 5.6 seconds at 26.95 speed, dealing 29.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 15,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 5.8 seconds at 27.1 speed, dealing 31 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 16,
              cooldown: "80 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 8, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 6 seconds at 27.25 speed, dealing 32.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 17,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 6.2 seconds at 27.4 speed, dealing 34 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 18,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 6.4 seconds at 27.55 speed, dealing 35.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 19,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 6.6 seconds at 27.7 speed, dealing 37 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 20,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 6.8 seconds at 27.85 speed, dealing 38.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 21,
              cooldown: "80 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 9, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 7 seconds at 28 speed, dealing 40 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 22,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 7.2 seconds at 28.15 speed, dealing 41.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 23,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 7.4 seconds at 28.3 speed, dealing 43 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 24,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 7.6 seconds at 28.45 speed, dealing 44.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" }
              ]
            },
            {
              level: 25,
              cooldown: "80 seconds",
              craft: [
                { name: "Energy Blade", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/m20gTpck/transparent_Photoroom_(13).png" },
                { name: "Fuel Cell", rarity: "epic", quantity: 4, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Reinforced Plating", rarity: "epic", quantity: 6, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Stolen Spear", rarity: "epic", quantity: 2, imageUrl: "https://i.postimg.cc/br0rMQgX/transparent_Photoroom_(17).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 7.8 seconds at 28.6 speed, dealing 46 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 500 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 26,
              cooldown: "80 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 10, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 8 seconds at 28.75 speed, dealing 47.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 520 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 27,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 8.2 seconds at 28.9 speed, dealing 49 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 540 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 28,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 8.4 seconds at 29.05 speed, dealing 50.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 560 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 29,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 8.6 seconds at 29.2 speed, dealing 52 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 580 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 30,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 8.8 seconds at 29.35 speed, dealing 53.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 600 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 31,
              cooldown: "80 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 11, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 9 seconds at 29.5 speed, dealing 55 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 620 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 32,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 9.2 seconds at 29.65 speed, dealing 56.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 640 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 33,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 9.4 seconds at 29.8 speed, dealing 58 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 660 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 34,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 9.6 seconds at 29.95 speed, dealing 59.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 680 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 35,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 9.8 seconds at 30.1 speed, dealing 61 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 700 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 36,
              cooldown: "80 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 12, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 10 seconds at 30.25 speed, dealing 62.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 720 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 37,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 10.2 seconds at 30.4 speed, dealing 64 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 740 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 38,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 10.4 seconds at 30.55 speed, dealing 65.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 760 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 39,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 10.6 seconds at 30.7 speed, dealing 67 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 780 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 40,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 10.8 seconds at 30.85 speed, dealing 68.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 800 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 41,
              cooldown: "80 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 13, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 11 seconds at 31 speed, dealing 70 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 820 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 42,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 11.2 seconds at 31.15 speed, dealing 71.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 840 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 43,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 11.4 seconds at 31.3 speed, dealing 73 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 860 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 44,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 11.6 seconds at 31.45 speed, dealing 74.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 880 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 45,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 11.8 seconds at 31.6 speed, dealing 76 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 900 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 46,
              cooldown: "80 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 14, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 12 seconds at 31.75 speed, dealing 77.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 920 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 47,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 12.2 seconds at 31.9 speed, dealing 79 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 940 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 48,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 12.4 seconds at 32.05 speed, dealing 80.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 960 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 49,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 12.6 seconds at 32.2 speed, dealing 82 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 980 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
            {
              level: 50,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Energy Dash", description: "Run for 12.8 seconds at 32.35 speed, dealing 83.5 damage to enemies in the way", imageUrl: "https://i.postimg.cc/K8CKY9BS/transparent-Photoroom-2026-02-03T172501-690.png" },
                { name: "Energy Shockwave", description: "Emit a shockwave at the end of the run, dealing 1000 splash damage in 30 radius", imageUrl: "https://i.postimg.cc/wx4pRzhS/transparent-Photoroom-2026-02-03T213315-477.png" }
              ]
            },
          ],
          skins: []
        },
        {
          name: "Flamethrower",
          imageUrl: "https://i.postimg.cc/pX7LsK9v/Скриншот_11_01_2026_145647.jpg",
          unlockedWith: { name: "Flamethrower Gear Blueprint", imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png" },
          levels: [
            {
              level: 1,
              cooldown: "99 seconds",
              craft: [
                { name: "Fuel Cell", rarity: "epic", quantity: 4, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Reinforced Plating", rarity: "epic", quantity: 6, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 3 seconds, dealing 4 damage 5 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 2,
              cooldown: "98 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 2, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 3.2 seconds, dealing 5 damage 5 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 3,
              cooldown: "97 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 3.4 seconds, dealing 6 damage 5 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 4,
              cooldown: "96 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 3.6 seconds, dealing 7 damage 5 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 5,
              cooldown: "95 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 3.8 seconds, dealing 8 damage 5 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 6,
              cooldown: "94 seconds",
              craft: [
                { name: "Fuel Cell", rarity: "epic", quantity: 5, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Charged Battery", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 4 seconds, dealing 9 damage 6 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 7,
              cooldown: "93 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 4.2 seconds, dealing 10 damage 6 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 8,
              cooldown: "92 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 4.4 seconds, dealing 11 damage 6 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 9,
              cooldown: "91 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 4.6 seconds, dealing 12 damage 6 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 10,
              cooldown: "90 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 4.8 seconds, dealing 13 damage 6 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 11,
              cooldown: "89 seconds",
              craft: [
                { name: "Fuel Cell", rarity: "epic", quantity: 7, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 5 seconds, dealing 14 damage 7 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 12,
              cooldown: "88 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 5.2 seconds, dealing 15 damage 7 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 13,
              cooldown: "87 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 5.4 seconds, dealing 16 damage 7 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 14,
              cooldown: "86 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 5.6 seconds, dealing 17 damage 7 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 15,
              cooldown: "85 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 5.8 seconds, dealing 18 damage 7 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 16,
              cooldown: "84 seconds",
              craft: [
                { name: "Fuel Cell", rarity: "epic", quantity: 8, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Charged Battery", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 6 seconds, dealing 19 damage 8 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 17,
              cooldown: "83 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 6.2 seconds, dealing 20 damage 8 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 18,
              cooldown: "82 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 6.4 seconds, dealing 21 damage 8 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 19,
              cooldown: "81 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 6.6 seconds, dealing 22 damage 8 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 20,
              cooldown: "80 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 6.8 seconds, dealing 23 damage 8 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 21,
              cooldown: "79 seconds",
              craft: [
                { name: "Fuel Cell", rarity: "epic", quantity: 9, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 7 seconds, dealing 24 damage 9 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 22,
              cooldown: "78 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 7.2 seconds, dealing 25 damage 9 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 23,
              cooldown: "77 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 7.4 seconds, dealing 26 damage 9 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 24,
              cooldown: "76 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 7.6 seconds, dealing 27 damage 9 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" }
              ]
            },
            {
              level: 25,
              cooldown: "75 seconds",
              craft: [
                { name: "Toxic Barrel", rarity: "legendary", quantity: 3, imageUrl: "https://i.postimg.cc/503nZNx4/transparent_Photoroom_(42).png" },
                { name: "Fuel Cell", rarity: "epic", quantity: 4, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Reinfoced Plating", rarity: "epic", quantity: 5, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Charged Battery", rarity: "common", quantity: 30, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 7.8 seconds, dealing 28 damage 9 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 3.4 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 26,
              cooldown: "74 seconds",
              craft: [
                { name: "Fuel Cell", rarity: "epic", quantity: 10, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 8 seconds, dealing 29 damage 10 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 3.5 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 27,
              cooldown: "73 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 8.2 seconds, dealing 30 damage 10 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 3.6 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 28,
              cooldown: "72 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 8.4 seconds, dealing 31 damage 10 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 3.7 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 29,
              cooldown: "71 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 8.6 seconds, dealing 32 damage 10 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 3.8 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 30,
              cooldown: "70 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 8.8 seconds, dealing 33 damage 10 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 3.9 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 31,
              cooldown: "69 seconds",
              craft: [
                { name: "Fuel Cell", rarity: "epic", quantity: 11, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 9 seconds, dealing 34 damage 11 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 4 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 32,
              cooldown: "68 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 9.2 seconds, dealing 35 damage 11 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 4.1 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 33,
              cooldown: "67 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 9.4 seconds, dealing 36 damage 11 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 4.2 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 34,
              cooldown: "66 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 9.6 seconds, dealing 37 damage 11 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 4.3 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 35,
              cooldown: "65 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 9.8 seconds, dealing 38 damage 11 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 4.4 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 36,
              cooldown: "64 seconds",
              craft: [
                { name: "Fuel Cell", rarity: "epic", quantity: 12, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 10 seconds, dealing 39 damage 12 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 4.5 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 37,
              cooldown: "63 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 10.2 seconds, dealing 40 damage 12 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 4.6 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 38,
              cooldown: "62 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 10.4 seconds, dealing 41 damage 12 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 4.7 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 39,
              cooldown: "61 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 10.6 seconds, dealing 42 damage 12 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 4.8 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 40,
              cooldown: "60 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 10.8 seconds, dealing 43 damage 12 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 4.9 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 41,
              cooldown: "59 seconds",
              craft: [
                { name: "Fuel Cell", rarity: "epic", quantity: 13, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 11 seconds, dealing 44 damage 13 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 5 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 42,
              cooldown: "58 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 11.2 seconds, dealing 45 damage 13 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 5.1 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 43,
              cooldown: "57 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 11.4 seconds, dealing 46 damage 13 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 5.2 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 44,
              cooldown: "56 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 11.6 seconds, dealing 47 damage 13 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 5.3 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 45,
              cooldown: "55 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 11.8 seconds, dealing 48 damage 13 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 5.4 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 46,
              cooldown: "54 seconds",
              craft: [
                { name: "Fuel Cell", rarity: "epic", quantity: 14, imageUrl: "https://i.postimg.cc/DyVdd2P5/Fuel_Cell.png" },
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 12 seconds, dealing 49 damage 14 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 5.5 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 47,
              cooldown: "53 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 12.2 seconds, dealing 50 damage 14 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 5.6 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 48,
              cooldown: "52 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 12.4 seconds, dealing 51 damage 14 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 5.7 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 49,
              cooldown: "51 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 12.6 seconds, dealing 52 damage 14 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 5.8 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
            {
              level: 50,
              cooldown: "50 seconds",
              craft: [
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Scorching Blaze", description: "Applies burn status effect to enemies in front for 12.8 seconds, dealing 53 damage 14 times", imageUrl: "https://i.postimg.cc/RCGL0BFq/transparent-Photoroom-2026-02-03T173557-315.png" },
                { name: "Blazing Toxin", description: "Applies toxic status effect (+25% damage taken) to enemies in front for 5.9 seconds", imageUrl: "https://i.postimg.cc/Vs3dqCMS/transparent-Photoroom-2026-02-04T171909-142.png" }
              ]
            },
          ],
          skins: [
            { name: "Dragon Flamethrower", rarity: "rare", imageUrl: "https://i.postimg.cc/zBW6xQwX/transparent-Photoroom-(10).png" },
            { name: "Water Gun", rarity: "epic", imageUrl: "https://i.postimg.cc/QNf3RSvQ/transparent_Photoroom_(70).png" }
          ]
        },
        {
          name: "Boombox",
          imageUrl: "https://i.postimg.cc/rFbwf5D3/Скриншот_11_01_2026_145819.jpg",
          unlockedWith: { name: "Boombox Gear Blueprint", imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png" },
          levels: [
            {
              level: 1,
              cooldown: "90 seconds",
              craft: [
                { name: "Titan's Speaker", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/tTyBSVGN/transparent_Photoroom_(40).png" },
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.054% in 14 radius for 5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 2,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 3, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.058% in 14.1 radius for 5.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 3,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 5, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.062% in 14.2 radius for 5.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 4,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 6, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.066% in 14.3 radius for 5.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 5,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 6, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.07% in 14.4 radius for 6 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 6,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 7, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.074% in 14.5 radius for 6.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 7,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 8, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.078% in 14.6 radius for 6.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 8,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 8, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.082% in 14.7 radius for 6.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 9,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 9, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.086% in 14.8 radius for 7 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 10,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 9, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.09% in 14.9 radius for 7.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 11,
              cooldown: "90 seconds",
              craft: [
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Large Speaker", rarity: "rare", quantity: 10, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.094% in 15 radius for 7.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 12,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 10, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.098% in 15.1 radius for 7.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 13,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 11, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.102% in 15.2 radius for 8 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 14,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 11, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.106% in 15.3 radius for 8.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 15,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 12, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.11% in 15.4 radius for 8.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 16,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 12, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.114% in 15.5 radius for 8.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 17,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 12, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.118% in 15.6 radius for 9 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 18,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 13, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.122% in 15.7 radius for 9.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 19,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 13, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.126% in 15.8 radius for 9.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 20,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 14, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.13% in 15.9 radius for 9.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 21,
              cooldown: "90 seconds",
              craft: [
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Large Speaker", rarity: "rare", quantity: 14, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.134% in 16 radius for 10 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 22,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 14, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.138% in 16.1 radius for 10.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 23,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 15, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 29, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.142% in 16.2 radius for 10.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 24,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 15, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 29, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.146% in 16.3 radius for 10.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" }
              ]
            },
            {
              level: 25,
              cooldown: "90 seconds",
              craft: [
                { name: "Titan's Speaker", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/tTyBSVGN/transparent_Photoroom_(40).png" },
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.15% in 16.4 radius for 11 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.1% in 16.4 radius for 11 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 26,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 15, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 30, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.154% in 16.5 radius for 11.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.102% in 16.5 radius for 11.25 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 27,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 16, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 31, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.158% in 16.6 radius for 11.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.104% in 16.6 radius for 11.5 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 28,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 16, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 31, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.162% in 16.7 radius for 11.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.106% in 16.7 radius for 11.75 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 29,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 16, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 32, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.166% in 16.8 radius for 12 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.108% in 16.8 radius for 12 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 30,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 17, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 33, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.169% in 16.9 radius for 12.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.11% in 16.9 radius for 12.25 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 31,
              cooldown: "90 seconds",
              craft: [
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Large Speaker", rarity: "rare", quantity: 17, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 33, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.174% in 17 radius for 12.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.112% in 17 radius for 12.5 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 32,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 17, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 34, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.178% in 17.1 radius for 12.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.114% in 17.1 radius for 12.75 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 33,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 17, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 34, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.182% in 17.2 radius for 13 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.116% in 17.2 radius for 13 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 34,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 18, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 35, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.186% in 17.3 radius for 13.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.118% in 17.3 radius for 13.25 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 35,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 18, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 35, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.19% in 17.4 radius for 13.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.12% in 17.4 radius for 13.5 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 36,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 18, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 36, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.194% in 17.5 radius for 13.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.122% in 17.5 radius for 13.75 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 37,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 18, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 36, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.198% in 17.6 radius for 14 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.124% in 17.6 radius for 14 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 38,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 19, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 37, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.202% in 17.7 radius for 14.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.126% in 17.7 radius for 14.25 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 39,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 19, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 37, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.206% in 17.8 radius for 14.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.128% in 17.8 radius for 14.5 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 40,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 19, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 38, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.210% in 17.9 radius for 14.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.13% in 17.9 radius for 14.75 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 41,
              cooldown: "90 seconds",
              craft: [
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Large Speaker", rarity: "rare", quantity: 19, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 38, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.214% in 18 radius for 15 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.132% in 18 radius for 15 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 42,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 20, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 39, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.218% in 18.1 radius for 15.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.134% in 18.1 radius for 15.25 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 43,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 20, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 39, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.222% in 18.2 radius for 15.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.136% in 18.2 radius for 15.5 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 44,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 20, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 40, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.225% in 18.3 radius for 15.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.138% in 18.3 radius for 15.75 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 45,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 20, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 40, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.229% in 18.4 radius for 16 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.14% in 18.4 radius for 16 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 46,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 21, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 41, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.234% in 18.5 radius for 16.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.142% in 18.5 radius for 16.25 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 47,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 21, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 41, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.238% in 18.6 radius for 16.5 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.144% in 18.6 radius for 16.5 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 48,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 21, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 42, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.242% in 18.7 radius for 16.75 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.146% in 18.7 radius for 16.75 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 49,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 21, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 42, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.246% in 18.8 radius for 17 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.148% in 18.8 radius for 17 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
            {
              level: 50,
              cooldown: "90 seconds",
              craft: [
                { name: "Large Speaker", rarity: "rare", quantity: 21, imageUrl: "https://i.postimg.cc/BbhCB0Jb/transparent_Photoroom_2026_01_24T175518_277.png" },
                { name: "Metal Plating", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Speaker", rarity: "common", quantity: 42, imageUrl: "https://i.postimg.cc/x18FdFtg/transparent_Photoroom_2026_01_23T180119_858.png" }
              ],
              abilities: [
                { name: "Resonance", description: "Summon Boombox which buffs Unit damage by 0.25% in 18.9 radius for 17.25 seconds", imageUrl: "https://i.postimg.cc/XYn8NYfT/transparent-Photoroom-2026-02-03T174929-399.png" },
                { name: "Encore", description: "Summon Boombox which buffs Unit range by 0.15% in 18.9 radius for 17.25 seconds", imageUrl: "https://i.postimg.cc/pTL0dcxk/transparent-Photoroom-2026-02-04T175905-058.png" }
              ]
            },
          ],
          skins: []
        },
        {
          name: "Toilet Plunger",
          imageUrl: "https://i.postimg.cc/wTPjwD1P/Скриншот_11_01_2026_145730.jpg",
          unlockedWith: { name: "Toilet Plunger Gear Blueprint", imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png" },
          levels: [
            {
              level: 1,
              cooldown: "30 seconds",
              craft: [
                { name: "Lost Plunger", rarity: "rare", quantity: 6, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 50 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 2,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 2, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 2, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 70 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 3,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 90 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 4,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 110 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 5,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 130 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 6,
              cooldown: "30 seconds",
              craft: [
                { name: "Lost Plunger", rarity: "rare", quantity: 2, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Metal Plating", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 150 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 7,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 170 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 8,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 190 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 9,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 210 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 10,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 230 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 11,
              cooldown: "30 seconds",
              craft: [
                { name: "Lost Plunger", rarity: "rare", quantity: 2, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 250 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 12,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 270 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 13,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 290 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 14,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 310 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 15,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 330 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 16,
              cooldown: "30 seconds",
              craft: [
                { name: "Lost Plunger", rarity: "rare", quantity: 2, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 350 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 17,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 370 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 18,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 390 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 19,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 410 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 20,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 430 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 21,
              cooldown: "30 seconds",
              craft: [
                { name: "Lost Plunger", rarity: "rare", quantity: 2, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Metal Plating", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 450 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 22,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 470 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 23,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 490 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 24,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 510 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
            {
              level: 25,
              cooldown: "30 seconds",
              craft: [
                { name: "Reinforced Plating", rarity: "epic", quantity: 4, imageUrl: "https://i.postimg.cc/FKJHZQZD/Reinforced_Plating.png" },
                { name: "Large Camera", rarity: "rare", quantity: 20, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Rocket Launcher", rarity: "uncommon", quantity: 4, imageUrl: "https://i.postimg.cc/zB5xtRYs/transparent_Photoroom_(38).png" },
                { name: "Metal Plating", rarity: "common", quantity: 30, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 530 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +307 damage per second for being in the air (literally), capped at +1039", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 26,
              cooldown: "30 seconds",
              craft: [
                { name: "Lost Plunger", rarity: "rare", quantity: 2, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Metal Plating", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 550 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +330 damage per second for being in the air (literally), capped at +1100", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 27,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 570 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +353 damage per second for being in the air (literally), capped at +1163", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 28,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 590 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +378 damage per second for being in the air (literally), capped at +1227", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 29,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 610 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +403 damage per second for being in the air (literally), capped at +1293", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 30,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 630 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +428 damage per second for being in the air (literally), capped at +1361", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 31,
              cooldown: "30 seconds",
              craft: [
                { name: "Lost Plunger", rarity: "rare", quantity: 2, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Metal Plating", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 650 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +455 damage per second for being in the air (literally), capped at +1430", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 32,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 670 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +482 damage per second for being in the air (literally), capped at +1501", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 33,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 690 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +511 damage per second for being in the air (literally), capped at +1573", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 34,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 710 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +540 damage per second for being in the air (literally), capped at +1647", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 35,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 730 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +569 damage per second for being in the air (literally), capped at +1723", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 36,
              cooldown: "30 seconds",
              craft: [
                { name: "Lost Plunger", rarity: "rare", quantity: 2, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 750 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +600 damage per second for being in the air (literally), capped at +1800", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 37,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 770 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +631 damage per second for being in the air (literally), capped at +1879", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 38,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 790 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +664 damage per second for being in the air (literally), capped at +1959", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 39,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 810 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +697 damage per second for being in the air (literally), capped at +2041", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 40,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 830 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +730 damage per second for being in the air (literally), capped at +2125", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 41,
              cooldown: "30 seconds",
              craft: [
                { name: "Lost Plunger", rarity: "rare", quantity: 2, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 850 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +765 damage per second for being in the air (literally), capped at +2210", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 42,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 870 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +800 damage per second for being in the air (literally), capped at +2297", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 43,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 890 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +837 damage per second for being in the air (literally), capped at +2385", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 44,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 910 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +874 damage per second for being in the air (literally), capped at +2475", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 45,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 930 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +911 damage per second for being in the air (literally), capped at +2567", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 46,
              cooldown: "30 seconds",
              craft: [
                { name: "Lost Plunger", rarity: "rare", quantity: 2, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 950 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +950 damage per second for being in the air (literally), capped at +2660", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 47,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 970 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +989 damage per second for being in the air (literally), capped at +2755", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 48,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 990 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +1030 damage per second for being in the air (literally), capped at +2851", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 49,
              cooldown: "30 seconds",
              craft: [
                { name: "Metal Plating", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" },
                { name: "Scrеw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/*****.png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 1010 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +1071 damage per second for being in the air (literally), capped at +2949", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" }
              ]
            },
            {
              level: 50,
              cooldown: "30 seconds",
              craft: [
                { name: "Hextech Arm", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/65DpBb7n/transparent_Photoroom_(11).png" },
                { name: "Lost Plunger", rarity: "rare", quantity: 4, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Charged Battery", rarity: "common", quantity: 40, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Metal Plating", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Eruption Throw", description: "Throw a plunger towards the first toilet, dealing 1030 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" },
                { name: "Trickshot Specialist", description: "Gain +1112 damage per second for being in the air (literally), capped at +3049", imageUrl: "https://i.postimg.cc/DwdPRSMs/transparent-Photoroom-2026-02-04T194620-930.png" },
                { name: "Double Throw", description: "Throw another plunger towards the last toilet, dealing 1030 damage to all enemies in 15 splash radius", imageUrl: "https://i.postimg.cc/pX5NQk3M/transparent-Photoroom-2026-02-03T175607-340.png" }
              ]
            },
          ],
          skins: [
            { name: "Pumpking's Head", rarity: "epic", imageUrl: "https://i.postimg.cc/XNsbTxtK/transparent_Photoroom_(69).png" },
            { name: "Beach Ball", rarity: "epic", imageUrl: "https://i.postimg.cc/bYmhKL4n/transparent_Photoroom_(64).png" }
          ]
        },
        {
          name: "Medkit",
          imageUrl: "https://i.postimg.cc/DyDwx1SR/Скриншот_11_01_2026_145754.jpg",
          unlockedWith: { name: "Medkit Gear Blueprint", imageUrl: "https://i.postimg.cc/gkDqLRWB/transparent_Photoroom_(22).png" },
          levels: [
            {
              level: 1,
              cooldown: "180 seconds",
              craft: [
                { name: "Titan's Core", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/PJ81Qgw2/transparent_Photoroom_2026_01_27T171940_174.png" },
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/dtTTRyrN/transparent_Photoroom_(16).png" },
                { name: "Metal Plating", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/PNsdFDm9/transparent_Photoroom_(24).png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 10%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 2,
              cooldown: "178.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 3, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 6, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 2, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 11%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 3,
              cooldown: "177 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 4, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 9, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 3, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 13%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 4,
              cooldown: "175.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 5, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 11, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 15%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 5,
              cooldown: "174 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 5, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 12, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 4, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 17%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 6,
              cooldown: "172.5 seconds",
              craft: [
                { name: "Disabler Gun", rarity: "epic", quantity: 2, imageUrl: "https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png" },
                { name: "Large Camera", rarity: "rare", quantity: 6, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 14, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 19%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 7,
              cooldown: "171 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 7, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 15, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 20%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 8,
              cooldown: "169.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 7, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 16, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 22%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 9,
              cooldown: "168 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 8, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 17, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 24%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 10,
              cooldown: "166.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 8, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 18, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 6, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 26%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 11,
              cooldown: "165 seconds",
              craft: [
                { name: "Disabler Gun", rarity: "epic", quantity: 2, imageUrl: "https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png" },
                { name: "Large Camera", rarity: "rare", quantity: 8, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 19, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 28%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 12,
              cooldown: "163.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 9, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 20, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 29%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 13,
              cooldown: "162 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 9, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 21, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 7, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 31%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 14,
              cooldown: "160.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 10, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 22, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 33%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 15,
              cooldown: "159 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 10, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 23, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 15, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 35%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 16,
              cooldown: "157.5 seconds",
              craft: [
                { name: "Disabler Gun", rarity: "epic", quantity: 2, imageUrl: "https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png" },
                { name: "Large Camera", rarity: "rare", quantity: 10, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 24, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 37%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 17,
              cooldown: "156 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 10, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 24, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 16, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 8, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 38%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 18,
              cooldown: "154.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 11, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 25, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 40%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 19,
              cooldown: "153 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 11, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 26, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 17, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 42%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 20,
              cooldown: "151.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 11, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 27, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 44%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 21,
              cooldown: "150 seconds",
              craft: [
                { name: "Disabler Gun", rarity: "epic", quantity: 2, imageUrl: "https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png" },
                { name: "Large Camera", rarity: "rare", quantity: 12, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 27, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 18, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 9, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 46%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 22,
              cooldown: "148.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 12, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 28, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 47%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 23,
              cooldown: "147 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 12, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 29, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 19, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 49%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 24,
              cooldown: "145.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 12, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 29, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 51%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" }
              ]
            },
            {
              level: 25,
              cooldown: "144 seconds",
              craft: [
                { name: "Glitch Mainframe", rarity: "mythic", quantity: 1, imageUrl: "https://i.postimg.cc/vBM0q6w3/transparent_Photoroom_(51).png" },
                { name: "Charged Battery", rarity: "common", quantity: 40, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 5, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 53%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 29.8 radius for 5.8 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 26,
              cooldown: "142.5 seconds",
              craft: [
                { name: "Disabler Gun", rarity: "epic", quantity: 2, imageUrl: "https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png" },
                { name: "Large Camera", rarity: "rare", quantity: 13, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 30, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 20, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 10, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 55%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 30 radius for 6 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 27,
              cooldown: "141 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 13, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 31, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 56%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 30.2 radius for 6.2 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 28,
              cooldown: "139.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 13, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 32, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 21, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 58%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 30.4 radius for 6.4 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 29,
              cooldown: "138 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 14, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 32, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 60%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 30.6 radius for 6.6 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 30,
              cooldown: "136.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 14, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 33, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 62%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 30.8 radius for 6.8 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 31,
              cooldown: "135 seconds",
              craft: [
                { name: "Disabler Gun", rarity: "epic", quantity: 2, imageUrl: "https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png" },
                { name: "Large Camera", rarity: "rare", quantity: 14, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 33, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 22, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 11, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 64%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 31 radius for 7 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 32,
              cooldown: "133.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 14, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 34, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 65%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 31.2 radius for 7.2 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 33,
              cooldown: "132 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 15, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 34, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 67%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 31.4 radius for 7.4 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 34,
              cooldown: "130.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 15, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 35, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 23, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 69%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 31.6 radius for 7.6 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 35,
              cooldown: "129 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 15, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 35, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 71%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 31.8 radius for 7.8 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 36,
              cooldown: "127.5 seconds",
              craft: [
                { name: "Disabler Gun", rarity: "epic", quantity: 2, imageUrl: "https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png" },
                { name: "Large Camera", rarity: "rare", quantity: 15, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 36, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 73%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 32 radius for 8 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 37,
              cooldown: "126 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 15, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 36, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 24, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 12, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 74%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 32.2 radius for 8.2 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 38,
              cooldown: "124.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 16, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 37, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 76%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 32.4 radius for 8.4 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 39,
              cooldown: "123 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 16, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 37, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 78%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 32.6 radius for 8.6 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 40,
              cooldown: "121.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 16, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 38, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 25, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 80%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 32.8 radius for 8.8 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 41,
              cooldown: "120 seconds",
              craft: [
                { name: "Disabler Gun", rarity: "epic", quantity: 2, imageUrl: "https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png" },
                { name: "Large Camera", rarity: "rare", quantity: 16, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 38, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 82%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 33 radius for 9 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 42,
              cooldown: "118.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 17, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 39, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 83%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 33.2 radius for 9.2 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 43,
              cooldown: "117 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 17, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 39, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 26, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 13, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 85%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 33.4 radius for 9.4 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 44,
              cooldown: "115.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 17, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 40, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 87%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 33.6 radius for 9.6 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 45,
              cooldown: "114 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 17, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 40, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 89%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 33.8 radius for 9.8 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 46,
              cooldown: "112.5 seconds",
              craft: [
                { name: "Disabler Gun", rarity: "epic", quantity: 2, imageUrl: "https://i.postimg.cc/vBKW9YcD/transparent_Photoroom_2026_01_27T134514_661.png" },
                { name: "Large Camera", rarity: "rare", quantity: 17, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 41, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 27, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 91%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 34 radius for 10 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 47,
              cooldown: "111 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 17, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 41, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 92%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 34.2 radius for 10.2 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 48,
              cooldown: "109.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 18, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 42, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 94%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 34.4 radius for 10.4 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 49,
              cooldown: "108 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 18, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 42, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 96%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 34.6 radius for 10.6 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            },
            {
              level: 50,
              cooldown: "106.5 seconds",
              craft: [
                { name: "Large Camera", rarity: "rare", quantity: 18, imageUrl: "https://i.postimg.cc/6qHhfXBT/transparent_Photoroom_2026_01_24T175531_684.png" },
                { name: "Camera", rarity: "uncommon", quantity: 42, imageUrl: "https://i.postimg.cc/tTZR4Rwz/transparent_Photoroom_2026_01_24T151822_437.png" },
                { name: "Charged Battery", rarity: "common", quantity: 28, imageUrl: "https://i.postimg.cc/5yjHM8Q9/transparent_Photoroom_(23).png" },
                { name: "Screw", rarity: "common", quantity: 14, imageUrl: "https://i.postimg.cc/hG80hNdw/Screw.png" }
              ],
              abilities: [
                { name: "Quantum Healing", description: "Heal base's health by 98%", imageUrl: "https://i.postimg.cc/MK5sQBpV/transparent-Photoroom-2026-02-03T180044-263.png" },
                { name: "Quantum Shield", description: "Summon a medkit which protects Units from being stunned in 34.8 radius for 10.8 seconds", imageUrl: "https://i.postimg.cc/vT7mGx6R/transparent-Photoroom-2026-02-04T220248-900.png" }
              ]
            }
          ],
          skins: [
            { name: "Gravestone", rarity: "rare", imageUrl: "https://i.postimg.cc/BZm0dNRx/transparent_Photoroom_(66).png" },
            { name: "Tomoe Gate", rarity: "epic", imageUrl: "https://i.postimg.cc/g28z6gQm/transparent-Photoroom-(9).png" },
          ]
        }
      ]

    };
