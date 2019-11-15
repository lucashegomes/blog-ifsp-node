const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    
    async index(req, res) {
        const { page = 1 } = req.query;
        
        const products = await Product.paginate( {}, { page, limit: 2 } );
        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById( req.params.id );
        
        if (product === null) {
            return res.json({status: "501", msg: "Nao encontrado!"});
        }

        return res.json({status: "200", data: product});
    },

    async post(req, res) {
        const product = await Product.create( req.body );
        return res.json(product);
    },

    async put(req, res) {
        // new : true is necessary to show product updated, set as false will show currenty product before update
        const product = await Product.findByIdAndUpdate( req.params.id, req.body, { new : true} );
        return res.json(product);
    },

    async delete(req, res) {
        const product = await Product.findOneAndRemove( req.params.id );
        return res.send('Product deleted!');
    },

};