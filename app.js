//rrequerimos express que es una libreria
const express = require('express')
//iniciamos la app de expres en la variable app
const app = express()

app.use(express.json())

const findAllProducts = (req, res) => {   
    res.json({
        message: "hello from the get route"
    })
}

//creamos una ruta de mi servidor
app.get('/api/v1/products', findAllProducts)

const createProduct = (req, res) => {

    console.log(req.body)
    res.json({
        message: 'hell from the post route'
    })
}

app.post('/api/v1/products', createProduct)

const updateProduct =  (req, res) => {
    console.log(req.params)
    console.log('me ejecute')
    res.json({
        message: 'hell from the patch route'
    })
}

app.patch('/api/v1/products/:id', updateProduct)

const deleteProduct = (req, res) => {
    console.log('me ejecute')
    res.json({
        message: 'hell from the delete route'
    })
}

app.delete('/api/v1/products/:id', deleteProduct)

const port = 3000

//colocar la app a escuchar el servidor por el puerto 
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})