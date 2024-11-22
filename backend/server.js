const express = require('express');
const cors = require('cors');
const userRoutes = require('./userRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // to parse JSON requests
app.use('/api/users', userRoutes); // User routes

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
