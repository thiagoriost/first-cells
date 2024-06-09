# @cells-primerEjercicio/primer-litelement

## Package info

### Package installation

Installation using NPM

```bash
npm install @cells-primerEjercicio/primer-litelement
```

### Entry points & exports

- (Default entry point)
  - PrimerLitelement (Class)
- primer-litelement.js
  - primer-litelement (Custom Element)


## PrimerLitelement (Class) primer-litelement (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { PrimerLitelement } from '@cells-primerEjercicio/primer-litelement';

class ExampleElement extends PrimerLitelement {
  ...
}
```

Use the custom element (defined globally):

```js
import '@cells-primerEjercicio/primer-litelement/primer-litelement.js';
```

```html
<primer-litelement ...>
  ...
</primer-litelement>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
  <primer-litelement></primer-litelement>
```

### Properties

- **name** (attribute: name): string = "Cells"
    Description for property
