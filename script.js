const bill = document.querySelector("#bill");
const service = document.querySelector("#service");
const people = document.querySelector("#people");
const calculateBtn = document.querySelector("#calculate");
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");
const forEach = document.querySelector("#individual");

let texto = "Email Name"
calculateBtn.addEventListener('click', () => {
    const billTotal = parseFloat(bill.value);
    const serviceTotal = parseFloat(service.value);
    const peopleTotal = parseFloat(people.value);
    const tipTotal = billTotal * serviceTotal;
    tip.innerText = tipTotal;
    const totalNum = billTotal + tipTotal;
    total.innerText = totalNum;
    const each = totalNum / peopleTotal;
    forEach.innerText = each.toFixed(2);
})