
// Import the express library and assign it to a variable
import express from 'express'

// Create an instance of an express application 
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send("hello i am divija")
  })
// Set up a response for the root path of the application
app.get('/movies', (req, res) => {
    const genreName = req.query.genre; // Access the country name
    res.send(`Genre: ${genreName}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}` )
  })