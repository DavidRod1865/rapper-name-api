const express = require('express')
const app = express()
const PORT = 3000

const rapper = {
    '21 savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joesph',
        'location': 'London, England', 
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancellor Bennet',
        'location': 'Chicago, Illinois', 
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'location': 'Dylan', 
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) =>{
    const rapperName = req.params.rapperName.toLowerCase()
    if (rapper[rapperName]){
        res.json(rapper[rapperName])
    } else {
        res.json(rapper['dylan'])
    }
    // res.json(rapper)
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})