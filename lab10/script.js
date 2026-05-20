document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (localStorage.getItem("savedName")) {
        nameInput.value = localStorage.getItem("savedName");
    }

    nameInput.addEventListener("input", () => {
        localStorage.setItem("savedName", nameInput.value);
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        alert(`Привіт, ${nameValue}! Ваше повідомлення успішно надіслано.`);

        console.group("Дані з форми:");
        console.log("Ім'я:", nameValue);
        console.log("Email:", emailValue);
        console.log("Повідомлення:", messageValue);
        console.groupEnd();

        emailInput.value = "";
        messageInput.value = "";
    });

    const themeCheckbox = document.getElementById("theme-checkbox");
    const currentTheme = localStorage.getItem("theme");

    function setTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark-theme");
            themeCheckbox.checked = true;
        } else {
            document.body.classList.remove("dark-theme");
            themeCheckbox.checked = false;
        }
    }

    if (currentTheme) {
        setTheme(currentTheme);
    } else {
        setTheme("light");
    }

    themeCheckbox.addEventListener("change", (e) => {
        if (e.target.checked) {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    });
});