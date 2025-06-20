//#1 Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури (наприклад, вліво / вправо)
console.log("1 Завдання");

const gallery = document.querySelector(".gallery");
const item = gallery.querySelector("li");
const img = item.querySelector("img");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        gallery.scrollBy({ left: 300 });
    } else {
        gallery.scrollBy({ left: -300 });
    }
});

//#2 Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div — 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px

// Створи функцію destroyBoxes(), яка очищає div#boxes.
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector('[data-action="render"]');
const deleteButton = controls.querySelector('[data-action="destroy"]')
const boxes = document.querySelector("#boxes");

// const howMuchToCreate = 0;

createButton.addEventListener("click", createBoxes)
deleteButton.addEventListener("click", destroyBoxes)
function createBoxes(amount) {
    amount = Number(input.value);
    let size = 30;

    for (let i = 0; i < amount; i += 1) {
        const newElement = document.createElement("div");
        newElement.style.width = `${size}px`;
        newElement.style.height = `${size}px`;
        newElement.style.backgroundColor = randomColor();
        newElement.style.margin = '10px';
        boxes.appendChild(newElement);
        size += 10;
    }
};

function destroyBoxes() {
    boxes.innerHTML = "";
};

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}