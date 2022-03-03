import React from "react";


function CeldasTabla(props){
    return(
        <React.Fragment>
            <tr className="font-weight-light">
				<th className="">{props.Titulo}</th>
				<th className="">{props.Duracion}</th>
				<th className="">{props.Rating}</th>
				<th className=""><ul><li>{props.Genero}</li></ul></th>
				<th className="">{props.Premios}</th>
			</tr>
        </React.Fragment>
    )

}


export default CeldasTabla;