const button = document.getElementById('btn');
const birthDay = document.getElementById('birthday');

document.addEventListener('DOMContentLoaded', () => {

    function getAge() {
        const currentDate = new Date();
        console.log(currentDate);
    }

    button.addEventListener('click', () =>{

        const birthValue = birthDay.value;
        if (birthValue === ""){
            alert("Please enter your birthday!!");
        } else {
            const age = getAge(birthValue);
        }


    })
})
