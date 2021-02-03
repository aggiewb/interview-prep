/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). 
If an item cannot be found, add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.
*/ 

function updateInventory(arr1, arr2) {
    const currentInventory = arr1.reduce((inventory, item) => {
        inventory[item[1]] = item[0];
        return inventory;
    }, {});
    arr2.forEach(item => {
        const newItemName = item[1];
        let currentAmount = currentInventory[newItemName];
        const newAmount = item[0];
        currentInventory[newItemName] = (currentAmount || 0) + newAmount;
    });
    const inventoryKeys = Object.keys(currentInventory).sort();
    const inventoryArr = [];
    for(let i = 0; i < inventoryKeys.length; i++){
        const item = inventoryKeys[i];
        inventoryArr.push([currentInventory[item], item]);
    }
    return inventoryArr;
}