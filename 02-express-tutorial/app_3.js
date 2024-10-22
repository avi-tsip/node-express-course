const express = require('express');
const app = express();
const {products} = require('./data.js')

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get("/api/products", (req, res) => {
    const newProduct = (products.map((product)=> {
        const {id, name, image} = product;
        return {id , name, image};
    }))
    res.json(newProduct)
})

app.get("/api/products/:productId", (req, res) => {
    const {productId} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId))
    if (!singleProduct){
        res.status(404).send('Product does not exist')
    } else {
    res.json(singleProduct)
    }})

app.get("/api/v1/query", (req, res) => {
    const {search, limit} = req.query;
    let queryParams = [...products];
    if (search) {
        queryParams = queryParams.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        queryParams = queryParams.slice(0, Number(limit))
    }
    if (queryParams.length < 1) {
        //res.status(200)
        //or
        return res.status(200).json('{status: 200, data: []}')
    }
    res.status(200).json(queryParams)
})

app.listen(5000, () => {
    console.log('Server is running on port 5000....')
})