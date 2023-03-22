import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Edit(props) {
  return (
    <DefaultLayout>
      <div>
        <h1>Edit pokemon</h1>
        <form action={`/pokemon/${props.pokemon._id}?_method=PUT`} method="POST">
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="title" value={props.pokemon.title} />
          <br />
          <br />
          <input type="text" id="entry" name="entry" value={props.pokemon.entry} />
          <br />
          <br />
          <button className="btn btn-outline-primary">Submit</button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default Edit;