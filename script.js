document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form')
    let password = document.getElementById('password')
    let confirmPassord = document.getElementById('confirm-pass')
    let passRequirements = document.querySelector('.password-requirements')
    let confirmationError = document.querySelector('.confirmation-error')
    let telephone = document.querySelector('.telephone')
    let telephoneRequirements = document.querySelector('.tel-requirements')

    // Show password requirements message if clicked inside input else hide
    password.addEventListener("click", () => {
        passRequirements.classList.toggle("show-hide");
    });
    
    document.addEventListener("click", function(event) {
        if(!password.contains(event.target)){
            passRequirements.classList.remove("show-hide");
        }
    });
    
    // Show telephone requirements message if clicked inside input else hide
    telephone.addEventListener("click", () => {
        telephoneRequirements.classList.toggle("show-hide");
    });
    
    document.addEventListener("click", function(event) {
        if(!telephone.contains(event.target)){
            telephoneRequirements.classList.remove("show-hide");
        }
    });

    // Password confirmation validation
    form.addEventListener('submit', (e) => {
        if (password.value !== confirmPassord.value){
            e.preventDefault();
            console.log(confirmationError)
            confirmationError.style.display = "block"
        }
    })
})
