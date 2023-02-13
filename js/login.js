//step-1: add click event handler with the submit button// 
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address inside the email input field//
    // always remember to use .value to get text from an input field//
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    console.log(email);
    //step-3 get password
    //3.1 set id on the html element
    //3.2 get the element
    //3.3 get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //DANGER DO NOT VERIFY email password on the click side 
    // step-4: veriffy email and password click whether valid user or not 
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
      alert('OUT')
    }
})