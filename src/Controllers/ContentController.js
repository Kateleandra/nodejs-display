const mongoose = require('mongoose');

const Content = mongoose.model('Content');

module.exports = {
    async index(req, res){
        const contents = await Content.find();

        return res.json(contents);
    },

    async store(req, res){
        const content = await Content.create(req.body);

        return res.json(content);
    },

    async update(req, res){
        const content = await Content.findByIdAndUpdate(req.params.id, req.body, {
            new: true
            
        });

        return res.json(content);
    }
}
