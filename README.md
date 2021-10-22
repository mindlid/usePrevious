## A react hook for getting a variable previous state

### Install

```
npm i @saulpalv/useprevious

//or

yarn add @saulpalv/useprevious
```

### Demo

[Open in CodeSandbox](https://codesandbox.io/s/saulpalv-useprevious-tbqmp)

### Usage

```tsx
import type { FC } from "react";
import { useState } from "react";
import { usePrevious } from "./usePrevious";

const phones = ["Iphone", "PinePhone", "Librem", "Android", "Symbian"] as const;
type IPhone = typeof phones[number];

export const App: FC = () => {
  const [selection, setSelections] = useState<IPhone>(phones[0]);

  const previousSelection = usePrevious<IPhone>(selection);

  console.log(previousSelection, selection);

  return (
    <div style={{ marginLeft: "1rem" }}>
      <h4>Select Phone Type</h4>
      <div style={{ display: "flex" }}>
        <select onChange={(e) => setSelections(e.target.value as IPhone)}>
          {phones.map((phone) => (
            <option value={phone}>{phone}</option>
          ))}
        </select>
        <div style={{ marginLeft: "1rem" }}>
          <span>{`Previous : ${previousSelection}`}</span>
          <br />
          <span>{`Current : ${selection}`}</span>
        </div>
      </div>
    </div>
  );
};
```
