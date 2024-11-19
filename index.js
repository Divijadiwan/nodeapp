// Import the express library and assign it to a variable
import express from 'express'
import fetch from 'node-fetch'


// Create an instance of an express application 
const app = express()
app.use(express.json());
app.use(express.static('public'));


// Set the port the application will be running on
const port = process.env.PORT || 3001

const tvShows = {
  drama: [
    { title: 'Breaking Bad', year: 2008 },
    { title: 'The Crown', year: 2016 },
  ],
  comedy: [
    { title: 'The Office', year: 2005 },
    { title: 'Parks and Recreation', year: 2009 },
  ],
  scifi: [
    { title: 'Stranger Things', year: 2016 },
    { title: 'The Expanse', year: 2015 },
  ],
  fantasy: [
    { title: 'Game of Thrones', year: 2011 },
    { title: 'The Witcher', year: 2019 },
  ],
};

// API endpoint to get TV shows by genre
app.get('/api/tvshows/:genre', (req, res) => {
  const genre = req.params.genre.toLowerCase();
  const shows = tvShows[genre];

  if (shows) {
    res.json(shows);
  } else {
    res.status(404).json({ message: 'Genre not found' });
  }
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});