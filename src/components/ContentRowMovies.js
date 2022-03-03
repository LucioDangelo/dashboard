import React from "react";
import Tarjetas from "./Tarjetas";

let peliculas ={
	titulo: 'Movies in Data Base',
	color: 'primary',
	cifra: 21,
	icono: 'film'
}

let premios ={
	titulo: 'Total awards',
	color: 'success',
	cifra: 79,
	icono: 'award'
}

let actores ={
	titulo: 'Actors quantity',
	color: 'warning',
	cifra: 49,
	icono: 'user'
}

let tarjetas = [peliculas,premios,actores];


function ContentRowMovies(){
    return(
        <React.Fragment>
                   {/* <!-- Content Row Movies--> */}
					<div className="row">

					{
					 tarjetas.map((datoTarjeta,index) => {
						 return <Tarjetas {...datoTarjeta} key={datoTarjeta+index}/>
					 })
					}	
						
					</div>
					{/* <!-- End movies in Data Base --> */}
        </React.Fragment>
    )
}

export default ContentRowMovies;