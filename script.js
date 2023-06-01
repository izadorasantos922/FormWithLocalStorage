const form = document.querySelector('form');
const inputFirstName = document.querySelector('.input_firstname');
const textErrorFirstName = document.querySelector('.text-error-firstname');
const inputLastName = document.querySelector('.input_lastname');
const textErrorLastName = document.querySelector('.text-error-lastname');
const inputEmail = document.querySelector('.input_email');
const textErrorEmail = document.querySelector('.text-error-email')
const inputPassword = document.querySelector('.input_password');
const textErrorPassword = document.querySelector('.text-error-password');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let allValidatedFields = false

    if(inputFirstName.value === "" ){
        inputFirstName.classList.add('error')
    textErrorFirstName.style.display = 'block'
    allValidatedFields = false
    }else{
        inputFirstName.classList.remove('error')
    textErrorFirstName.style.display = 'none'
    allValidatedFields = true
    }
    
    if(inputLastName.value === "" ){
        inputLastName.classList.add('error')
    textErrorLastName.style.display = 'block'
    allValidatedFields = false
    }else{
        inputLastName.classList.remove('error')
    textErrorLastName.style.display = 'none'
    allValidatedFields = true
    }
    
    if(inputEmail.value === "" ){
        inputEmail.classList.add('error')
    textErrorEmail.style.display = 'block'
    allValidatedFields = false
    }else{
        inputEmail.classList.remove('error')
    textErrorEmail.style.display = 'none'
    allValidatedFields = true
    }
    
    if(inputPassword.value === "" ){
        inputPassword.classList.add('error')
    textErrorPassword.style.display = 'block'
    allValidatedFields = false
    }else{
    inputPassword.classList.remove('error')
    textErrorPassword.style.display = 'none'
    allValidatedFields = true
    }
    if(allValidatedFields){
       const firstName = inputFirstName.value
       const lastName = inputLastName.value
       const password  = inputPassword.value
       const email = inputEmail.value
        const userInfo = {
            firstName,
            lastName,
            password,
            email,
        }
        const userInfoString = JSON.stringify(userInfo)
        localStorage.setItem("user", userInfoString)
        form.reset();
    }
})

