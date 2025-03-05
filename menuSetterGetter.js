const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    } else {
      console.log("Is not a correct type of data");
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    } else {
      console.log("Is not a correct type of data");
    }
  },

  get todaysSpecial() {
    return `Today's special is ${this._meal} for ${this._price}!`;
  },
};

// Pruebas
menu.meal = "Pizza";
menu.price = 10;

console.log(menu.todaysSpecial);
