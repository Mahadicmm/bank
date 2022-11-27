let loginEmail = document.querySelector('.login-email');
let loginPassword = document.querySelector('.login-password');
let submit_button = document.querySelector('.submit-btn').addEventListener('click', function(){
   
    if(loginEmail.value == 'mahadi@gmail.com' && loginPassword.value =='123456'){
        window.location.href = "amount.html";
    }
    else{
        alert("your email or password is not correct")
    }
})
