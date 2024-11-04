const express = require('express');

const app = express();
const port = 9090; 

const calculateFibonacci = (n) => {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
};


app.get('/assignments/fibonacci/:n', (req, res) => {
    const n = parseInt(req.params.n);
    if (isNaN(n) || n <= 0) {
        return res.status(400).json({ error: 'Please provide a positive integer' });
    }
    const sequence = calculateFibonacci(n);
    res.json({ sequence });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
