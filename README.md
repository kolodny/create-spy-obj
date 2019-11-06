create-spy-obj
===

Create jasmine spy objects magically

## Usage

```ts
import { createSpyObj } from 'create-spy-obj';

class MyService {
  myMethod() {
    return 'foo';
  }
}

interface MyInterface {
  getName(): string;
}

// Use it with a class
const myServiceSpyObj = createSpyObj<MyService>()
myServiceSpyObj.myMethod.and.returnValue('bar');

// Use it with an interface
const myInterfaceSpyObj = createSpyObj<MyInterface>()
myInterfaceSpyObj.getName.and.returnValue('cool');
```

### How it works

✨ Proxy magic ✨

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

[npm-image]: https://img.shields.io/npm/v/create-spy-obj.svg?style=flat-square
[npm-url]: https://npmjs.org/package/create-spy-obj
[travis-image]: https://img.shields.io/travis/kolodny/create-spy-obj.svg?style=flat-square
[travis-url]: https://travis-ci.org/kolodny/create-spy-obj
[downloads-image]: http://img.shields.io/npm/dm/create-spy-obj.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/create-spy-obj