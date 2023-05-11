const button = document.getElementById('btn');
const tip = document.getElementById('tip');
const bill = document.getElementById('bill');

function calculateTip() {

    let newBill = bill.value;
    let newTip = tip.value;

    if (newTip < 15 || newTip > 20) {
        alert("Invalid range tip!!")
    } else {
        alert("Valid range tip1");
    }
}

button.addEventListener('click',calculateTip);