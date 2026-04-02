const formRegistr = document.getElementById("myForm");

formRegistr.addEventListener("submit", function(event) {
    const nameInput = document.getElementById("userName");
    const nameError = document.getElementById("nameError");
    const nameUser = nameInput.value.trim();

    if(nameUser === "") {
        nameError.textContent = "Введіть ім'я";
        nameInput.classList.add("input-error");
    } else if (nameUser.length < 2) {
        nameError.textContent = "Ім'я замале";
        nameInput.classList.add("input-error");
    } else {
        nameError.textContent = "";
        nameInput.classList.remove("input-error");
    }


    const emailInput = document.getElementById("emailUser");
    const emailError = document.getElementById("emailError");
    const emailUser = emailInput.value.trim();
    const emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailUser === "") {
        emailError.textContent = "Введіть пошту";
        emailInput.classList.add("input-error");
    } else if (!emailRegax.test(emailUser)) {
        emailError.textContent = "Помилка в форматі пошти";
        emailInput.classList.add("input-error");
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("input-error");
    }


    const passwordInput = document.getElementById("passwordUser");
    const passwordError = document.getElementById("passwordError");
    const passwordUser = passwordInput.value.trim();

    if (passwordUser === "") {
        passwordError.textContent = "Введіть пароль";
        passwordInput.classList.add("input-error");
    } else if (passwordUser.length < 8) {
        passwordError.textContent = "Замалий пароль";
        passwordInput.classList.add("input-error");
    } else {
        passwordError.textContent = "";
        passwordInput.classList.remove("input-error");
    }

    const passwordRepetInput = document.getElementById("repetPasswordUser");
    const passwordRepetError = document.getElementById("repetPasswordError");
    const passwordRepetUser = passwordRepetInput.value.trim();

    if (passwordRepetUser === "") {
        passwordRepetError.textContent = "Введіть пароль підтвердження";
        passwordRepetInput.classList.add("input-error");
    } else if (passwordUser != passwordRepetUser) {
        passwordRepetError.textContent = "Пароль не збігається";
        passwordRepetInput.classList.add("input-error");
    } else {
        passwordRepetError.textContent = "";
        passwordRepetInput.classList.remove("input-error");
    }

    const ageInput = document.getElementById("number");
    const ageError = document.getElementById("ageError");
    const ageUser = ageInput.value.trim();

    if (ageUser === "") {
        ageError.textContent = "Введіть Ваш вік";
        ageInput.classList.add("input-error");
    }else if (ageUser < 16) {
        ageError.textContent = "Замало років";
        ageInput.classList.add("input-error");
    } else {
        ageError.textContent = "";
        ageInput.classList.remove("input-error"); 
    }


    const groupInput = document.getElementById("group");
    const groupError = document.getElementById("groupError");

    if (groupInput.value === "") {
        groupError.textContent = "Виберіть свою групу";
        groupInput.classList.add("input-error");
    } else {
       groupError.textContent = "";
       groupInput.classList.remove("input-error");
    }

    const errorsExit = document.querySelectorAll(".input-error").length > 0;
    console.log(errorsExit);
    if (!errorsExit) {
        alert("Форму відправлено!");
    }
    event.preventDefault();
});   

