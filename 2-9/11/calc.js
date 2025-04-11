const express = require('express');
const path = require('path');

const app = express();

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

// Handle form submission manually
app.post('/calculate', (req, res) => {
    let body = '';

    // Read the incoming data
    req.on('data', chunk => {
        body += chunk.toString(); // Convert Buffer to string
    });

    req.on('end', () => {
        const formData = new URLSearchParams(body);
        const num1 = formData.get('num1');
        const num2 = formData.get('num2');
        const operation = formData.get('operation');

        // Convert numbers to float
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        // Validate numbers
        if (isNaN(number1) || isNaN(number2)) {
            return res.send('<h2>Error: Invalid numbers</h2><a href="/">Go Back</a>');
        }

        let result;
        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                if (number2 === 0) {
                    return res.send('<h2>Error: Cannot divide by zero</h2><a href="/">Go Back</a>');
                }
                result = number1 / number2;
                break;
            default:
                return res.send('<h2>Error: Invalid operation</h2><a href="/">Go Back</a>');
        }

        // Send response as HTML
        res.send(`<h2>Calculation Result: ${result}</h2><a href="/">Go Back</a>`);
    });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
