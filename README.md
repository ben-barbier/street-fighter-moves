# Street Fighter Moves

> A handset ready "Street Fighter" moves glossary

![StreetFighterMoves](https://github.com/ben-barbier/street-fighter-moves/blob/main/.github/preview.png?raw=true)

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/9e068207/street-fighter-moves)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Github Issues](https://img.shields.io/github/issues/ben-barbier/street-fighter-moves)]()
[![Github Stars](https://img.shields.io/github/stars/ben-barbier/street-fighter-moves)]()

<hr />

[Website](https://street-fighter-moves.tech-homies.io/)


<hr />

## Linting and formatting

- This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for linting and formatting.
- To Turns off all rules of ESLint that are unnecessary or might conflict with Prettier, we use [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
- To Run Prettier as an ESLint rule, we use [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) as explained in [Notes for eslint-plugin-prettier users](https://github.com/angular-eslint/angular-eslint#notes-for-eslint-plugin-prettier-users).
- This project uses [prettier-plugin-organize-imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports) to organize imports.
- To check linter rules (including formatting rules) for *.html and *.ts files, run `npm run lint`.
- To fix linter errors (including formatting errors) for *.html and *.ts files, run `npm run lint:fix`.
- To check formatting rules for all files, run `npm run fmt:check`.
- To fix formatting errors all files, run `npm run fmt`.

## Tests

- This project uses [Jest](https://jestjs.io/) for unit testing.
- Unit tests are configured according to [this procedure](https://medium.com/@kyjungok/setup-jest-in-angular-application-22b22609cbcd).
- To run unit tests, run `npm test`.
