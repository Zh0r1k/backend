const mongoose = require('mongoose');
const usersModel = require('./users');
const categoryModel = require('./category');

const gameShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: usersModel
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: categoryModel
    }]
})



gameShema.statics.findGameByCategory = function(category) {
  return this.find({})
    .populate({
      path: "categories",
      match: { name: category } 
    })
    .populate({
      path: "users",
      select: "-password"
    })
    .then(games => {
      return games.filter(game => game.categories.length > 0);
    });
}; 

module.exports = mongoose.model('game', gameShema);
