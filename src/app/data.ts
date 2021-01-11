export interface Game {
    id: number;
    name: string;
    characters: Character[];
}

export interface Character {
    id: string;
    order: number;
    name: string;
    stamina: number;
    stun: number;
    country: string;
    moves: Move[];
}

export interface Move {
    name: string;
    originalName?: string;
    type?: 'super' | 'ultra1' | 'ultra2';
    motions: string[];
}

export const data: Game[] = [
    {
        id: 1,
        name: 'Street Fighter IV - Arcade Edition',
        characters: [
            {
                id: 'ryu',
                order: 1,
                name: 'Ryu',
                stamina: 1000,
                stun: 1000,
                country: 'Japan',
                moves: [
                    {
                        name: 'Fireball',
                        originalName: 'Hadouken',
                        motions: ['M↓↘→', 'P'],
                    },
                    {
                        name: 'Dragon Punch',
                        originalName: 'Shoryuken',
                        motions: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Hurricane Kick',
                        originalName: 'Tatsumaki Senpuukyaku',
                        motions: ['M↓↙←', 'K'],
                    },
                    {
                        name: 'Air Hurricane Kick',
                        originalName: '',
                        motions: ['J', 'M↓↙←', 'K'],
                    },
                    {
                        name: 'Fireball +',
                        originalName: 'Shinkuu Hadouken',
                        motions: ['M↓↘→', 'M↓↘→', 'P'],
                        type: 'super',
                    },
                    {
                        name: 'Fireball ++',
                        originalName: 'Metsu Hadouken',
                        motions: ['M↓↘→', 'M↓↘→', 'Px3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Dragon Punch ++',
                        originalName: 'Metsu Shoryuken',
                        motions: ['M↓↘→', 'M↓↘→', 'Kx3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'ken',
                order: 2,
                name: 'Ken',
                stamina: 1000,
                stun: 1000,
                country: 'USA',
                moves: [
                    {
                        name: 'Fireball',
                        originalName: 'Hadouken',
                        motions: ['M↓↘→', 'P'],
                    },
                    {
                        name: 'Dragon Punch',
                        originalName: 'Shoryuken',
                        motions: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Hurricane Kick',
                        originalName: 'Tatsumaki Senpuukyaku',
                        motions: ['M↓↙←', 'K'],
                    },
                    {
                        name: 'Shoryu-Reppa',
                        motions: ['M↓↘→', 'M↓↘→', 'P'],
                        type: 'super',
                    },
                    {
                        name: 'Shinryuuken',
                        motions: ['M↓↘→', 'M↓↘→', 'Px3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Guren Senpukyaku',
                        motions: ['M↓↘→', 'M↓↘→', 'Kx3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'e-honda',
                order: 3,
                name: 'Edmond Honda',
                stamina: 1050,
                stun: 1100,
                country: 'Japan',
                moves: [
                    {
                        name: 'Hundred Hand Slap',
                        motions: ['P', 'P', 'P', 'P'],
                    },
                    {
                        // *ARMOR BREAKING*
                        name: 'Sumo Headbutt',
                        motions: ['MC←→', 'P'],
                    },
                    {
                        name: 'Sumo Smash',
                        originalName: 'Hyakkan Otoshi',
                        motions: ['MC↓↑', 'K'],
                    },
                    {
                        name: 'Oicho Throw',
                        originalName: 'Oicho Nage',
                        motions: ['M→↘↓↙←', 'P'],
                    },
                    {
                        name: 'Super Killer Head Ram',
                        originalName: 'oni musou',
                        motions: ['MC←→', 'M←→', 'P'],
                        type: 'super',
                    },
                    {
                        // *ARMOR BREAKING*
                        name: 'Ultimate Killer Head Ram',
                        originalName: 'Shin Oni Musou',
                        motions: ['MC←→', 'M←→', 'Px3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Orochi Breaker',
                        motions: ['M→↘↓↙←', 'M→↘↓↙←', 'Px3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'ibuki',
                order: 4,
                name: 'Ibuki',
                stamina: 900,
                stun: 950,
                country: 'Japan',
                moves: [
                    {
                        name: 'Kunai',
                        motions: ['J', 'M↓↘→', 'P'],
                    },
                    {
                        name: 'Tsujigoe',
                        motions: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Neck Breaker',
                        motions: ['M←↙↓↘→', 'P'],
                    },
                    {
                        name: 'Raida',
                        motions: ['M→↘↓↙←', 'P'],
                    },
                    {
                        name: 'Kasumi Gake',
                        motions: ['M↓↘→', 'K'],
                    },
                    {
                        name: 'Kazegiri',
                        motions: ['M→↓↘', 'K'],
                    },
                    {
                        name: 'Tsumuji',
                        motions: ['M↓↙←', 'K'],
                    },
                    {
                        name: 'Hein',
                        motions: ['M←↓↙', 'K'],
                    },
                    {
                        name: 'Kasumi Suzaku',
                        motions: ['J', 'M↓↘→', 'M↓↘→', 'P'],
                        type: 'super',
                    },
                    {
                        name: 'Yoroitoshi',
                        motions: ['M→↘↓↙←', 'M→↘↓↙←', 'Px3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Hashinsho',
                        motions: ['M↓↘→', 'M↓↘→', 'Kx3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'makoto',
                order: 5,
                name: 'Makoto',
                stamina: 1000,
                stun: 1050,
                country: 'Japan',
                moves: [
                    {
                        name: 'Fukiage',
                        motions: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Hayate',
                        motions: ['M↓↘→', 'P'],
                    },
                    {
                        name: 'Oroshi',
                        motions: ['M↓↙←', 'P'],
                    },
                    {
                        name: 'Karakusa',
                        motions: ['M→↘↓↙←', 'K'],
                    },
                    {
                        name: 'Tsurugi',
                        motions: ['M↓↙←', 'K'],
                    },
                    {
                        name: 'Tanden Renki',
                        motions: ['M↓↘→', 'M↓↘→', 'P'],
                        type: 'super',
                    },
                    {
                        name: 'Seichusen Godanzaki',
                        motions: ['M↓↘→', 'M↓↘→', 'Px3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Abare Tosanami',
                        motions: ['M↓↘→', 'M↓↘→', 'Kx3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'dudley',
                order: 6,
                name: 'Dudley',
                stamina: 1050,
                stun: 1050,
                country: 'UK',
                moves: [
                    {
                        name: 'Jet Upper',
                        motions: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Machine Gun Blow',
                        motions: ['M←↙↓↘→', 'P'],
                    },
                    {
                        name: 'Cross Counter',
                        motions: ['M→↘↓↙←', 'P'],
                    },
                    {
                        name: 'Short Swing Blow',
                        motions: ['M→↘↓↙←', 'K'],
                    },
                    {
                        name: 'Duck',
                        motions: ['M←↙↓↘→', 'K'],
                    },
                    {
                        name: 'Ducking Straight',
                        motions: ['M←↙↓↘→', 'K', 'P'],
                    },
                    {
                        name: 'Ducking Upper',
                        motions: ['M←↙↓↘→', 'K', 'K'],
                    },
                    {
                        name: 'Thunderbolt',
                        motions: ['MC↓↑', 'K'],
                    },
                    {
                        name: 'Rocket Upper',
                        motions: ['M↓↘→', 'M↓↘→', 'P'],
                        type: 'super',
                    },
                    {
                        name: 'Rolling Thunder',
                        motions: ['M↓↘→', 'M↓↘→', 'Kx3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Corkscrew Cross',
                        motions: ['M↓↘→', 'M↓↘→', 'Px3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'seth',
                order: 7,
                name: 'Seth',
                stamina: 800,
                stun: 900,
                country: 'None',
                moves: [],
            },
            {
                id: 'gouken',
                order: 8,
                name: 'Gouken',
                stamina: 1000,
                stun: 1000,
                country: 'Japan',
                moves: [
                    {
                        name: 'Gohadoken',
                        // 💡 : Chargeable
                        // 💡 : 1 P = 1 direction
                        motions: ['M↓↘→', 'P'],
                    },
                    {
                        name: 'Senkugoshoha',
                        motions: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Tatsumaki Gorasen',
                        motions: ['M↓↙←', 'K'],
                    },
                    {
                        name: 'Hyakkishu',
                        motions: ['M→↓↘', 'K'],
                    },
                    {
                        name: 'Kongoshin',
                        // 💡 : K or P
                        motions: ['M←↓↙', 'K'],
                    },
                    {
                        name: 'Forbidden Shoryuken',
                        motions: ['M↓↘→', 'M↓↘→', 'P'],
                        type: 'super',
                    },
                    {
                        name: 'Shin Shoryuken',
                        motions: ['M↓↘→', 'M↓↘→', 'Px3'],
                        type: 'ultra1',
                    },
                    {
                        // 💡 : inflict heavy stun instead of damage
                        name: 'Denjin Hadouken',
                        motions: ['M↓↘→', 'M↓↘→', 'Kx3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'akuma',
                order: 9,
                name: 'Akuma',
                stamina: 850,
                stun: 850,
                country: 'Japan',
                moves: [
                    // TODO: vérifier la différence entre super et ultra : https://www.eventhubs.com/motions/sf4/akuma/
                    {
                        name: 'Fireball',
                        originalName: 'Gou Hadouken',
                        motions: ['M↓↘→', 'P'],
                    },
                    {
                        name: 'Air Fireball (↘)',
                        originalName: 'Gou Hadouken',
                        motions: ['J', 'M↓↘→', 'P'],
                    },
                    {
                        name: 'Multi-hit Fireball',
                        originalName: 'Shakunetsu Hadouken',
                        motions: ['M→↘↓↙←', 'P'],
                    },
                    {
                        name: 'Dragon Punch',
                        originalName: 'Gou Shoryuken',
                        motions: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Hurricane Kick',
                        originalName: 'Tatsumaki Zankukyaku',
                        motions: ['M↓↙←', 'K'],
                    },
                    {
                        name: 'Demon Flip',
                        originalName: 'Hyakki Shu',
                        motions: ['M→↓↘', 'K'],
                    },
                    {
                        name: 'Teleport - Approach (far)',
                        originalName: 'Ahura Senku',
                        motions: ['M→↓↘', 'Px3'],
                    },
                    {
                        name: 'Teleport - Approach (short)',
                        originalName: 'Ahura Senku',
                        motions: ['M→↓↘', 'Kx3'],
                    },
                    {
                        name: 'Teleport - Retreat (far)',
                        originalName: 'Ahura Senku',
                        motions: ['M←↓↙', 'Px3'],
                    },
                    {
                        name: 'Teleport - Retreat (short)',
                        originalName: 'Ahura Senku',
                        motions: ['M←↓↙', 'Kx3'],
                    },
                    {
                        name: 'Raging Demon',
                        originalName: 'Shun Goku Satsu',
                        motions: ['P1', 'P1', 'M←', 'K1', 'P3'],
                        type: 'super',
                    },
                    {
                        name: 'Wrath of the Raging Demon',
                        originalName: 'Shin Shun Goku Satsu',
                        motions: ['P1', 'P1', 'M←', 'K1', 'P3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Demon Armageddon',
                        motions: ['M↑', 'M↑', 'Kx3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'gen',
                order: 10,
                name: 'Gen',
                stamina: 900,
                stun: 900,
                country: 'China',
                // TODO: Gen has 2 styles of battle
                // TODO: need to change data structure
                moves: [
                    // 🥷 : Mantis moves
                    {
                        name: 'Mantis Style',
                        motions: ['Px3'],
                    },
                    {
                        name: 'Gekiro',
                        originalName: 'Mantis only',
                        motions: ['M→↓↘', 'K'],
                    },
                    {
                        name: 'Rapid Hands',
                        originalName: 'Mantis only',
                        motions: ['P', 'P', 'P', 'P'],
                    },
                    {
                        name: "Zan 'Ei",
                        originalName: 'Mantis only',
                        motions: ['M↓↘→', 'M↓↘→', 'P'],
                        type: 'super',
                    },
                    {
                        name: 'Zetsuei',
                        originalName: 'Mantis only',
                        motions: ['M↓↘→', 'M↓↘→', 'Px3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Shitkenketsu',
                        originalName: 'Mantis only',
                        motions: ['M↓↙←', 'M↓↙←', 'Px3'],
                        type: 'ultra2',
                    },
                    // 🥷 : Crane moves
                    {
                        name: 'Crane Style',
                        motions: ['Kx3'],
                    },
                    {
                        name: 'Jyasen',
                        originalName: 'Crane only',
                        motions: ['MC←→', 'P'],
                    },
                    {
                        // OGA + BUTTON = Special attack
                        // Sudden Stop: Back after Oga
                        // Close Kick: Down after Oga
                        // Far Kick: Down-Forward or Forward after Oga
                        // Ceiling Jump: Up-Back or Up or Up-Forward after Oga
                        // Falling Kick: Down After Ceiling Jump
                        // Close Range Kick Right: Down-forward or Forward after Ceiling Jump
                        // Close Range Kick Left: Down-Back or Back after Ceiling Jump
                        name: 'Oga',
                        originalName: 'Crane only',
                        motions: ['MC↓↑', 'K'],
                    },
                    {
                        name: 'Jyakoha',
                        originalName: 'Crane only',
                        motions: ['M↓↘→', 'M↓↘→', 'K'],
                        type: 'super',
                    },
                    {
                        name: 'Ryukoha',
                        originalName: 'Crane only',
                        motions: ['M↓↘→', 'M↓↘→', 'Kx3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Teiga',
                        originalName: 'Crane only',
                        motions: ['J', 'M↓↘→', 'M↓↘→', 'Kx3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'dan',
                order: 11,
                name: 'Dan',
                stamina: 1000,
                stun: 900,
                country: 'Hong_Kong',
                moves: [],
            },
            {
                id: 'sakura',
                order: 12,
                name: 'Sakura',
                stamina: 950,
                stun: 1000,
                country: 'Japan',
                moves: [],
            },
            {
                id: 'yun',
                order: 13,
                name: 'Yun',
                stamina: 900,
                stun: 1000,
                country: 'Hong_Kong',
                moves: [],
            },
            {
                id: 'juri',
                order: 14,
                name: 'Juri',
                stamina: 950,
                stun: 950,
                country: 'South_Korea',
                moves: [],
            },
            {
                id: 'chun-li',
                order: 15,
                name: 'Chun-Li',
                stamina: 900,
                stun: 1050,
                country: 'China',
                moves: [
                    {
                        name: 'Kikkoken',
                        motions: ['MC←→', 'P'],
                    },
                    {
                        name: 'Lightning Legs',
                        originalName: 'Hyakuretsu Kyaku',
                        motions: ['K', 'K', 'K', 'K'],
                    },
                    {
                        name: 'Spinning Bird Kick',
                        motions: ['MC↓↑', 'K'],
                    },
                    {
                        name: 'Overhead Flip Kick',
                        originalName: 'Hazan Shu',
                        motions: ['M→↘↓↙←', 'K'],
                    },
                    {
                        name: 'Senretsukyaku',
                        motions: ['MC←→', 'M←', 'MC→', 'K'],
                        type: 'super',
                    },
                    {
                        name: 'Housenka',
                        motions: ['MC←→', 'M←', 'MC→', 'Kx3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Kikosho',
                        motions: ['M↓↘→', 'M↓↘→', 'Px3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'dhalsim',
                order: 16,
                name: 'Dhalsim',
                stamina: 900,
                stun: 900,
                country: 'India',
                moves: [],
            },
            {
                id: 'abel',
                order: 17,
                name: 'Abel',
                stamina: 1050,
                stun: 1050,
                country: 'France',
                moves: [],
            },
            {
                id: 'c-viper',
                order: 18,
                name: 'Crimson Viper',
                stamina: 900,
                stun: 950,
                country: 'USA',
                moves: [],
            },
            {
                id: 'm-bison',
                order: 19,
                name: 'M. Bison',
                stamina: 1000,
                stun: 950,
                country: 'None',
                moves: [],
            },
            {
                id: 'sagat',
                order: 20,
                name: 'Sagat',
                stamina: 1050,
                stun: 1000,
                country: 'Thailand',
                moves: [
                    {
                        name: 'Tiger Uppercut',
                        motions: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Tiger Knee',
                        motions: ['M→↓↘', 'K'],
                    },
                    {
                        name: 'Tiger Shot (High)',
                        motions: ['M↓↘→', 'P'],
                    },
                    {
                        name: 'Tiger Shot (Low)\n',
                        motions: ['M↓↘→', 'K'],
                    },
                    {
                        name: 'Angry Scar',
                        motions: ['M↓↙←', 'M↓↙←', 'K'],
                    },
                    {
                        name: 'Tiger Genocide',
                        motions: ['M↓↘→', 'M↓↘→', 'K'],
                        type: 'super',
                    },
                    {
                        name: 'Tiger Destruction',
                        motions: ['M↓↘→', 'M↓↘→', 'Kx3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Tiger Cannon',
                        motions: ['M↓↘→', 'M↓↘→', 'Px3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'cammy',
                order: 21,
                name: 'Cammy',
                stamina: 950,
                stun: 950,
                country: 'UK',
                moves: [],
            },
            {
                id: 'dee-jay',
                order: 22,
                name: 'Dee Jay',
                stamina: 1000,
                stun: 1000,
                country: 'Jamaica',
                moves: [],
            },
            {
                id: 'cody',
                order: 23,
                name: 'Cody',
                stamina: 1000,
                stun: 1050,
                country: 'USA',
                moves: [],
            },
            {
                id: 'guy',
                order: 24,
                name: 'Guy',
                stamina: 1000,
                stun: 950,
                country: 'USA',
                moves: [],
            },
            {
                id: 'hakan',
                order: 25,
                name: 'Hakan',
                stamina: 1050,
                stun: 1100,
                country: 'Turkey',
                moves: [],
            },
            {
                id: 'yang',
                order: 26,
                name: 'Yang',
                stamina: 900,
                stun: 1000,
                country: 'Hong_Kong',
                moves: [],
            },
            {
                id: 'guile',
                order: 27,
                name: 'Guile',
                stamina: 1000,
                stun: 900,
                country: 'USA',
                moves: [],
            },
            {
                id: 'blanka',
                order: 28,
                name: 'Blanka',
                stamina: 1000,
                stun: 950,
                country: 'Brazil',
                moves: [],
            },
            {
                id: 'zangief',
                order: 29,
                name: 'Zangief',
                stamina: 1100,
                stun: 1100,
                country: 'USSR',
                moves: [
                    {
                        name: 'Spinning Pile Driver',
                        motions: ['M←↙↓↘→↗↑', 'P'],
                    },
                    {
                        name: 'Banishing Flat',
                        motions: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Spinning Lariat',
                        motions: ['Px3'],
                    },
                    {
                        name: 'Quick Lariat',
                        motions: ['Kx3'],
                    },
                    {
                        name: 'Final Atomic Buster',
                        motions: ['M←↙↓↘→↗↑', 'M←↙↓↘→↗↑', 'K'],
                        type: 'super',
                    },
                    {
                        name: 'Ultra Atomic Buster',
                        motions: ['M←↙↓↘→↗↑', 'M←↙↓↘→↗↑', 'Px3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Siberian Blizzard',
                        motions: ['M←↙↓↘→↗↑', 'M←↙↓↘→↗↑', 'Kx3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'rufus',
                order: 30,
                name: 'Rufus',
                stamina: 1050,
                stun: 950,
                country: 'USA',
                moves: [],
            },
            {
                id: 'el-fuerte',
                order: 31,
                name: 'El Fuerte',
                stamina: 900,
                stun: 1000,
                country: 'Mexico',
                moves: [],
            },
            {
                id: 'vega',
                order: 32,
                name: 'Vega',
                stamina: 1000,
                stun: 900,
                country: 'Spain',
                moves: [
                    {
                        name: 'Rolling Crystal Flash',
                        motions: ['MC←→', 'P'],
                    },
                    {
                        // *ARMOR BREAKING*
                        name: 'Scarlet Terror',
                        motions: ['MC↙→', 'K'],
                    },
                    {
                        // *EX HAS ARMOR BREAKING*
                        name: 'Sky High Claw',
                        motions: ['MC↓↑', 'P'],
                    },
                    {
                        name: 'Flying Barcelona Attack',
                        motions: ['MC↓↑', 'K'],
                    },
                    {
                        name: 'Short Back Flip',
                        motions: ['Kx3'],
                    },
                    {
                        name: 'Back Flip',
                        motions: ['Px3'],
                    },
                    {
                        name: 'Flying Barcelona Special',
                        motions: ['MC↙↘', 'M↗', 'K'],
                        type: 'super',
                    },
                    {
                        name: 'Bloody High Claw',
                        motions: ['MC↙↘', 'M↗', 'Kx3'],
                        type: 'ultra1',
                    },
                    {
                        name: 'Splendid Claw',
                        motions: ['MC↙→', 'M←→', 'Kx3'],
                        type: 'ultra2',
                    },
                ],
            },
            {
                id: 'balrog',
                order: 33,
                name: 'Balrog',
                stamina: 1050,
                stun: 1000,
                country: 'USA',
                moves: [],
            },
            {
                id: 'fei-long',
                order: 34,
                name: 'Fei Long',
                stamina: 1000,
                stun: 1050,
                country: 'Hong_Kong',
                moves: [],
            },
            {
                id: 't-hawk',
                order: 35,
                name: 'T. Hawk',
                stamina: 1100,
                stun: 1100,
                country: 'Mexico',
                moves: [],
            },
            {
                id: 'adon',
                order: 36,
                name: 'Adon',
                stamina: 950,
                stun: 1000,
                country: 'Thailand',
                moves: [],
            },
            {
                id: 'rose',
                order: 37,
                name: 'Rose',
                stamina: 950,
                stun: 1000,
                country: 'Italy',
                moves: [],
            },
        ],
    },
];

export const maxStamina = (gameId: number): number =>
    data.find(g => g.id === gameId)?.characters.reduce((acc, c) => Math.max(acc, c.stamina), 0) ?? 0;

export const maxStun = (gameId: number): number =>
    data.find(g => g.id === gameId)?.characters.reduce((acc, c) => Math.max(acc, c.stun), 0) ?? 0;

export const countries = (gameId: number): string[] => data.find(g => g.id === gameId)?.characters.map(c => c.country) ?? [];
