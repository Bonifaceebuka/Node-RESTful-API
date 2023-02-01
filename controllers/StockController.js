const User = require("../models/UserModel");
const Stock = require("../models/StockModel");
const Product = require("../models/ProductModel");
const { isValidUser, isValidStock } = require('../functions/Utils');

exports.storeStock = async (request, response) => {
    const { product_id, quantity, batchId } = request.body;
    const { id } = request.user;
    if(await isValidUser(id) === false){
        return response.status(404).json({ message: 'User profile not found!' });
    }

    if(await isValidStock(batchId) === true){
        return response.status(400).json({ message: 'Batch ID already exists!' });
    }

    const data = {
        product_id: product_id,
        quantity: quantity,
        batchId: batchId,
        created_by: id
    }

    const newStock = await Stock.create(data);
    if (!newStock) {
        return response.status(400).json({ error: 'Unable to create this stock!' });
    }

    return response.status(201).json({
        message: 'Stock Created', 
        data: newStock
    });
}

exports.indexStock = async (request, response) => {
    const stocks = await Stock.findAll(
        {include: [
            {
                model: User,
                attributes: ['id','email'],
                required: true
            },
            {
                model: Product,
                attributes: ['id','product_name', 'product_description', 'createdAt'],
                required: true
            }
        ],
        attributes: ['id', 'quantity', 'batchId']
        });

    return response.status(200).json({
        data: stocks
    });
}

exports.showStock = async (request, response) => {
    const { stock_id } = request.params;
   
    const stock = await Stock.findOne({include: [
        {
            model: User,
            attributes: ['id','email'],
            required: true
        },
        {
            model: Product,
            attributes: ['id','product_name', 'product_description', 'createdAt'],
            required: true
        }
    ],
    where:{
        id: stock_id
    },
    attributes: ['id', 'quantity', 'batchId', 'createdAt']
    });

    return response.status(200).json({
        data: stock
    });
}
