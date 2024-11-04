const express = require('express');
const app = express();

function factorial(n) {
    if (n < 0) return null;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


app.get('/assignments/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number);


    if (isNaN(number) || number < 0) {
        return res.json({ error: 'Please provide a non-negative integer.' });
    }

    const result = factorial(number);
    res.json({ factorial: result });
});

const PORT = 7070;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
