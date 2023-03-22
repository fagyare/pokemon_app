import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {
    return (
        <DefaultLayout>
        <div className='--bs-info-border-subtle'>
            <h1>Index View</h1>
            <ul>
                {props.pokemons.map((pokemon, index) => 
                 
                <li key={index}>
                        <a href={`/pokemons/${pokemon._id || pokemon.id}`}><strong>{pokemon.name}</strong></a>

                </li>
                )}
            </ul>
            <a href="/pokemons/new">Add a pokemon</a>

            <br></br>    <br></br> 

            <form action='/pokemon/seed' method='POST'>
                <button>SEED</button>
            </form>


            <br></br>    <br></br> 


            <form action='/pokemon/clear?_method=DELETE' method='POST'>
                <button>CLEAR</button>
            </form>

            <br></br>    <br></br> 

        </div>
        </DefaultLayout>
    )
}
export default Index;
