# Installation

<p class="description">Install react-swipeable-view.</p>

react-swipeable-view is available as a npm packages.

| Package | Version | Download | Size (kB gzipped) |
|---------|:--------|:---------|:------------------|
| react-swipeable-view | [![npm version](https://img.shields.io/npm/v/react-swipeable-view.svg)](https://www.npmjs.com/package/react-swipeable-view) | [![npm downloads](https://img.shields.io/npm/dm/react-swipeable-view.svg)](https://www.npmjs.com/package/react-swipeable-view) | 5.08 |
| react-swipeable-view-utils | [![npm version](https://img.shields.io/npm/v/react-swipeable-view-utils.svg)](https://www.npmjs.com/package/react-swipeable-view-utils) | [![npm downloads](https://img.shields.io/npm/dm/react-swipeable-view-utils.svg)](https://www.npmjs.com/package/react-swipeable-view-utils) | 3.52 |
| react-swipeable-view-native | [![npm version](https://img.shields.io/npm/v/react-swipeable-view-native.svg)](https://www.npmjs.com/package/react-swipeable-view-native) | [![npm downloads](https://img.shields.io/npm/dm/react-swipeable-view-native.svg)](https://www.npmjs.com/package/react-swipeable-view-native) | ? |

## npm

```sh
npm install --save react-swipeable-view
```

## Packages stucture

The project is split into multiple packages.
This is really useful for code sharing and isolation.
We are using [Lerna](https://github.com/lerna/lerna) to do so.
The project has the following packages:
- `react-swipeable-view-core`: core modules shared between the different packages.
- [react-swipeable-view](https://www.npmjs.com/package/react-swipeable-view): browser implementation of the `<SwipeableViews />` component.
- [react-swipeable-view-native](https://www.npmjs.com/package/react-swipeable-view-native): native implementation**s** of the `<SwipeableViews />` component.
- [react-swipeable-view-utils](https://www.npmjs.com/package/react-swipeable-view-utils): Higher order Components providing additional functionalities like `virtualize()`.
