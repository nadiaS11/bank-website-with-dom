const btnSubmit = document.getElementById('btn-submit')
btnSubmit.addEventListener('click', function(){
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    // NEVER verify on Client Side
    if(email.value === 'mybank@shirks.com' && password.value ==='secretpass'){
        window.location.href='bank.html'
    }
    else{
        alert("Wrong Email address or Password.") 
    }

})