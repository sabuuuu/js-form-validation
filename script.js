//manipulating DOM elements

const form = document.getElementById('form');

const email = document.getElementById('email');

const country = document.getElementById('country');

const zip = document.getElementById('zip');

const password = document.getElementById('password');

const passwordConfirm = document.getElementById('password-confirmation');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const countryValue = country.value.trim();
    const zipValue = zip.value.trim();
    const password2Value = passwordConfirm.value.trim();

    if(emailValue === '') {
        setError(email, "where's your email dude?");
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'i said a REAL email..come on');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'you know the password is required right?');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'now make the password longer')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(passwordConfirm, 'good job ,now confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(passwordConfirm, "you forgot your password already?");
    } else {
        setSuccess(passwordConfirm);
    }

    if (countryValue === '') {
        setError(country, 'your country name im begging');
    } else {
        setSuccess(country);
    }

    if (zipValue === '') {
        setError(zip, 'fill in with your zip code :|');
    } else if (zipValue.length < 5 || zipValue.length > 5 ) {
        setError(zip, 'nice try ,but a valid one please');
    } else {
        setSuccess(zip);
    }

};
