const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const axios = require('axios');
const CircularJSON = require('circular-json');

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));

async function getData(){
    const response = await axios.get('https://messoldtech-test.myshopify.com/admin/api/2022-04/products.json' , {
        headers : {
            'X-Shopify-Access-Token' : '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',
            'content-type' : 'application/json'
        }
    })
    // console.log(response);
    return response;
}


app.get('/fetchData' , (req , res)=>{
    getData().then(res1 => {
        console.log(res1.data);
        const obj = [];
        res1.data.products.forEach(element => {
            // console.log(element.image.src);
            if(element.image != null){
                let temp = {
                    product_type : element.product_type,
                    src : element.image.src,
                    id : element.id
                }
                obj.push(temp);
            }      
        });
        // console.log(obj);
        res.send(obj);
    })
})

console.log("app started listening at port 8080");
app.listen(8080);