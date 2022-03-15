import dados from "../dados.json";

export default function GetItem(key: string): any {
  const item: string = `${dados}.${key}`.toString();
  console.log(item);
  return item;
}
