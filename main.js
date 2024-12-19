const clickerBtn = document.getElementById("logo-click");
const addBtn = document.querySelector(".add-number");
const addBtnTen = document.querySelector(".add-number-ten");
const addBtnMille = document.querySelector(".add-number-mille");
const counter = document.getElementById("counter");

let n = 0;
let valueClick = 1;

function updateValue() {
    counter.textContent = n;
}

clickerBtn.addEventListener("click", () => {
    n += valueClick;
    updateValue();
});

addBtn.addEventListener("click", ()=> {
    if (n >= 10) {
        n -= 10;          // Déduit le coût de 10
        valueClick += 1;  // Augmente la valeur du clic
        updateValue();
    }
});

addBtnTen.addEventListener("click", ()=> {
    if (n >= 100) {
        n -= 100;         // Déduit le coût de 100
        valueClick += 10; // Augmente la valeur de clic de 10
        updateValue();
    }
});

addBtnMille.addEventListener("click", ()=> {
    if (n >= 1000) {
        n -= 1000;         // Déduit le coût de 100
        valueClick += 500; // Augmente la valeur de clic de 10
        updateValue();
    }
});
