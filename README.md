# Tasks

## CoffeeShop

### Properties:

- name: a string (basically, of the shop)
- menu: an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price.
- orders: an empty array

### Methods:

- addOrder: adds the name of the item to the end of the orders array if it exists on the menu.
  Otherwise, return "This item is currently unavailable!"
- fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is
  empty, return "All orders have been fulfilled!"
- listOrders: returns the list of orders taken, otherwise, an empty array.
- dueAmount: returns the total amount due for the orders taken.
- cheapestItem: returns the name of the cheapest item on the menu.
- drinksOnly: returns only the item names of type drink from the menu.
- foodOnly: returns only the item names of type food from the menu.

IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

### Examples:

```Javascript
name
tcs.addOrder("hot cocoa"); // "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea"); // "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process
tcs.addOrder("cinnamon roll"); // "Order added!"
tcs.addOrder("iced coffee"); // "Order added!"
tcs.listOrders; // ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order
tcs.dueAmount(); // 2.17
tcs.fulfillOrder(); // "The cinnamon roll is ready!"
tcs.fulfillOrder(); // "The iced coffee is ready!"
tcs.fulfillOrder(); // "All orders have been fulfilled!"
// all orders have been presumably served
tcs.listOrders(); // []
// an empty array is returned if all orders have been exhausted
tcs.dueAmount(); // 0.0
1/4Class.Tasks.md
1/11/2022
// no new orders taken, expect a zero payable
tcs.cheapestItem(); // "lemonade"
tcs.drinksOnly(); // ["orange juice", "lemonade", "cranberry juice",
"pineapple juice", "lemon iced tea", "vanilla chai latte", "hot
chocolate", "iced coffee"]
tcs.foodOnly(); // ["tuna sandwich", "ham and cheese sandwich", "bacon and
egg", "steak", "hamburger", "cinnamon roll"]
```

Here is the [solution](1.CoffeeShop.js)
