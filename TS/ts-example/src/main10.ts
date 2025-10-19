type Inventory = Array<
  { name: string, quantity: number, category: string }
>

type InventoryResult = {[category:string]: { [product: string]: number}}

function organizeInventory(inventory: Inventory): InventoryResult {
  const result = {} as InventoryResult;
  for(const item of inventory) {
    if(!result[item.category]) result[item.category] = {};
    result[item.category][item.name] = (result[item.category][item.name] ?? 0) + item.quantity;
  }
  return result;
}

const inventary = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
];
console.log(organizeInventory(inventary));