const button = document.getElementById('btn');
const birthDay = document.getElementById('birthday');

function calculateAge() {
    const birthValue = birthDay.value;

    if (birthValue === ""){
        alert("Please enter your birthday!!");
    } else {
        const age = getAge(birthValue);
        alert(age);
    }

}

function getAge(birthValue) {
    const currentDate = new Date();
    const birthDate = new Date(birthValue);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())){
        age = age - 1
    }
        return age;
}

button.addEventListener('click', calculateAge());