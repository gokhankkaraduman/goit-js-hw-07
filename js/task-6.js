function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = ''; // Input'u temizle
    }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // Önceki kutuları temizle
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10; // Her bir kutuyu 10px büyüt
    }

    boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Kutuları temizle
}