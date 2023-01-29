const express = require('express');
const os = require('os')
const app = express();

app.get('/', (req,res) => {
    res.send(os.cpus());
})

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))