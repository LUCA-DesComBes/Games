const moneyBagBtn = document.querySelector(".money-bag");
const shopH3 = document.querySelector("h3");
const asideDiv = document.querySelector("aside")

moneyBagBtn.addEventListener('click', ()=> {
    asideDiv.style.display = "block"
})


shopH3.addEventListener('click', ()=> {
    asideDiv.style.display = "none"
})