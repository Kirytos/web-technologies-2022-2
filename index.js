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
        return this.price;
    }

    calculateCalories() {
        return this.calories;
    }

    getSize() {
        return this.size.name;
    }

    setSize(size) {
        this.size = size;
        this.price = this.type.price + this.size.price;
        this.calories = this.type.calories + this.size.calories;
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

const margarita = new TypePizza("margarita", 500, 300);
const bavarian = new TypePizza("bavarian", 700, 450);
const pepperoni = new TypePizza("pepperoni", 800, 400);

const toppingsData = [
    new TypeTopping("cheddar-parmesan", 99, 100),
    new TypeTopping("cheese-board", 189, 150),
    new TypeTopping("creamy-mozzarella", 99, 50)
]

const pizzasData = [
    new Pizza(margarita, smallPizza),
    new Pizza(bavarian, smallPizza),
    new Pizza(pepperoni, smallPizza),
]

const pizzas = document.querySelectorAll('.pizza');
const info = document.querySelector('.info');
const smallSize = document.querySelector('#small-size');
const bigSize = document.querySelector('#big-size');
const sizeEl = document.querySelector('.size');
const basketButtonEl = document.querySelector('.basket-button');

let pizzaIsChosen = false;
let currentPizza = null;

const totalPrice = document.querySelector('#total-price');
const totalCalories = document.querySelector('#total-calories');


const toppings = document.querySelectorAll('.topping');


const changeTotalPriceAndCalories = (totalPrice, totalCalories, pizza) => {
    totalPrice.innerHTML = +pizza.calculatePrice();
    totalCalories.innerHTML = +pizza.calculateCalories();
}


// обработчики для пицц
pizzas.forEach(pizzaEl => {
    const pizza = pizzasData.find(pizza => pizza.type.name === pizzaEl.id);

    if (pizza !== undefined) {
        // добавляем обработчик события на клик по элементу
        pizzaEl.addEventListener('click', function () {
            const isActive = pizzaEl.classList.contains('active');

            if (!isActive) {
                pizzas.forEach(pizza => pizza.classList.remove('active'));
                toppings.forEach(topping => topping.classList.remove('active'));
                pizzaEl.classList.add('active');
                smallSize.classList.add('active');
                bigSize.classList.remove('active');
                pizzaIsChosen = true;
                currentPizza = pizza;
                changeTotalPriceAndCalories(totalPrice, totalCalories, currentPizza);
                toppings.forEach(topping => topping.classList.remove('disable'));
            } else {
                pizzaEl.classList.remove('active');
                smallSize.classList.remove('active');
                bigSize.classList.remove('active');
                pizzaIsChosen = false;
                totalPrice.innerHTML = 0;
                totalCalories.innerHTML = 0;
                currentPizza = null;
                toppings.forEach(topping => topping.classList.add('disable'));
            }
        });
    }
})

// обработчик для информации о размерах
info.addEventListener('click', function () {
    alert(
        `Большая пицца: +100₽ и +100 Ккал!`
    );
})

// обработчик для маленького размера пиццы
smallSize.addEventListener('click', function () {
    if (pizzaIsChosen) {
        currentPizza.setSize(smallPizza);
        changeTotalPriceAndCalories(totalPrice, totalCalories, currentPizza);
        smallSize.classList.add('active');
        bigSize.classList.remove('active');
    }
});

// обработчик для большого размера пиццы
bigSize.addEventListener('click', function () {
    if (pizzaIsChosen) {
        currentPizza.setSize(bigPizza);
        changeTotalPriceAndCalories(totalPrice, totalCalories, currentPizza);
        bigSize.classList.add('active');
        smallSize.classList.remove('active');
    }
});

// обработчики для добавок
for (let i = 0; i < toppings.length; i++) {
    // добавляем обработчик события на клик по элементу
    toppings[i].addEventListener('click', function () {
        if (pizzaIsChosen) {
            const isActive = toppings[i].classList.contains('active');

            const topping = toppingsData.find(topping => topping.name === toppings[i].id);

            if (topping !== undefined) {
                if (!isActive) {
                    toppings[i].classList.add('active');
                    currentPizza.addTopping(topping);
                    changeTotalPriceAndCalories(totalPrice, totalCalories, currentPizza);
                } else {
                    toppings[i].classList.remove('active');
                    currentPizza.removeTopping(topping);
                    changeTotalPriceAndCalories(totalPrice, totalCalories, currentPizza);
                }
            }
        }
    });
}