const express = require('express')

//Create our Router() & connect to express required 
const router = express.Router()

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// load our controller and its routes logic
const pokemonController = require('../controllers/pokemonController')

// Setup an "INDEX" route for pokemons & attaching it to router object
router.get('/', pokemonController.index)

// Setup a "NEW" route for creating pokemon
router.get('/new', pokemonController.new)

// Setup a "CLEAR" route for all data for pokemons collection 
router.delete('/clear', pokemonController.clear)

// Setup a "DELETE" route 
router.delete('/:id', pokemonController.delete)

// Setup an "UPDATE" route for updating a specific pokemon 
router.put('/:id', pokemonController.update)

// Setup a "SEED" route for repopulating our database 
router.post('/seed', pokemonController.seed)

// Set up "CREATE" routee for pokemons data 
router.post('/', pokemonController.create)

// Setup an "EDIT" route for editing pokemon
router.get('/:id/edit', pokemonController.edit)

// Setup a "SHOW" route for pokemons, attach it to the router (show-index tags the index of the types of pokemon in the pokemons array)
router.get('/:id', pokemonController.show) // req.params.index tags specific pokemon type in the arr

module.exports = router
