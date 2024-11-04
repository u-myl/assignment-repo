const express = require('express');
const app = express();
const port = 8080;


function isPrime(number) {
    if (number <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false; 
    }
    return true;
}


app.get('/assignments/prime/:number', (req, res) => {
    const number = parseInt(req.params.number);

  
    const result = isPrime(number);

 
    res.json({ isPrime: result });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
