interface User {
  readonly name: string
  age: number
}

let u: User = {
  name: 'xyq',
  age: 22,
}

interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface SquareConfig {
  color?: string;
  width?: number;
}

