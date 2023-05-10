const calcBtn = document.getElementById('btn');
const birthDay = document.getElementById('birthday');

function calculateAge() {
    const birthValue = birthDay.value;

    if (birthValue === ""){
        alert("Please enter your birthday!!");
    } else {
        const age = getAge(birthValue);
        document.querySelector('#result').innerHTML = `You are ${age} years old.`;
    }

}

function getAge(birthValue) {
    const currentDate = new Date();
    const birthDate = new Date(birthValue);
    const month = currentDate.getMonth() - birthDate.getMonth();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())){
        age --;
    }
        return age;
}

calcBtn.addEventListener('click', calculateAge);