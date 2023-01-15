# Dash UI Lib (alpha)

#### Components library for build modern web applications :metal: inspired in [Tailwindcss](https://tailwindcss.com/) and [Chakra ui](https://chakra-ui.com/)

![Dash UI](https://github.com/DashReact/dash-ui/blob/main/media/icon.png?raw=true)

<img style="float: right;" title="SASS" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">

<img style="float: right;" title="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">

<img style="float: right;" title="TailwindCSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">

<img style="float: right;" title="Chakra" src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white">

<img style="float: right;" title="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">

## Demo components

#### Themes and buttons

![Dash UI](https://github.com/DashReact/dash-ui/blob/main/media/demo/themes-btns.png?raw=true)

#### Layouts and text utilities

![Dash UI](https://github.com/DashReact/dash-ui/blob/main/media/demo/layouts-text.png?raw=true)

#### Flex utilities

![Dash UI](https://github.com/DashReact/dash-ui/blob/main/media/demo/flex.png?raw=true)

#### Grid system

![Dash UI](https://github.com/DashReact/dash-ui/blob/main/media/demo/grid.png?raw=true)

#### Glass effects and loaders

![Dash UI](https://github.com/DashReact/dash-ui/blob/main/media/demo/glass-loaders.png?raw=true)

##### Generating apps

nx g @nrwl/react:app {app-name}

##### Run app

nx serve {app-name}

## Libraries

This section contains all the comands related to libraries manipulation in the workspace.

##### Generating Libraries

```bash
nx g @nrwl/react:library {lib-name} --publishable --importPath="@dash-ui-lib/{lib-name}" --tags="components,ts,dash-ui,react,react-native,js,sass"
```

##### Creating Components

```bash
npx nx g @nrwl/react:component {component-name} --project={lib-name} --export
```

##### Creating Hooks

```bash
nx g @nrwl/react:hook {hook-name} --project={lib-name}
```

## Testing

This section contains all the comands related with tests for the workspace

### Running test

```bash
npx nx test {lib-name}
```

##### Run storybook for library

```bash
nx run {lib-name}:storybook
```

##### Creation storybook with cypres for library

```bash
nx generate @nrwl/react:storybook-configuration --name={lib-name} --configureCypress --tsConfiguration=true
```

##### Rerun storybook with cypres for library

```bash
nx g @nrwl/react:stories --name={lib-name} --ConfigureCypress
```

##### Running lin test

```bash
npx nx lint {lib-name}
```

#### Publishing the library

```bash
nx build {lib-name}
```

```bash
cd /dist/libs/{lib-name}
```

```bash
npm publish --access public
```

#### Running app

nx serve {app-name}
