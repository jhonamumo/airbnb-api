const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
const port= 3001;

// Routes
const experiencesRoutes = require('./routes/experiences');
const bookingRoutes = require('./routes/booking');

app.use('/experiences', experiencesRoutes);
app.use('/booking', bookingRoutes);
/*
    - localhost:3001/experiences/all
    - localhost:3001/experiences/top5
    - localhost:3001/experiences/detail/1
*/

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}/`);
});
