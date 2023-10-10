require('dotenv').config()
const express = require('express')
const app = express()
const port = 3003
const mongoose = require ('mongoose')

/* moongose.connect (process.env .DATABASE_URL, {
 useNewUrlParser: true,
 useUnifiedTopology: true
});   */

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log('Connected to MongoDB'))

  .catch(err => console.error('Could not connect to MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

  app.put('/', (req, res) => {
    res.send('family good');
});

app.patch('/', (req, res) => {
    res.send('i love cats');
});
 

app.delete('/', (req, res) => {
    res.send('i love money');
});

app.get('/users/:userId', (req, res) => {
console.log (req.params);
res.send(`im the user: ${req.params.userId}`);
}); 

app.get('/book/:book', (req, res) => {
    console.log (req.params);
    res.send(`im the user: ${req.params.books}`);
    }); 
    
    app.get('/search', (req, res) => {
        console.log(req.query);
      res.send(`Im searching for ${req.query.name} and ${req.query.age}`);
      });

      app.get('/search/:id', (req, res) => {
        console.log(req.query);
        console.log (req.params.id);
      res.send(`Im searching for ${req.query.cellphone} and ${req.params.id}`);

      });
app.get('/search/:searchId', (req, res) => {
   });
   

