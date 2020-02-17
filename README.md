# chain.js

## Usage

```js
import Chain from "chain.js";

Chain(next => {
  setTimeout(() => {
    console.log(1);
    next();
  }, 300);
})
  .then(next => {
    setTimeout(() => {
      console.log(2);
      next();
    }, 300);
  })
  .then(next => {
    setTimeout(() => {
      console.log(3);
      next();
    }, 300);
  });
```

> 1
> 2
> 3
