class GeneralInformationProduct {
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}

class SizePizza extends GeneralInformationProduct {
    constructor(name, price, size) {
        super(name, price, size)
    }
}

class TypePizza extends GeneralInformationProduct {
    constructor(name, price, size) {
        super(name, price, size)
    }
}

class TypeTopping extends GeneralInformationProduct {
    constructor(name, price, size) {
        super(name, price, size)
    }
}

class Pizza {
    constructor(type, size) {
        this.toppingAtPizza = [];
        this.type = type;
        this.size = size;
        this.price = type.price + size.price;
        this.calories = this.type.calories + this.size.calories;
    }

    calculatePrice() {
        return this.price + " рублей";
    }

    calculateCalories() {
        return this.calories + " ккал";
    }

    getSize() {
        return this.size.name;
    }

    getStuffing() {
        return this.type.name;
    }

    getToppings() {
        if (this.toppingAtPizza.length !== 0) {
            let result = '';
            this.toppingAtPizza.forEach(topping => {
                result += topping.name + ", ";
            });
            return result;
        } else {
            return "В текущей пицце нет добавок!";
        }
    }

    addTopping(topping) {
        this.toppingAtPizza.push(topping);
        this.price += topping.price;
        this.calories += topping.calories;
    }

    removeTopping(topping) {
        const needTopping = this.toppingAtPizza.find(el => el.name === topping.name);
        if (needTopping !== undefined) {
            this.toppingAtPizza = this.toppingAtPizza
                .filter(value => value.name != topping.name);
            this.price -= topping.price;
            this.calories -= topping.calories;
        } else {
            console.log("Данной добавки нет в текущей пицце!");
        }
    }
}

const bigPizza = new SizePizza("Большая", 200, 200);
const smallPizza = new SizePizza("Маленькая", 100, 100);
console.log(bigPizza);

const margarita = new TypePizza("Маргарита", 500, 300);
const bavarian = new TypePizza("Баварская", 700, 450);
const pepperoni = new TypePizza("Пепперони", 800, 400);
console.log(margarita);

const chadderSmall = new TypeTopping("Чеддер и пармезан (мал.)", 150, 50);
const chadderBig = new TypeTopping("Чеддер и пармезан (бол.)", 300, 100);
const cheeseBoardSmall = new TypeTopping("Сырный бортик (мал.)", 150, 50);
const cheeseBoardBig = new TypeTopping("Сырный бортик (бол.)", 300, 100);
const mozarellaSmall = new TypeTopping("Сливочная моцарелла (мал.)", 50, 50);
const mozarellaBig = new TypeTopping("Сливочная моцарелла (бол)", 100, 100);
console.log(mozarellaBig);

const pizza = new Pizza(margarita, bigPizza);
console.log(pizza);
console.log(pizza.getToppings());
debugger;

pizza.addTopping(cheeseBoardBig);
console.log(pizza);
console.log(pizza.getToppings());
debugger;

pizza.addTopping(mozarellaBig);
console.log(pizza);
console.log(pizza.getToppings());
debugger;

pizza.removeTopping(cheeseBoardBig);
console.log(pizza);
console.log(pizza.getToppings());
debugger;

pizza.removeTopping(chadderSmall);
console.log(pizza);
debugger;

console.log(pizza.getToppings());
debugger;
console.log(pizza.calculatePrice());
debugger;
console.log(pizza.calculateCalories());
debugger;
console.log(pizza.getSize());
debugger;
console.log(pizza.getStuffing());
debugger;