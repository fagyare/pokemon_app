import React from 'react'

function DefaultLayout(props) {

    return (
        <html>
        <head>
            <title>{props.title}</title>
            <link rel='stylesheet' href='/css/styles.css' /> 
            <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        </head>
        <body>
        <nav>
            <ul>
                {/* <li > <a href='/'>Home</a> </li> */}
                <li > <a href='/pokemons'>pokemons</a> </li>
              
            </ul>
        </nav>
        <div>

            <div>
                {props.children}
            </div>

        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        ></script>
        </body>
        </html>
    );

}

export default DefaultLayout; 