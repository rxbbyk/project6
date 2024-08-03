function validateForm(name, email, password, age) {
    const errors = [];

    // Validate name
    if (!name) {
        errors.push('Name is required.');
    } else if (!/^[a-zA-Z ]*$/.test(name) || name.length < 2 || name.length > 50) {
        errors.push('Name must be alphabetic and between 2 and 50 characters.');
    }

    // Validate email
    if (!email) {
        errors.push('Email is required.');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push('Invalid email format.');
    }

    // Validate password
    if (!password) {
        errors.push('Password is required.');
    } else if (password.length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }

    // Validate age
    if (age) {
        const ageNumber = parseInt(age, 10);
        if (isNaN(ageNumber) || ageNumber < 1 || ageNumber > 120) {
            errors.push('Age must be a number between 1 and 120.');
        }
    }

    return errors;
}

document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const age = document.getElementById('age').value.trim();
    const messages = document.getElementById('messages');

    messages.innerHTML = '';

    const errors = validateForm(name, email, password, age);

    if (errors.length === 0) {
        messages.innerHTML = "<p class='success'>Validation successful. Form data is valid.</p>";
    } else {
        errors.forEach(error => {
            const errorElement = document.createElement('p');
            errorElement.classList.add('error');
            errorElement.textContent = error;
            messages.appendChild(errorElement);
        });
    }
});
