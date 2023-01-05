# DashUiLib

Components library for build modern web applications

![Dash UI](https://github.com/DashReact/dash-ui/blob/main/media/icon.png?raw=true)

## Libraries

This section contains all the comands related to libraries manipulation in the workspace.

##### Generating apps

nx g @nrwl/react:app {app-name}

##### Generating Libraries

```bash
nx g @nrwl/react:library {lib-name} --publishable --importPath="@dash-ui-lib/{lib-name}" --tags="components,ts,dash-ui,react,react-native,js"
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

#### Publishing libraries

```bash
nx deploy {lib-name} --dry-run
```

#### Running app

nx serve {app-name}