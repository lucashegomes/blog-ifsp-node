const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    
    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    },

    async show(req, res) {
        const product = Product.findById( req.params.id );
        return res.json(product);
    },

    async post(req, res) {
        const product = Product.create( req.body );
        return res.json(product);
    },

    async put(req, res) {
        // new : true is necessary to show product updated, set as false will show currenty product before update
        const product = '';
        try {
            product = Product.findByIdAndUpdate( req.params.id, req.body, { new : true} );
        } catch (e) {

        }
        return res.json(product);
        // return res.send(console.log(req));
    },

    async delete(req, res) {
        const product = Product.findOneAndRemove( req.params.id );
        // return res.send(product);
        return res.send('Product deleted!');
    },

};