import dados from "../dados.json";

export default function GetItem(key: string): any {
  const item: string = `${dados}.${key}`;
  const item2 = item.toString();
  console.log(item2);
  return item;
}
