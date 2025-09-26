
import './Lista.css';
import Estudiante from './Estudiante';

function lista({ listaestudiantes }) {
    return (
        <div className='lista'>
            <ol>
                {listaestudiantes.map((elemento, indice) => (
                    <li><Estudiante nombre={elemento.nombre}
                        apellido={elemento.apellido} /> </li>
                ))}
            </ol>
        </div>
    )
}

export default lista;