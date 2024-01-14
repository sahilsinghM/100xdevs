/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an object to store the total spent for each category
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // Check if the category is already in the object, if not, initialize it with the current transaction's price
    if (!categoryTotals[category]) {
      categoryTotals[category] = price;
    } else {
      // If the category is already present, add the current transaction's price to the existing total
      categoryTotals[category] += price;
    }
  });

  // Convert the object to an array of objects with the required format
  const result = Object.keys(categoryTotals).map((category) => ({
    category,
    totalSpent: categoryTotals[category],
  }));

  return result;
  // return categoryTotals;
}

// Example usage:
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656163200000,
    price: 20,
    category: "Clothing",
    itemName: "T-shirt",
  },
  {
    id: 3,
    timestamp: 1656249600000,
    price: 15,
    category: "Food",
    itemName: "Burger",
  },
  // Add more transactions as needed
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);

module.exports = calculateTotalSpentByCategory;
