import PropTypes, { array } from 'prop-types';

export const Tablacita = ({listadocitas, eliminarCita, getCitaEditar}) => {
  return (
    <div className="row tabla_cita mt-5 ">
        <div className="col-12">

            <h2 className="text-light text-center">Listado de Citas</h2>

            <table className="table text-light mt-2">
                <thead>
                    <tr>
                        <td>Mascota</td>
                        <td>Propietario</td>
                        <td>Fecha</td>
                        <td>Hora</td>
                        <td>Sintoma</td>
                        <td>Operaciones</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        listadocitas.length > 0 ?
                        listadocitas.map((cita)=>(

                            <tr key={cita.id}>
                                <td>{cita.mascota}</td>
                                <td>{cita.propietario}</td>
                                <td>{cita.fecha}</td>
                                <td>{cita.hora}</td>
                                <td>{cita.sintoma}</td>

                                <td>
                                    <button 
                                    className="btn btn-sm btn-outline-danger  me-2"
                                    onClick={()=>eliminarCita(cita.id)}
                                    >Del</button>
                                     <button 
                                    className="btn btn-sm btn-outline-warning "
                                    onClick={()=>getCitaEditar(cita.id)}
                                    >Edit</button>
                                </td>
                            
                            </tr>
                        ))
                        : <tr><td className="text-center" colSpan={6}>no existen citas</td></tr>
                    }

                </tbody>
            </table>



        </div>
        
    </div>
  )
}

Tablacita.propTypes ={

    listadocitas: PropTypes.array.isRequired


}