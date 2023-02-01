const User = require("../models/UserModel");
const Product = require("../models/ProductModel");
const { isValidUser } = require('../functions/UserUtils');

exports.storeProduct = async (request, response) => {
    const { product_name, product_description } = request.body;
    const { id } = request.user;
    if(isValidUser(id) === false){
        return response.status(404).json({ message: 'User profile not found!' });
    }

    const data = {
        product_name: product_name,
        product_description:product_description,
        created_by: id
    }
    const newProduct = await Product.create(data);
    if (!newProduct) {
        return response.status(400).json({ error: 'Unable to create this product!' });
    }
    return response.status(201).json({
        message: 'Product Created', 
        data: newProduct
    });
}

exports.indexProduct = async (request, response) => {
    const products = await Product.findAll({include: {
        model: User,
        required: true,
        attributes:['id','email']
    },
      attributes:['id','product_name', 'product_description', 'createdAt']
      }
      );
    return response.status(200).json({
        data: products
    });
}

exports.showProduct = async (request, response) => {
    const { product_id } = request.params;
   
    const product = await Product.findOne({include: [
        {
            model: User,
            required: true,
            attributes:['id','email']
        }
    ],
    where:{
        id: product_id
    },
    attributes:['id','product_name', 'product_description', 'createdAt']
    });
    return response.status(200).json({
        data: product
    });
}
