const button = document.getElementById('btn');
const tip = document.getElementById('tip');
const bill = document.getElementById('bill');
const totalAmount = document.getElementById('result');

function calculateAmount() {

    const newBill = bill.value;
    const newTip = tip.value;
    let amount = newBill * (1 + (newTip / 100));

    totalAmount.innerText = `XAF ${amount.toFixed(2)}`

}

button.addEventListener('click', calculateAmount);