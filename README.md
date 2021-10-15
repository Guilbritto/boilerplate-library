# React Martins Component Library

[![Main CI](https://github.com/Guilbritto/react-martins-component-library/workflows/Main%20CI/badge.svg)](https://github.com/Guilbritto/react-martins-component-library/actions?query=workflow%3AMain+branch%3Amain)
[![codecov](https://codecov.io/gh/Guilbritto/react-martins-component-library/branch/main/graph/badge.svg?token=PWEI1FO5I2)](https://codecov.io/gh/Guilbritto/react-martins-component-library)

This repo aims to be used as a design system for martins
contains several components written in react

# Storybook

https://guilbritto.github.io/react-martins-component-library/?path=/story/button--default


## Figma references

[Figma](https://www.figma.com/file/oX25OOCKxYY37i47njHQdO/Tracking?node-id=0%3A1)

## Core Technologies

-   [ReactJS](https://reactjs.org/)
-   [Styled Components](https://styled-components.com/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Jest](https://jestjs.io/)
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [Storybook](https://storybook.js.org/)
-   [ts-jest](https://github.com/kulshekhar/ts-jest)
-   [ts-node](https://github.com/TypeStrong/ts-node)

## How to use this repository

Install all dependencies

```
    yarn
```

Executes the storybook in http://localhost:6006/

```
    yarn storybook
```

Execute tests

```
    yarn test
```

Execute test by name

```
    yarn test -- 'Input'
```

## Component's structure

Every componente has the same structure

-   `Input/__test__` A folder to keep all tests of the component

-   `Input/__test__/__snapshots__` Where are generated all snapshots of this component

-   `Input/__test__/InputComponent.tsx` Where we craft all the tests of this component

-   `Input/InputComponent.tsx` Where we craft the component

-   `Input/InputComponent.style.ts` Where we craft the styled components to use in InputComponent.tsx

-   `Input/InputComponent.types.ts` Where we craft all types used in InputComponent.tsx

## How to contribute

We use trunk based development

-   We have a branch MAIN
-   To contribute you have to create a branch based on a main branch
-   Generate a Pull Request
-   After Merge your Pull Request
-   Your code will be on the Main branch waiting for a release publish
