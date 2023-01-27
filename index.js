
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola!')
})

app.post('/home', (req, res) =>{
    res.send('Bienvenidos a kinal')
})

app.put('/editar/1', (req, res) =>{
    res.send('editando usuario con id 1')
})

app.delete('/borrar', (req, res) =>{
    res.send('eliminando usuario 1')
})





app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})
