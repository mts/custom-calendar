# Custom Calendar

## Features

![](/src/asset/custom-calendar.png = 500x300)

- A year has 11 months
- Even months have 32 days, odd months have 33
- 11th month has 1 day less in leap years
- A leap year is a year divisible by 5
- A week has 7 days (monday .. sunday)

## Approach
Development approach is to build big and complex components by first breaking them down into smaller and less complex components to promote `modularity`, `reusability`, `scalability`, `maintainability` via `Component Driven Design (CDD)` and `Atomic Design Patterns`. Following this approach, smaller pieces of the whole are built first as `atoms` and `molecules` implemented as React components to together form `organisms` and `templates`.

## Web technologies & patterns
- Create React App

  This project is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  `react` and `react-dom` are used to render the layout

- Storybook

  [Storybook](https://github.com/storybooks/storybook) is used as a development environment for all the React UI components. It allows you to browse this component library, view the different states of each component, and interactively develop and test components.

- Atomic Design

  `Custom Calendar` component is built using [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/) patterns to promote `reusability` and `scalability` with a `clearly defined component structure`.

  Components are built from small to big in terms of complexity. Atoms are built to form molecules,
  molecules to form a single `Calendar` organism.

  `Atoms` are categorized as `Image` and `Text` components.
  `Molecules` are categorized as `Action` and `Date` components.
  `Calendar` is the only organism.

- Babel

  [Babel](https://github.com/babel/babel) is used for transpiling ES6 to ES5 for the browser.

- Webpack

  [Webpack](https://github.com/webpack/webpack) is used to create bundles for development, production and storybook

- Sass

  [Sass](http://sass-lang.com/) CSS3 extention is used for adding nested rules, variables, mixins, selector inheritance.

- BEM

  [BEM](http://getbem.com/) Block Element Modifier methodology is used to to create reusable components by enabling independent blocks and CSS selectors to promote modularity and flexibility.

## Development Notes
- create-react-app is used to initially create the package.

- Application entry point is `/src/index.js`

- Sass CSS Preprocessor is used for styling
  [Adding a CSS Preprocessor (Sass, Less etc.)](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

## Available Scripts

- `npm start`
Runs the app in the development mode executing `watch-css` and `start-js` scripts<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run build`
Builds the app for production to the `build` folder executing `react-scripts build` script.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

- `npm run build-js`
Builds react app executing `react-scripts build`

- `npm run start-js`
Starts react app executing `react-scripts start`

- `npm run build-css`
Compiles CSS into SASS executing `node-sass-chokidar src/ -o src/`

- `npm run watch-css`
Compiles CSS into SASS and watches styling changes executing `npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive`

- `npm run storybook`
Runs Storybook<br>
Runs Storybook and shows all available components and their stories.
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

- `npm run build-storybook`
Export Storybook as a static app to `storybook-static` folder.<br>

- `npm test`
Launches the test runner in the interactive watch mode.

- `npm run eject`
Ejects `create-react-app` and exposes `react-scripts`.

## Directory structure
```
  |-components
   |---Atoms
   |-----Image
   |-------Icon
   |-----Text
   |-------Label
   |---Molecules
   |-----Action
   |-------Select
   |-----Date
   |-------CalendarInput
   |-------CalendarView
   |---Organisms
   |-----Date
   |-------Calendar
  |-data
  |-fonts
  |-stories
  |-theming
  |-utility
```

- `components` folder contains all the components structured in `atomic design patterns`
as `atoms`, `molecules` and `organisms` taking into account the complexity of each component.

- `data` folder contains the static data used to populate the components with sample data.

- `font` folder contains the IcoMoon fonts file

- `stories` folder contains the stories of all components in `index.js` file

- `theming` folder contains CSS styling configuration
  implementing a theme containing font and color choices

- `utility` folder contains
  -- calendar utility to calculate all dates to populate in a calendar
  -- font utility to collect icomoon font paths
  -- number utility to get a range of numbers

## Components

### Atoms

#### Atoms > Action
- `Button` is a
  stateless function component
  receiving `text, className` props
`rendering`
  a button with custome styling from the parent.

Sample usages are as follows:
```javascript
  <Button text="click me" />
```

#### Atoms > Image
- `Icon` is a
  stateless function component
  receiving `name, width, height, fill, className` props
`rendering`
  an svg element passing on a path
  matching different icons with name.

Sample usages are as follows:
```javascript
  <Icon name={'chevron-thin-left'} width={20} height={20} />
  <Icon name={'chevron-thin-right'} width={20} height={20} />
  <Icon name={'backward'} width={20} height={20} />
  <Icon name={'forward'} width={20} height={20} />
  <Icon name={'calendar'} width={20} height={20} />
```

#### Atoms > Text
- `Label` is a
  stateless function component
  receiving `color, size, text` props
`rendering`
  a styled span

Sample usages are as follows:
```javascript
  <Label color="black" size="tiny" text="some label" />
  <Label color="black" size="small" text="some label" />
  <Label color="black" size="medium" text="some label" />
  <Label color="black" size="large" text="some label" />

  <Label color="blue" size="tiny" text="some label" />
  <Label color="blue" size="small" text="some label" />
  <Label color="blue" size="medium" text="some label" />
  <Label color="blue" size="large" text="some label" />

  <Label color="grey" size="tiny" text="some label" />
  <Label color="grey" size="small" text="some label" />
  <Label color="grey" size="medium" text="some label" />
  <Label color="grey" size="large" text="some label" />
```

### Molecules

#### Molecules > Action
- `Select` is a
  stateless function component
  receiving `options, selectedOptionIndex, optionType, onChange` props
`rendering`
  two Icon components on the left and on the right
  along with a Label component
`handling`
  onClick events via onClickLeft and onClickRight functions
  both firing onChange function prop

Sample usages are as follows:
```javascript
  <Select
    options={weekOptions.map((week) => week.toUpperCase())}
    selectedOptionIndex={weekOptions.length - 1}
    optionType={'week'}
  />
  <Select
    options={monthOptions.map((month) => month.toUpperCase())}
    selectedOptionIndex={monthOptions.length - 1}
    optionType={'month'}
  />
  <Select
    options={yearOptions.map((year) => String(year))}
    selectedOptionIndex={yearOptions.length - 1}
    optionType={'year'}
  />
```

#### Molecules > Date
- `CalendarInput` is a
  stateless function component
  receiving `today, toggleView` props
`rendering`
  two Label components and an Icon component
`handling`
  onClick event by firing toggleView function prop

Sample usage is as follows:
```javascript
  <CalendarInput
    today={{
      year: 2015,
      monthOfYear: 9,
      dateOfTheMonth: 27,
    }}
    toggleView={() => {}}
  />
```

- `CalendarView` is a
  stateless class component
  receiving `displayDays, onChange` props
`rendering`
  Label and Select components

`handling`
  a number of events via onDayChange, onMonthChange and onYearChange functions
  all firing onChange function prop

Sample usages are as follows:
```javascript
  <CalendarView
    displayDays={getDisplayDays({
      year: 2017,
      monthOfYear: 5,
      dateOfTheMonth: 15,
    })}
    toggleView={() => {}}
  />
```

### Organisms

#### Organisms > Date
- `Calendar` is a
  statefull class component
  receiving `today` prop
`rendering`
  a CalendarInput and a CalendarView components

`handling`
  a number of events via onChange() and toggleView() functions
  both setting internal state

Sample usages are as follows:
```javascript
  <Calendar
    today={{
      year: 2018,
      monthOfYear: 8,
      dateOfTheMonth: 7,
    }}
  />
```
