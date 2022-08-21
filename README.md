<div align="center">

<img alt="Context Thief icon" width="128" height="128" align="center" src=".github/icon.png"/>

# Context Thief

**Helper function to steal React context values for testing**

[![npm version](https://badgen.net/npm/v/context-thief?icon=npm)](https://www.npmjs.com/package/context-thief)
[![check status](https://badgen.net/github/checks/evelynhathaway/context-thief/main?icon=github)](https://github.com/evelynhathaway/context-thief/actions)
[![license: MIT](https://badgen.net/badge/license/MIT/blue)](/LICENSE)

</div>

## Description

Context Thief stores the current context value for the inputted context for use in tests.

If you test components with contexts and don't want to create a new function or component every time, this module is for you!

## Installation

```bash
npm install --save-dev context-thief
```

## Usage

### `createContextThief(context)`

**Returns**: `{ContextThief, contextValue}` Object containing the component to render and the outputted value

| Parameter | Type      | Description                            |
| --------- | --------- | -------------------------------------- |
| context   | `Context` | Instance of `React.Context` to consume |

## Example

**`example-component.tsx`**

```tsx
import React from "react";

export const ExampleContext = React.createContext(false);
export const ExampleComponent: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <TestContext.Provider value={true}>
            {children}
        </TestContext.Provider>
    );
};
```

**`example-component.test.tsx`**

```tsx
import React from "react";
import {render} from "@testing-library/react";
import {createContextThief} from "context-thief";
import {ExampleContext, ExampleComponent} from "./example-component";

it("should have the default current context value", () => {
    const {ContextThief, contextValue} = createContextThief(ExampleContext);

    render(
        <ExampleComponent>
            <ContextThief />
        </ExampleComponent>
    );

    expect(contextValue.current).toBe(true);
});
```

## License

Copyright Evelyn Hathaway, [MIT License](/LICENSE)

### Icon Glyph

Icon glyph made by [Gregor Cresnar](https://thenounproject.com/grega.cresnar/)
