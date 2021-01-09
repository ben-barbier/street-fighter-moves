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
    ultra1: Move;
    ultra2: Move;
    super: Move;
    specials: Move[];
}

export interface Move {
    name: string;
    originalName?: string;
    moves: string[];
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
                ultra1: {
                    name: 'Fireball ++',
                    originalName: 'Metsu Hadouken',
                    moves: ['M↓↘→', 'M↓↘→', 'Px3'],
                },
                ultra2: {
                    name: 'Dragon Punch ++',
                    originalName: 'Metsu Shoryuken',
                    moves: ['M↓↘→', 'M↓↘→', 'Kx3'],
                },
                super: {
                    name: 'Fireball +',
                    originalName: 'Shinkuu Hadouken',
                    moves: ['M↓↘→', 'M↓↘→', 'P'],
                },
                specials: [
                    {
                        name: 'Fireball',
                        originalName: 'Hadouken',
                        moves: ['M↓↘→', 'P'],
                    },
                    {
                        name: 'Dragon Punch',
                        originalName: 'Shoryuken',
                        moves: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Hurricane Kick',
                        originalName: 'Tatsumaki Senpuukyaku',
                        moves: ['M↓↙←', 'K'],
                    },
                    {
                        name: 'Air Hurricane Kick',
                        originalName: '',
                        moves: ['J', 'M↓↙←', 'K'],
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
                ultra1: {
                    name: 'Shinryuuken',
                    moves: ['M↓↘→', 'M↓↘→', 'P3'],
                },
                ultra2: {
                    name: 'Guren Senpukyaku',
                    moves: ['M↓↘→', 'M↓↘→', 'K3'],
                },
                super: {
                    name: 'Shoryu-Reppa',
                    moves: ['M↓↘→', 'M↓↘→', 'P'],
                },
                specials: [
                    {
                        name: 'Fireball',
                        originalName: 'Hadouken',
                        moves: ['M↓↘→', 'P'],
                    },
                    {
                        name: 'Dragon Punch',
                        originalName: 'Shoryuken',
                        moves: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Hurricane Kick',
                        originalName: 'Tatsumaki Senpuukyaku',
                        moves: ['M↓↙←', 'K'],
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
                ultra1: {
                    // *ARMOR BREAKING*
                    name: 'Ultimate Killer Head Ram',
                    originalName: 'Shin Oni Musou',
                    moves: ['MC←→', 'M←→', 'Px3'],
                },
                ultra2: {
                    name: 'Orochi Breaker',
                    moves: ['M→↘↓↙←', 'M→↘↓↙←', 'Px3'],
                },
                super: {
                    name: 'Super Killer Head Ram',
                    originalName: 'oni musou',
                    moves: ['MC←→', 'M←→', 'P'],
                },
                specials: [
                    {
                        name: 'Hundred Hand Slap',
                        moves: ['P', 'P', 'P', 'P'],
                    },
                    {
                        // *ARMOR BREAKING*
                        name: 'Sumo Headbutt',
                        moves: ['MC←→', 'P'],
                    },
                    {
                        name: 'Sumo Smash',
                        originalName: 'Hyakkan Otoshi',
                        moves: ['MC↓↑', 'K'],
                    },
                    {
                        name: 'Oicho Throw',
                        originalName: 'Oicho Nage',
                        moves: ['M→↘↓↙←', 'P'],
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
                ultra1: {
                    name: 'Yoroitoshi',
                    moves: ['M→↘↓↙←', 'M→↘↓↙←', 'Px3'],
                },
                ultra2: {
                    name: 'Hashinsho',
                    moves: ['M↓↘→', 'M↓↘→', 'Kx3'],
                },
                super: {
                    name: 'Kasumi Suzaku',
                    moves: ['J', 'M↓↘→', 'M↓↘→', 'P'],
                },
                specials: [
                    {
                        name: 'Kunai',
                        moves: ['J', 'M↓↘→', 'P'],
                    },
                    {
                        name: 'Tsujigoe',
                        moves: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Neck Breaker',
                        moves: ['M←↙↓↘→', 'P'],
                    },
                    {
                        name: 'Raida',
                        moves: ['M→↘↓↙←', 'P'],
                    },
                    {
                        name: 'Kasumi Gake',
                        moves: ['M↓↘→', 'K'],
                    },
                    {
                        name: 'Kazegiri',
                        moves: ['M→↓↘', 'K'],
                    },
                    {
                        name: 'Tsumuji',
                        moves: ['M↓↙←', 'K'],
                    },
                    {
                        name: 'Hein',
                        moves: ['M←↓↙', 'K'],
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
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'dudley',
                order: 6,
                name: 'Dudley',
                stamina: 1050,
                stun: 1050,
                country: 'UK',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'seth',
                order: 7,
                name: 'Seth',
                stamina: 800,
                stun: 900,
                country: 'None',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'gouken',
                order: 8,
                name: 'Gouken',
                stamina: 1000,
                stun: 1000,
                country: 'Japan',
                ultra1: {
                    name: 'Shin Shoryuken',
                    moves: ['M↓↘→', 'M↓↘→', 'Px3'],
                },
                ultra2: {
                    // 💡 : inflict heavy stun instead of damage
                    name: 'Denjin Hadouken',
                    moves: ['M↓↘→', 'M↓↘→', 'Kx3'],
                },
                super: {
                    name: 'Forbidden Shoryuken',
                    moves: ['M↓↘→', 'M↓↘→', 'P'],
                },
                specials: [
                    {
                        name: 'Gohadoken',
                        // 💡 : Chargeable
                        // 💡 : 1 P = 1 direction
                        moves: ['M↓↘→', 'P'],
                    },
                    {
                        name: 'Senkugoshoha',
                        moves: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Tatsumaki Gorasen',
                        moves: ['M↓↙←', 'K'],
                    },
                    {
                        name: 'Hyakkishu',
                        moves: ['M→↓↘', 'K'],
                    },
                    {
                        name: 'Kongoshin',
                        // 💡 : K or P
                        moves: ['M←↓↙', 'K'],
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
                // TODO: vérifier la différence entre super et ultra : https://www.eventhubs.com/moves/sf4/akuma/
                ultra1: {
                    name: 'Wrath of the Raging Demon',
                    originalName: 'Shin Shun Goku Satsu',
                    moves: ['P1', 'P1', 'M←', 'K1', 'P3'],
                },
                ultra2: {
                    name: 'Demon Armageddon',
                    moves: ['M↑', 'M↑', 'Kx3'],
                },
                super: {
                    name: 'Raging Demon',
                    originalName: 'Shun Goku Satsu',
                    moves: ['P1', 'P1', 'M←', 'K1', 'P3'],
                },
                specials: [
                    {
                        name: 'Fireball',
                        originalName: 'Gou Hadouken',
                        moves: ['M↓↘→', 'P'],
                    },
                    {
                        name: 'Air Fireball (↘)',
                        originalName: 'Gou Hadouken',
                        moves: ['J', 'M↓↘→', 'P'],
                    },
                    {
                        name: 'Multi-hit Fireball',
                        originalName: 'Shakunetsu Hadouken',
                        moves: ['M→↘↓↙←', 'P'],
                    },
                    {
                        name: 'Dragon Punch',
                        originalName: 'Gou Shoryuken',
                        moves: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Hurricane Kick',
                        originalName: 'Tatsumaki Zankukyaku',
                        moves: ['M↓↙←', 'K'],
                    },
                    {
                        name: 'Demon Flip',
                        originalName: 'Hyakki Shu',
                        moves: ['M→↓↘', 'K'],
                    },
                    {
                        name: 'Teleport - Approach (far)',
                        originalName: 'Ahura Senku',
                        moves: ['M→↓↘', 'Px3'],
                    },
                    {
                        name: 'Teleport - Approach (short)',
                        originalName: 'Ahura Senku',
                        moves: ['M→↓↘', 'Kx3'],
                    },
                    {
                        name: 'Teleport - Retreat (far)',
                        originalName: 'Ahura Senku',
                        moves: ['M←↓↙', 'Px3'],
                    },
                    {
                        name: 'Teleport - Retreat (short)',
                        originalName: 'Ahura Senku',
                        moves: ['M←↓↙', 'Kx3'],
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
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'dan',
                order: 11,
                name: 'Dan',
                stamina: 1000,
                stun: 900,
                country: 'Hong_Kong',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'sakura',
                order: 12,
                name: 'Sakura',
                stamina: 950,
                stun: 1000,
                country: 'Japan',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'yun',
                order: 13,
                name: 'Yun',
                stamina: 900,
                stun: 1000,
                country: 'Hong_Kong',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'juri',
                order: 14,
                name: 'Juri',
                stamina: 950,
                stun: 950,
                country: 'South_Korea',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'chun-li',
                order: 15,
                name: 'Chun-Li',
                stamina: 900,
                stun: 1050,
                country: 'China',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'dhalsim',
                order: 16,
                name: 'Dhalsim',
                stamina: 900,
                stun: 900,
                country: 'India',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'abel',
                order: 17,
                name: 'Abel',
                stamina: 1050,
                stun: 1050,
                country: 'France',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'c-viper',
                order: 18,
                name: 'Crimson Viper',
                stamina: 900,
                stun: 950,
                country: 'USA',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'm-bison',
                order: 19,
                name: 'M. Bison',
                stamina: 1000,
                stun: 950,
                country: 'None',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'sagat',
                order: 20,
                name: 'Sagat',
                stamina: 1050,
                stun: 1000,
                country: 'Thailand',
                ultra1: {
                    name: 'Tiger Destruction',
                    moves: ['M↓↘→', 'M↓↘→', 'Kx3'],
                },
                ultra2: {
                    name: 'Tiger Cannon',
                    moves: ['M↓↘→', 'M↓↘→', 'Px3'],
                },
                super: {
                    name: 'Tiger Genocide',
                    moves: ['M↓↘→', 'M↓↘→', 'K'],
                },
                specials: [
                    {
                        name: 'Tiger Uppercut',
                        moves: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Tiger Knee',
                        moves: ['M→↓↘', 'K'],
                    },
                    {
                        name: 'Tiger Shot (High)',
                        moves: ['M↓↘→', 'P'],
                    },
                    {
                        name: 'Tiger Shot (Low)\n',
                        moves: ['M↓↘→', 'K'],
                    },
                    {
                        name: 'Angry Scar',
                        moves: ['M↓↙←', 'M↓↙←', 'K'],
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
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'dee-jay',
                order: 22,
                name: 'Dee Jay',
                stamina: 1000,
                stun: 1000,
                country: 'Jamaica',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'cody',
                order: 23,
                name: 'Cody',
                stamina: 1000,
                stun: 1050,
                country: 'USA',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'guy',
                order: 24,
                name: 'Guy',
                stamina: 1000,
                stun: 950,
                country: 'USA',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'hakan',
                order: 25,
                name: 'Hakan',
                stamina: 1050,
                stun: 1100,
                country: 'Turkey',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'yang',
                order: 26,
                name: 'Yang',
                stamina: 900,
                stun: 1000,
                country: 'Hong_Kong',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'guile',
                order: 27,
                name: 'Guile',
                stamina: 1000,
                stun: 900,
                country: 'USA',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'blanka',
                order: 28,
                name: 'Blanka',
                stamina: 1000,
                stun: 950,
                country: 'Brazil',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'zangief',
                order: 29,
                name: 'Zangief',
                stamina: 1100,
                stun: 1100,
                country: 'USSR',
                ultra1: {
                    name: 'Ultra Atomic Buster',
                    moves: ['M←↙↓↘→↗↑', 'M←↙↓↘→↗↑', 'Px3'],
                },
                ultra2: {
                    name: 'Siberian Blizzard',
                    moves: ['M←↙↓↘→↗↑', 'M←↙↓↘→↗↑', 'Kx3'],
                },
                super: {
                    name: 'Final Atomic Buster',
                    moves: ['M←↙↓↘→↗↑', 'M←↙↓↘→↗↑', 'K'],
                },
                specials: [
                    {
                        name: 'Spinning Pile Driver',
                        moves: ['M←↙↓↘→↗↑', 'P'],
                    },
                    {
                        name: 'Banishing Flat',
                        moves: ['M→↓↘', 'P'],
                    },
                    {
                        name: 'Spinning Lariat',
                        moves: ['Px3'],
                    },
                    {
                        name: 'Quick Lariat',
                        moves: ['Kx3'],
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
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'el-fuerte',
                order: 31,
                name: 'El Fuerte',
                stamina: 900,
                stun: 1000,
                country: 'Mexico',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'vega',
                order: 32,
                name: 'Vega',
                stamina: 1000,
                stun: 900,
                country: 'Spain',
                ultra1: {
                    name: 'Bloody High Claw',
                    moves: ['MC↙↘', 'M↗', 'Kx3'],
                },
                ultra2: {
                    name: 'Splendid Claw',
                    moves: ['MC↙→', 'M←→', 'Kx3'],
                },
                super: {
                    name: 'Flying Barcelona Special',
                    moves: ['MC↙↘', 'M↗', 'K'],
                },
                specials: [
                    {
                        name: 'Rolling Crystal Flash',
                        moves: ['MC←→', 'P'],
                    },
                    {
                        // *ARMOR BREAKING*
                        name: 'Scarlet Terror',
                        moves: ['MC↙→', 'K'],
                    },
                    {
                        // *EX HAS ARMOR BREAKING*
                        name: 'Sky High Claw',
                        moves: ['MC↓↑', 'P'],
                    },
                    {
                        name: 'Flying Barcelona Attack',
                        moves: ['MC↓↑', 'K'],
                    },
                    {
                        name: 'Short Back Flip',
                        moves: ['Kx3'],
                    },
                    {
                        name: 'Back Flip',
                        moves: ['Px3'],
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
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'fei-long',
                order: 34,
                name: 'Fei Long',
                stamina: 1000,
                stun: 1050,
                country: 'Hong_Kong',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 't-hawk',
                order: 35,
                name: 'T. Hawk',
                stamina: 1100,
                stun: 1100,
                country: 'Mexico',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'adon',
                order: 36,
                name: 'Adon',
                stamina: 950,
                stun: 1000,
                country: 'Thailand',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
            {
                id: 'rose',
                order: 37,
                name: 'Rose',
                stamina: 950,
                stun: 1000,
                country: 'Italy',
                ultra1: {
                    name: '',
                    moves: [],
                },
                ultra2: {
                    name: '',
                    moves: [],
                },
                super: {
                    name: '',
                    moves: [],
                },
                specials: [],
            },
        ],
    },
];

export const maxStamina = (gameId: number): number =>
    data.find(g => g.id === gameId)?.characters.reduce((acc, c) => Math.max(acc, c.stamina), 0) ?? 0;

export const maxStun = (gameId: number): number =>
    data.find(g => g.id === gameId)?.characters.reduce((acc, c) => Math.max(acc, c.stun), 0) ?? 0;

export const countries = (gameId: number): string[] => data.find(g => g.id === gameId)?.characters.map(c => c.country) ?? [];
