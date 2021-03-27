const { urlencoded } = require('express')
const express = require('express')

const Entry = require('./Models/Entry');

const entry = new Entry();

const app = express()

const PORT = process.env.PORT || 3000

app.use(urlencoded)
app.use(express.json())

app.post('/new-entry', entry.createEntry);

app.get('/entries/:user_id', entry.getEntries);

app.get('/entry/:id/:user_id', entry.getOneEntry);

app.put('/entry/:id/:user_id', entry.updateEntry);

app.delete('/delete-entry/:id', entry.deleteEntry);

app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}`)
})