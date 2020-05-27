let groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        payed: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

// Copy this object into another variable
let groceriesCopy = groceries;

// Change totalPrice by 35$. Does this key was also modified in the copied object ?
groceries.totalPrice = "35$";
// yes, this key was also modified in groceriesCopy

// Change payed by false. Does this key was also modified in the copied object ? Why ?
groceries.other.payed = false; // or groceries["other"]["payed"] = false
// yes, this key was also modifieD in the copied object groceriesCopy.Because it's a "pass by reference" case.
// groceries and groceriesCopy are the same object, which is why changing something in groceries also changes groceriesCopy