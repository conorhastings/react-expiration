## React Expiration

A simple component that uses a render callback to expose if a the current date is past a user set expirationDate

### Install

```bash
npm install react-expiration --save
```

### Props

* **render** - a function that receives a single boolean argument that will be true if the current date is past the expiration date and false if not
* **expirationDate** - a date object indicating the date that will be used to determine the argument for the render function 

### Example

```jsx

import Expiration from 'react-expiration';
<Expiration
  render={isExpired => isExpired ? "welcome to the year 3000" : "still the dumb 2000s"}
  expirationDate={new Date("12/31/2999")}
/>
```

### License

MIT