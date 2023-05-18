const d = new Date();

const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const birth = document.getElementById("birthday");
const profession = document.getElementById("profession");

const outFname = document.getElementById("outputFirstname");
const outLname = document.getElementById("outputLastname");
const outBirth = document.getElementById("outputBirthday");
const outProfession = document.getElementById("outputProfession");
const outDate = document.getElementById("outputDate");

const register = document.getElementById("submitBtn");

function printPeople() {
    let fNameList = document.createElement("p");
    fNameList.innerHTML = firstName.value;
    outFname.appendChild(fNameList);
    firstName.value = "";

    let lNameList = document.createElement("p");
    lNameList.innerHTML = lastName.value;
    outLname.appendChild(lNameList);
    lastName.value = "";

    let birthList = document.createElement("p");
    birthList.innerHTML = birth.value;
    outBirth.appendChild(birthList);
    birth.value = "";

    let professionList = document.createElement("p");
    professionList.innerHTML = profession.value;
    outProfession.appendChild(professionList);
    profession.value = "";

    let dateList = document.createElement("p");
    dateList.innerHTML = d.toDateString();
    outDate.appendChild(dateList);
}

register.addEventListener("click", () => {
    if (firstName.value === "") {
        alert("Veuillez entrer votre nom ");
    } else if (lastName.value === "") {
        alert("Veuillez enter votre prenom");
    } else if (birth.value === "") {
        alert("Veuillez entre votre âge");
    } else if (profession.value === "") {
        alert("Veuillez entre votre profession");
    } else {
        printPeople();
    }
});

window.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (firstName.value === "") {
            alert("Veuillez entrer votre nom");
        } else if (lastName.value === "") {
            alert("Veuillez enter votre prenom");
        } else if (birth.value === "") {
            alert("Veuillez entre votre âge");
        } else if (profession.value === "") {
            alert("Veuillez entre votre profession");
        } else {
            printPeople();
        }
    }
});
