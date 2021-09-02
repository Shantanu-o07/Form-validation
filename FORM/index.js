const userName = document.getElementById('userName');
const email = document.getElementById('email');
const contactNumber = document.getElementById('contactNumber');
const submitButton = document.getElementById('submit');
let validUserName = false;
let validEmail = false;
let validContactNumber = false;



email.addEventListener('blur', (e) => {
    let regularExpression = /^[a-zA-z]([a-zA-Z]){3,15}$/
    if (regularExpression.test(userName.value)) {
        userName.classList.remove('warning');
        userName.classList.add('sucess');
        userName.nextElementSibling.nextElementSibling.style.display = 'none';
        validUserName = true;
    }
    else {
        validUserName = false;
        userName.classList.remove('sucess');
        userName.classList.add('warning');
        userName.nextElementSibling.nextElementSibling.style.display = 'block';
    }
})



email.addEventListener('blur', (e) => {
    let regularExpression = /^([_\-\.0-9a-zA-Z]+)@([0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (regularExpression.test(email.value)) {
        email.classList.add('sucess');
        email.classList.remove('warning');
        email.nextElementSibling.nextElementSibling.style.display = "none";
        validEmail = true;
    } else {
        validEmail = false;
        email.classList.add('warning');
        email.classList.remove('sucess');
        email.nextElementSibling.nextElementSibling.style.display = "block";
    }

})
contactNumber.addEventListener('blur', (e) => {
    let regularExpression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

    if (regularExpression.test(contactNumber.value)) {
        contactNumber.classList.add('sucess');
        contactNumber.classList.remove('warning');
        contactNumber.nextElementSibling.nextElementSibling.style.display = 'none';
        validContactNumber = true;
    }
    else {
        validContactNumber = false;
        contactNumber.classList.remove('sucess');
        contactNumber.classList.add('warning');
        contactNumber.nextElementSibling.nextElementSibling.style.display = "block";
    }

})

submitButton.addEventListener('click', (event) => {
    if (validUserName && validEmail && validContactNumber) {
        alert('The Form is Validated');
    }
    else {
        alert('Invalid Form');
    }
})