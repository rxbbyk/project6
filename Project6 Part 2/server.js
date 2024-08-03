const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const validateInput = (data) => {
    const errors = [];

    // name validation
    if (!data.name || data.name.trim().length === 0) {
        errors.push("Name is required.");
    } else if (!/^[a-zA-Z ]{2,50}$/.test(data.name)) {
        errors.push("Name must be alphabetic and between 2 and 50 characters.");
    }

    // email validation
    if (!data.email || data.email.trim().length === 0) {
        errors.push("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.push("Invalid email format.");
    }

    // password validation
    if (!data.password || data.password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    // age validation 
    if (data.age) {
        const age = parseInt(data.age, 10);
        if (isNaN(age) || age < 1 || age > 120) {
            errors.push("Age must be a number between 1 and 120.");
        }
    }

    return errors;
};

// handle form submission
app.post('/submit', (req, res) => {
    const formData = req.body;
    const errors = validateInput(formData);

    if (errors.length > 0) {
        res.send(`
            <p class="error">${errors.join('<br>')}</p>
            <a href="/">Go Back</a>
        `);
    } else {
        res.send(`
            <p class="success">Form submitted successfully!</p>
            <a href="/">Go Back</a>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});