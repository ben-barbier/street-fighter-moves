/// <reference types="cypress" />

context('Navigation', () => {
    context('Characters', () => {
        const characters = [
            { slug: 'abel', name: 'Abel' },
            { slug: 'adon', name: 'Adon' },
            { slug: 'akuma', name: 'Akuma' },
            { slug: 'balrog', name: 'Balrog' },
            { slug: 'blanka', name: 'Blanka' },
            { slug: 'c-viper', name: 'Crimson Viper' },
            { slug: 'cammy', name: 'Cammy' },
            { slug: 'chun-li', name: 'Chun-Li' },
            { slug: 'cody', name: 'Cody' },
            { slug: 'dan', name: 'Dan' },
            { slug: 'dee-jay', name: 'Dee Jay' },
            { slug: 'dhalsim', name: 'Dhalsim' },
            { slug: 'dudley', name: 'Dudley' },
            { slug: 'e-honda', name: 'Edmond Honda' },
            { slug: 'el-fuerte', name: 'El Fuerte' },
            { slug: 'fei-long', name: 'Fei Long' },
            { slug: 'gen', name: 'Gen' },
            { slug: 'gouken', name: 'Gouken' },
            { slug: 'guile', name: 'Guile' },
            { slug: 'guy', name: 'Guy' },
            { slug: 'hakan', name: 'Hakan' },
            { slug: 'ibuki', name: 'Ibuki' },
            { slug: 'juri', name: 'Juri' },
            { slug: 'ken', name: 'Ken' },
            { slug: 'm-bison', name: 'M. Bison' },
            { slug: 'makoto', name: 'Makoto' },
            { slug: 'rose', name: 'Rose' },
            { slug: 'rufus', name: 'Rufus' },
            { slug: 'ryu', name: 'Ryu' },
            { slug: 'sagat', name: 'Sagat' },
            { slug: 'sakura', name: 'Sakura' },
            { slug: 'seth', name: 'Seth' },
            { slug: 't-hawk', name: 'T. Hawk' },
            { slug: 'vega', name: 'Vega' },
            { slug: 'yang', name: 'Yang' },
            { slug: 'yun', name: 'Yun' },
            { slug: 'zangief', name: 'Zangief' },
        ];

        characters.forEach(character => {
            it(`${character.name} page exists`, () => {
                cy.visit(`/sf4/characters/${character.slug}`).get('h1').contains(character.name);
                cy.percySnapshot(character.name);
            });
        });
    });
});