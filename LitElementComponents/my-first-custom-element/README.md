# @cells-components/my-first-custom-element

## Package info

### Package installation

Installation using NPM

```bash
npm install @cells-components/my-first-custom-element
```

### Entry points & exports

- (Default entry point)
  - MyFirstCustomElement (Class)
- my-first-custom-element.js
  - my-first-custom-element (Custom Element)


## MyFirstCustomElement (Class) my-first-custom-element (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { MyFirstCustomElement } from '@cells-components/my-first-custom-element';

class ExampleElement extends MyFirstCustomElement {
  ...
}
```

Use the custom element (defined globally):

```js
import '@cells-components/my-first-custom-element/my-first-custom-element.js';
```

```html
<my-first-custom-element ...>
  ...
</my-first-custom-element>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
  <my-first-custom-element></my-first-custom-element>
```

### Properties

- **name** (attribute: name): string = "Cells"
    Description for property
