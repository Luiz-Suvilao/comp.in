const mailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const handleInputsFocus = () => {
    mailInput.addEventListener('focusin', () => {
        const mailIcon = document.querySelector('.mail-icon');
        mailIcon.setAttribute('src', '../assets/images/mail-focus.svg')
    });

    mailInput.addEventListener('focusout', () => {
        const mailIcon = document.querySelector('.mail-icon');
        mailIcon.setAttribute('src', '../assets/images/mail.svg')
    });

    passwordInput.addEventListener('focusin', () => {
        const mailIcon = document.querySelector('.pass-icon');
        mailIcon.setAttribute('src', '../assets/images/lock-focus.svg')
    });

    passwordInput.addEventListener('focusout', () => {
        const mailIcon = document.querySelector('.pass-icon');
        mailIcon.setAttribute('src', '../assets/images/lock.svg')
    });
}

handleInputsFocus();
