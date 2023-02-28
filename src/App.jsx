
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Formulario } from './Componentes/Formulario';
import './app.css'
import { Tablacita } from './Componentes/Tablacita';
import Swal from 'sweetalert2';

export const AppPaciente = () => {
  const [listadocitas, setlistadocitas] = useState([])
  const [citaEditar, setCitaEditar] = useState(null);


  const listarcitas =()=>{

    const getLocalStorage = JSON.parse(localStorage.getItem('citas'));

    if (getLocalStorage !=null) {

      setlistadocitas(getLocalStorage);
      
    }
    else{

      alert('no existen datos para cargar')
    }

  }

  const agregarCita =(citas)=>{

   
     localStorage.setItem('citas',JSON.stringify([...listadocitas,citas]))

    listarcitas();

  }
  
  const eliminarCita = async (id )=>{

    Swal.fire({
      title: 'Seguro quieres eliminar esta cita?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'yes'
    }).then((result) => {
      if (result.isConfirmed) {
        const getLocalStorage = JSON.parse(localStorage.getItem('citas'));

        const citasRestante = getLocalStorage.filter((citas)=> citas.id != id);
    
        localStorage.setItem('citas',JSON.stringify(citasRestante))
    
        listarcitas();
        Swal.fire(
          'Eliminado!',
          'Su cita a sido eliminado',
          'success'
        )
      }
    })

  
   

  }

  const getCitaEditar =(id)=>{

    const getLocalStorage = JSON.parse(localStorage.getItem('citas'));

    const cita = getLocalStorage.find((citas)=> citas.id == id);

    setCitaEditar(cita)

   

  }

  const editarCita =(cita)=>{

    const getLocalStorage = JSON.parse(localStorage.getItem('citas'));

    const citasRestante = getLocalStorage.filter((citas)=> citas.id != cita.id);

    localStorage.setItem('citas',JSON.stringify([...citasRestante, cita]))

    listarcitas();
      
  }

  useEffect(() => {
    
    listarcitas();
   
  }, [])
  

  

  return (
    <div className='container'>

      
      <div className="row">

        <div className="col-12 col-lg-6 ">

          <Formulario agregarCita={agregarCita} citaEditar={citaEditar} editarCita={editarCita}/>
       
        </div>

        <div className="col-12 col-lg-6 ">

         <Tablacita listadocitas={listadocitas} eliminarCita={eliminarCita} getCitaEditar={getCitaEditar}/>
       
        </div>
      </div>
    
        
    </div>
  )
}
