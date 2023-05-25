const btn = document.getElementById('roll-button');
const dice = document.getElementById('dice');
const rollHistory = document.getElementById('roll-history')
const historyList = [];

function rollDice() {

    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDieFace(rollResult);
    dice.innerHTML = diceFace;
    historyList.push(rollResult);
    addList()
}

function addList() { // function to add list to the unordered list when the button is clicked
    rollHistory.innerHTML = ''; //clear what is in the list before the shuffle
    for (let i = 0; i < historyList.length; i++) { //loop through the result stored in the historyList

        const listItem = document.createElement('li'); // create a li element to be inserted in 
        
        listItem.innerHTML = `Roll:${i + 1}: <span>${ //updating the roll number and new die face
            getDieFace(historyList[i])
        } </span>`

        rollHistory.appendChild(listItem) //appending the new list into the history list
        
    }
}

function getDieFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;"
        case 2:
            return "&#9857;"
        case 3:
            return "&#9858;"
        case 4:
            return "&#9859;"
        case 5:
            return "&#9860;"
        case 6:
            return "&#9861;"
        case 7:
            return "&#9862;"
    
        default:
            break;
    }
}


btn.addEventListener('click', () => {
    
    dice.classList.add('roll-animation'); // add roll-animation class once the button is clicked
    setTimeout(() => { 
        dice.classList.remove('roll-animation');
    }, 1000) // to remove the animation after 1second i.e. 1000ms 

    rollDice();
});
