import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Error } from "./Error";
import { v4 as uuidv4 } from 'uuid';

const Cita = {
  id: 0,
  mascota: "",
  propietario: "",
  fecha: "",
  hora: "",
  sintoma: "",
};

export const Formulario = ({agregarCita, citaEditar,editarCita }) => {
  const [cita, setCita] = useState(Cita);
  const [error, seterror] = useState(false);

  const handleinputs = (event) => {
    setCita({ ...cita, [event.target.name]: event.target.value });
  };
  const { mascota, propietario, fecha, hora, sintoma } = cita;

  const handleFormulario = (event) => {
    event.preventDefault();

    if (mascota === "" || propietario === "" || fecha === "" || hora === "" || sintoma === "") 
      {
      seterror(true);
      return;
    }
    //ocultar msj de error si se estaba mostrando
    seterror(false);

    //limpiar el formulio con valores por default
   /*  setCita(Cita); */

   if (cita.id ==0) {
    
    cita.id =uuidv4();
    //agregar las citas a la tabla
    agregarCita(cita);

    
   }
   else{

    editarCita(cita)

   }
    
    
  };

  useEffect(() => {


    
    if (citaEditar != null) {
      
      setCita(citaEditar)
    }
   

  }, [citaEditar])
  

  

  return (
    <div className="row mt-5 d-flex justify-content-center">
      <div className=" col-12 col-md-10">
        <form onSubmit={handleFormulario} className="formulario" action="">

            <h2 className="text-center">Crear Cita</h2>

          <div className="row">

            <div className="col-12">

            {error ?  <Error mensaje={"Todos los campos son obligatiros"}/> : null}

            </div>
            
            <div className=" col-12  mt-3">
              <label className="form-label">Nombre Mascota</label>
              <input
                className="form-control form-control-sm"
                name="mascota"
                value={mascota}
                onChange={(event) => handleinputs(event)}
              />
            </div>
            <div className="col-12 ">
              <label className="form-label">Nombre Dueño</label>
              <input
                className="form-control form-control-sm"
                name="propietario"

                //agregamos la propiead del estado para asi poder limpiar el formulario luego 
                value={propietario}
                onChange={(event) => handleinputs(event)}
              />
            </div>
            <div className="col-12 ">
              <label className="form-label">Fecha</label>
              <input
                className="form-control form-control-sm"
                type="date"
                name="fecha"
                value={fecha}
                onChange={(event) => handleinputs(event)}
              />
            </div>
            <div className="col-12  ">
              <label className="form-label">Horas</label>
              <input
                className="form-control form-control-sm"
                type="time"
                name="hora"
                value={hora}
                onChange={(event) => handleinputs(event)}
              />
            </div>
            <div className="col-12  ">
              <label className="form-label">Sintomas</label>
              <textarea
                className="form-control form-control-sm"
                name="sintoma"
                value={sintoma}
                onChange={(event) => handleinputs(event)}
              />

              <div className=" col-12  mt-4 ">
                <button
                  type="submit"
                  value="Agrear cita"
                  className="btn btn-success btn-sm w-100"
                >
                  Agregar cita
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
