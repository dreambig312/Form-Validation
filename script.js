const form = document.getElementById('form');
const username = document.getElementById('username');
const lastname = document.getElementById('lastname');
const address = document.getElementById('address');
const birthdate = document.getElementById('birthdate');
const contact = document.getElementById('contact');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})

const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello " + usernameVal , "You are Registered", "success");
    }
}

const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}


const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function Validate(){
    const usernameVal = username.value.trim();
    const lastnameVal = lastname.value.trim();
    const addressVal = address.value.trim();
    const emailVal = email.value.trim();
    const birthdateVal = birthdate.value.trim();
    const contactVal = contact.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //username
    if(usernameVal === ""){
        setErrorMsg(username, 'First name cannot be blank');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'This name is already use');
    }
    else{
        setSuccessMsg(username);
    
    }

     //last name

    if(lastnameVal === ""){
        setErrorMsg(lastname, 'Last name cannot be blank');
    }
    else if(lastnameVal.length <=2){
        setErrorMsg(lastname, 'This name is already use');
    }
    else{
        setSuccessMsg(lastname);
    }

     //address

    if(addressVal === ""){
        setErrorMsg(address, 'Address cannot be blank');
    }
    else if(lastnameVal.length <=2){
        setErrorMsg(lastname, 'Minimum 3 character');
    }
    else{
        setSuccessMsg(address);
    }

     //birthdate

    if(birthdateVal === ""){
        setErrorMsg(birthdate, 'Birthdate cannot be blank');
    }
    else if(birthdateVal.length <=2){
        setErrorMsg(birthdate, '');
    }
    else{
        setSuccessMsg(birthdate);
    }

    //contact

    if(contactVal === ""){
        setErrorMsg(contact, 'Contact Number cannot be blank');
    }
    else if(contactVal.length <=2){
        setErrorMsg(contact, 'Contact number is already use');
    }
    else{
        setSuccessMsg(contact);
    }


    //email
    if(emailVal === ""){
        setErrorMsg(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Email is not valid');
    }
    else{
        setSuccessMsg(email);
    }

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'Password cannot be blank');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'Minimum 8 character');
    }
    else{
        setSuccessMsg(password);
    }

    //confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Confirm password cannot be blank');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Not Matched!');
    }
    else{
        setSuccessMsg(cpassword);
    }
    SuccessMsg(usernameVal);


}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

