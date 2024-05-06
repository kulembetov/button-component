# GreatFrontend Button Component

## Overview

This button component is part of GreatFrontend's design system, ensuring UI consistency across various apps and challenges on the platform.

## Installation

Ensure React and React Router are installed in your project:

```bash
npm install react react-router-dom
```

## Button Types

The component supports the following types:

- `primary`
- `secondary`
- `tertiary`
- `link-color`
- `link-gray`
- `destructive`

## Button Sizes

Available sizes:

- `small`
- `medium`
- `large`
- `extra-large`
- `extra-large-2`

## Props

- `children` (React.ReactNode): Content of the button. Optional.
- `type` (required): Button type, one of the six specified types.
- `size` (required): One of the defined sizes.
- `isDisabled` (boolean): If true, the button is inactive. Default is false. Optional.
- `onClick` (function): Handler for click events. Optional.
- `iconColor` (string): Color of the icon. Optional.
- `iconBefore` (ReactElement): Icon displayed before the content. Optional.
- `iconAfter` (ReactElement): Icon displayed after the content. Optional.
- `iconCenter` (ReactElement): Icon displayed at the center. Optional.
- `isIconOnly` (boolean): If true, only the icon is displayed. Default is false. Optional.
- `hoverColor` (string): Icon color on hover, defaults to `iconColor`. Optional.
- `to` (string): URL to navigate on button click, requires `react-router-dom`. Optional.

## Usage Example

```jsx
import React from "react";
import { Button } from "./components/Button/Button"; // Adjust path as necessary

const App = () => {
  return (
    <Button
      type="primary"
      size="large"
      iconBefore={<StarIcon />}
      iconAfter={<StarIcon />}
      to="/"
    >
      Large
    </Button>
  );
};

export default App;
```

## Styling

Styles are defined in `button.module.css`. Ensure this file is imported to apply the default styles. Extend these styles as needed.
