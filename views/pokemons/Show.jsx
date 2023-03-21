import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';


function Show(props) {

 console.log(props)
    return (
      <DefaultLayout title='Show View'>
        <div className='show-view'>
        <h1>Gotta Catch 'Em All</h1>
        {/* <p>The <strong>{props.pokemon.name}</strong> {props.pokemon.readyToEat ? 'is ready to eat' : 'is NOT ready to eat'}</p>
        <p>Its color is <span style={{ color: props.pokemon.color }}>{props.pokemon.color}</span></p> */}
        <h2>{props.pokemon.name}</h2>
        <img src={`${props.pokemon.img}.jpg`} alt="PokemonImg" />

        {/* <a href={`/pokemon/${props.pokemon._id}/edit`}>Edit</a> */}
        
        <br /><br />


        <form action={`/pokemon/${props.pokemon.img}?_method=DELETE`} method="POST">
            <button>Delete</button>
        </form>

        <br />

        

        <a href="/pokemon">Back</a>
        </div>
    </DefaultLayout>

    )
}
export default Show;
