const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton = document.querySelector("button");
const eyeIcon = submitButton.querySelector("i");

password.addEventListener("input", ()=>{
    const passValue = password.value;
    const passLen = passValue.length;

    let strengthValue = '';

    if(password=== 0){
        strengthValue = '';
    } else if(passLen<5){
        strengthValue = 'Weak';
    } else if(passLen<10){
        strengthValue = 'Medium';
    } else{
        strengthValue = 'Strong';
    }

    strength.textContent=strengthValue;
    
    message.style.display="block"; //displays the message
    

});

submitButton.addEventListener("click", ()=>{
    const passType = password.getAttribute('type');
    if(passType === 'password'){
        password.setAttribute('type', 'text');
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");

    } else{
        password.setAttribute('type', 'password');
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
});