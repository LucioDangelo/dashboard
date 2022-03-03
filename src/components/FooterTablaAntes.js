import React from "react";
import CeldasTabla from "./CeldasTabla";


let P1 ={
	Titulo: 'Pelicula 1',
	Duracion: 120,
	Rating: 8,
	Genero: 'Horror',
	Premios: 2
}
let P2 ={
	Titulo: 'Pelicula 2',
	Duracion: 130,
	Rating: 9,
	Genero: ["Suspenso","Comedia"],
	Premios: 1
}
let P3 ={
	Titulo: 'Pelicula 3',
	Duracion: 140,
	Rating: 10,
	Genero: 'Comedia',
	Premios: 0
}

let celdasTabla = [P1,P2,P3];


function FooterTablaAntes(){
    return(
        <React.Fragment>
			
			<table className="table table-bordered">
				<tr className="">
					<th className="" scope="col">Titulo</th>
					<th className="" scope="col">Duracion</th>
					<th className="" scope="col">Rating</th>
					<th className="" scope="col">Genero</th>
					<th className="" scope="col">Premios</th>
				</tr>
					 {
					 celdasTabla.map((datoCeldas,index) => {
						 return <CeldasTabla {...datoCeldas} key={datoCeldas+index}/>
					 })
					}	 
				<tr className="">
					<th className="">Titulo</th>
					<th className="">Duracion</th>
					<th className="">Rating</th>
					<th className="">Genero</th>
					<th className="">Premios</th>
				</tr>
			</table>

        </React.Fragment>
    )
}

export default FooterTablaAntes;