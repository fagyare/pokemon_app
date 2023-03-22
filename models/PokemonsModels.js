const mongoose = require('mongoose');

// Setup Schema property and attach it to mongoose 
const Schema = mongoose.Schema;

// Instantiate new PokemonSchema object/Class & provide fruit data (properties & values )
const pokemonSchema = new Schema({ 
    // expecting the property(name) to string "Franklin"
    name:{type: String, required: true }, // required = validation to make sure data is legit
    img: {type: String, required: true },

});

// Create Pokemon variable/object and connect to Pokemon-model and schema
// Create our model using fruitSchema  & give our collection a name of 'fruits'
const Pokemon = mongoose.model('pokemon', pokemonSchema);

// module export Pokemon model as a module to be used in our controller
module.exports = Pokemon; 

