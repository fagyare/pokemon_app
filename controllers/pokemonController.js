const pokemons = require('../models/pokemon')

// import pokemon model 
const Pokemon = require('../models/PokemonModel')

// index function: The callback func originally from "app.get('/', () =>{})"
module.exports.index = async(req, res) => {
    // the method .find() will connect the data to the database 
    const pokemonData = await Pokemon.find()
    // console.log(pokemonData)
    res.render('pokemons/Index', {pokemons: pokemonData})
}

// Show function // index function: The callback func originally from "app.get('/:index', () =>{})"
// They now have names: "index" and "show"
module.exports.show = async (req, res) =>  {
    console.log(req.params.index)
    // const pokemon = await Pokemon.findById(req.params.id)
    console.log(pokemons)
    console.log(pokemons[req.params.id], 'test')
    res.render('pokemons/Show', { pokemon: pokemons[req.params.id]})

}

// GET/pokemons/new 
module.exports.new = (req, res) => {
    res.render('pokemons/New')
}

// Post/pokemons 
module.exports.create = async (req, res) => {
    // console.log('POST /pokemons')
    console.log(req.body)
   
    try {
    const  result = await Pokemon.create(req.body)
        console.log(result)
    } catch(err) {
        console.log('error is', err)
    }    

    // pokemons.push(req.body)
    res.redirect('/pokemon')
}

// DELETE /pokemons/:name
module.exports.delete = async (req, res) => {
    // console.log("DELETE /pokemons/:name")
    try {
   await Pokemon.findByIdAndDelete(req.params.id)    
    res.redirect('/pokemons')
    } catch(err) {
    console.log(err.message)
    }
}

// GET /pokemons/:name/edit  changed to GET /pokemons/:id/edit 
module.exports.edit = async (req, res ) => {
    // console.log('GET /pokemons/:id/edit')
    // let index = pokemons.findIndex((item) => item.name === req.params.name)
   const pokemon = await Pokemon.findById(req.params.id)
    res.render('pokemons/Edit', {pokemon})
}

//PUT / pokemons/:name  changed to PUT / pokemons/:id
module.exports.update = async (req, res ) => {
    // console.log('PUT / pokemons/:id')
    console.log(req.body)
    
    try {
    // pass the id (req.params.id) to find the document in the db & the form data (req.body) to update it
    await Pokemon.findByIdAndUpdate(req.params.id, req.body) // id to find pokemon and req.body is
    // let index = pokemons.findIndex((item) => item.name === req.params.name)
    // pokemons[index] = req.body
    res.redirect(`/pokemon/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }

}

//POST /pokemons/seed
module.exports.seed = async (req, res) => {
    // console.log('POST /pokemons/seed')
try {
    await Pokemon.deleteMany({}) 
    Pokemon.create(pokemons) // create a new seed using initial pokemons array
    res.redirect('/pokemons')
} catch(err) {
    console.log(err)
    res.send(err.message)
 }

}

// DELETE /pokemons/clear
module.exports.clear = async (req, res) => {
    // console.log('DELETE /pokemons/clear')

    try {
        await Pokemon.deleteMany({})
        res.redirect('/pokemons')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}