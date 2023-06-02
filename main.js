const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");
const form = document.querySelector("#form");

const showError = (input, massage) => {
    let parentElement = input.parentElement;
    parentElement.classList = "form-control error";
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = "visible";
    successIcon.style.visibility = "hidden";
    small.innerHTML = massage;
};

const showSuccess = (input) => {
    let parentElement = input.parentElement;
    parentElement.classList = "form-control success";
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = "hidden";
    successIcon.style.visibility = "visible";
};

const checkEmail = (email) => {
    const sadaq =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (sadaq.test(email.value)) {
        showSuccess(email);
    } else {
        showError(email, "Enter your email ");
    }
};

const checkName = (username) => {
    const name = /^[a-zA-Z]+$/;
    if (name.test(username.value)) {
        showSuccess(username);
    } else {
        showError(username, "Enter your name ");
    }
};

const checkEmpty = (elements) => {
    elements.forEach((moh) => {
        if (moh.value === "") {
            showError(moh, "input required");
        } else {
            showSuccess(moh);
        }
    });
};

const checkPasswordLength = (input, min, max) => {
    if (input.value == "") {
        showError(input, "Type your password ");
    } else if (input.value.length < min) {
        showError(input, `password at list ${min} Character`);
    } else if (input.value.length > max) {
        showError(input, `password maximum Character is ${max}`);
    } else {
        showSuccess(input);
    }
};

function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "password do not match");
        showError(input1, "");
    };
}

function ppd() {
    let password = $("#password").val();
    let confirm = $("#confirmpassword").val();

    if (password != confirmpassword) {
        $("#confirmpassword").css("border-color", "#c80000");
        $("#textboxid").css({
            "background-color": "#fee2e2",
        });
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkEmpty([username, email, password, confirmpassword]);
    checkName(username);
    checkEmail(email);
    checkPasswordLength(password, 6, 10);
    checkPasswordLength(confirmpassword, 6, 10);
    checkPasswords(password, confirmpassword);
});
